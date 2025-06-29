import React, { useState, useEffect } from "react";
import { database, ref, set, onValue, remove } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WordGameWithCategories() {
  const [words, setWords] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("همه");

  // Form fields
  const [word, setWord] = useState("");
  const [syllables, setSyllables] = useState("");
  const [english, setEnglish] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [editId, setEditId] = useState(null);
  const [showEdit, setShowEdit] = useState(false)
  const [showSylable, setShowSylable] = useState(true)

  useEffect(() => {
    const wordsRef = ref(database, "words");
    const unsubscribe = onValue(wordsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setWords(Object.values(data));
      else setWords([]);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!word || !syllables || !english || !imageUrl || !category) {
      alert("همه فیلدها الزامی هستند");
      return;
    }
    const id = editId || uuidv4();
    await set(ref(database, "words/" + id), {
      id,
      word,
      syllables: syllables.split("-"),
      english,
      image: imageUrl,
      category,
    });
    resetForm();
  };

  const resetForm = () => {
    setWord("");
    setSyllables("");
    setEnglish("");
    setImageUrl("");
    setCategory("");
    setEditId(null);
    setShowForm(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("آیا از حذف این واژه مطمئن هستید؟")) {
      await remove(ref(database, "words/" + id));
    }
  };

  const handleEdit = (word) => {
    setWord(word.word);
    setSyllables(word.syllables.join("-"));
    setEnglish(word.english);
    setImageUrl(word.image);
    setCategory(word.category);
    setEditId(word.id);
    setShowForm(true);
  };

  const categories = ["همه", ...Array.from(new Set(words.map(w => w.category)))];
  const filteredWords = selectedCategory === "همه" ? words : words.filter(w => w.category === selectedCategory);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Sidebar for Categories */}
        <div className="col-md-2 mb-3">
          <button className="btn btn-secondary w-100 mb-2" onClick={() => setShowCategories(!showCategories)}>
            {showCategories ? "پنهان کردن دسته‌ها" : "نمایش دسته‌ها"}
          </button>
          {showCategories && (
          <div>
            {/* <button>show Edit</button> */}

            <ul className="list-group" dir="rtl">
                
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  className={`list-group-item  ${selectedCategory === cat ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="col-md-10">
          <button className="btn btn-primary mb-3" onClick={() => setShowForm(!showForm)}>
            {showForm ? "پنهان کردن فرم افزودن" : "نمایش فرم افزودن"}
          </button>

          {showForm && (
            <>
            <button className="btn-sm rounded  btn-outline-secondary mx-3 m" onClick={()=>{setShowEdit(!showEdit)}}>{showEdit ? 'Hide Edit' : 'Show Edit'}</button>
            <form onSubmit={handleSubmit} dir="rtl" className="border p-4 mb-4 rounded bg-light">
              <div className="mb-3">
                <label className="form-label">واژه فارسی:</label>
                <input className="form-control" value={word} onChange={(e) => setWord(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">سیلاب‌ها (با - جدا شود):</label>
                <input className="form-control" value={syllables} onChange={(e) => setSyllables(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">معنی انگلیسی:</label>
                <input className="form-control" value={english} onChange={(e) => setEnglish(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">آدرس تصویر:</label>
                <input className="form-control" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">دسته‌بندی:</label>
                <input className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} />
              </div>
              <button className="btn btn-success" type="submit">
                {editId ? "ویرایش واژه" : "افزودن واژه"}
              </button>
            </form>
            </>
          )}

          <div className="row" dir="rtl">
            {filteredWords.map((w) => (
              <div className="col-md-4 mb-4" key={w.id}>
                <div className="card h-100">
                  <img
                    src={w.image}
                    alt={w.word}
                    className="card-img-top mt-2"
                    style={{ height: 160, objectFit: "contain" }}
                  />
                  <div className="card-body text-center">
                    <h5 onClick={()=>setShowSylable(!showSylable)} className="card-title">{w.word}</h5>
                    <p className="card-text text-muted">( {w.english} )</p>
                    {showSylable &&
                    <div className="mb-3 h3">
                      {w.syllables.map((s, i) => (
                        <span key={i} className="badge bg-info text-dark me-1">
                          {s}
                        </span>
                      ))}
                    </div>
                    }
                    {showEdit && (<>
                    <button className="btn btn-outline-primary btn-sm mx-2" onClick={() => handleEdit(w)}>
                      ✏️ ویرایش
                    </button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(w.id)}>
                      ❌ حذف
                    </button>
                    
                    </>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
