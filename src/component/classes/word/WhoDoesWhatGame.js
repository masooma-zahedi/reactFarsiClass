import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// ⚠️ مجموعه‌ها به صورت کامل از سوال شما حذف شده‌اند تا کد کوتاه‌تر باشد.
// لطفاً تعریف کامل sets را بالای این فایل نگه دارید (مثل همان که خودتان فرستادید).
// 👇 مثال برای تست:
const sets = {
"کارها": {
  subjects: ["سارا", "پِدَر", "گُر‌بِه", "مادَر", "عَلی", "مینا", "دوستان", "آرَزو", "پِسَر", "دُختَر"],
  verbs: [
    "کِتاب می‌خَوانَد",
    "کار می‌کُنَد",
    "میو میو می‌کُنَد",
    "آشپَزی می‌کُنَد",
    "دَرس می‌خوانَد",
    "نَقاشی می‌کِشَد",
    "با هَم بَحث می‌کُنَند",
    "کُمَک می‌کُنَد",
    "نَفَس می‌کِشَد",
    "آواز می‌خوانَد"
  ],
  correctPairs: {
    "سارا": "کِتاب می‌خَوانَد",
    "پِدَر": "کار می‌کُنَد",
    "گُر‌بِه": "میو میو می‌کُنَد",
    "مادَر": "آشپَزی می‌کُنَد",
    "عَلی": "دَرس می‌خوانَد",
    "مینا": "نَقاشی می‌کِشَد",
    "دوستان": "با هَم بَحث می‌کُنَند",
    "آرَزو": "کُمَک می‌کُنَد",
    "پِسَر": "نَفَس می‌کِشَد",
    "دُختَر": "آواز می‌خوانَد"
  }
},
"مکان‌ها": {
  subjects: ["مادَر", "کودَکان", "پَرَندِه", "پِدَر", "گاو", "گُر‌بِه", "ماهی", "دوستان", "مُعَلِم", "ما"],
  verbs: [
    "بِه بازار می‌رَوَد",
    "دَر کِتابخانِه هَستَند",
    "دَر آسمان پَروار می‌کُنَد",
    "دَر مَزرَعِه کار می‌کُنَد",
    "دَر طَویله می‌مانَد",
    "دَر حَیاط می‌خوابَد",
    "دَر آب شِنا می‌کُنَد",
    "دَر پارک بازی می‌کُنَند",
    "دَر کلاس تَوضیح می‌دهَد",
    "دَر خانه هَستیم"
  ],
  correctPairs: {
    "مادَر": "بِه بازار می‌رَوَد",
    "کودَکان": "دَر کِتابخانِه هَستَند",
    "پَرَندِه": "دَر آسمان پَروار می‌کُنَد",
    "پِدَر": "دَر مَزرَعِه کار می‌کُنَد",
    "گاو": "دَر طَویله می‌مانَد",
    "گُر‌بِه": "دَر حَیاط می‌خوابَد",
    "ماهی": "دَر آب شِنا می‌کُنَد",
    "دوستان": "دَر پارک بازی می‌کُنَند",
    "مُعَلِم": "دَر کلاس تَوضیح می‌دهَد",
    "ما": "دَر خانه هَستیم"
  }
},
"خوراکی‌ها": {
  subjects: ["اَحمَد", "بَچِه‌ها", "گُر‌بِه", "مادَر", "پِدَر", "عَلی", "گاو", "سَگ", "مینا", "پَرَندِه"],
  verbs: [
    "بَستَنی می‌خُورَند",
    "ماهی می‌خُورَد",
    "نان می‌خُورَد",
    "سُوپ می‌پَزَد",
    "چای می‌نوشَد",
    "میوه می‌خورَد",
    "عَلَف می‌خورَد",
    "اُشتُک می‌لَک لَک می‌کُنَد",
    "کِلوچه می‌خورَد",
    "دانه می‌خورَد"
  ],
  correctPairs: {
    "اَحمَد": "نان می‌خُورَد",
    "بَچِه‌ها": "بَستَنی می‌خُورَند",
    "گُر‌بِه": "ماهی می‌خُورَد",
    "مادَر": "سُوپ می‌پَزَد",
    "پِدَر": "چای می‌نوشَد",
    "عَلی": "میوه می‌خورَد",
    "گاو": "عَلَف می‌خورَد",
    "سَگ": "اُشتُک می‌لَک لَک می‌کُنَد",
    "مینا": "کِلوچه می‌خورَد",
    "پَرَندِه": "دانه می‌خورَد"
  }
},
  "آب و هوا": {
    subjects: ["هَوا", "اَبر‌ها", "خورشید", "باران", "بَرف", "باد", "تابِستان", "پاییز", "زِمِستان", "بِهار"],
    verbs: [
      "آفتابی اَست", "دَر آسمان هَستَند", "می‌تابَد", "می‌بارَد", "می‌بارَد",
      "می‌وَزَد", "گَرم اَست", "بَرگ‌ها می‌ری‌زَند", "سَرد اَست", "گُل‌ها شُکوفِه می‌دهَند"
    ],
    correctPairs: {
      "هَوا": "آفتابی اَست",
      "اَبر‌ها": "دَر آسمان هَستَند",
      "خورشید": "می‌تابَد",
      "باران": "می‌بارَد",
      "بَرف": "می‌بارَد",
      "باد": "می‌وَزَد",
      "تابِستان": "گَرم اَست",
      "پاییز": "بَرگ‌ها می‌ری‌زَند",
      "زِمِستان": "سَرد اَست",
      "بِهار": "گُل‌ها شُکوفِه می‌دهَند"
    }
  },
  "کاشت گل و گیاه": {
    subjects: ["مادَر", "بَچِه‌ها", "پِدَر", "باغبان", "دَرَخت", "گُل", "باران", "آب", "خورشید", "زَمین"],
    verbs: [
      "گُل می‌کارَد", "بَذر می‌کارَند", "بیل می‌زَنَد", "آب می‌دهَد", "بُزُرگ می‌شَوَد",
      "می‌رو‌یَد", "می‌بارَد", "ریشِه می‌گیرَد", "نور می‌دهَد", "مَرطوب می‌شَوَد"
    ],
    correctPairs: {
      "مادَر": "گُل می‌کارَد",
      "بَچِه‌ها": "بَذر می‌کارَند",
      "پِدَر": "بیل می‌زَنَد",
      "باغبان": "آب می‌دهَد",
      "دَرَخت": "بُزُرگ می‌شَوَد",
      "گُل": "می‌رو‌یَد",
      "باران": "می‌بارَد",
      "آب": "ریشِه می‌گیرَد",
      "خورشید": "نور می‌دهَد",
      "زَمین": "مَرطوب می‌شَوَد"
    }
  },
  "بازی کردن": {
    subjects: ["عَلی", "مینا", "بَچِه‌ها", "سَگ", "گُر‌به", "پِدَر", "مادَر", "دوستان", "بَرادَر", "خواهِر"],
    verbs: [
      "توپ بازی می‌کُنَد", "لی‌لی بازی می‌کُنَد", "قایِم‌باشَک بازی می‌کُنَند", "می‌دَوَد", "می‌پَرَد",
      "تاب می‌زَنَد", "طَناب می‌زَنَد", "با هَم می‌خَندَند", "فوتبال بازی می‌کُنَد", "می‌رقصَد"
    ],
    correctPairs: {
      "عَلی": "توپ بازی می‌کُنَد",
      "مینا": "لی‌لی بازی می‌کُنَد",
      "بَچِه‌ها": "قایِم‌باشَک بازی می‌کُنَند",
      "سَگ": "می‌دَوَد",
      "گُر‌به": "می‌پَرَد",
      "پِدَر": "تاب می‌زَنَد",
      "مادَر": "طَناب می‌زَنَد",
      "دوستان": "با هَم می‌خَندَند",
      "بَرادَر": "فوتبال بازی می‌کُنَد",
      "خواهِر": "می‌رقصَد"
    }
  },
  "شغل آینده": {
    subjects: ["سارا", "اَحمَد", "مینا", "رِضا", "آرَزو", "کامران", "زُهره", "پویا", "نَرخِس", "کیان"],
    verbs: [
      "می‌خواهَد پِزِشک شَوَد", "می‌خواهَد مُعَلِم شَوَد", "می‌خواهَد نَقاش شَوَد", "می‌خواهَد خَلَبان شَوَد",
      "می‌خواهَد نَوِیسَندِه شَوَد", "می‌خواهَد آتِش‌نَشان شَوَد", "می‌خواهَد بازیگَر شَوَد",
      "می‌خواهَد دانِشمَند شَوَد", "می‌خواهَد مُهَندِس شَوَد", "می‌خواهَد آشپَز شَوَد"
    ],
    correctPairs: {
      "سارا": "می‌خواهَد پِزِشک شَوَد",
      "اَحمَد": "می‌خواهَد مُعَلِم شَوَد",
      "مینا": "می‌خواهَد نَقاش شَوَد",
      "رِضا": "می‌خواهَد خَلَبان شَوَد",
      "آرَزو": "می‌خواهَد نَوِیسَندِه شَوَد",
      "کامران": "می‌خواهَد آتِش‌نَشان شَوَد",
      "زُهره": "می‌خواهَد بازیگَر شَوَد",
      "پویا": "می‌خواهَد دانِشمَند شَوَد",
      "نَرخِس": "می‌خواهَد مُهَندِس شَوَد",
      "کیان": "می‌خواهَد آشپَز شَوَد"
    }
  },
  "محل زندگی": {
    subjects: ["ما", "آن‌ها", "عَلی", "سارا", "خانِوادِه‌ی ما", "پَرَنده‌ها", "ماهی‌ها", "گُر‌بِه", "سَگ", "خَرگوش"],
    verbs: [
      "دَر شَهر زِندِگی می‌کُنیم", "دَر روستا زِندِگی می‌کُنَند", "دَر آپارتمان زِندِگی می‌کُنَد",
      "دَر خانه‌ی بُزُرگ زِندِگی می‌کُنَد", "دَر خانه‌ی قَشَنگی زِندِگی می‌کُنیم",
      "روی دَرَخت زِندِگی می‌کُنَند", "دَر آب زِندِگی می‌کُنَند", "دَر حَیاط زِندِگی می‌کُنَد",
      "دَر خانه زِندِگی می‌کُنَد", "دَر قَفَس زِندِگی می‌کُنَد"
    ],
    correctPairs: {
      "ما": "دَر شَهر زِندِگی می‌کُنیم",
      "آن‌ها": "دَر روستا زِندِگی می‌کُنَند",
      "عَلی": "دَر آپارتمان زِندِگی می‌کُنَد",
      "سارا": "دَر خانه‌ی بُزُرگ زِندِگی می‌کُنَد",
      "خانِوادِه‌ی ما": "دَر خانه‌ی قَشَنگی زِندِگی می‌کُنیم",
      "پَرَنده‌ها": "روی دَرَخت زِندِگی می‌کُنَند",
      "ماهی‌ها": "دَر آب زِندِگی می‌کُنَند",
      "گُر‌بِه": "دَر حَیاط زِندِگی می‌کُنَد",
      "سَگ": "دَر خانه زِندِگی می‌کُنَد",
      "خَرگوش": "دَر قَفَس زِندِگی می‌کُنَد"
    }
  }
};

