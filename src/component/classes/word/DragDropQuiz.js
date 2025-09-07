import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { questions1, questions2, questions3 } from './dataWord';

const questions1 = [
      {
        sentence: 'مَن هَر روز به ___ می‌رَوَم.',
        correctWord: 'مدرسه',
        options: ['مدرسه', 'سیب', 'باران'],
        image: 'https://i.pinimg.com/736x/28/07/eb/2807eb52c3035c3caa48347167545cd4.jpg'
      },
      {
        sentence: 'او یِک ___ در دست دارَد.',
        correctWord: 'کتاب',
        options: ['کتاب', 'دویدن', 'زنگ'],
        image: 'https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200'
      },
      {
        sentence: 'مَن نان تازه ___ دارَم.',
        correctWord: 'دوست',
        options: ['بَستَنی', 'دوست', 'سَرما','نیما'],
        image: 'https://borna.news/files/fa/news/1399/3/23/1788123_900.jpg'
      },
      {
        sentence: 'مادَر کَمی ___ به غَذا زَد.',
        correctWord: 'نَمَک',
        options: ['نَمَک', 'میوه', 'بُشقاب'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Table_salt_with_salt_shaker_V1.jpg'
      },
      {
        sentence: ' ___ دَر دَریا زِندِگی می کُنَد.',
        correctWord: 'نَهَنگ',
        options: ['جوجه', 'شیر', 'گَوَزن','نَهَنگ'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/1200px-Killerwhales_jumping.jpg'
      },
      {
        sentence: 'پِدَرَم بَرایَم یِک ___ خَرید.',
        correctWord: 'کُلاه',
        options: ['هَوا', 'آسمان', 'مادَر','کُلاه'],
        image: 'https://sainc2.myshopify.com/cdn/shop/products/beach-hat-red-front-ss20-2500px_6a3730db-77cc-44d6-b437-b027b32bb044.jpg?v=1718389492'
      },
      {
        sentence: ' ___نوک کوچَکی دارَد.',
        correctWord: 'پَرَندِه',
        options: ['پَرَندِه', 'روباه', 'ماهی','تِمساح'],
        image: 'https://statics.basalam.com/public-7/users/kRZKpN/2110/wq4ytYJSJBtoG93qZQpTpO390nrWk4rbf79ftOGJ.jpg'
      },
      {
        sentence: 'مَن با ___ لِباس دوختَم.',
        correctWord: 'نَخ',
        options: [ 'چوب','نَخ', 'لیوان','مِداد'],
        image: 'https://www.lavanbaft.com/wp-content/uploads/2022/02/nakh.jpg'
      },
      {
        sentence: 'زَنبور ___ زَد.',
        correctWord: 'نیش',
        options: [ 'گِریه', 'کُتَک','عَسَل','نیش'],
        image: 'https://www.digikala.com/mag/wp-content/uploads/2023/05/01-Bee-Sting-Treatment-1.jpg'
      },
      {
        sentence: '___ بالای دِرَخت رَفت.',
        correctWord: 'گُربه',
        options: ['کَفش', 'گُربه', 'گُل','موبایل'],
        image: 'https://cdn.fararu.com/thumbnail/OTliY2YXgLxy/fCohl8MdDeqLuUiNxwx9X4gYrgKL9XBZBWdbZWUJQbHweEbOeibJ3lKhwCXPcymMenByfMSSpsbh46ioIqLjxbHMRm21_h7HQpcPeRTlTup9Fg2BIMEOf3jclM_4J6zeNSYMgfXaohvvVGVyDx5LlALVa--jwrBG/OTliY2YXgLxy.jpg'
      },
    ]
const questions2 = [
    // masooma
      {
        sentence: 'او ___ وَ اُفتاد.',
        correctWord: 'لیز خورد',
        options: ['لیز خورد', 'غَذاخورد', 'کِتاب خواند'],
        image: '/images/assetWord/actionVerb/12-31-31-verb.png'
      },
      {
        sentence: 'نَگذار بَستَنی اَت ___',
        correctWord: 'آب شَوَد(ذوب شَوَد)',
        options: ['پُخته شَوَد', 'آب شَوَد(ذوب شَوَد)', 'بُزُرگ شَوَد '],
        image: '/images/assetWord/actionVerb/12-31-32-verb.png'
      },
      {
        sentence: 'مِیمون موز را ___ وَ خورد.',
        correctWord: 'پوست کَند',
        options: ['اَنداخت','پوست کَند' ,'بازی کَرد'],
        image: '/images/assetWord/actionVerb/12-31-33-verb.png'
      },
      {
        sentence: 'دانِش آموزان ___ یِک مادِه شیمیایی جَدید هَستَند.',
        correctWord: 'دَر حالِ آزمایِش',
        options: ['دَر حالِ آزمایِش', 'در حال تماشا کردن', ' در حال خوابیدن'],
        image: '/images/assetWord/actionVerb/12-31-34-verb.png'
      },
      {
        sentence: 'او اَنگُشتانَش را ___.',
        correctWord: 'می شُمارَد',
        options: ['گِریه می کُنَد', 'راه می رَوَد', 'می شُمارَد'],
        image: '/images/assetWord/actionVerb/12-31-35-verb.png'
      },
      {
        sentence: 'آچار خود را بَردارید وَ مُهرِه را ___ .',
        correctWord: 'سِفت کُنید',
        options: ['سِفت کُنید', 'بیاندازید', 'خَراب کُنید'],
        image: '/images/assetWord/actionVerb/12-31-36-verb.png'
      },
      {
        sentence: 'لیلی با صِدایِ بُلَند شَروع به ___ کَرد.',
        correctWord: 'خُروپُف کَردَن',
        options: ['جیغ زَدَن ', 'بالا پَریدَن', 'خُروپُف کَردَن'],
        image: '/images/assetWord/actionVerb/12-31-37-verb.png'
      },
      {
        sentence: 'پِسر دیروز با قایِق روی دَریاچه ___.',
        correctWord: 'عُبور کَرد',
        options: ['زِندِگی کَرد', 'عُبور کَرد', 'کار کَرد'],
        image: '/images/assetWord/actionVerb/12-31-38-verb.png'
      },
      {
        sentence: 'میشه نَتایِج آزمون اِنگِلیسی خود را به مَن ___.',
        correctWord: 'نِشان دَهید',
        options: ['نِشان دَهید', 'بپوشانی', 'بِرَوید'],
        image: '/images/assetWord/actionVerb/12-31-39-verb.png'
      },
      {
        sentence: 'اَنگُشتت را به سَمتِ مَن ___.',
        correctWord: 'اِشارِه نَکن',
        options: ['نَدِه', 'نَخور', 'اِشارِه نَکن'],
        image: '/images/assetWord/actionVerb/12-31-40-verb.png'
      },
      {
        sentence: 'حُضار پَس اَز سَخَنرانی او با صِدایِ بُلَند ___.',
        correctWord: 'دَست زَدَند',
        options: ['دَست زَدَند', 'خوابیدَند', 'کار کَردَند'],
        image: '/images/assetWord/actionVerb/12-31-42-verb.png'
      },
      {
        sentence: 'او دَستکِش را دَر آوَرد تا با دوستَش ___.',
        correctWord: 'دَست بِدَهَد',
        options: ['راه بِرَوَد', 'دَست بِدَهَد', 'پَرواز کُنَد'],
        image: '/images/assetWord/actionVerb/12-31-43-verb.png'
      },
      {
        sentence: 'او دَر حال ___ توپ اَست.',
        correctWord: 'گِرِفتَن',
        options: ['گِرِفتَن', 'زَدَن', 'نِوِشتَن'],
        image: '/images/assetWord/actionVerb/12-31-44-verb.png'
      },
    
]

const questions3 = [
  {
    sentence: 'او جَعبِه را از روی ___ بُلَند کَرد.',
    correctWord: 'میز',
    options: [ 'کِتاب', 'کِیف','میز',],
    image: '/images/assetWord/actionVerb/12-31-45-verb.png'
  },
  {
    sentence: 'من به دانِش‌آموزانَم ___ آموزِش می‌دَهَم.',
    correctWord: 'انگلیسی',
    options: [ 'ریاضی','انگلیسی', 'نقاشی'],
    image: '/images/assetWord/actionVerb/12-31-46-verb.png'
  },
  {
    sentence: 'وَقتی به ایستگاه ___ رِسیدَم دوباره با شُما تَماس خواهم گِرِفت.',
    correctWord: 'اتوبوس',
    options: [ 'قَطار','اتوبوس', 'مَدرِسِه'],
    image: '/images/assetWord/actionVerb/12-31-47-verb.png'
  },
  {
    sentence: 'او به ___ می‌رَوَد.',
    correctWord: 'مدرسه',
    options: ['مدرسه', 'بیمارستان', 'مغازه'],
    image: '/images/assetWord/actionVerb/12-31-48-verb.png'
  },
  {
    sentence: 'هَر جا می‌رَفتَم کِتاب را با خودَم ___ می‌کَردَم.',
    correctWord: 'حمل',
    options: ['پنهان', 'تمیز','حمل', ],
    image: '/images/assetWord/actionVerb/12-31-49-verb.png'
  },
  {
    sentence: 'او در را ___ کرد.',
    correctWord: 'قُفل',
    options: [ 'باز', 'رَنگ','قُفل',],
    image: '/images/assetWord/actionVerb/12-31-50-verb.png'
  },
  {
    sentence: 'مَن می‌خواهَم بَرایِ جَشن تَوَلُد دوستَم ___ بِپَزَم.',
    correctWord: 'کِیک',
    options: [ 'کَباب', 'کِیک','بِرِنج'],
    image: '/images/assetWord/actionVerb/12-31-51-verb.png'
  },
  {
    sentence: 'او رویِ ___ شِناوَر بود.',
    correctWord: 'پُشتَش',
    options: ['پُشتَش', 'سینه‌اش', 'پایش'],
    image: '/images/assetWord/actionVerb/12-31-52-verb.png'
  },
  {
    sentence: 'جوکِر هَمزَمان با پَنج ___ بازی کَرد.',
    correctWord: 'توپ',
    options: ['توپ', 'سیب', 'جَعبِه'],
    image: '/images/assetWord/actionVerb/12-31-53-verb.png'
  },
  {
    sentence: 'سَگ ___ را گاز گِرِفت.',
    correctWord: 'پایَش',
    options: ['دَستَش', 'گوشَش','پایَش', ],
    image: '/images/assetWord/actionVerb/12-31-54-verb.png'
  },
  {
    sentence: 'من یک ___ را به خانه پرتاب کردم.',
    correctWord: 'توپ',
    options: [ 'سیب',,'توپ', 'کتاب'],
    image: '/images/assetWord/actionVerb/12-31-55-verb.png'
  },
  {
    sentence: 'او ___ را تا می‌کند.',
    correctWord: 'پتو',
    options: ['پتو', 'پیراهن', 'کاغذ'],
    image: '/images/assetWord/actionVerb/12-31-56-verb.png'
  },
  {
    sentence: 'او آرد را با دو عدد ___ مخلوط کرد.',
    correctWord: 'تخم‌مرغ',
    options: ['تخم‌مرغ', 'سیب‌زمینی', 'پیاز'],
    image: '/images/assetWord/actionVerb/12-31-57-verb.png'
  },
  {
    sentence: 'او در حال حفر یک ___ عمیق است.',
    correctWord: 'چاله',
    options: [ 'کمد','چاله', 'چتر'],
    image: '/images/assetWord/actionVerb/12-31-58-verb.png'
  },
  {
    sentence: 'من هفته‌ای دوبار کف ___ را تمیز می‌کنم.',
    correctWord: 'آشپزخانه',
    options: [ 'اتاق', 'حیاط','آشپزخانه',],
    image: '/images/assetWord/actionVerb/12-31-59-verb.png'
  },
  {
    sentence: 'ما می‌خواهیم خانه خود را ___ .',
    correctWord: 'بسازیم',
    options: [ 'ترک', 'رها','بسازیم',],
    image: '/images/assetWord/actionVerb/12-31-60-verb.png'
  },
  {
    sentence: 'او برای من تصویری از ___ کشید.',
    correctWord: 'دایناسور',
    options: ['دایناسور', 'ماشین', 'ماهی'],
    image: '/images/assetWord/actionVerb/12-31-61-verb.png'
  },
  {
    sentence: 'من قبل از خروج از خانه موهایم را ___ کردم.',
    correctWord: 'شانه',
    options: ['شانه', 'رنگ', 'شستشو'],
    image: '/images/assetWord/actionVerb/12-31-62-verb.png'
  },
  {
    sentence: 'ما در ___ اسکیت می‌کنیم.',
    correctWord: 'پارک',
    options: [ 'خیابان', 'پارک','مدرسه'],
    image: '/images/assetWord/actionVerb/12-31-63-verb.png'
  },
  {
    sentence: 'او با ظرافت روی ___ در پارک تاب خورد.',
    correctWord: 'تاب',
    options: [ 'در', 'تخته','تاب'],
    image: '/images/assetWord/actionVerb/12-31-64-verb.png'
  }
];

const DragDropQuiz = () => {
  const [questions,setQuestions] = useState(questions1)
  const[idModal,setIdModal]=useState('question1')
  const [currentIndex, setCurrentIndex] = useState(0);
  const [droppedWord, setDroppedWord] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentQuestion = questions[currentIndex];

  const onDrop = (e) => {
    e.preventDefault();
    const word = e.dataTransfer.getData('text/plain');
    setDroppedWord(word);
    setIsCorrect(null);
  };

  const onDragStart = (e, word) => {
    e.dataTransfer.setData('text/plain', word); 
  };

  const checkAnswer = () => {
    setIsCorrect(droppedWord === currentQuestion.correctWord);
  };

  const nextQuestion = () => {
    setCurrentIndex(prev => prev + 1);
    setDroppedWord(null);
    setIsCorrect(null);
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setDroppedWord(null);
    setIsCorrect(null);
  };

  const resetCurrentQuestion = () => {
    setDroppedWord(null);
    setIsCorrect(null);
  };

  const getSentenceWithBlank = () => {
    const parts = currentQuestion.sentence.split('___');
    return (
      <>
        {parts[0]}
        <span
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          className="d-inline-block border border-primary rounded px-3 py-1 mx-2"
          style={{ minWidth: '60px', minHeight: '30px', backgroundColor: '#f0f8ff' }}
        >
          {droppedWord || '___'}
        </span>
        {parts[1]}
      </>
    );
  };
  const stylebg = {
    backgroundColor:'rgba(232, 231, 231, 0.99)'
  }
const questionsqq = (e, i) => {
  setQuestions(e);
  setIdModal(i);
  setCurrentIndex(0);     // ریست کردن به سوال اول
  setDroppedWord(null);
  setIsCorrect(null);
};

const prevQuestion = () => {
  if (currentIndex > 0) {
    setCurrentIndex(prev => prev - 1);
    setDroppedWord(null);
    setIsCorrect(null);
  }
};


  return (
        <div className="test  " dir="rtl" style={{fontFamily:'Vazir,sans-serif'}}>

    <div className="container border border-danger my-5 p-4 border rounded shadow bg-light text-end direction-rtl" style={{ fontFamily: 'Vazir' }}>
      {/*Start modal for titles */}
      <div className="border border-success p-3">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={'#'+idModal}>
          فهرست
        </button>

        <div class="modal fade" id={idModal} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <h1 class="modal-title fs-5" id="exampleModalLabel" > فهرست مطالب  </h1>
              </div>
              <div className="modal-body">
                <div className='d-flex flex-wrap'>
                  <button className='btn  shadow-sm border  mx-2' style={stylebg} onClick={()=>questionsqq(questions1,'question1')}>مرحله 1</button>
                  <button className='btn shadow-sm border  mx-2' style={stylebg} onClick={()=>questionsqq(questions2,'question2')}>مرحله 2</button>
                  <button className='btn shadow-sm border mx-2' style={stylebg} onClick={()=>questionsqq(questions3,'question3')}>مرحله 3</button>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End modal for titles */}

      {/* *** */}
      <div className="text-center my-3">
        <span className="badge bg-info fs-6">
          سوال {currentIndex + 1} از {questions.length}
        </span>
      </div>

      
      <div className="d-flex justify-content-between align-items-center m-5" >
        <h4>جمله را کامل کن:</h4>
        <button className="btn btn-outline-danger btn-sm" onClick={resetGame}>
          شروع دوباره 🔁
        </button>
      </div>

      <div className="row align-items-center mb-4">
        {currentQuestion.image ? (
          <>
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <img
                src={currentQuestion.image}
                alt="تصویر مربوط به سوال"
                className="img-fluid rounded"
                style={{ maxHeight: '200px' }}
              />
            </div>
            <div className="col-md-8">
              <p className="fs-2 ">{getSentenceWithBlank()}</p>
              <div className="mt-4 mb-3 ">
        {currentQuestion.options.map((word, idx) => (
          <span
            key={idx}
            draggable
            onDragStart={(e) => onDragStart(e, word)}
            className="badge bg-secondary mx-2 p-2 fs-5"
            style={{ cursor: 'grab' }}
          >
            {word}
          </span>
        ))}
      </div>
            </div>
          </>
        ) : (
          <div className="col-12">
            <p className="fs-5">{getSentenceWithBlank()}</p>
            <div className="mt-4 mb-3 ">
        {currentQuestion.options.map((word, idx) => (
          <span
            key={idx}
            draggable
            onDragStart={(e) => onDragStart(e, word)}
            className="badge bg-secondary mx-2 p-2 fs-6"
            style={{ cursor: 'grab' }}
          >
            {word}
          </span>
        ))}
      </div>
          </div>
        )}
      </div>

      <div className="d-flex gap-2 mt-5 flex-wrap flex-row-reverse mx-4">
  <button className="btn btn-success" onClick={checkAnswer} disabled={!droppedWord}>
    بررسی پاسخ ✅
  </button>

  <button className="btn btn-warning" onClick={resetCurrentQuestion}>
    پاک کردن پاسخ 🔄
  </button>

  {/* {currentIndex > 0 && (
    <button className="btn btn-outline-secondary" onClick={prevQuestion}>
      سوال قبلی ⬅️
    </button>
  )} */}

  {isCorrect && currentIndex < questions.length - 1 && (
    <button className="btn btn-primary" onClick={nextQuestion}>
      سوال بعدی ➡️
    </button>
  )}
</div>

      {isCorrect !== null && (
        <div className="mt-3">
          {isCorrect ? (
            <div className="alert alert-success">آفرین! پاسخ درست است. 🎉</div>
          ) : (
            <div className="alert alert-danger">پاسخ اشتباه است. دوباره امتحان کن. ❌</div>
          )}
        </div>
      )}

      {isCorrect && currentIndex === questions.length - 1 && (
        <div className="alert alert-info mt-4">👏 تمام سوال‌ها تمام شد!</div>
      )}
      <br /><br />
      <div className="text-muted">DragDropQuiz</div>
    </div>
    </div>
  );
};

export default DragDropQuiz;
