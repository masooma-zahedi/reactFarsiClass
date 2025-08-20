import React, { useState, useEffect } from "react";
import { database, ref, onValue, set, remove } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WordGameWithCategories() {
  const [words, setWords] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("همه");

  // --- فرم ---
  const [showForm, setShowForm] = useState(false);
  const [word, setWord] = useState("");
  const [syllables, setSyllables] = useState("");
  const [english, setEnglish] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [editId, setEditId] = useState(null);

  // دریافت داده‌ها
  useEffect(() => {
    const wordsRef = ref(database, "words");
    const unsubscribe = onValue(wordsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setWords(Object.values(data));
      else setWords([]);
    });
    return () => unsubscribe();
  }, []);

  // ذخیره (افزودن / ویرایش)
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

  // حذف
  const handleDelete = async (id) => {
    if (window.confirm("آیا از حذف مطمئن هستید؟")) {
      await remove(ref(database, "words/" + id));
    }
  };

  // پر کردن فرم برای ویرایش
  const handleEdit = (w) => {
    setWord(w.word);
    setSyllables(w.syllables.join("-"));
    setEnglish(w.english);
    setImageUrl(w.image);
    setCategory(w.category);
    setEditId(w.id);
    setShowForm(true);
  };

  // ریست فرم
  const resetForm = () => {
    setWord("");
    setSyllables("");
    setEnglish("");
    setImageUrl("");
    setCategory("");
    setEditId(null);
    setShowForm(false);
  };

  // دسته‌بندی‌ها
  const categories = ["همه", ...Array.from(new Set(words.map((w) => w.category)))];
  const filteredWords =
    selectedCategory === "همه"
      ? words
      : words.filter((w) => w.category === selectedCategory);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* دسته‌بندی‌ها */}
        <div className="col-md-2 mb-3">
          <ul className="list-group" dir="rtl">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className={`list-group-item ${
                  selectedCategory === cat ? "active" : ""
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* کارت‌ها */}
        <div className="col-md-10">
          <button
            className="btn btn-primary mb-3"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "بستن فرم" : "افزودن واژه جدید"}
          </button>

          {showForm && (
            <form
              onSubmit={handleSubmit}
              dir="rtl"
              className="border p-4 mb-4 rounded bg-light"
            >
              <div className="mb-3">
                <label className="form-label">واژه فارسی:</label>
                <input
                  className="form-control"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">سیلاب‌ها (با - جدا شوند):</label>
                <input
                  className="form-control"
                  value={syllables}
                  onChange={(e) => setSyllables(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">معنی انگلیسی:</label>
                <input
                  className="form-control"
                  value={english}
                  onChange={(e) => setEnglish(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">آدرس تصویر:</label>
                <input
                  className="form-control"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">دسته‌بندی:</label>
                <input
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <button className="btn btn-success" type="submit">
                {editId ? "ویرایش واژه" : "افزودن واژه"}
              </button>
              {editId && (
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={resetForm}
                >
                  لغو
                </button>
              )}
            </form>
          )}

          <div className="row" dir="rtl">
            {filteredWords.map((w) => (
              <div className="col-md-4 mb-4" key={w.id}>
                <div
                  className={`card word-card h-100 ${
                    selectedCard === w.id ? "active bounce" : ""
                  }`}
                  onClick={() =>
                    setSelectedCard(selectedCard === w.id ? null : w.id)
                  }
                >
                  <img
                    src={w.image}
                    alt={w.word}
                    className="card-img-top mt-2"
                    style={{ height: 160, objectFit: "contain" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{w.word}</h5>
                    {selectedCard === w.id && (
                      <>
                        <p className="card-text text-muted">( {w.english} )</p>
                        <div className="mb-3 h4 syllables">
                          {w.syllables.map((s, i) => (
                            <span
                              key={i}
                              className="badge bg-warning text-dark me-1 syllable-badge"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        <button
                          className="btn btn-outline-primary btn-sm mx-1"
                          onClick={() => handleEdit(w)}
                        >
                          ✏️ ویرایش
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm mx-1"
                          onClick={() => handleDelete(w.id)}
                        >
                          ❌ حذف
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* استایل‌ها */}
      <style>{`
        .word-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
        }

        .word-card:hover {
          transform: scale(1.05);
        }

        .word-card.active {
          transform: scale(1.1) rotate(-2deg);
          box-shadow: 0 10px 25px rgba(255, 200, 0, 0.6);
          border: 3px solid #ffcc00;
          background: linear-gradient(145deg, #fffbea, #fff3c4);
        }

        .bounce {
          animation: bounce 0.6s ease;
        }

        @keyframes bounce {
          0%   { transform: scale(1) rotate(0deg); }
          30%  { transform: scale(1.15) rotate(-3deg); }
          50%  { transform: scale(0.95) rotate(2deg); }
          70%  { transform: scale(1.05) rotate(-1deg); }
          100% { transform: scale(1.1) rotate(-2deg); }
        }

        .syllable-badge {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 0.5s forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
