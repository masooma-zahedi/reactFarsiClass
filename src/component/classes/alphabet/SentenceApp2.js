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
import {
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { database as db } from ".././firebase"; // مسیر firebase.js خودت رو اصلاح کن

const SentenceApp2 = () => {
  const inputRef = useRef(null);
  const [sentences, setSentences] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSentence, setSelectedSentence] = useState(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [newSentence, setNewSentence] = useState("");
  const [category, setCategory] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editSentence, setEditSentence] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editId, setEditId] = useState(null);
  const [listVisible, setListVisible] = useState(true);

  // Load data from Firebase
  useEffect(() => {
    const sentencesRef = ref(db, "sentences");
    onValue(sentencesRef, (snapshot) => {
      const data = snapshot.val() || {};
      const loaded = Object.entries(data).map(([id, s]) => ({
        ...s,
        id,
      }));
      setSentences(loaded);
    });
  }, []);

  const handleAddSentence = (e) => {
    e.preventDefault();
    if (!newSentence.trim() || !category.trim()) return;

    const wordsArr = newSentence.trim().split(/\s+/);
    const newRef = push(ref(db, "sentences"));
    set(newRef, {
      sentence: newSentence.trim(),
      words: wordsArr,
      category: category.trim(),
    });

    setNewSentence("");
    setCategory("");
    setSelectedCategory(category.trim());
  };

  const handleDeleteSentence = (id) => {
    remove(ref(db, `sentences/${id}`));
    setSelectedSentence(null);
    setCurrentWordIndex(0);
  };

  const handleDeleteCategory = (cat) => {
    sentences
      .filter((s) => s.category === cat)
      .forEach((s) => remove(ref(db, `sentences/${s.id}`)));

    setSelectedCategory(null);
    setSelectedSentence(null);
    setCurrentWordIndex(0);
  };

  const openEditModal = (sentence) => {
    setEditId(sentence.id);
    setEditSentence(sentence.sentence);
    setEditCategory(sentence.category);
    setEditModal(true);
  };

  const handleEditSave = () => {
    const wordsArr = editSentence.trim().split(/\s+/);
    update(ref(db, `sentences/${editId}`), {
      sentence: editSentence.trim(),
      words: wordsArr,
      category: editCategory.trim(),
    });

    setEditModal(false);
    setSelectedSentence(null);
  };

  const groupedSentences = sentences.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const renderSentenceWithWordHighlight = (words, currentIndex) => (
    <div className="mb-3" style={{ fontSize: "36px", direction: "rtl" }}>
      {words.map((word, idx) => (
        <span
          key={idx}
          style={{
            color: idx === currentIndex ? "#d32f2f" : "#444",
            fontWeight: idx === currentIndex ? "bold" : "normal",
            marginRight: idx === 0 ? 0 : 8,
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => setCurrentWordIndex(idx)}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  );



useEffect(() => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
}, [selectedSentence]); // یا هر زمانی که باید فوکوس انجام بشه


  return (
    <div className="container mt-4 text-end" style={{ direction: "rtl" }}>
      <div className="mb-3 d-flex justify-content-between">
        <Button variant="primary" onClick={() => setFormVisible(!formVisible)}>
          {formVisible ? "بستن فرم افزودن" : "افزودن جمله"}
        </Button>
        <Button variant="secondary" onClick={() => setListVisible(!listVisible)}>
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
              <Button variant="success" type="submit">افزودن</Button>
              <Button
                className="mx-2"
                variant="secondary"
                type="button"
                onClick={() => setShowDelete(!showDelete)}
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
              <Card.Header>دسته‌بندی‌ها</Card.Header>
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
              <Card.Header>جملات دسته «{selectedCategory}»</Card.Header>
              <Card.Body>
                <div className="d-flex flex-wrap gap-2 justify-content-end">
                  {groupedSentences[selectedCategory].map((item) => (
                    <div
                      key={item.id}
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
                            onClick={() => openEditModal(item)}
                          >
                            ✏️
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleDeleteSentence(item.id)}
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
                <h5>نمایش کلمات:</h5>
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
