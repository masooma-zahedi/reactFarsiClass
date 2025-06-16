import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// برای ویرایش و حذف داستان باید کلمه ویرایش یا حذف را سرچ بعد در تگ مربوطه در کلس نیم و دیسپلی نان را بردارید(d-none)


// بخش نمایش داستان به همراه اکوردین سوالات و جواب‌ها
const StoryPage = ({ title, content, vocab, qa }) => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [accordionOpen, setAccordionOpen] = useState(null);

  const toggleAccordion = (index) => {
    setAccordionOpen(accordionOpen === index ? null : index);
  };

  return (
    <div className="p-5 m-3 border rounded shadow-sm bg-light " dir="rtl">
      <h2 className="mb-4 text-center h2" style={{ fontFamily: 'Tahoma, sans-serif' }}>{title}</h2>
      {content.map((item, idx) =>
        item.type === 'text' ? (
          <p
            key={idx}
            style={{ fontSize: '1.7rem', lineHeight: '1.8', fontFamily: 'sans-serif,Vazir, Tahoma', textAlign: '' }}
          >
            {item.content}
          </p>
        ) : (
          <div key={idx} className="text-center my-4">
            <img
              src={item.content}
              alt={`تصویر ${idx}`}
              className="img-fluid rounded"
              style={{ maxHeight: '300px' }}
            />
          </div>
        )
      )}

      {vocab && vocab.length > 0 && (
        <div className="mt-4">
          <h5 className='m-4'>واژگان:</h5>
          <div className='row'>
            <div className='col col-lg-8' >
              <div className=" d-flex flex-wrap gap-2 rounded p-3 pb-5" style={{backgroundColor: 'rgba(235, 183, 217, 0.17)'}}>
                {vocab.map((v, i) => (
                  <button key={i} className="btn btn-outline-dark border btn-sm bg-info px-3 " style={{fontWeight:'bold'}} onClick={() => setSelectedWord(v)}>
                    {v.word}
                  </button>
                ))}
              </div>
            </div>
            {selectedWord && (
              <div className="col col-lg-4 alert alert-info text-center h2 mt-3" dir="rtl">
                {selectedWord.meaning}
              </div>
            )}      
          </div>
        </div>
      )}

      {/* بخش سوالات و جواب‌ها */}
      {qa && qa.length > 0 && (
        <div className="mt-5">
          <h5 className="mb-3 text-success h5">سوالات درک مطلب :</h5>
          <div className="accordion border border-warning rounded shadow" id="qaAccordion">
            {qa.map((item, idx) => (
              <div className="accordion-item" key={idx}>
                <h2 className="accordion-header " id={`heading${idx}`}>
                  <button
                    className={`h1 accordion-button ${accordionOpen === idx ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={accordionOpen === idx}
                    aria-controls={`collapse${idx}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${idx}`}
                  style={{color:'rgb(136, 15, 15)'}}
                  className={`h3 accordion-collapse collapse ${accordionOpen === idx ? 'show' : ''}`}
                  aria-labelledby={`heading${idx}`}
                  data-bs-parent="#qaAccordion"
                >
                  <div className="accordion-body" style={{ fontSize: '1.1rem' }}>
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function StoryPage3({ initialStories, storageKey = null }) {
  const [stories, setStories] = useState(() => {
    if (storageKey) {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed && Object.keys(parsed).length > 0) return parsed;
        } catch {}
      }
    }
    return initialStories || {};
  });

  // ...
  // در useEffect هم اگر storageKey داشت، ذخیره کنیم
  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(stories));
    }
  }, [stories, storageKey]);

  const [selectedStoryId, setSelectedStoryId] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newItems, setNewItems] = useState([{ type: 'text', content: '' }]);
  const [newVocab, setNewVocab] = useState([{ word: '', meaning: '' }]);
  // جدید: آرایه سوال و جواب‌ها برای فرم
  const [newQA, setNewQA] = useState([{ question: '', answer: '' }]);

  const [isEditing, setIsEditing] = useState(false);
  const [showList, setShowList] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (stories && Object.keys(stories).length > 0) {
      setSelectedStoryId(Number(Object.keys(stories)[0]));
    }
  }, [stories]);

  useEffect(() => {
    localStorage.setItem('stories', JSON.stringify(stories));
  }, [stories]);

  const handleAddItem = (type) => {
    setNewItems([...newItems, { type, content: '' }]);
  };

  const handleItemChange = (index, content) => {
    const updated = [...newItems];
    updated[index].content = content;
    setNewItems(updated);
  };

  const handleVocabChange = (index, field, value) => {
    const updated = [...newVocab];
    updated[index][field] = value;
    setNewVocab(updated);
  };

  const addVocabRow = () => {
    setNewVocab([...newVocab, { word: '', meaning: '' }]);
  };

  // توابع جدید برای سوال و جواب:
  const handleQAChange = (index, field, value) => {
    const updated = [...newQA];
    updated[index][field] = value;
    setNewQA(updated);
  };

  const addQARow = () => {
    setNewQA([...newQA, { question: '', answer: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = newTitle.trim();
    const cleanedContent = newItems.filter((item) => item.content.trim() !== '');
    const cleanedVocab = newVocab.filter((v) => v.word.trim() !== '' && v.meaning.trim() !== '');
    const cleanedQA = newQA.filter((q) => q.question.trim() !== '' && q.answer.trim() !== '');

    if (!title || cleanedContent.length === 0) return alert('عنوان و محتوا الزامی است.');

    const newId = isEditing ? selectedStoryId : Date.now();
    setStories((prev) => ({
      ...prev,
      [newId]: {
        title,
        content: cleanedContent,
        vocab: cleanedVocab,
        qa: cleanedQA,
      },
    }));
    setSelectedStoryId(newId);
    setNewTitle('');
    setNewItems([{ type: 'text', content: '' }]);
    setNewVocab([{ word: '', meaning: '' }]);
    setNewQA([{ question: '', answer: '' }]);
    setIsEditing(false);
    setShowForm(false);
  };

  const handleEdit = () => {
    const story = stories[selectedStoryId];
    if (!story) return;

    setNewTitle(story.title);
    setNewItems([...story.content]);
    setNewVocab(story.vocab || [{ word: '', meaning: '' }]);
    setNewQA(story.qa || [{ question: '', answer: '' }]);
    setShowForm(true);
    setIsEditing(true);
  };

  const handleDelete = () => {
    if (!window.confirm('آیا مطمئن هستید که می‌خواهید این داستان را حذف کنید؟')) return;
    const updated = { ...stories };
    delete updated[selectedStoryId];
    const nextId = Object.keys(updated)[0] ? Number(Object.keys(updated)[0]) : null;
    setStories(updated);
    setSelectedStoryId(nextId);
  };

  const currentStory = stories[selectedStoryId];

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-outline-primary" onClick={() => setShowList(!showList)}>
          {showList ? 'پنهان کردن فهرست' : 'نمایش فهرست'}
        </button>
        <button className="btn btn-outline-success" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'پنهان کردن فرم افزودن' : 'نمایش فرم افزودن'}
        </button>
      </div>

      <div className="row">
        {showList && (
          <div className="col-md-3 mb-4">
            <div className="list-group">
              {Object.entries(stories).map(([id, story]) => (
                <button
                  key={id}
                  className={`list-group-item list-group-item-action ${
                    parseInt(id) === selectedStoryId ? 'active' : ''
                  }`}
                  onClick={() => {
                    setSelectedStoryId(Number(id));
                    setIsEditing(false);
                  }}
                >
                  {story.title}
                </button>
              ))}
            </div>
          </div>
        )}

        <div
          className={
            showList && showForm
              ? 'col-md-6 mb-4'
              : showList || showForm
              ? 'col-md-9 mb-4'
              : 'col-md-12 mb-4'
          }
        >
          {currentStory ? (
            <>
              <StoryPage
                title={currentStory.title}
                content={currentStory.content}
                vocab={currentStory.vocab}
                qa={currentStory.qa}
              />
              <div className="d-flex justify-content-end gap-2 mt-3">
                <button className="btn btn-sm btn-warning d-none" onClick={handleEdit}>
                  ویرایش
                </button>
                <button className="btn btn-sm btn-danger d-none" onClick={handleDelete}>
                  حذف
                </button>
              </div>
            </>
          ) : (
            <p className="text-center">داستانی برای نمایش وجود ندارد.</p>
          )}
        </div>

        {showForm && (
          <div className="col-md-3">
            <form onSubmit={handleSubmit}>
              <h5 className="mb-3">{isEditing ? 'ویرایش داستان' : 'افزودن داستان جدید'}</h5>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="عنوان داستان"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </div>

              {newItems.map((item, idx) => (
                <div className="mb-2" key={idx}>
                  <label className="form-label">{item.type === 'text' ? 'پاراگراف' : 'آدرس تصویر'} #{idx + 1}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={item.type === 'text' ? 'متن پاراگراف' : 'https://...'}
                    value={item.content}
                    onChange={(e) => handleItemChange(idx, e.target.value)}
                  />
                </div>
              ))}

              <div className="d-flex gap-2 my-3">
                <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => handleAddItem('text')}>
                  + پاراگراف
                </button>
                <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => handleAddItem('image')}>
                  + تصویر
                </button>
              </div>

              <hr />
              <h6 className="mb-2">واژگان:</h6>
              {newVocab.map((v, idx) => (
                <div key={idx} className="d-flex gap-2 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="کلمه فارسی"
                    value={v.word}
                    onChange={(e) => handleVocabChange(idx, 'word', e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="معنی انگلیسی"
                    value={v.meaning}
                    onChange={(e) => handleVocabChange(idx, 'meaning', e.target.value)}
                  />
                </div>
              ))}
              <button type="button" className="btn btn-outline-info btn-sm mb-3" onClick={addVocabRow}>
                + واژه جدید
              </button>

              <hr />
              <h6 className="mb-2">سوالات و جواب‌ها:</h6>
              {newQA.map((q, idx) => (
                <div key={idx} className="mb-2">
                  <input
                    type="text"
                    className="form-control mb-1"
                    placeholder="سوال"
                    value={q.question}
                    onChange={(e) => handleQAChange(idx, 'question', e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="جواب"
                    value={q.answer}
                    onChange={(e) => handleQAChange(idx, 'answer', e.target.value)}
                  />
                </div>
              ))}
              <button type="button" className="btn btn-outline-info btn-sm mb-3" onClick={addQARow}>
                + سوال جدید
              </button>

              <button type="submit" className="btn btn-success w-100">
                {isEditing ? 'ویرایش داستان' : 'افزودن داستان'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default StoryPage3;
