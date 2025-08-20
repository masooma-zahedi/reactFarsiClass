
import React, { useState } from 'react';

const style = document.createElement('style');
style.innerHTML = `
 @keyframes borderAnimation {
0% {
 border-color: #007bff;
 }
50% {
 border-color: #6610f2;
 }
100% {
 border-color: #007bff;
 }
 }
 .borderAnimation {
 animation: borderAnimation2s infinite;
 }
`;
document.head.appendChild(style);

const TestApp = () => {
 const [cards, setCards] = useState([
 {
 id:1,
 image: 'https://picsum.photos/200/300',
 englishWord: 'Apple',
 persianWord: 'سیب اپل میوه',
 isOpen: false,
 },
 {
 id:2,
 image: 'https://picsum.photos/200/301',
 englishWord: 'Dog',
 persianWord: 'سگ خانگی حیوان',
 isOpen: false,
 },
 {
 id:3,
 image: 'https://picsum.photos/200/302',
 englishWord: 'House',
 persianWord: 'خانه مسکونی آپارتمان',
 isOpen: true,
 },
 ]);

 const [selectedCardId, setSelectedCardId] = useState(null);

 const handleCardClick = (id) => {
 setSelectedCardId(id);
 setCards((prevCards) =>
 prevCards.map((card) => {
 if (card.id === id) {
 return { ...card, isOpen: true };
 } else {
 return { ...card, isOpen: false };
 }
 })
 );
 };

 return (
 <div
 style={{
 display: 'flex',
 flexWrap: 'wrap',
 justifyContent: 'center',
 }}
 >
 {cards.map((card) => (
 <div
 key={card.id}
 style={{
 margin: '7px',
 width: card.isOpen || selectedCardId === card.id ? '400px' : '25px',
 height: '350px',
 border: card.isOpen || selectedCardId === card.id ? '2px solid #007bff' : '1px solid #ccc',
 borderRadius: '10px',
 boxShadow: '0 0 10px rgba(0,0,0,0.1)',
 cursor: 'pointer',
 transition: 'all 0.7s ease-in-out',
 overflow: 'hidden',
 position: 'relative',
 backgroundColor:' #9bbfd858'
 }}
 onClick={() => handleCardClick(card.id)}
 >
 {card.isOpen || selectedCardId === card.id ? (
 <div
 className="borderAnimation"
 style={{
 position: 'absolute',
 top: 0,
 left: 0,
 width: '100%',
 height: '100%',
 borderRadius: '10px',
 border: '2px solid #007bff',
 }}
 />
 ) : null}
 <img
 src={card.image}
 alt={card.englishWord}
 style={{
 width: '100%',
 height: '70%',
 objectFit: 'cover',
 borderTopLeftRadius: '10px',
 borderTopRightRadius: '10px',
 }}
 />
 <div
 style={{
 padding: '20px',
 textAlign: 'center',
 overflow: 'hidden',
 }}
 >
 <span style={{ fontSize: '18px', marginBottom: '10px', display: 'block' }}>
 {card.englishWord}
 </span>
 <span style={{ fontSize: '18px' }}>{card.persianWord}</span>
 </div>
 </div>
 ))}
 </div>
 );
};

export default TestApp;


