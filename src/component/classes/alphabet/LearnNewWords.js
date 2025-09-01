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
    // ********** اعضای بدن
    { id: nanoid(), image: 'https://static.vecteezy.com/system/resources/thumbnails/053/472/166/small/a-cartoon-hand-reaching-out-to-someone-vector.jpg', englishWord: 'Hand', persianWord: 'دَست', category: 'اعضای بدن' },
    { id: nanoid(), image: 'https://img.freepik.com/free-vector/hand-drawn-foot-cartoon-illustration_23-2151063042.jpg', englishWord: 'Leg', persianWord: 'پا', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://t4.ftcdn.net/jpg/01/98/79/13/360_F_198791315_ARwzfFRtHEdWy4bjPHs0UeKYr9GlsK9s.jpg', englishWord: 'Head', persianWord: 'سَر', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://img.freepik.com/premium-vector/blue-eye-cartoon-drawing-vector-illustration_1316704-4630.jpg', englishWord: 'Eye', persianWord: 'چِشم', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://c8.alamy.com/comp/E99GD8/cartoon-character-of-ear-with-teasing-pose-E99GD8.jpg', englishWord: 'Ear', persianWord: 'گوش', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://www.clipartmax.com/png/middle/20-200133_cartoon-nose-profile-clip-art-clipart-nose-cartoon.png', englishWord: 'Nose', persianWord: 'بینی', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://i.fbcd.co/products/resized/resized-750-500/1805-m10-i005-n012-e16p-3180b0468acc74a0cf98e7e08f07ceb3266f1c8bf90372060aa9a92f0ee50299.jpg', englishWord: 'Mouth', persianWord: 'دهان', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://www.shutterstock.com/image-vector/hand-palm-count-one-five-260nw-1820954252.jpg', englishWord: 'Finger', persianWord: 'اَنگُشت', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://img.freepik.com/premium-photo/hair-2d-cartoon-vector-illustration-white-background-hi_889056-24441.jpg', englishWord: 'Hair', persianWord: 'مو', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://st4.depositphotos.com/11506542/21430/v/450/depositphotos_214304728-stock-illustration-eyebrow-perfectly-shaped-permanent-make.jpg', englishWord: 'Eyebrows', persianWord: 'اَبرو', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://t3.ftcdn.net/jpg/00/77/37/14/360_F_77371454_u18ZNypO3RvJgHXQD9jfY0gheZTwmSIW.jpg', englishWord: 'Lip', persianWord: 'لَب', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://www.shutterstock.com/image-vector/dental-cartoon-character-healthy-teeth-260nw-2295876705.jpg', englishWord: 'Teeth', persianWord: 'دَندان', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://previews.123rf.com/images/alekseymartynov/alekseymartynov1907/alekseymartynov190700001/127958317-cartoon-screaming-knee-in-shorts-and-sock.jpg', englishWord: 'Knee', persianWord: 'زانو', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://cdn.vectorstock.com/i/500p/58/20/pop-art-tongue-out-mouth-vector-5175820.jpg', englishWord: 'Tongue', persianWord: 'زَبان', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://png.pngtree.com/png-vector/20191123/ourmid/pngtree-neck-plastic-correction-icon-cartoon-style-png-image_2007449.jpg', englishWord: 'Neck', persianWord: 'گَردَن', category: 'اعضای بدن' },
    { id:nanoid(), image: 'https://thumbs.dreamstime.com/b/overweight-man-body-big-belly-fat-chubby-illustration-cartoon-drawing-white-background-over-cloth-388530887.jpg', englishWord: 'Tummy - Abdomen', persianWord: 'شِکَم', category: 'اعضای بدن'},
    { id:nanoid(), image: 'https://www.shutterstock.com/image-vector/female-hand-completed-manicure-painted-600nw-1953009004.jpg', englishWord: 'Nail', persianWord: 'ناخُن', category: 'اعضای بدن'},
    { id:nanoid(), image: 'https://img.freepik.com/free-vector/southeast-asian-man-cartoon-illustration-vibrant-vector-portrait_1308-153741.jpg?semt=ais_hybrid&w=740', englishWord: 'Face', persianWord: 'صورَت', category: 'اعضای بدن'},
    // ********** غذا ها
    { id: nanoid(), image: 'https://www.sugarspicenmore.com/wp-content/uploads/2021/06/Afghani-Pulao-4-scaled-500x375.jpg', englishWord: 'Kabuli Pulao', persianWord: 'قابُلی پَلو', category: 'غذاها' },
    { id: nanoid(), image: 'https://i.ytimg.com/vi/hCtTBwgLlCE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCoRribxgJM_nj5mNWH0siOalgDQ', englishWord: 'Mantu (Dumplings)', persianWord: 'مَنتو', category: 'غذاها' },
    { id: nanoid(), image: 'https://talaangor.ir/wp-content/uploads/2023/08/%D8%B7%D8%B1%D8%B2-%D8%AA%D9%87%DB%8C%D9%87-%D8%A8%D9%88%D9%84%D8%A7%D9%86%DB%8C-%D8%A7%D9%81%D8%BA%D8%A7%D9%86%DB%8C-%D8%A8%D8%A7-%D8%AA%D8%B1%D9%87.jpeg', englishWord: 'Bolani', persianWord: 'بولانی', category: 'غذاها' },
    { id: nanoid(), image: 'https://i.ytimg.com/vi/2gB4Q4BPdhY/maxresdefault.jpg', englishWord: 'Shorwa (Soup)', persianWord: 'شوروا', category: 'غذاها' },
    { id: nanoid(), image: 'https://app.akharinkhabar.ir/images/2021/08/02/5eb3ad28-1157-4332-92c1-866361613110.jpeg', englishWord: 'Chaply Kabob', persianWord: 'چَپلی کَباب', category: 'غذاها' },
    { id: nanoid(), image: 'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2MjcyMDAyNTUyNzY3NjYx/sabzi-afghan-spinach-recipe.jpg', englishWord: 'Sabzi (Spinach Stew)', persianWord: 'سَبزی', category: 'غذاها' },
    { id: nanoid(), image: 'https://i.ytimg.com/vi/GhfJY7kJcJs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC_UevRZ7bZTt-rrYosM1wCJlfLbg', englishWord: 'Borani Badenjan (Eggplant Dish)', persianWord: 'بورانی بادنجان', category: 'غذاها' },
    { id: nanoid(), image: 'https://i.ytimg.com/vi/AxjMHPbmy9M/hqdefault.jpg', englishWord: 'Jalebi', persianWord: 'جَلبی', category: 'غذاها' },
    { id: nanoid(), image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRccnH7OQdVddji6-fseBBoSzscFvspK27cPw&s', englishWord: 'Baklava', persianWord: 'باقلَوا', category: 'غذاها' },
    { id: nanoid(), image: 'https://i.ytimg.com/vi/DV4MykGa9cA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHxUDr78_LxCWLg5U3neEOHv6i3A', englishWord: 'Firnee (Milk Pudding)', persianWord: 'فِرنی', category: 'غذاها' },
    { id: nanoid(), image: 'https://cdn.yjc.ir/files/fa/news/1400/11/8/15550035_360.jpg', englishWord: 'Sheer Pira', persianWord: 'شیرپَره', category: 'غذاها' },
    { id: nanoid(), image: 'https://i.ytimg.com/vi/ttWQn8-StKQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8_zEuU_7vEKOkZ3sFfme-1oQWog', englishWord: 'Haft Mewa (Seven Fruits)', persianWord: 'هَفت‌میوه', category: 'غذاها' },
    { id: nanoid(), image: 'https://kalleh.com/book/wp-content/uploads/sites/2/2025/01/recepie-of-making-nazok-gooshe-fil.jpg', englishWord: 'Gosh-e Feel (Elephant Ear Pastry)', persianWord: 'گوش‌فیِل', category: 'غذاها' },

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
    'اعضای بدن': '#FF6961',
    'غذاها': " #fd7b57ff",
    // 'میوه‌ها': '#577bd0ff',
    // 'حیوانات': '#77DD77',
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
