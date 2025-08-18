import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// تابع شافل کردن آرایه
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const SentenceBuilder = () => {
  // داده‌های نمونه
  const sentenceData = {
    داستان_روباه2: [
    {
      fa: ["روباه", "کنار", "رود", "زندگی", "می‌کند"],
      correctFa: ["روباه", "کنار", "رود", "زندگی", "می‌کند"],
      en: "The fox lives by the river"
    },
    {
      fa: ["روباه", "هر", "روز", "آب", "می‌نوشد"],
      correctFa: ["روباه", "هر", "روز", "آب", "می‌نوشد"],
      en: "The fox drinks water every day"
    },
    {
      fa: ["یک", "روز", "رنگین‌کمان", "آمد"],
      correctFa: ["یک", "روز", "رنگین‌کمان", "آمد"],
      en: "One day a rainbow came"
    },
    {
      fa: ["روباه", "گفت", "چه", "رنگ‌های", "زیبایی"],
      correctFa: ["روباه", "گفت", "چه", "رنگ‌های", "زیبایی"],
      en: "The fox said what beautiful colors"
    },
    {
      fa: ["روباه", "خواست", "رنگین‌کمان","را", "ببیند"],
      correctFa: ["روباه", "خواست", "رنگین‌کمان","را", "ببیند"],
      en: "The fox wanted to see the rainbow"
    },
    {
      fa: ["رود", "آب", "و", "سنگ", "داشت"],
      correctFa: ["رود", "آب", "و", "سنگ", "داشت"],
      en: "The river had water and stones"
    },
    {
      fa: ["روباه", "فکر", "کرد"],
      correctFa: ["روباه", "فکر", "کرد"],
      en: "The fox thought"
    },
    {
      fa: ["روباه", "گفت", "باید", "از", "پل", "بروم"],
      correctFa: ["روباه", "گفت", "باید", "از", "پل", "بروم"],
      en: "The fox said I must go over the bridge"
    },
    {
      fa: ["روباه", "پل","را", "پیدا", "کرد"],
      correctFa: ["روباه", "پل","را", "پیدا", "کرد"],
      en: "The fox found the bridge"
    },
    {
      fa: ["روباه", "از", "پل", "گذشت"],
      correctFa: ["روباه", "از", "پل", "گذشت"],
      en: "The fox crossed the bridge"
    },
    {
      fa: ["روباه", "رنگین‌کمان","را", "دید"],
      correctFa: ["روباه", "رنگین‌کمان","را", "دید"],
      en: "The fox saw the rainbow"
    },
    {
      fa: ["روباه", "خوشحال", "شد"],
      correctFa: ["روباه", "خوشحال", "شد"],
      en: "The fox became happy"
    },
    {
      fa: ["روباه", "گفت", "من", "باهوش", "هستم"],
      correctFa: ["روباه", "گفت", "من", "باهوش", "هستم"],
      en: "The fox said I am clever"
    },
    {
      fa: ["روباه", "هر", "روز","به طَرَفِ", "رود", "می‌رود"],
      correctFa: ["روباه", "هر", "روز","به طَرَفِ", "رود", "می‌رود"],
      en: "The fox goes to the river every day"
    },
    {
      fa: ["روباه", "خوشحال", "است"],
      correctFa: ["روباه", "خوشحال", "است"],
      en: "The fox is happy"
    },
  ],
    داستان_روباه: [
      {
        fa: ["یک", "روباه", "باهوش", "کنار", "رودخانه", "زندگی", "می‌کرد"],
        correctFa: ["یک", "روباه", "باهوش", "کنار", "رودخانه", "زندگی", "می‌کرد"],
        en: "A clever fox lived beside a river"
      },
      {
        fa: ["روباه", "هر", "روز", "به", "کنار", "رود", "می‌رفت", "و", "آب", "می‌نوشید"],
        correctFa: ["روباه", "هر", "روز", "به", "کنار", "رود", "می‌رفت", "و", "آب", "می‌نوشید"],
        en: "The fox went to the river every day and drank water"
      },
      {
        fa: ["یک", "روز", "رنگین‌کمان", "زیبایی", "در", "آسمان", "پدیدار", "شد"],
        correctFa: ["یک", "روز", "رنگین‌کمان", "زیبایی", "در", "آسمان", "پدیدار", "شد"],
        en: "One day a beautiful rainbow appeared in the sky"
      },
      {
        fa: ["روباه", "گفت", "به‌به", "چه", "رنگ‌های", "قشنگی"],
        correctFa: ["روباه", "گفت", "به‌به", "چه", "رنگ‌های", "قشنگی"],
        en: "The fox said wow, what beautiful colors"
      },
      {
        fa: ["روباه", "خواست", "از", "روی", "رودخانه", "عبور", "کند"],
        correctFa: ["روباه", "خواست", "از", "روی", "رودخانه", "عبور", "کند"],
        en: "The fox wanted to cross the river"
      },
      {
        fa: ["رودخانه", "پر", "از", "سنگ", "و", "آب", "بود"],
        correctFa: ["رودخانه", "پر", "از", "سنگ", "و", "آب", "بود"],
        en: "The river was full of stones and water"
      },
      {
        fa: ["روباه", "خیلی", "فکر", "کرد"],
        correctFa: ["روباه", "خیلی", "فکر", "کرد"],
        en: "The fox thought a lot"
      },
      {
        fa: ["روباه", "گفت", "راه", "درست", "عبور", "از", "پل", "است"],
        correctFa: ["روباه", "گفت", "راه", "درست", "عبور", "از", "پل", "است"],
        en: "The fox said the right way is to cross the bridge"
      },
      {
        fa: ["روباه", "پل", "را", "پیدا", "کرد"],
        correctFa: ["روباه", "پل", "را", "پیدا", "کرد"],
        en: "The fox found the bridge"
      },
      {
        fa: ["روباه", "از", "روی", "پل", "عبور", "کرد"],
        correctFa: ["روباه", "از", "روی", "پل", "عبور", "کرد"],
        en: "The fox crossed the bridge"
      },
      {
        fa: ["روباه", "رنگین‌کمان", "را", "از", "طرف", "دیگر", "دید"],
        correctFa: ["روباه", "رنگین‌کمان", "را", "از", "طرف", "دیگر", "دید"],
        en: "The fox saw the rainbow from the other side"
      },
      {
        fa: ["روباه", "خیلی", "خوشحال", "شد"],
        correctFa: ["روباه", "خیلی", "خوشحال", "شد"],
        en: "The fox became very happy"
      },
      {
        fa: ["روباه", "گفت", "من", "روباه", "زیرکم"],
        correctFa: ["روباه", "گفت", "من", "روباه", "زیرکم"],
        en: "The fox said I am a clever fox"
      },
      {
        fa: ["روباه", "هر", "روز", "به", "رودخانه", "می‌رفت"],
        correctFa: ["روباه", "هر", "روز", "به", "رودخانه", "می‌رفت"],
        en: "The fox went to the river every day"
      },
      {
        fa: ["روباه", "از", "زندگی", "خود", "راضی", "بود"],
        correctFa: ["روباه", "از", "زندگی", "خود", "راضی", "بود"],
        en: "The fox was happy with his life"
      },
    ],
    برادر_کوچک_من: [
      {
        fa: ["یک", "روز", "صبح", "مادر", "مرا", "صدا", "زد"],
        correctFa: ["یک", "روز", "صبح", "مادر", "مرا", "صدا", "زد"],
        en: "One morning, mother called me"
      },
      {
        fa: ["مادر", "گفت", "برادرت", "بیدار", "شده", "است"],
        correctFa: ["مادر", "گفت", "برادرت", "بیدار", "شده", "است"],
        en: "Mother said your brother is awake"
      },
      {
        fa: ["من", "به", "اتاق", "برادرم", "رفتم"],
        correctFa: ["من", "به", "اتاق", "برادرم", "رفتم"],
        en: "I went to my brother's room"
      },
      {
        fa: ["برادرم", "نوید", "روی", "تختش", "در", "حال", "خوابیدن", "بود"],
        correctFa: ["برادرم", "نوید", "روی", "تختش", "در", "حال", "خوابیدن", "بود"],
        en: "My brother Navid was lying on his bed"
      },
      {
        fa: ["او", "با", "چشم‌های", "درشت", "به", "من", "نگاه", "کرد"],
        correctFa: ["او", "با", "چشم‌های", "درشت", "به", "من", "نگاه", "کرد"],
        en: "He looked at me with big eyes"
      },
      {
        fa: ["من", "به", "او", "لبخند", "زدم"],
        correctFa: ["من", "به", "او", "لبخند", "زدم"],
        en: "I smiled at him"
      },
      {
        fa: ["نوید", "دست", "کوچکش", "را", "بالا", "آورد"],
        correctFa: ["نوید", "دست", "کوچکش", "را", "بالا", "آورد"],
        en: "Navid raised his small hand"
      },
      {
        fa: ["من", "دست", "او", "را", "گرفتم"],
        correctFa: ["من", "دست", "او", "را", "گرفتم"],
        en: "I held his hand"
      },
      {
        fa: ["به", "برادرم", "گفتم", "من", "برادر", "بزرگت", "هستم"],
        correctFa: ["به", "برادرم", "گفتم", "من", "برادر", "بزرگت", "هستم"],
        en: "I told my brother I am your big brother"
      },
      {
        fa: ["مادر", "گفت", "برای", "نوید", "قصه", "بخوان"],
        correctFa: ["مادر", "گفت", "برای", "نوید", "قصه", "بخوان"],
        en: "Mother said read a story for Navid"
      },
      {
        fa: ["من", "کنار", "تخت", "نشستم", "و", "قصه", "شروع", "کردم"],
        correctFa: ["من", "کنار", "تخت", "نشستم", "و", "قصه", "شروع", "کردم"],
        en: "I sat beside the bed and started the story"
      },
      {
        fa: ["نوید", "با", "صدای", "کوچکش", "جواب", "داد"],
        correctFa: ["نوید", "با", "صدای", "کوچکش", "جواب", "داد"],
        en: "Navid answered with his little voice"
      },
      {
        fa: ["مادر", "گفت", "او", "با", "تو", "حرف", "می‌زند"],
        correctFa: ["مادر", "گفت", "او", "با", "تو", "حرف", "می‌زند"],
        en: "Mother said he is talking to you"
      },
      {
        fa: ["من", "برای", "نوید", "آواز", "خواندم"],
        correctFa: ["من", "برای", "نوید", "آواز", "خواندم"],
        en: "I sang a song for Navid"
      },
      {
        fa: ["من", "همیشه", "مراقب", "برادرم", "خواهم", "بود"],
        correctFa: ["من", "همیشه", "مراقب", "برادرم", "خواهم", "بود"],
        en: "I will always take care of my brother"
      }
    ],
    خانواده: [
      {
        fa: ["من", "خانواده‌ام", "را", "دوست", "دارم"],
        correctFa: ["من", "خانواده‌ام", "را", "دوست", "دارم"],
        en: "I love my family",
      },
      {
        fa: ["خواهر", "من", "مهربان", "است"],
        correctFa: ["خواهر", "من", "مهربان", "است"],
        en: "My sister is kind",
      },
    ],
    طبیعت: [
      {
        fa: ["خورشید", "در", "آسمان", "می‌درخشد"],
        correctFa: ["خورشید", "در", "آسمان", "می‌درخشد"],
        en: "The sun shines in the sky",
      },
      {
        fa: ["پرندگان", "در", "بهار", "آواز", "می‌خوانند"],
        correctFa: ["پرندگان", "در", "بهار", "آواز", "می‌خوانند"],
        en: "Birds sing in the spring",
      },
    ],
  };

  const categories = Object.keys(sentenceData);

  const [category, setCategory] = useState(categories[0]);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [words, setWords] = useState(
    shuffleArray(sentenceData[category][0].fa)
  );
  const [hasDragged, setHasDragged] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showCategories, setShowCategories] = useState(true); // برای باز/بسته کردن فهرست

  const correctSentence = sentenceData[category][sentenceIndex].correctFa;

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setSentenceIndex(0);
    setWords(shuffleArray(sentenceData[cat][0].fa));
    setHasDragged(false);
    setShowCorrect(false);
  };

  const handleNextSentence = () => {
    const nextIndex =
      (sentenceIndex + 1) % sentenceData[category].length;
    setSentenceIndex(nextIndex);
    setWords(shuffleArray(sentenceData[category][nextIndex].fa));
    setHasDragged(false);
    setShowCorrect(false);
  };

  const handleDragStart = (index) => setDraggedIndex(index);

  const handleDrop = (index) => {
    let updated = [...words];
    const [draggedWord] = updated.splice(draggedIndex, 1);
    updated.splice(index, 0, draggedWord);
    setWords(updated);
    setDraggedIndex(null);
    setHasDragged(true);
  };

  return (
    <div
      className="container mt-4 p-5 rounded shadow"
      style={{ fontFamily: "Vazir" , width: '90%'}}
      dir="rtl"
    >
      <h4 className="mb-3">🧩 جمله‌سازی فارسی</h4>

      {/* دکمه باز/بسته کردن فهرست */}
      <div className="mb-2 ">
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => setShowCategories((prev) => !prev)}
        >
          {showCategories ? "پنهان کردن فهرست دسته‌ها" : "نمایش فهرست دسته‌ها"}
        </button>
      </div>

      {/* فهرست دسته‌ها */}
      {showCategories && (
        <div className="mb-3 border rounded p-2 bg-light">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn m-1 ${
                category === cat ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* باکس کلمات */}
      <div className="d-flex flex-wrap h3 gap-2 mb-3 justify-content-end">
        {words.map((word, index) => {
          let bg = "#f8f9fa";
          let color = "#000";

          if (hasDragged) {
            if (word === correctSentence[index]) {
              bg = "rgba(0, 255, 0, 0.2)";
            } else {
              bg = "rgba(255, 0, 0, 0.2)";
            }
          }

          return (
            <div
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
              className="px-3 py-2 rounded border"
              style={{
                backgroundColor: bg,
                color: color,
                cursor: "grab",
                transition: "background-color 0.5s ease",
              }}
            >
              {word}
            </div>
          );
        })}
      </div>

      {/* ترجمه */}
      <div className="alert alert-light text-start" dir="ltr">
        Translation:{" "}
        <strong>{sentenceData[category][sentenceIndex].en}</strong>
      </div>

      {/* نمایش جمله فعلی یا صحیح */}
      <div className="alert alert-info" style={{ minHeight: "40px" }}>
        {showCorrect
          ? `جمله صحیح: ${correctSentence.join(" ")}`
          : `جمله فعلی: ${words.join(" ")}`}
      </div>

      {/* دکمه‌ها */}
      <div className="mt-3 d-flex gap-2 justify-content-end">
        <button className="btn btn-success" onClick={handleNextSentence}>
          جمله بعدی
        </button>
        <button
          className="btn btn-warning"
          onClick={() => setShowCorrect((prev) => !prev)}
        >
          {showCorrect ? "پنهان کردن صحیح" : "نمایش صحیح"}
        </button>
      </div>

      {/* فونت */}
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css');
      `}</style>
      <div className="text-end text-muted fs-6">SentenceBuilder</div>
    </div>
  );
};

export default SentenceBuilder;
