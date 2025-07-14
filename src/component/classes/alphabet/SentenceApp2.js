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

const initialSentences = [
  {
    sentence: "من به مدرسه می‌روم",
    words: ["من", "به", "مدرسه", "می‌روم"],
    category: "ج",
  },
  {
    sentence: "آسمان آبی است",
    words: ["آسمان", "آبی", "است"],
    category: "ج",
  },
  {
    sentence: "خورشید می‌درخشد",
    words: ["خورشید", "می‌درخشد"],
    category: "خ",
  },
  {
    sentence: "کتاب را روی میز گذاشتم",
    words: ["کتاب", "را", "روی", "میز", "گذاشتم"],
    category: "ک",
  },
   {
    sentence: "قَاشُق سَرخ اَست.",
    words: ["قَاشُق", "سَرخ", "اَست"],
    category: "ق",
  },
  {
    sentence: "فاطِمِه قَند را داد.",
    words: ["فاطِمِه", "قَند", "را", "داد"],
    category: "ق",
  },
  {
    sentence: "قَندان زَرد بود.",
    words: ["قَندان", "زَرد", "بود"],
    category: "ق",
  },
  {
    sentence: "دَفِ قَدیم سَبُک اَست.",
    words: ["دَفِ", "قَدیم", "سَبُک", "اَست"],
    category: "ق",
  },
  {
    sentence: "سارا قَوی اَست.",
    words: ["سارا", "قَوی", "اَست"],
    category: "ق",
  },
  {
    sentence: "پِدَر قاشُق را داد.",
    words: ["پِدَر", "قاشُق", "را", "داد"],
    category: "ق",
  },
  {
    sentence: "حامِد قُرص خُورد.",
    words: ["حامِد", "قُرص", "خُورد"],
    category: "ق",
  },
  {
    sentence: "قَند سَفید اَست.",
    words: ["قَند", "سَفید", "اَست"],
    category: "ق",
  },
  {
    sentence: "قُفَل زَنگ زَدِه اَست.",
    words: ["قُفَل", "زَنگ", "زَدِه", "اَست"],
    category: "ق",
  },
];

const SentenceApp2 = () => {
  const inputRef = useRef(null);
  const [showDelete, setShowDelete] = useState(false);
  const [listVisible, setListVisible] = useState(true);
  const [sentences, setSentences] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSentence, setSelectedSentence] = useState(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const [editModal, setEditModal] = useState(false);
  const [editSentence, setEditSentence] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [newSentence, setNewSentence] = useState("");
  const [category, setCategory] = useState("");

  const firstLoad = useRef(true);

  // Load from localStorage or use initialSentences
  useEffect(() => {
    const saved = localStorage.getItem("sentenceData");
    let finalSentences = [...initialSentences];

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const merged = [...parsed];
          initialSentences.forEach((item) => {
            const exists = parsed.some((s) => s.sentence === item.sentence);
            if (!exists) merged.push(item);
          });
          finalSentences = merged;
        }
      } catch (e) {
        console.error("Error parsing localStorage data:", e);
      }
    }

    setSentences(finalSentences);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (!firstLoad.current) {
      localStorage.setItem("sentenceData", JSON.stringify(sentences));
    } else {
      firstLoad.current = false;
    }
  }, [sentences]);

  useEffect(() => {
    if (selectedSentence && inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedSentence]);

  const handleAddSentence = (e) => {
    e.preventDefault();
    if (!newSentence.trim() || !category.trim()) return;

    const wordsArr = newSentence.trim().split(/\s+/);

    const sentenceObj = {
      sentence: newSentence.trim(),
      words: wordsArr,
      category: category.trim(),
    };

    setSentences([...sentences, sentenceObj]);
    setNewSentence("");
    setCategory("");
    setSelectedCategory(category.trim());
    setSelectedSentence(null);
    setCurrentWordIndex(0);
  };

  const handleDeleteSentence = (index) => {
    const sentenceToDelete = sentences[index];
    const updated = sentences.filter((_, i) => i !== index);
    setSentences(updated);

    const stillHasCategory = updated.some(
      (s) => s.category === sentenceToDelete.category
    );
    if (!stillHasCategory) {
      setSelectedCategory(null);
    }

    if (
      selectedSentence &&
      selectedSentence.sentence === sentenceToDelete.sentence
    ) {
      setSelectedSentence(null);
      setCurrentWordIndex(0);
    }
  };

  const handleDeleteCategory = (cat) => {
    const updated = sentences.filter((s) => s.category !== cat);
    setSentences(updated);
    setSelectedCategory(null);
    setSelectedSentence(null);
    setCurrentWordIndex(0);
  };

  const openEditModal = (index) => {
    const sentence = sentences[index];
    setEditIndex(index);
    setEditSentence(sentence.sentence);
    setEditCategory(sentence.category);
    setEditModal(true);
  };

  const handleEditSave = () => {
    if (!editSentence.trim() || !editCategory.trim()) return;

    const wordsArr = editSentence.trim().split(/\s+/);
    const updated = [...sentences];
    updated[editIndex] = {
      sentence: editSentence.trim(),
      words: wordsArr,
      category: editCategory.trim(),
    };
    setSentences(updated);
    setEditModal(false);
    setSelectedCategory(editCategory.trim());
    setSelectedSentence(updated[editIndex]);
    setCurrentWordIndex(0);
  };

  const groupedSentences = sentences.reduce((acc, item, index) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push({ ...item, index });
    return acc;
  }, {});

