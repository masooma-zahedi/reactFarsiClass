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

  const firstLoad = useRef(true);

// Initial static words
const initialWords = [
  {
    word: "وَطن",
    syllables: ["وَ", "طن"],
    category: "و"
  },
  {
    word: "وَقت",
    syllables: ["وَ", "قت"],
    category: "و"
  },
  {
    word: "وَسَط",
    syllables: ["وَ", "سَط"],
    category: "و"
  },
  {
    word: "وَکیل",
    syllables: ["وَ", "کیل"],
    category: "و"
  },
  {
    word: "وَرد",
    syllables: ["وَ", "رد"],
    category: "و"
  },
  {
    word: "وَعده",
    syllables: ["وَ", "عد", "ه"],
    category: "و"
  },
  {
    word: "وَزن",
    syllables: ["وَ", "زن"],
    category: "و"
  },
  {
    word: "وَجه",
    syllables: ["وَ", "جه"],
    category: "و"
  },
  {
    word: "دوست " ,
    syllables: ["دو", "ست"],
    category: "و"
  },
  {
    word: " سَوار " ,
    syllables: ["سَ", "وار"],
    category: "و"
  },
  {
    word: "نَوَرد ",
    syllables: ["نَ", "وَرد"],
    category: "و"
  },
  {
    word: "کوتاه ",
    syllables: ["کو", "تا", "ه"],
    category: "و"
  },
  {
    word: "نِوِشتن ",
    syllables: ["نِ", "وِش", "تن"],
    category: "و"
  },
  {
    word: "پَروَنده ",
    syllables: ["پَ", "رو", "ن", "ده"],
    category: "و"
  },
  {
    word: "شَورا ",
    syllables: ["شَو", "را"],
    category: "و"
  },
  {
    word: "خَوابگاه " ,
    syllables: ["خَواب", "گاه"],
    category: "و"
  },
  {
    word: "توانا ",
    syllables: ["تَ", "وا", "نا"],
    category: "و"
  },
  {
    word: "هیزم",
    syllables: ["هی", "زُم"],
    category: "ه"
  },
  {
    word: "همکار",
    syllables: ["هَم", "کار"],
    category: "ه"
  },
  {
    word: "همراه",
    syllables: ["هَم", "راه"],
    category: "ه"
  },
  {
    word: "هفته",
    syllables: ["هَف", "ته"],
    category: "ه"
  },
  {
    word: "هال",
    syllables: ["هال"],
    category: "ه"
  },
  {
    word: "هشتم",
    syllables: ["هَش", "تُم"],
    category: "ه"
  },
  {
    word: "هوش",
    syllables: ["هوش"],
    category: "ه"
  },
  {
    word: "هزارپا",
    syllables: ["هِ", "زار", "پا"],
    category: "ه"
  },
  {
    word: "همه",
    syllables: ["هَ", "مه"],
    category: "ه"
  },
  {
    word: "کوه",
    syllables: ["کوه"],
    category: "ه"
  },
  {
    word: "چاه",
    syllables: ["چاه"],
    category: "ه"
  },
  {
    word: "راه",
    syllables: ["راه"],
    category: "ه"
  },
  {
    word: "نامه",
    syllables: ["نا", "مه"],
    category: "ه"
  },
  {
    word: "خانه",
    syllables: ["خا", "نه"],
    category: "ه"
  },
  {
    word: "شانه",
    syllables: ["شا", "نه"],
    category: "ه"
  },
  {
    word: "کاه",
    syllables: ["کاه"],
    category: "ه"
  },
  {
    word: "گیاه",
    syllables: ["گِ", "یاه"],
    category: "ه"
  },
  {
    word: "توبه",
    syllables: ["تو", "به"],
    category: "ه"
  },
  {
    word: "دانه",
    syllables: ["دا", "نه"],
    category: "ه"
  },
  {
    word: "ماه",
    syllables: ["ماه"],
    category: "ه"
  },
  {
    word: "سپیده",
    syllables: ["سِ", "پی", "ده"],
    category: "ه"
  },
  {
    word: "آهو",
    syllables: ["آ", "هو"],
    category: "ه"
  },
  {
    word: "شیشه",
    syllables: ["شی", "شه"],
    category: "ه"
  },
  {
    word: "کلاه",
    syllables: ["کُ", "لاه"],
    category: "ه"
  },
  {
    word: "زیبارو",
    syllables: ["زی", "با", "رو"],
    category: "ه"
  },
  {
    word: "آگاه",
    syllables: ["آ", "گاه"],
    category: "ه"
  },
  {
    word: "قهوه",
    syllables: ["قَ", "هو", "ه"],
    category: "ه"
  },
  {
    word: "شجاعانه",
    syllables: ["شُ", "جا", "عا", "نه"],
    category: "ه"
  }


];


