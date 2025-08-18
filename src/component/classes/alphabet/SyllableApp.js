import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Form,
  Collapse,
  Card,
  Modal,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import SentenceApp2 from "./SentenceApp2";

// 📌 Firebase
import { database, ref, set, onValue, remove, push } from ".././firebase";

const SyllableApp = () => {
  const inputRef = useRef(null);
  const [showDelete, setShowDelete] = useState(false);
  const [listVisible, setListVisible] = useState(true);
  const [words, setWords] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [currentSyllable, setCurrentSyllable] = useState(0);

  const [editModal, setEditModal] = useState(false);
  const [editWord, setEditWord] = useState("");
  const [editSyllables, setEditSyllables] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [newWord, setNewWord] = useState("");
  const [syllables, setSyllables] = useState("");
  const [category, setCategory] = useState("");

  // 🌱 داده‌های ثابت اولیه (فقط داخل کد)
  // const initialWords = [
  //   { word: "باد", syllables: ["با", "د"], category: "د" },
  //   { word: "داد", syllables: ["دا", "د"], category: "د" },
  //   { word: "بد", syllables: ["بَ", "د"], category: "د" },
  //   { word: "دادی", syllables: ["دا", "دی"], category: "د" },
  //   { word: "داود", syllables: ["دا", "وُد"], category: "د" },
  //   { word: "دید", syllables: ["دی", "د"], category: "د" },
  //   { word: "دیو", syllables: ["دی", "و"], category: "د" },
  //   { word: "دادو", syllables: ["دا", "دو"], category: "د" },
  //   { word: "داب", syllables: ["دا", "ب"], category: "د" },
  //   { word: "بید", syllables: ["بی", "د"], category: "د" },
  //   { word: "پد", syllables: ["پَ", "د"], category: "د" },
  //   { word: "دود", syllables: ["دو", "د"], category: "د" },
  // ];


  const initialWords = [
  // *************** حرف د *******************************
  { word: "باد", syllables: ["با", "د"], category: "د" },
  { word: "داد", syllables: ["دا", "د"], category: "د" },
  { word: "بد", syllables: ["بَ", "د"], category: "د" },
  { word: "دادی", syllables: ["دا", "دی"], category: "د" },
  { word: "داود", syllables: ["دا", "وُد"], category: "د" },
  { word: "دید", syllables: ["دی", "د"], category: "د" },
  { word: "دیو", syllables: ["دی", "و"], category: "د" },
  { word: "دادو", syllables: ["دا", "دو"], category: "د" },
  { word: "داب", syllables: ["دا", "ب"], category: "د" },
  { word: "بید", syllables: ["بی", "د"], category: "د" },
  { word: "پد", syllables: ["پَ", "د"], category: "د" },
  { word: "دود", syllables: ["دو", "د"], category: "د" },
  { word: "دپ", syllables: ["دِ", "پ"], category: "د" },
  { word: "دبی", syllables: ["دَ", "بی"], category: "د" },
  { word: "ید", syllables: ["یَ", "د"], category: "د" },
  { word: "پدید", syllables: ["پَ", "دید"], category: "د" },
  { word: "دیبا", syllables: ["دی", "با"], category: "د" },
  { word: "دیده", syllables: ["دی", "ده"], category: "د" },
  { word: "دوبا", syllables: ["دو", "با"], category: "د" },
  { word: "دوید", syllables: ["دَ", "وید"], category: "د" },
  // **************** حرف ذ **************************
  { word: "اذر", syllables: ["اَ", "ذَر"], category: "ذ" },
  { word: "ذوب", syllables: ["ذو", "ب"], category: "ذ" },
  { word: "ذبیح", syllables: ["ذَ", "بیح"], category: "ذ" },
  { word: "ذکر", syllables: ["ذَ", "کَر"], category: "ذ" },
  // *************** حرف ر **************************************
  { word: "بار", syllables: ["با", "ر"], category: "ر" },
  { word: "بر", syllables: ["بَ", "ر"], category: "ر" },
  { word: "برد", syllables: ["بَ", "رد"], category: "ر" },
  { word: "دار", syllables: ["دا", "ر"], category: "ر" },
  { word: "در", syllables: ["دَ", "ر"], category: "ر" },
  { word: "پَر", syllables: ["پَ", "ر"], category: "ر" },
  { word: "پرور", syllables: ["پَر", "وَر"], category: "ر" },
  { word: "بردار", syllables: ["بر", "دار"], category: "ر" },
  { word: "رود", syllables: ["رو", "د"], category: "ر" },
  { word: "یار", syllables: ["یا", "ر"], category: "ر" },
  { word: "دُر", syllables: ["دُ", "ر"], category: "ر" },
  { word: "بیدر", syllables: ["بی", "دَر"], category: "ر" },
  { word: "پار", syllables: ["پا", "ر"], category: "ر" },
  { word: "ری", syllables: ["ری"], category: "ر" },
  { word: "ریخت", syllables: ["ری", "خت"], category: "ر" },
  // ****************************** حرف ز ****************************
   { word: "زود", syllables: ["زو", "د"], category: "ز" },
  { word: "زور", syllables: ["زو", "ر"], category: "ز" },
  { word: "زر", syllables: ["زَ", "ر"], category: "ز" },
  { word: "زار", syllables: ["زا", "ر"], category: "ز" },
  { word: "باز", syllables: ["با", "ز"], category: "ز" },
  { word: "بزار", syllables: ["بِ", "زار"], category: "ز" },
  { word: "پز", syllables: ["پَ", "ز"], category: "ز" },
  { word: "پرز", syllables: ["پِ", "رْز"], category: "ز" },
  { word: "زبر", syllables: ["زِ", "بَر"], category: "ز" },
  { word: "راز", syllables: ["را", "ز"], category: "ز" },
  { word: "یزید", syllables: ["یَ", "زید"], category: "ز" },
  { word: "زاد", syllables: ["زا", "د"], category: "ز" },
  { word: "زاید", syllables: ["زا", "یِد"], category: "ز" },
  { word: "زودتر", syllables: ["زود", "تَر"], category: "ز" },
  { word: "زرد", syllables: ["زَر", "د"], category: "ز" },
  { word: "زبون", syllables: ["زَ", "بون"], category: "ز" },
  { word: "بازو", syllables: ["با", "زو"], category: "ز" },
  { word: "زوزِه", syllables: ["زِو", "زه"], category: "ز" },
  { word: "بذار", syllables: ["بِ", "زار"], category: "ز" },
  { word: "زواره", syllables: ["زَ", "وا", "ره"], category: "ز" },
  // *************************** حرف ژ *********************
  { word: "ژاله", syllables: ["ژا", "له"], category: "ژ" },
  { word: "ژاله‌ای", syllables: ["ژا", "له", "ای"], category: "ژ" },
  { word: "ژن", syllables: ["ژَن"], category: "ژ" },
  { word: "ژل", syllables: ["ژِل"], category: "ژ" },
  { word: "ژیان", syllables: ["ژی", "ان"], category: "ژ" },
  { word: "ژرف", syllables: ["ژَ", "رف"], category: "ژ" },
  { word: "ژنده", syllables: ["ژن", "ده"], category: "ژ" },
  { word: "ژولیده", syllables: ["ژو", "لی", "ده"], category: "ژ" },
  { word: "ژاپن", syllables: ["ژا", "پَن"], category: "ژ" },
  // ******************************** حرف س ***************
  { word: "سبد", syllables: ["سَ", "بَد"], category: "س" },
  { word: "سبز", syllables: ["سَب", "ز"], category: "س" },
  { word: "ساده", syllables: ["سا", "ده"], category: "س" },
  { word: "سیب", syllables: ["سی", "ب"], category: "س" },
  { word: "سیر", syllables: ["سی", "ر"], category: "س" },
  { word: "سوز", syllables: ["سو", "ز"], category: "س" },
  { word: "سوت", syllables: ["سو", "ت"], category: "س" },
  { word: "سور", syllables: ["سو", "ر"], category: "س" },
  { word: "سوار", syllables: ["سَ","وار"], category: "س" },
  { word: "سپید", syllables: ["سِ", "پید"], category: "س" },
  { word: "سپر", syllables: ["سِ", "پَر"], category: "س" },
  { word: "ساز", syllables: ["سا", "ز"], category: "س" },
  { word: "سحر", syllables: ["سَ", "حَر"], category: "س" },
  { word: "سر", syllables: ["سَر"], category: "س" },
  { word: "سرد", syllables: ["سَر","د"], category: "س" },
  { word: "سوزد", syllables: ["سو", "زد"], category: "س" },
  { word: "سیاه", syllables: ["سی", "یاه"], category: "س" },
  { word: "سایه", syllables: ["سا", "یه"], category: "س" },
  { word: "سایش", syllables: ["سا", "یش"], category: "س" },
  { word: "سبدی", syllables: ["سَ", "بَ", "دی"], category: "س" },
  // *********************** حرف ق*******************************
   { word: "قاشُق", syllables: ["قا", "شُق"], category: "ق" },
  { word: "قَند", syllables: ["قَن","د"], category: "ق" },
  { word: "قَندان", syllables: ["قَن", "دان"], category: "ق" },
  { word: "قَدیم", syllables: ["قَ", "دیم"], category: "ق" },
  { word: "قَوی", syllables: ["قَ", "وی"], category: "ق" },
  { word: "قُرص", syllables: ["قُ", "رص"], category: "ق" },
  { word: "قُفل", syllables: ["قُ", "فل"], category: "ق" },
  //*************** */ حرف و****************************************
  {word:"وَطن",syllables:["وَ","طن"],category:"و"},
    {word:"وَقت",syllables:["وَ","قت"],category:"و"},
    {word:"وَسَط",syllables:["وَ","سَط"],category:"و"},
    {word:"وَکیل",syllables:["وَ","کیل"],category:"و"},
    {word:"وَرد",syllables:["وَ","رد"],category:"و"},
    {word:"وَعده",syllables:["وَ","عد","ه"],category:"و"},
    {word:"وَزن",syllables:["وَ","زن"],category:"و"},
    {word:"وَجه",syllables:["وَ","جه"],category:"و"},
    {word:"دوست",syllables:["دو","ست"],category:"و"},
    {word:"سَوار",syllables:["سَ","وار"],category:"و"},
    {word:"نَوَرد",syllables:["نَ","وَرد"],category:"و"},
    {word:"کوتاه",syllables:["کو","تا","ه"],category:"و"},
    {word:"نِوِشتن",syllables:["نِ","وِش","تن"],category:"و"},
    {word:"پَروَنده",syllables:["پَ","رو","ن","ده"],category:"و"},
    {word:"شَورا",syllables:["شَو","را"],category:"و"},
    {word:"خَوابگاه",syllables:["خَواب","گاه"],category:"و"},
    {word:"توانا",syllables:["تَ","وا","نا"],category:"و"},
    // ************************** حرف ه*******************************
    {word:"هیزم",syllables:["هی","زُم"],category:"ه"},
    {word:"همکار",syllables:["هَم","کار"],category:"ه"},
    {word:"همراه",syllables:["هَم","راه"],category:"ه"},
    {word:"هفته",syllables:["هَف","ته"],category:"ه"},
    {word:"هال",syllables:["هال"],category:"ه"},
    {word:"هشتم",syllables:["هَش","تُم"],category:"ه"},
    {word:"هوش",syllables:["هوش"],category:"ه"},
    {word:"هزارپا",syllables:["هِ","زار","پا"],category:"ه"},
    {word:"همه",syllables:["هَ","مه"],category:"ه"},
    {word:"کوه",syllables:["کوه"],category:"ه"},
    {word:"چاه",syllables:["چاه"],category:"ه"},
    {word:"راه",syllables:["راه"],category:"ه"},
    {word:"نامه",syllables:["نا","مه"],category:"ه"},
    {word:"خانه",syllables:["خا","نه"],category:"ه"},
    {word:"شانه",syllables:["شا","نه"],category:"ه"},
    {word:"کاه",syllables:["کاه"],category:"ه"},
    {word:"گیاه",syllables:["گِ","یاه"],category:"ه"},
    {word:"توبه",syllables:["تو","به"],category:"ه"},
    {word:"دانه",syllables:["دا","نه"],category:"ه"},
    {word:"ماه",syllables:["ماه"],category:"ه"},
    {word:"سپیده",syllables:["سِ","پی","ده"],category:"ه"},
    {word:"آهو",syllables:["آ","هو"],category:"ه"},
    {word:"شیشه",syllables:["شی","شه"],category:"ه"},
    {word:"کلاه",syllables:["کُ","لاه"],category:"ه"},
    {word:"زیبارو",syllables:["زی","با","رو"],category:"ه"},
    {word:"آگاه",syllables:["آ","گاه"],category:"ه"},
    {word:"قهوه",syllables:["قَه-وه"],category:"ه"},
    {word:"شجاعانه",syllables:["شُ","جا","عا","نه"],category:"ه"},
    // ******************************** حرف ع *****************************
    {word:"باعِث",syllables:["با","عِث"],category:"ع"},
    {word:"طَبعی",syllables:["طَب","عی"],category:"ع"},
    {word:"ضَعیف",syllables:["ضَ","عیف"],category:"ع"},
    {word:"بَعید",syllables:["بَ","عید"],category:"ع"},
    {word:"عَزیز",syllables:["عَ","زیز"],category:"ع"},
    {word:"عَروس",syllables:["عَ","روس"],category:"ع"},
    {word:"عَرضه",syllables:["عَر","ضِه"],category:"ع"},
    {word:"عَذاب",syllables:["عَ","ذاب"],category:"ع"},
    {word:"عُضو",syllables:["عَضو"],category:"ع"},
    {word:"عَصا",syllables:["عَ","صا"],category:"ع"},
    {word:"عُبور",syllables:["عُ","بور"],category:"ع"},
    {word:"عَجَب",syllables:["عَ","جَب"],category:"ع"},
    {word:"عُذر",syllables:["عُذر"],category:"ع"},
    {word:"عُروج",syllables:["عُ","روج"],category:"ع"},
    {word:"عَطر",syllables:["عَطر"],category:"ع"},
    {word:"عُرف",syllables:["عُرف"],category:"ع"},
    {word:"عَصر",syllables:["عَصر"],category:"ع"},
    {word:"عِشق",syllables:["عِشق"],category:"ع"},
    {word:"مَنع",syllables:["مَنع"],category:"ع"},
    {word:"طَبع",syllables:["طَبع"],category:"ع"},
    {word:"وَضع",syllables:["وَضع"],category:"ع"},
    // ******************************** حرف ی***************************
    {word:"یِک",syllables:["یِ","ک"],category:"ی"},
    {word:"یِک‌تا",syllables:["یِک","تا"],category:"ی"},
    {word:"یار",syllables:["یار"],category:"ی"},
    {word:"یاد",syllables:["یاد"],category:"ی"},
    {word:"یاس",syllables:["یاس"],category:"ی"},
    {word:"یارو",syllables:["یا","رو"],category:"ی"},
    {word:"یاری",syllables:["یا","ری"],category:"ی"},
    {word:"یاغی",syllables:["یا","غی"],category:"ی"},
    {word:"یِک‌روز",syllables:["یِک","روز"],category:"ی"},
    {word:"یِک‌دَفِه",syllables:["یِک","دَ","فِه"],category:"ی"}



];

  // ⬇️ خواندن داده‌ها از Firebase + ادغام با initialWords
  useEffect(() => {
    const wordsRef = ref(database, "syllableWords");
    onValue(wordsRef, (snapshot) => {
      const data = snapshot.val() || {};
      const firebaseWords = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));

      // ادغام: اول داده‌های firebase، بعد اضافه کردن initialWords که وجود ندارند
      const merged = [...firebaseWords];
      initialWords.forEach((item) => {
        const exists = firebaseWords.some((w) => w.word === item.word);
        if (!exists) merged.push(item);
      });

      setWords(merged);
    });
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedWord]); // یا هر زمانی که باید فوکوس انجام بشه
  

  // ⬇️ افزودن کلمه به Firebase
  const handleAddWord = (e) => {
    e.preventDefault();
    if (!newWord || !syllables || !category) return;

    const newWordObj = {
      word: newWord,
      syllables: syllables.split("-"),
      category,
    };

    const newRef = push(ref(database, "syllableWords"));
    set(newRef, newWordObj);

    setNewWord("");
    setSyllables("");
    setCategory("");
    setSelectedCategory(category);
  };

  // ⬇️ حذف یک کلمه از Firebase
  const handleDeleteWord = (index) => {
    const wordToDelete = words[index];
    if (wordToDelete.id) {
      remove(ref(database, `syllableWords/${wordToDelete.id}`));
    }
  };

  // ⬇️ حذف کل دسته از Firebase
  const handleDeleteCategory = (cat) => {
    words.forEach((w) => {
      if (w.category === cat && w.id) {
        remove(ref(database, `syllableWords/${w.id}`));
      }
    });
    setSelectedCategory(null);
    setSelectedWord(null);
  };

  // ⬇️ ویرایش
  const openEditModal = (index) => {
    const word = words[index];
    setEditIndex(index);
    setEditWord(word.word);
    setEditSyllables(word.syllables.join("-"));
    setEditCategory(word.category);
    setEditModal(true);
  };

  const handleEditSave = () => {
    const wordToEdit = words[editIndex];
    if (wordToEdit.id) {
      set(ref(database, `syllableWords/${wordToEdit.id}`), {
        word: editWord,
        syllables: editSyllables.split("-"),
        category: editCategory,
      });
    }
    setEditModal(false);
  };

  const groupedWords = words.reduce((acc, item, index) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push({ ...item, index });
    return acc;
  }, {});

  const renderWordWithSyllableHighlight = (syllables, currentIndex) => {
    return (
      <div className="mb-3">
        {syllables.map((syl, idx) => (
          <span
            key={idx}
            style={{
              color: idx === currentIndex ? "#d32f2f" : "#444",
              fontWeight: idx === currentIndex ? "bold" : "normal",
              fontSize: "36px",
              marginLeft: 3,
            }}
          >
            {syl}
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* 🔹 بخش کلمات */}
      <section>
        <h2 className="text-center m-3 border border-secondary rounded p-4 shadow text-light"
          style={{ backgroundColor: "rgba(96, 18, 120, 0.56)" }}>
          کلمات زیر را با هم بخوانیم
        </h2>

        <div className="container mt-4  p-5 rounded text-end"
          style={{ direction: "rtl", border: "2px dashed #782387" }}>
          
          {/* دکمه‌ها */}
          <div className="mb-3 d-flex justify-content-between">
            <Button variant="primary" onClick={() => setFormVisible(!formVisible)}>
              {formVisible ? "بستن فرم افزودن" : "افزودن کلمه"}
            </Button>
            <Button variant="secondary" onClick={() => setListVisible(!listVisible)}>
              {listVisible ? "پنهان کردن فهرست" : "نمایش فهرست دسته‌ها"}
            </Button>
          </div>

          {/* فرم افزودن */}
          <Collapse in={formVisible}>
            <div>
              <Card className="mb-4">
                <Card.Body>
                  <Form onSubmit={handleAddWord}>
                    <Form.Group className="mb-3">
                      <Form.Label>کلمه</Form.Label>
                      <Form.Control
                        type="text"
                        value={newWord}
                        onChange={(e) => setNewWord(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>بخش‌بندی با خط فاصله</Form.Label>
                      <Form.Control
                        type="text"
                        value={syllables}
                        onChange={(e) => setSyllables(e.target.value)}
                        placeholder="مثلاً: مد-رس-ه"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>دسته</Form.Label>
                      <Form.Control
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      />
                    </Form.Group>
                    <Button variant="success" type="submit">
                      افزودن
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Collapse>

          {/* لیست دسته‌ها */}
          <Row>
            <Col md={4}>
              <Collapse in={listVisible}>
                <div>
                  <Card>
                    <Card.Header>دسته‌بندی حروف</Card.Header>
                    <ListGroup>
                      {Object.keys(groupedWords).map((cat, i) => (
                        <ListGroup.Item
                          key={i}
                          action
                          active={selectedCategory === cat}
                          onClick={() => {
                            setSelectedCategory(cat);
                            setSelectedWord(null);
                          }}
                          className="d-flex justify-content-between align-items-center"
                        >
                          <span>حرف «{cat}»</span>
                          {showDelete && (
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteCategory(cat);
                              }}
                            >
                              🗑️
                            </Button>
                          )}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card>
                </div>
              </Collapse>
            </Col>

            {/* کلمات هر دسته */}
            <Col md={8}>
              {selectedCategory && (
                <Card className="mb-4">
                  <Card.Header>کلمات دسته‌ی «{selectedCategory}»</Card.Header>
                  <Card.Body>
                    <div className="d-flex flex-wrap gap-2 justify-content-end">
                      {groupedWords[selectedCategory].map((item, idx) => (
                        <div key={idx} className="border rounded p-2 bg-light">
                          <Button
                            variant="link"
                            className="text-decoration-none text-dark"
                            onClick={() => {
                              setSelectedWord(item);
                              setCurrentSyllable(0);
                            }}
                          >
                            {item.word}
                          </Button>
                          {showDelete && (
                            <div className="mt-1 d-flex justify-content-between">
                              <Button
                                variant="outline-warning"
                                size="sm"
                                className="me-1"
                                onClick={() => openEditModal(item.index)}
                              >
                                ✏️
                              </Button>
                              <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => handleDeleteWord(item.index)}
                              >
                                🗑️
                              </Button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              )}

              {/* نمایش سیلاب‌ها */}
              {selectedWord && (
                <Card>
                  <Card.Body className="text-center">
                    <h5>نمایش سیلاب‌های کلمه: {selectedWord.word}</h5>
                    {renderWordWithSyllableHighlight(
                      selectedWord.syllables,
                      currentSyllable
                    )}
                    <input
                      ref={inputRef}
                      type="range"
                      min="0"
                      max={selectedWord.syllables.length - 1}
                      value={currentSyllable}
                      onChange={(e) => setCurrentSyllable(Number(e.target.value))}
                      className="w-100"
                    />
                    <div className="mt-2">
                      بخش فعلی: {selectedWord.syllables[currentSyllable]}
                    </div>
                  </Card.Body>
                </Card>
              )}
            </Col>
          </Row>

          {/* ویرایش */}
          <Modal show={editModal} onHide={() => setEditModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>ویرایش کلمه</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>کلمه</Form.Label>
                  <Form.Control
                    type="text"
                    value={editWord}
                    onChange={(e) => setEditWord(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>سیلاب‌ها</Form.Label>
                  <Form.Control
                    type="text"
                    value={editSyllables}
                    onChange={(e) => setEditSyllables(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>دسته</Form.Label>
                  <Form.Control
                    type="text"
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setEditModal(false)}>
                لغو
              </Button>
              <Button variant="primary" onClick={handleEditSave}>
                ذخیره
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>

      {/* 🔹 بخش جملات */}
      <section>
        <div className="" style={{ height: "250px" }}></div>
        <h2 className="text-center m-3 border border-secondary rounded p-4 shadow text-light"
          style={{ backgroundColor: "rgba(18, 42, 120, 0.56)" }}>
          جملات زیر را با هم بخوانیم
        </h2>
        <div className="container mt-4  p-5 rounded text-end"
          style={{ direction: "rtl", border: "2px dashed rgb(52, 135, 35)" }}>
          <SentenceApp2 />
        </div>
      </section>
    </>
  );
};

export default SyllableApp;
