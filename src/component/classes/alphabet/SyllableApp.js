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

  useEffect(() => {
  if (selectedWord && inputRef.current) {
    inputRef.current.focus();
  }
}, [selectedWord]);


  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("syllableWords");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setWords(parsed);
      } catch (e) {
        console.error("Error parsing localStorage data:", e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
    } else {
      localStorage.setItem("syllableWords", JSON.stringify(words));
    }
  }, [words]);

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
    setSelectedCategory(category); // دسته جدید انتخاب شود
  };

  const handleDeleteWord = (index) => {
    const updated = words.filter((_, i) => i !== index);
    setWords(updated);
    setSelectedWord(null);
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
    setSelectedCategory(editCategory); // دسته ویرایش‌شده را فعال کن
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
                    <div key={idx} className="border rounded p-2 bg-light" style={{ minWidth: "fit-content" }}>
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

      {/* Modal ویرایش */}
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