// Load from localStorage or use initial
useEffect(() => {
  const saved = localStorage.getItem("syllableWords");
  let finalWords = [...initialWords];

  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        // ادغام بدون تکرار
        const merged = [...parsed];
        initialWords.forEach((item) => {
          const exists = parsed.some((w) => w.word === item.word);
          if (!exists) merged.push(item);
        });
        finalWords = merged;
      }
    } catch (e) {
      console.error("Error parsing localStorage data:", e);
    }
  }

  setWords(finalWords);
}, []);


useEffect(() => {
  if (!firstLoad.current) {
    localStorage.setItem("syllableWords", JSON.stringify(words));
  } else {
    firstLoad.current = false;
  }
}, [words]);


  useEffect(() => {
    if (selectedWord && inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedWord]);

  const handleAddWord = (e) => {
    e.preventDefault();
    if (!newWord || !syllables || !category) return;

    const wordObj = {
      word: newWord,
      syllables: syllables.split("-"),
      category,
    };
    const updatedWords = [...words, wordObj];
    setWords(updatedWords);
    setNewWord("");
    setSyllables("");
    setCategory("");
    setSelectedCategory(category);
  };

  // const handleDeleteWord = (index) => {
  //   const updated = words.filter((_, i) => i !== index);
  //   setWords(updated);
  //   setSelectedWord(null);
  // };
const handleDeleteWord = (index) => {
  const wordToDelete = words[index];
  const updated = words.filter((_, i) => i !== index);
  setWords(updated);

  // بررسی آیا دسته خالی شد؟
  const stillHasWords = updated.some(w => w.category === wordToDelete.category);
  if (!stillHasWords) {
    setSelectedCategory(null);
  }

  // اگر کلمه‌ای که حذف شد همان کلمه‌ی انتخاب شده بود، آن را پاک کن
  if (selectedWord && selectedWord.word === wordToDelete.word) {
    setSelectedWord(null);
  }
};

  const handleDeleteCategory = (cat) => {
    const updated = words.filter((w) => w.category !== cat);
    setWords(updated);
    setSelectedCategory(null);
    setSelectedWord(null);
  };

  const openEditModal = (index) => {
    const word = words[index];
    setEditIndex(index);
    setEditWord(word.word);
    setEditSyllables(word.syllables.join("-"));
    setEditCategory(word.category);
    setEditModal(true);
  };

  const handleEditSave = () => {
    const updated = [...words];
    updated[editIndex] = {
      word: editWord,
      syllables: editSyllables.split("-"),
      category: editCategory,
    };
    setWords(updated);
    setEditModal(false);
    setSelectedCategory(editCategory);
    if (selectedWord && selectedWord.word === words[editIndex].word) {
      setSelectedWord(updated[editIndex]);
    }
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
    <div className="container mt-4 text-end" style={{ direction: "rtl" }}>
      <div className="mb-3 d-flex justify-content-between">
        <Button variant="primary" onClick={() => setFormVisible(!formVisible)}>
          {formVisible ? "بستن فرم افزودن" : "افزودن کلمه"}
        </Button>
        <Button variant="secondary" onClick={() => setListVisible(!listVisible)}>
          {listVisible ? "پنهان کردن فهرست" : "نمایش فهرست دسته‌ها"}
        </Button>
      </div>

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
                  <Form.Label>دسته (مثلاً: ط)</Form.Label>
                  <Form.Control
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </Form.Group>
                <Button variant="success" type="submit">
                  افزودن
                </Button>
                <Button className="mx-2" variant="secondary" onClick={() => setShowDelete(!showDelete)}>
                  حذف -ویرایش
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Collapse>

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
              <Form.Label>سیلاب‌ها (با خط فاصله)</Form.Label>
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
  );
};

export default SyllableApp;