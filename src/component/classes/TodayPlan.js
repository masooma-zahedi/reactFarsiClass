import React, { useState, useRef, useEffect } from 'react';


const getEnglishDate = () => {
  const today = new Date();
  return today.toLocaleDateString('en-US', {
    weekday: 'long',   // مثلا: Wednesday
    year: 'numeric',   // مثلا: 2025
    month: 'long',     // مثلا: July
    day: 'numeric'     // مثلا: 31
  });
};



const TodayPlan = () => {
  const [todayClass, setTodayClass] = useState('');
  const [plan, setPlan] = useState('');
  const [listPlan, setListPlan] = useState({});
  const inputRef = useRef(null);

  // 🔹 فقط یک بار هنگام لود: خواندن از localStorage
  useEffect(() => {
    const storedPlans = localStorage.getItem('todayPlans');
    if (storedPlans) {
      try {
        const parsed = JSON.parse(storedPlans);
        if (typeof parsed === 'object' && parsed !== null) {
          setListPlan(parsed);
        }
      } catch (e) {
        console.error("❌ خطا در خواندن localStorage:", e);
      }
    }
  }, []);

  // 🔸 افزودن یا به‌روزرسانی پلان
  const addOrUpdatePlan = () => {
    if (!todayClass.trim() || !plan.trim()) return;

    setListPlan(prev => {
      const updated = {
        ...prev,
        [todayClass]: plan
      };
      localStorage.setItem('todayPlans', JSON.stringify(updated));
      return updated;
    });

    setTodayClass('');
    setPlan('');
    inputRef.current?.focus();
  };

  // 🔸 حذف یک پلان خاص
  const deletePlan = (className) => {
    setListPlan(prev => {
      const updated = { ...prev };
      delete updated[className];
      localStorage.setItem('todayPlans', JSON.stringify(updated));
      return updated;
    });
  };

  // 🔸 پاک‌سازی کامل
  const resetPlan = () => {
    setTodayClass('');
    setPlan('');
    setListPlan({});
    localStorage.removeItem('todayPlans');
    inputRef.current?.focus();
  };

  return (
    <div className="container mt-4">
      <h3 className='text-center my-5'>📘 پلان درس امروز : {getEnglishDate()}</h3>

      <div className="input-group mb-3">
        <input
          type="text"
          value={todayClass}
          placeholder="نام کلاس"
          onChange={(e) => setTodayClass(e.target.value)}
          className="form-control"
          ref={inputRef}
        />
        <input
          type="text"
          value={plan}
          placeholder="پلان درسی"
          onChange={(e) => setPlan(e.target.value)}
          className="form-control"
          onKeyDown={(e) => e.key === 'Enter' && addOrUpdatePlan()}
        />
        <button className="btn btn-success" onClick={addOrUpdatePlan}>
          افزودن
        </button>
        <button className="btn btn-danger mx-2" onClick={resetPlan}>
          پاک‌سازی همه
        </button>
      </div>

      <h5 className='text-center mt-5'>🏆 لیست پلان‌ها:</h5>
      <ul dir='rtl' className='list-group'>
        {Object.keys(listPlan).map((className, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center bg-light mb-2">
            <div>
              <span className="text-danger">{className}</span> : {listPlan[className]}
            </div>
            <button className="btn btn-sm btn-outline-danger" onClick={() => deletePlan(className)}>
              🗑️ حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodayPlan;
