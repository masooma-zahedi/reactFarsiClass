import React, { useState } from "react";

/**
 * MakeInferencePersianNoStorage.jsx
 * - تک‌فایل React
 * - راست‌به‌چپ (RTL)
 * - داده‌ها فقط در state کامپوننت نگه‌داری می‌شوند (بدون localStorage)
 *
 * استفاده:
 * import MakeInferencePersianNoStorage from "./components/MakeInferencePersianNoStorage";
 * <MakeInferencePersianNoStorage />
 */

const INITIAL_ITEMS = [
  { id: 1, text: "معلم نتایج امتحانات را جلوش گذاشت.", type: "جمله", prompt: "چه استنتاجی می‌توان کرد؟", sample: "او معلم است و می‌خواهد امتحانات را به دانش‌آموزان برگرداند." },
  { id: 2, text: "بازیکن با خوشحالی بالا و پایین می‌پرید.", type: "جمله", prompt: "چه احساسی دارد؟", sample: "خوشحال یا هیجان‌زده است." },
  { id: 3, text: "کتاب", type: "کلمه", prompt: "این چه چیزی است؟", sample: "کتاب" },
];

export default function MakeInferencePersianNoStorage() {
  // داده‌ها فقط در state محلی نگه‌داری می‌شوند
  const [items, setItems] = useState(
    // هر آیتم با فیلدهای کمکی (answer, showSample, completed) مقداردهی اولیه می‌شود
    INITIAL_ITEMS.map(i => ({ ...i, answer: "", showSample: false, completed: false }))
  );

  // فرم اضافه کردن آیتم
  const [newText, setNewText] = useState("");
  const [newType, setNewType] = useState("جمله");
  const [newPrompt, setNewPrompt] = useState("چه استنتاجی می‌توان کرد؟");
  const [newSample, setNewSample] = useState("");

  const handleAnswerChange = (id, value) => {
    setItems(prev => prev.map(it => (it.id === id ? { ...it, answer: value } : it)));
  };

  const toggleSample = (id) => {
    setItems(prev => prev.map(it => (it.id === id ? { ...it, showSample: !it.showSample } : it)));
  };

  const toggleCompleted = (id) => {
    setItems(prev => prev.map(it => (it.id === id ? { ...it, completed: !it.completed } : it)));
  };

  const removeItem = (id) => {
    if (!window.confirm("آیا می‌خواهید این مورد حذف شود؟")) return;
    setItems(prev => prev.filter(it => it.id !== id));
  };

  const addItem = (e) => {
    e.preventDefault();
    const text = newText.trim();
    if (!text) return alert("لطفاً جمله یا کلمه را وارد کنید.");
    const nextId = items.length ? Math.max(...items.map(i => i.id)) + 1 : 1;
    const item = {
      id: nextId,
      text,
      type: newType,
      prompt: newPrompt || (newType === "کلمه" ? "این چه چیزی است؟" : "چه استنتاجی می‌توان کرد؟"),
      sample: newSample,
      answer: "",
      showSample: false,
      completed: false,
    };
    setItems(prev => [...prev, item]);
    // پاک کردن فرم
    setNewText("");
    setNewSample("");
    setNewPrompt("چه استنتاجی می‌توان کرد؟");
    setNewType("جمله");
  };

  const percent = Math.round((items.filter(i => i.answer && i.answer.trim().length > 0).length / (items.length || 1)) * 100);

  const clearAllAnswers = () => {
    if (!window.confirm("پاک کردن همهٔ پاسخ‌ها؟ (این کار غیرقابل بازگشت است)")) return;
    setItems(prev => prev.map(it => ({ ...it, answer: "", completed: false, showSample: false })));
  };

  const exportCSV = () => {
    const rows = [["id", "type", "text", "prompt", "sample", "answer"]];
    items.forEach(it => rows.push([it.id, it.type, it.text.replace(/"/g,'""'), it.prompt.replace(/"/g,'""'), (it.sample||"").replace(/"/g,'""'), (it.answer||"").replace(/"/g,'""')]));
    const csv = rows.map(r => r.map(cell => `"${cell}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "make_inference_persian_no_storage.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container my-3" dir="rtl" style={{ fontFamily: "Tahoma, 'Segoe UI', sans-serif" }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4 className="mb-0">تمرین استنباط / Make an Inference — فارسی (بدون ذخیره)</h4>
        <div>
          <button className="btn btn-sm btn-outline-secondary me-2" onClick={clearAllAnswers}>پاک‌سازی پاسخ‌ها</button>
          <button className="btn btn-sm btn-outline-success" onClick={exportCSV}>خروجی CSV</button>
        </div>
      </div>

      <div className="mb-3">
        <div className="progress" style={{ height: 12 }}>
          <div className="progress-bar" role="progressbar" style={{ width: `${percent}%` }}>{percent}%</div>
        </div>
        <small className="text-muted">تعداد پاسخ‌داده‌شده: {items.filter(i => i.answer && i.answer.trim()).length} / {items.length}</small>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={addItem} className="row g-2 align-items-end">
            <div className="col-12 col-md-6">
              <label className="form-label small">متن (جمله یا کلمه)</label>
              <input className="form-control" value={newText} onChange={e => setNewText(e.target.value)} placeholder="متن را اینجا وارد کنید" />
            </div>
            <div className="col-6 col-md-2">
              <label className="form-label small">نوع</label>
              <select className="form-select" value={newType} onChange={e => setNewType(e.target.value)}>
                <option>جمله</option>
                <option>کلمه</option>
              </select>
            </div>
            <div className="col-6 col-md-2">
              <label className="form-label small">پیشنهاد سوال</label>
              <input className="form-control" value={newPrompt} onChange={e => setNewPrompt(e.target.value)} />
            </div>
            <div className="col-12 col-md-2">
              <label className="form-label small">نمونهٔ معلم</label>
              <input className="form-control" value={newSample} onChange={e => setNewSample(e.target.value)} placeholder="اختیاری" />
            </div>
            <div className="col-12 text-start mt-1">
              <button className="btn btn-primary btn-sm">+ افزودن آیتم</button>
            </div>
          </form>
        </div>
      </div>

      <div className="list-group">
        {items.map((it, idx) => (
          <div key={it.id} className={`list-group-item mb-2 ${it.completed ? "border-success" : ""}`} style={{ background: it.type === "کلمه" ? "#fffefc" : "white" }}>
            <div className="d-flex justify-content-between align-items-start">
              <div style={{ maxWidth: "75%" }}>
                <div>
                  <strong>{idx + 1}.</strong>{" "}
                  <span style={{ whiteSpace: "pre-wrap", fontSize: it.type === "کلمه" ? 20 : 16 }}>{it.text}</span>
                </div>
                <div className="text-muted small mt-1">{it.prompt}</div>
              </div>

              <div className="text-end">
                <div className="mb-1">
                  <button className={`btn btn-sm ${it.completed ? "btn-success" : "btn-outline-secondary"} me-1`} onClick={() => toggleCompleted(it.id)}>
                    {it.completed ? "✓ انجام شد" : "علامت‌گذاری"}
                  </button>
                  <button className="btn btn-sm btn-outline-primary me-1" onClick={() => toggleSample(it.id)}>{it.showSample ? "پنهان کردن نمونه" : "نمایش نمونه"}</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => removeItem(it.id)}>حذف</button>
                </div>
                <div className="small text-muted">نوع: {it.type}</div>
              </div>
            </div>

            <div className="mt-2">
              <textarea
                className="form-control"
                rows={it.type === "کلمه" ? 2 : 3}
                placeholder="پاسخ (استنتاج) خود را اینجا بنویسید..."
                value={it.answer}
                onChange={(e) => handleAnswerChange(it.id, e.target.value)}
              />
              {it.showSample && (
                <div className="mt-2 alert alert-light">
                  <strong>نمونهٔ معلم:</strong> {it.sample || <em>نمونه‌ای موجود نیست</em>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-muted small text-center">
        توجه: این نسخه هیچ‌جا ذخیره نمی‌شود — با هر بار رفرش صفحه داده‌ها به حالت اولیه بازمی‌گردند.
      </div>
    </div>
  );
}