const renderSentenceWithWordHighlight = (words, currentIndex) => {
  return (
    <div className="mb-3" style={{ fontSize: "36px", direction: "rtl" }}>
      {words.map((word, idx) => (
        <span
          key={idx}
          style={{
            color: idx === currentIndex ? "#d32f2f" : "#444",
            fontWeight: idx === currentIndex ? "bold" : "normal",
            marginLeft: idx === 0 ? 0 : 8,
            cursor: "pointer",
            userSelect: "none",
            whiteSpace: "normal",
          }}
          onClick={() => setCurrentWordIndex(idx)}
        >
          {word}
          {idx !== words.length - 1 ? " " : ""}
        </span>
      ))}
    </div>
  );
};


  return (
    <div className="container mt-4 text-end" style={{ direction: "rtl" }}>
      <div className="mb-3 d-flex justify-content-between">
        <Button variant="primary" onClick={() => setFormVisible(!formVisible)}>
          {formVisible ? "بستن فرم افزودن" : "افزودن جمله"}
        </Button>
        <Button
          variant="secondary"
          onClick={() => setListVisible(!listVisible)}
        >
          {listVisible ? "پنهان کردن فهرست" : "نمایش فهرست دسته‌ها"}
        </Button>
      </div>

      <Collapse in={formVisible}>
        <Card className="mb-4">
          <Card.Body>
            <Form onSubmit={handleAddSentence}>
              <Form.Group className="mb-3">
                <Form.Label>جمله</Form.Label>
                <Form.Control
                  type="text"
                  value={newSentence}
                  onChange={(e) => setNewSentence(e.target.value)}
                  placeholder="مثلاً: من به مدرسه می‌روم"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>دسته (مثلاً: ج)</Form.Label>
                <Form.Control
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Group>
              <Button variant="success" type="submit">
                افزودن
              </Button>
              <Button
                className="mx-2"
                variant="secondary"
                onClick={() => setShowDelete(!showDelete)}
                type="button"
              >
                حذف - ویرایش
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Collapse>

      <Row>
        <Col md={4}>
          <Collapse in={listVisible}>
            <Card>
              <Card.Header>دسته‌بندی حروف</Card.Header>
              <ListGroup>
                {Object.keys(groupedSentences).map((cat, i) => (
                  <ListGroup.Item
                    key={i}
                    action
                    active={selectedCategory === cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedSentence(null);
                      setCurrentWordIndex(0);
                    }}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span>دسته «{cat}»</span>
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
          </Collapse>
        </Col>

        <Col md={8}>
          {selectedCategory && (
            <Card className="mb-4">
              <Card.Header>جملات دسته‌ی «{selectedCategory}»</Card.Header>
              <Card.Body>
                <div className="d-flex flex-wrap gap-2 justify-content-end">
                  {groupedSentences[selectedCategory].map((item, idx) => (
                    <div
                      key={idx}
                      className="border rounded p-2 bg-light"
                      style={{ cursor: "pointer" }}
                    >
                      <Button
                        variant="link"
                        className="text-decoration-none text-dark p-0"
                        onClick={() => {
                          setSelectedSentence(item);
                          setCurrentWordIndex(0);
                        }}
                      >
                        {item.sentence}
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
                            onClick={() => handleDeleteSentence(item.index)}
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

          {selectedSentence && (
            <Card>
              <Card.Body className="text-center">
                <h5>نمایش کلمات جمله:</h5>
                {renderSentenceWithWordHighlight(
                  selectedSentence.words,
                  currentWordIndex
                )}
                <input
                  ref={inputRef}
                  type="range"
                  min="0"
                  max={selectedSentence.words.length - 1}
                  value={currentWordIndex}
                  onChange={(e) => setCurrentWordIndex(Number(e.target.value))}
                  className="w-100"
                />
                <div className="mt-2">
                  کلمه فعلی: {selectedSentence.words[currentWordIndex]}
                </div>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      <Modal show={editModal} onHide={() => setEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>ویرایش جمله</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>جمله</Form.Label>
              <Form.Control
                type="text"
                value={editSentence}
                onChange={(e) => setEditSentence(e.target.value)}
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

export default SentenceApp2;
