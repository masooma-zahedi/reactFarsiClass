import React, { useState } from 'react';

const style = document.createElement('style');
style.innerHTML = `
 @keyframes borderAnimation {
   0% { border-color: #007bff; }
   50% { border-color: #6610f2; }
   100% { border-color: #007bff; }
 }
 .borderAnimation {
   animation: borderAnimation 2s infinite;
 }
`;
document.head.appendChild(style);

const TestApp = () => {
  const [cards] = useState([
    { id: 1, image: 'https://picsum.photos/200/300', englishWord: 'Apple', persianWord: 'سیب', category: 'میوه‌ها' },
    { id: 2, image: 'https://picsum.photos/200/301', englishWord: 'Banana', persianWord: 'موز', category: 'میوه‌ها' },
    { id: 3, image: 'https://picsum.photos/200/302', englishWord: 'Dog', persianWord: 'سگ', category: 'حیوانات' },
    { id: 4, image: 'https://picsum.photos/200/303', englishWord: 'Cat', persianWord: 'گربه', category: 'حیوانات' },
    { id: 5, image: 'https://picsum.photos/200/304', englishWord: 'Hand', persianWord: 'دست', category: 'اعضای بدن' },
    { id: 6, image: 'https://picsum.photos/200/305', englishWord: 'Leg', persianWord: 'پا', category: 'اعضای بدن' },
  ]);

  const categories = [...new Set(cards.map(card => card.category))]; // استخراج دسته‌ها
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // دسته پیش‌فرض
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedCardId(null);
  };

  const handleCardClick = (id) => {
    setSelectedCardId(id);
  };

  const filteredCards = cards.filter(card => card.category === selectedCategory);

  // رنگ‌های جذاب برای کودکان
  const categoryColors = {
    'میوه‌ها': '#FFB347',
    'حیوانات': '#77DD77',
    'اعضای بدن': '#FF6961',
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* فهرست دسته‌ها به صورت افقی */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', overflowX: 'auto' }}>
        {categories.map(category => (
          <div
            key={category}
            onClick={() => handleCategoryClick(category)}
            style={{
              padding: '10px 20px',
              minWidth: '100px',
              textAlign: 'center',
              borderRadius: '15px',
              cursor: 'pointer',
              fontWeight: 'bold',
              color: selectedCategory === category ? '#fff' : '#000',
              backgroundColor: selectedCategory === category ? categoryColors[category] : '#f0f0f0',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            {category}
          </div>
        ))}
      </div>

      {/* نمایش کارت‌ها */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
        {filteredCards.map(card => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            style={{
              width: selectedCardId === card.id ? '400px' : '20px',
              height: '350px',
              border: selectedCardId === card.id ? '2px solid #007bff' : '1px solid #ccc',
              borderRadius: '15px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              transition: 'all 0.5s ease-in-out',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#fff'
            }}
          >
            {selectedCardId === card.id && (
              <div className="borderAnimation" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '15px',
                border: '3px solid #007bff',
              }} />
            )}

            <img src={card.image} alt={card.englishWord} style={{
              width: '100%',
              height: '70%',
              objectFit: 'cover'
            }} />

            <div style={{ padding: '15px', textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{card.englishWord}</div>
              <div style={{ fontSize: '16px', marginTop: '5px' }}>{card.persianWord}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestApp;
