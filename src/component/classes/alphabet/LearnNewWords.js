import { nanoid } from 'nanoid';
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

  const pastelColors = [
  "linear-gradient(135deg, #FFDEE9, #B5FFFC)", // صورتی/آبی روشن
  "linear-gradient(135deg, #FFF6B7, #F6416C)", // زرد/قرمز ملایم
  "linear-gradient(135deg, #cdf7a6ff, #F8D800)", // طلایی ملایم
  "linear-gradient(135deg, #D4FC79, #96E6A1)", // سبز روشن
  "linear-gradient(135deg, #84FAB0, #8FD3F4)", // سبز/آبی
  "linear-gradient(135deg, #FCCF31, #F55555)", // نارنجی روشن
  "linear-gradient(135deg, #FBC2EB, #A6C1EE)", // صورتی/بنفش روشن
  "linear-gradient(135deg, #fbe5c2ff, #eea6baff)", // صورتی/بنفش روشن
];



const LearnNewWords = () => {

  const [cards] = useState([
    { id: 1, image: 'https://picsum.photos/200/300', englishWord: 'Apple', persianWord: 'سیب', category: 'میوه‌ها' },
    { id: 2, image: 'https://picsum.photos/200/301', englishWord: 'Banana', persianWord: 'موز', category: 'میوه‌ها' },
    { id: 3, image: 'https://picsum.photos/200/302', englishWord: 'Dog', persianWord: 'سگ', category: 'حیوانات' },
    { id: 4, image: 'https://picsum.photos/200/303', englishWord: 'Cat', persianWord: 'گربه', category: 'حیوانات' },
    { id: nanoid(), image: 'https://static.vecteezy.com/system/resources/thumbnails/053/472/166/small/a-cartoon-hand-reaching-out-to-someone-vector.jpg', englishWord: 'Hand', persianWord: 'دست', category: 'اعضای بدن' },
    { id: nanoid(), image: 'https://img.freepik.com/free-vector/hand-drawn-foot-cartoon-illustration_23-2151063042.jpg', englishWord: 'Leg', persianWord: 'پا', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://t4.ftcdn.net/jpg/01/98/79/13/360_F_198791315_ARwzfFRtHEdWy4bjPHs0UeKYr9GlsK9s.jpg', englishWord: 'Head', persianWord: 'سر', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://img.freepik.com/premium-vector/blue-eye-cartoon-drawing-vector-illustration_1316704-4630.jpg', englishWord: 'Eye', persianWord: 'چشم', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://c8.alamy.com/comp/E99GD8/cartoon-character-of-ear-with-teasing-pose-E99GD8.jpg', englishWord: 'Ear', persianWord: 'گوش', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://www.clipartmax.com/png/middle/20-200133_cartoon-nose-profile-clip-art-clipart-nose-cartoon.png', englishWord: 'Nose', persianWord: 'بینی', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://i.fbcd.co/products/resized/resized-750-500/1805-m10-i005-n012-e16p-3180b0468acc74a0cf98e7e08f07ceb3266f1c8bf90372060aa9a92f0ee50299.jpg', englishWord: 'Mouth', persianWord: 'دهان', category: 'اعضای بدن' },
    { id: 15, image: 'https://www.shutterstock.com/image-vector/hand-palm-count-one-five-260nw-1820954252.jpg', englishWord: 'Finger', persianWord: 'انگشت', category: 'اعضای بدن' },
    { id: 16, image: 'https://img.freepik.com/premium-photo/hair-2d-cartoon-vector-illustration-white-background-hi_889056-24441.jpg', englishWord: 'Hair', persianWord: 'مو', category: 'اعضای بدن' },
  ]);

  const categories = [...new Set(cards.map(card => card.category))]; // استخراج دسته‌ها
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // دسته پیش‌فرض
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [showList, setShowList] = useState(true)

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
    'میوه‌ها': '#577bd0ff',
    'حیوانات': '#77DD77',
    'اعضای بدن': '#FF6961',
  };

  return (
    <div className='container rounded p-5' style={{ padding: '20px', fontFamily: 'Arial, sans-serif',boxShadow: '10px 10px 6px rgba(167, 139, 37, 0.2)' }}>
      {/* فهرست دسته‌ها به صورت افقی */}
      <div className='rounded mb-5' style={{boxShadow: '0px 4px 6px rgba(201, 108, 36, 0.2)', display: 'flex', gap: '15px', marginBottom: '20px', overflowX: 'auto' }}>
        <button className='btn-sm btn-warning' style={{boxShadow: '0 4px 6px rgba(0,0,0,0.2)',borderRadius: '10px',}} onClick={()=>setShowList(!showList)}>فهرست</button>
        
        {showList && categories.map(category => (
          <div
            key={category}
            onClick={() => handleCategoryClick(category)}
            style={{
              padding: '5px 10px',
              textAlign: 'center',
              borderRadius: '10px',
              cursor: 'pointer',
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
        {filteredCards.map(card =>{ 
            const bgColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
            
        return(
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            style={{
              width: selectedCardId === card.id ? '500px' : '20px',
              height: '500px',
              border: selectedCardId === card.id ? '2px solid #007bff' : '1px solid #ccc',
              borderRadius: '15px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              transition: 'all 0.5s ease-in-out',
              overflow: 'hidden',
              position: 'relative',
              background: bgColor
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
            <div style={{
                width: '100%',
                height: '370px',
                background: bgColor,
              }} >
              <img className='rounded' src={card.image} alt={card.englishWord} style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }} />

            </div>

            <div style={{ padding: '15px', textAlign: 'center',background: bgColor , }}>
              <div className='h1' style={{ fontSize: '', marginTop: '5px' }}>{card.persianWord}</div>
              <div className='h6' style={{ fontSize: '20px', fontWeight: 'bold' }}>{card.englishWord}</div>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
};

export default LearnNewWords;
