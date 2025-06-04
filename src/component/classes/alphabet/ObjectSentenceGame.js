import React, { useEffect, useState } from 'react';

const questions = [
  {
    image: 'https://thumbs.dreamstime.com/b/pencil-character-facial-expressions-19965263.jpg',
    correct: '.این یِک مِداد اَست',
    options: ['.این یِک کِتاب اَست', '.این یِک صَندَلی اَست', '.این یِک مِداد اَست'],
  },
  {
    image: 'https://i.graphicmama.com/uploads/2019/3/5c9256275ee59-Cute%20Book%20Cartoon%20Vector%20Character.png',
    correct: '.مَن کِتاب دارَم',
    options: ['.مَن مِداد دارَم', '.مَن کِتاب دارَم', '.او صَندَلی دارَد'],
  },
  {
    image: 'https://s3.envato.com/files/295931587/preview1.jpg',
    correct: '.او کیف دارَد',
    options: ['.او دَفتَر دارَد', '.او کیف دارَد', '.او صَندَلی دارَد'],
  },
  {
    image: 'https://www.shutterstock.com/image-vector/illustration-timer-clock-design-hand-260nw-2328107837.jpg',
    correct: 'حالا نوبَتِ توست.',
    options: ['حالا نوبَتِ توست.','حالا نوبَتِ مَن اَست.','حالا نوبَت آنها اَست.',],
  },
  {
    image: 'https://img.freepik.com/premium-vector/school-age-boy-looking-moon-flat-style-vector-illustration_1332465-15978.jpg',
    correct: 'بَچِه بِه ماه نِگاه کَرد',
    options: ['بَچِه بِه جَنگَل نِگاه کَرد','بَچه بِه دَریا نِگاه کَرد','بَچِه بِه ماه نِگاه کَرد',],
  },
  {
    image: 'https://static.vecteezy.com/system/resources/previews/030/688/870/non_2x/juice-2d-cartoon-vector-illustration-on-white-background-h-free-photo.jpg',
    correct: 'مَن آبمیوِه دوست دارَم',
    options: ['مَن پیتزا دوست دارَم','مَن آبمیوِه دوست دارَم','مَن نانِ تازِه دوست دارَم',],
  },
  {
    image: 'https://previews.123rf.com/images/microone/microone2208/microone220800180/190481157-students-in-classroom-student-behaviour-pupils-sitting-at-desks-on-lesson-school-college-children.jpg',
    correct: 'کِلاس شِش نَفَر شاگِرد دارَد',
    options: ['کِلاس شِش نَفَر شاگِرد دارَد','ما دَر وَرزِشگاه وَرزِش می کُنیم','مادَر در فُروشگاه است',],
  },
  {
    image: 'https://thumbs.dreamstime.com/b/cartoon-shoes-icon-19180433.jpg',
    correct: 'مَن کَفشِ نو خَریدَم',
    options: ['مَن یِک آیپَد خَریدَم','مَن کَفشِ نو خَریدَم','مَن چَند دَفتَر خَریدَم',],
  },
  {
    image: 'https://thumbs.dreamstime.com/b/baby-crying-next-to-worried-mother-vector-illustration-newborn-tears-desperate-new-mom-trying-calm-him-down-147979328.jpg',
    correct: 'مادَر نِگُران بَرادَرم بود',
    options: ['مادر با بَرادَر خندید','مادَر برای بَرادَرم خوراکی خَرید','مادَر نِگُران بَرادَرم بود',],
  },
  {
    image: 'https://www.shutterstock.com/image-vector/vector-illustration-happy-children-playing-600nw-1099688924.jpg',
    correct: 'خانِه ما نَزدیک پارک اَست',
    options: ['خانِه ما نَزدیک پارک اَست','خانِه ما اَز کِتابخانِه دور اَست','خانِه ما به مَکتَب نَزدیک اَست',],
  },
  {
    image: 'https://ik.imagekit.io/storybird/images/d553bf69-ddfe-4d2c-b683-e7ddde9acced/1_79727818.webp?tr=q-80',
    correct: 'آتَش نِشان کودَک را نِجات داد',
    options: ['رانَنده کودَکان را به مَکتَب بُرد','دُکتر کودَک را جَراحی کَرد','آتَش نِشان کودَک را نِجات داد',],
  },
  {
    image: 'https://t3.ftcdn.net/jpg/13/23/10/74/360_F_1323107457_M22cjnt1yOTcDkMgzONR7Te37HyRdTGg.jpg',
    correct: 'این اَنگُشتَر اَز طَلا اَست',
    options: ['این اَنگُشتَر اَز طَلا اَست','این گوشوارِه اَست','این یِک اَلَنگو اَست',],
  },
  {
    image: 'https://icon2.cleanpng.com/ci3/uvn/sbz/ad84tyi8n.webp',
    correct: 'او اَز نَردِبان بالا رَفت',
    options: ['اَمین اَز دِرَخت بالا رَفت','مَن از کوه بالا رَفتَم','او اَز نَردِبان بالا رَفت',],
  },
];

const ObjectSentenceGame = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
    const isCorrect = option === questions[current].correct;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setSelected('');
      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
      } else {
        setIsFinished(true);
      }
    }, 1000);
  };

  const resetGame = () => {
    setCurrent(0);
    setScore(0);
    setSelected('');
    setIsFinished(false);
  };

  const progress = (current / questions.length) * 100;

  return (
    <div>
      <div className="container mt-5 text-center border border-2 border-info py-5">
        <h2 className="mb-3">🏆 جمله‌سازی با تَصویر</h2>

        {/* حالت پایان بازی */}
        {isFinished ? (
          <>
            <h3 className="text-success mb-4">🎉 بازی تمام شد!</h3>
            <h4 className="mb-4">امتیاز نهایی: {score} از {questions.length}</h4>
            <button className="btn btn-warning btn-lg" onClick={resetGame}>
              🔁 شروع دوباره
            </button>
          </>
        ) : (
          <>
            {/* امتیاز */}
            <div className="mb-3">
              <strong>امتیاز: {score}</strong> از {questions.length}
            </div>

            {/* نوار پیشرفت */}
            <div className="progress mb-4" style={{ height: '20px' }}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {Math.round(progress)}%
              </div>
            </div>

            {/* تصویر */}
            <div className='container' style={{ width: '600px', height: '400px' }}>
              <img
                src={questions[current].image}
                alt="object"
                className="img-thumbnail mb-3"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            {/* گزینه‌ها */}
            <div className="row justify-content-center">
              {questions[current].options.map((opt, index) => (
                <button
                  key={index}
                  className={`btn h1 m-2 col-10 col-md-4 ${
                    selected
                      ? opt === questions[current].correct
                        ? 'btn-success'
                        : opt === selected
                        ? 'btn-danger'
                        : 'btn-secondary'
                      : 'btn-outline-primary'
                  }`}
                  onClick={() => handleAnswer(opt)}
                  disabled={!!selected}
                >
                  <h3>{opt}</h3>
                </button>
              ))}
            </div>

            {/* دکمه ریست بازی */}
            <div className="mt-4">
              <button className="btn btn-warning btn-lg" onClick={resetGame}>
                🔄 ریست بازی
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ObjectSentenceGame;