Object.keys(sets).forEach(key => {
  sets[key].verbs = sets[key].verbs.map(v => v + ".\u200F");
  Object.keys(sets[key].correctPairs).forEach(sub => {
    sets[key].correctPairs[sub] = sets[key].correctPairs[sub] + ".\u200F";
  });
});

const WhoDoesWhatGame = () => {
  const [selectedSet, setSelectedSet] = useState(null);
  const [matches, setMatches] = useState({});
  const [matchStyles, setMatchStyles] = useState({});
  const [draggedVerb, setDraggedVerb] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const generateRandomColor = () => {
    const colors = [
      '#FFDDC1', '#C1E1FF', '#D0FFC1', '#FFD1DC', '#E4C1F9', ' #8c6fc8ff',
      '#FFFACD', '#C1F9F6', '#F9C1C1', '#F0E68C', '#D3FFCE', ' #a7b45cff',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getTextColor = (bgColor) => {
    const color = bgColor.substring(1);
    const rgb = parseInt(color, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? '#000000' : '#ffffff';
  };

  const handleDragStart = (e, verb) => {
    setDraggedVerb(verb);
    e.dataTransfer.setData('text/plain', verb);
  };

  const handleDrop = (e, subject) => {
    e.preventDefault();
    const verb = e.dataTransfer.getData('text/plain');
    const bgColor = generateRandomColor();
    const textColor = getTextColor(bgColor);

    setMatches(prev => ({ ...prev, [subject]: verb }));
    setMatchStyles(prev => ({
      ...prev,
      [subject]: { backgroundColor: bgColor, color: textColor }
    }));
  };

  const isCorrect = (subject) => matches[subject] === sets[selectedSet].correctPairs[subject];

  const checkAnswers = () => {
    setShowResult(true);
  };

  const resetGame = () => {
    setMatches({});
    setMatchStyles({});
    setDraggedVerb(null);
    setShowResult(false);
  };

  const handleSetChange = (setName) => {
    setSelectedSet(setName);
    resetGame();
  };

  return (
      <div className="container text-center my-5 pb-2 border border-2 border-success rounded-3">
        <h2 className="my-4 text-primary fw-bold">🎯 بازی: جمله‌سازی با کشیدن و رها کردن</h2>

        <div className="mb-4">
          <h5 className="mb-3">✅ یکی از مجموعه‌ها را انتخاب کن:</h5>
          {Object.keys(sets).map(setName => (
            <button
              key={setName}
              className={`btn btn-outline-${selectedSet === setName ? 'success' : 'primary'} m-2`}
              onClick={() => handleSetChange(setName)}
            >
              {setName}
            </button>
          ))}
        </div>

        {selectedSet && (
          <>
            <div className="row justify-content-center">
              <div className="col-md-5">
                <h5 className="text-success mb-3">🧍‍♂️ فاعل‌ها</h5>
                {sets[selectedSet].subjects.map(subject => (
                  <div
                    key={subject}
                    className="border rounded p-3 mb-3 bg-light shadow-sm fs-5"
                    style={{ minHeight: '80px', fontSize: '1.1rem' }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, subject)}
                  >
                    <strong>{subject}</strong>
                    <div className="mt-2">
                      {matches[subject] ? (
                        <span
                          className="badge w-100 fs-3 p-3"
                          style={{
                            backgroundColor: matchStyles[subject]?.backgroundColor || '#a99fc6ff',
                            color: matchStyles[subject]?.color || '#000'
                          }}
                        >
                          {matches[subject]}
                        </span>
                      ) : (
                        <span style={{ color: '#3355446b' }}>...یک فعل را بکش و اینجا رها کن</span>
                      )}
                    </div>
                    {showResult && matches[subject] && (
                      <div className="mt-2 fs-5">
                        {isCorrect(subject) ? "✅ درست" : "❌ نادرست"}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="col-md-5">
                <h3 className="text-warning mb-3">🔧 فعل‌ها</h3>
                {sets[selectedSet].verbs.map(verb => (
                  <div
                    key={verb}
                    className="bg-primary text-white p-2 py-4 rounded mb-3 fs-4 shadow-sm"
                    style={{ cursor: 'grab', fontSize: '1.05rem' }}
                    draggable
                    onDragStart={(e) => handleDragStart(e, verb)}
                  >
                    {verb}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <button className="btn btn-success ms-3" onClick={checkAnswers}>بررسی پاسخ‌ها ✅</button>
              <button className="btn btn-outline-danger" onClick={resetGame}>شروع مجدد 🔄</button>
            </div>

            {showResult && Object.keys(matches).length === sets[selectedSet].subjects.length && (
              <div className="alert alert-info mt-4 w-75 mx-auto">
                🎉 نتیجه بررسی کامل شد! پاسخ‌های صحیح با ✅ و نادرست با ❌ نشان داده شده‌اند.
              </div>
            )}
          </>
        )}
      <div className="text-muted text-end ">
        WhoDoesWhatGame
      </div>
      </div>
  );
};

export default WhoDoesWhatGame;
