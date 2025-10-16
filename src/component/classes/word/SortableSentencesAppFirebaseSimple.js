// SortableSentencesApp.jsx
import React, { useState, useEffect, useMemo, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

/**
 * SortableSentencesApp — نسخهٔ با رنگ‌بندی واضح بررسی
 * - همه در یک فایل
 * - هنگام بررسی: کارت‌ها سبز (درست) یا قرمز (نادرست) می‌شوند
 * - در حالت بررسی درگ غیرفعال است
 * - اسکرول خودکار به اولین نادرست
 */

const STORAGE_KEY = "ss_app_state_v1_with_strong_colors";

function makeId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

const defaultTopics = {
  "چرخه رشد سبزیجات": [
    "کشاورز بذرها را می‌کارد.",
    "باران شروع به باریدن می‌کند.",
    "دانه‌ها شروع به جوانه زدن می‌کنند.",
    "خورشید بیرون می‌آید و می‌تابد.",
    "سبزیجات آمادهٔ برداشت هستند.",
    "کشاورز آن‌ها را از زمین بیرون می‌آورد.",
    "حالا وقت شکرگزاری است.",
    "حالا وقت خوردن است.",
  ],
  "روال صبحگاهی": [
    "زنگ ساعت به صدا درآمد.",
    "مریم از تخت بیدار شد.",
    "او مسواک زد و صورتش را شست.",
    "صبحانه را با خانواده خورد.",
    "کفش‌هایش را پوشید و راه افتاد.",
  ],
  "آماده شدن برای مدرسه": [
    "کتاب‌ها را داخل کیف گذاشت.",
    "قلم و دفتر را چک کرد.",
    "ناهار را از یخچال برداشت.",
    "مادر در را بست و خداحافظی کرد.",
  ],
};

function injectCSS() {
  const css = `
/* ===== Strong visual check CSS ===== */
.ss-app {
  font-family: "Vazirmatn", "Tahoma", "Helvetica", sans-serif;
  min-height: 100vh;
  padding: 18px;
  background: linear-gradient(180deg, #fbf1d6 0%, #fffaf0 100%);
  box-sizing: border-box;
  color: #1d2b36;
}

.ss-container {
  display: flex;
  gap: 18px;
  max-width: 1100px;
  margin: 0 auto;
  align-items: flex-start;
}

.ss-topics {
  flex: 0 0 220px;
  background: rgba(255,255,255,0.95);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  height: fit-content;
  direction: rtl;
}

.ss-topics h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
  text-align: center;
}

.topic-btn {
  width: 100%;
  display: block;
  padding: 10px 12px;
  margin: 8px 0;
  border-radius: 10px;
  border: 1px solid transparent;
  background: #fff;
  cursor: pointer;
  text-align: right;
  direction: rtl;
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);
  transition: transform .08s ease, box-shadow .12s ease, border-color .12s ease;
}
.topic-btn:hover { transform: translateY(-3px); }
.topic-btn.active {
  background: linear-gradient(90deg, #e9f3ff, #f6fbff);
  border-color: rgba(30,120,200,0.14);
  box-shadow: 0 8px 20px rgba(30,120,200,0.06);
  font-weight: 700;
}

.ss-panel {
  flex: 1 1 auto;
  min-width: 320px;
}

.panel-header {
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.panel-title { font-size: 18px; font-weight: 700; color: #1b3b5a; }

.droppable-area {
  background: transparent;
  padding: 8px;
  border-radius: 12px;
  min-height: 80px;
}

/* کارت پایه */
.sentence-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  border-radius: 18px;
  padding: 14px 16px;
  margin: 12px 6px;
  box-shadow: 0 6px 14px rgba(0,0,0,0.06);
  transition: box-shadow .14s ease, transform .12s ease, background .12s ease, border-color .12s ease;
  cursor: grab;
  direction: rtl;
  user-select: none;
}

/* در حالت کشیدن */
.sentence-card.dragging {
  box-shadow: 0 18px 36px rgba(0,0,0,0.12);
  transform: translateY(-4px) scale(1.005);
}

/* رنگ واضح برای درست/نادرست */
.sentence-card.correct {
  background: linear-gradient(90deg,#dff7ea,#e9fff5);
  border: 2px solid #0fb57b; /* سبز پررنگ */
  box-shadow: 0 10px 20px rgba(15,181,123,0.08);
}
.sentence-card.incorrect {
  background: linear-gradient(90deg,#ffecec,#fff4f4);
  border: 2px solid #e03b3b; /* قرمز پررنگ */
  box-shadow: 0 10px 20px rgba(224,59,59,0.08);
}

/* شماره دایره */
.number-badge {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  box-shadow: 0 6px 12px rgba(0,0,0,0.05);
  flex-shrink: 0;
  margin-left: 10px;
  font-size: 15px;
}

/* متن جمله */
.sentence-text {
  flex: 1 1 auto;
  margin: 0;
  text-align: center;
  font-size: 18px;
  color: #0f1720;
  min-width: 0;
  line-height: 1.35;
}

/* آیکون وضعیت */
.status-icon {
  width: 36px;
  height: 36px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius: 50%;
  font-size: 16px;
  flex-shrink:0;
  margin-right: 6px;
}

/* رنگ آیکون‌ها */
.status-icon.correct { color: #0fb57b; }
.status-icon.incorrect { color: #e03b3b; }

/* دستگیره */
.handle {
  width: 36px;
  height: 36px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius: 50%;
  background: transparent;
  color: #6b6b6b;
  font-size: 18px;
  flex-shrink:0;
  margin-right: 6px;
}

/* پایین صفحه: دکمه‌ها و نمره */
.bottom-bar {
  margin-top: 12px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.controls {
  display:flex;
  gap:8px;
  align-items:center;
}
.btn {
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: #1e90ff;
  color: #fff;
  font-weight: 700;
  box-shadow: 0 8px 18px rgba(30,144,255,0.12);
}
.btn.secondary {
  background: #fff;
  color: #1e90ff;
  border: 1px solid rgba(30,144,255,0.18);
  font-weight: 600;
}
.score-box {
  padding: 8px 12px;
  border-radius: 8px;
  background: rgba(255,255,255,0.95);
  box-shadow: 0 6px 14px rgba(0,0,0,0.04);
  font-weight: 800;
  color: #0c3b2f;
}

/* واکنشگرایی */
@media (max-width: 820px) {
  .ss-container { flex-direction: column; gap: 12px; padding-bottom: 30px; }
  .ss-topics { width: 100%; order: 2; display: flex; gap: 8px; overflow-x: auto; padding: 10px; }
  .topic-btn { flex: 0 0 auto; min-width: 160px; }
}
  `;
  if (!document.getElementById("ss-app-styles-strong")) {
    const s = document.createElement("style");
    s.id = "ss-app-styles-strong";
    s.innerHTML = css;
    document.head.appendChild(s);
  }
}

function buildItemsFrom(arr) {
  return arr.map((t) => ({ id: makeId(), text: t }));
}

export default function SortableSentencesApp({ initialTopics } = {}) {
  useEffect(() => injectCSS(), []);

  const topicsSource = useMemo(
    () => (initialTopics && Object.keys(initialTopics).length ? initialTopics : defaultTopics),
    [initialTopics]
  );

  // state شامل: topics، reference، currentTopic، checkedResults
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return parsed;
      }
    } catch (e) {}
    const topics = {};
    const ref = {};
    for (const [k, arr] of Object.entries(topicsSource)) {
      topics[k] = buildItemsFrom(arr);
      ref[k] = arr.slice();
    }
    const firstTopic = Object.keys(topics)[0] || "";
    return { topics, reference: ref, currentTopic: firstTopic, checkedResults: null };
  });

  // ذخیره خودکار
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }, [state]);

  const topicNames = Object.keys(state.topics);
  const currentTopic = state.currentTopic;

  // نگهداری ref برای هر آیتم برای اسکرول
  const itemRefs = useRef({}); // id -> dom node

  function onDragEnd(result) {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.index === destination.index && source.droppableId === destination.droppableId) return;
    const items = Array.from(state.topics[currentTopic]);
    const [moved] = items.splice(source.index, 1);
    items.splice(destination.index, 0, moved);
    setState((s) => ({ ...s, topics: { ...s.topics, [currentTopic]: items } }));
  }

  function handleTopicSelect(name) {
    setState((s) => ({ ...s, currentTopic: name, checkedResults: null }));
  }

  function shuffleCurrent() {
    const items = Array.from(state.topics[currentTopic]);
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    setState((s) => ({ ...s, topics: { ...s.topics, [currentTopic]: items }, checkedResults: null }));
  }

  function resetCurrentToOriginal() {
    const sourceArr = (initialTopics && initialTopics[currentTopic]) || defaultTopics[currentTopic] || [];
    setState((s) => ({ ...s, topics: { ...s.topics, [currentTopic]: buildItemsFrom(sourceArr) }, checkedResults: null }));
  }

  function addSentenceToCurrent(text) {
    if (!text || !text.trim()) return;
    const newItem = { id: makeId(), text: text.trim() };
    setState((s) => ({ ...s, topics: { ...s.topics, [currentTopic]: [...s.topics[currentTopic], newItem] } , checkedResults: null}));
  }

  function removeSentence(topicName, index) {
    const arr = Array.from(state.topics[topicName]);
    arr.splice(index, 1);
    setState((s) => ({ ...s, topics: { ...s.topics, [topicName]: arr }, checkedResults: null }));
  }

  // بررسی: مقایسه با reference
  function handleCheck() {
    const refOrder = state.reference[currentTopic] || [];
    const current = state.topics[currentTopic].map((i) => i.text);
    const maxLen = Math.max(refOrder.length, current.length);
    const results = [];
    for (let i = 0; i < maxLen; i++) {
      results[i] = current[i] === refOrder[i];
    }
    setState((s) => ({ ...s, checkedResults: results }));

    // بعد از ست شدن نتایج، اسکرول به اولین نادرست
    setTimeout(() => {
      const idx = results.findIndex((b) => b === false);
      if (idx >= 0) {
        const item = state.topics[currentTopic][idx];
        if (item && itemRefs.current[item.id]) {
          itemRefs.current[item.id].scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }, 180); // کمی تأخیر تا DOM آپدیت شود
  }

  function handleFix() {
    setState((s) => ({ ...s, checkedResults: null }));
  }

  function exportCurrentOrder() {
    const arr = state.topics[currentTopic].map((i) => i.text);
    const txt = JSON.stringify(arr, null, 2);
    navigator.clipboard?.writeText(txt).then(
      () => alert("ترتیب کنونی کپی شد! (JSON)"),
      () => alert("خروجی:\n\n" + txt)
    );
  }

  const [newSentence, setNewSentence] = useState("");

  const score = useMemo(() => {
    if (!state.checkedResults) return null;
    const arr = state.checkedResults;
    let ok = 0;
    for (let b of arr) if (b) ok++;
    return { ok, total: arr.length };
  }, [state.checkedResults]);

  const isChecked = Boolean(state.checkedResults);

  return (
    <div className="ss-app" dir="rtl">
      <div className="ss-container">
        <aside className="ss-topics" aria-label="فهرست موضوعات">
          <h3>موضوعات</h3>
          {topicNames.map((t) => (
            <button
              key={t}
              className={`topic-btn ${t === currentTopic ? "active" : ""}`}
              onClick={() => handleTopicSelect(t)}
            >
              {t}
            </button>
          ))}
        </aside>

        <main className="ss-panel" aria-live="polite">
          <div className="panel-header">
            <div>
              <div className="panel-title">{currentTopic}</div>
              <div style={{ color: "#666", fontSize: 13, marginTop: 6 }}>
                تعداد جملات: {state.topics[currentTopic]?.length ?? 0}
              </div>
            </div>

            <div className="controls" role="toolbar" aria-label="ابزارها">
              <button className="btn secondary" onClick={resetCurrentToOriginal} disabled={isChecked}>بازنشانی</button>
              <button className="btn secondary" onClick={shuffleCurrent} disabled={isChecked}>پخش تصادفی</button>
              <button className="btn" onClick={exportCurrentOrder}>خروجی (کپی)</button>
            </div>
          </div>

          <div style={{ marginBottom: 10, display: "flex", gap: 8, alignItems: "center" }}>
            <input
              placeholder="افزودن جمله جدید به این موضوع..."
              value={newSentence}
              onChange={(e) => setNewSentence(e.target.value)}
              style={{ flex: 1, padding: "8px 10px", borderRadius: 8, border: "1px solid #ddd" }}
              disabled={isChecked}
            />
            <button
              className="btn"
              onClick={() => {
                addSentenceToCurrent(newSentence);
                setNewSentence("");
              }}
              disabled={isChecked}
            >
              اضافه
            </button>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={"droppable-" + currentTopic}>
              {(provided) => (
                <div
                  className="droppable-area"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {state.topics[currentTopic] && state.topics[currentTopic].length ? (
                    state.topics[currentTopic].map((item, index) => {
                      let cls = "";
                      let icon = null;
                      if (isChecked) {
                        const res = state.checkedResults[index];
                        cls = res ? "correct" : "incorrect";
                        icon = res ? "✔" : "✖";
                      }
                      return (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                          isDragDisabled={isChecked}
                        >
                          {(prov, dragSnapshot) => (
                            <div
                              ref={(el) => {
                                prov.innerRef(el);
                                // نگهداری ref برای اسکرول
                                if (el) itemRefs.current[item.id] = el;
                                else delete itemRefs.current[item.id];
                              }}
                              {...prov.draggableProps}
                              {...prov.dragHandleProps}
                              className={`sentence-card ${dragSnapshot.isDragging ? "dragging" : ""} ${cls}`}
                              aria-roledescription="قابل جابه‌جایی"
                            >
                              <div className="number-badge" aria-hidden>{index + 1}</div>

                              <div className="card-body" style={{ flex: 1 }}>
                                <p className="sentence-text">{item.text}</p>
                              </div>

                              {/* آیکون وضعیت در حالت بررسی */}
                              {isChecked ? (
                                <div className={`status-icon ${cls}`} aria-hidden title={cls === "correct" ? "درست" : "نادرست"}>
                                  {icon}
                                </div>
                              ) : (
                                <div
                                  className="handle"
                                  title="کشیدن برای جابه‌جایی"
                                  aria-hidden
                                >
                                  ☰
                                </div>
                              )}

                              <button
                                onClick={() => removeSentence(currentTopic, index)}
                                style={{
                                  marginLeft: 8,
                                  background: "transparent",
                                  border: "none",
                                  color: "#c0392b",
                                  cursor: "pointer",
                                  fontSize: 16,
                                }}
                                aria-label={`حذف جمله ${index + 1}`}
                                title="حذف"
                                disabled={isChecked}
                              >
                                ✖
                              </button>
                            </div>
                          )}
                        </Draggable>
                      );
                    })
                  ) : (
                    <div className="empty-placeholder">هیچ جمله‌ای وجود ندارد. یکی اضافه کن!</div>
                  )}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <div className="bottom-bar">
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              {!isChecked ? (
                <button className="btn" onClick={handleCheck}>
                  بررسی
                </button>
              ) : (
                <button className="btn secondary" onClick={handleFix}>
                  درست کن
                </button>
              )}

              <button className="btn secondary" onClick={resetCurrentToOriginal} disabled={isChecked}>بازنشانی</button>
              <button className="btn secondary" onClick={shuffleCurrent} disabled={isChecked}>پخش تصادفی</button>
              <button className="btn" onClick={exportCurrentOrder}>خروجی (کپی)</button>
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {isChecked && score ? (
                <div className="score-box">نمره: {score.ok} / {score.total}</div>
              ) : (
                <div style={{ color: "#666", fontSize: 13 }}>پس از بررسی، کارت‌های صحیح رنگ سبز و نادرست قرمز خواهند شد.</div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
