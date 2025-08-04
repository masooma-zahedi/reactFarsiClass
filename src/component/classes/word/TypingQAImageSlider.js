import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ داده‌های دسته‌بندی‌شده
const categories = {
    "احساسات":[
        {
            "image": "https://png.pngtree.com/png-clipart/20250425/original/pngtree-laughing-happy-cartoon-boy-with-expressive-joyful-face-for-fun-illustration-png-image_20810123.png",
            "question": "او چِه اِحساسی دارَد؟",
            "answer": "خُوشحال"
        },
        {
            "image": "https://img.freepik.com/premium-vector/sad-little-girl-sits-floor-has-sad-face_679557-2802.jpg?semt=ais_hybrid&w=740&q=80",
            "question": "او چِه اِحساسی دارَد؟",
            "answer": "ناراحت"
        },
        {
            "image": "https://www.shutterstock.com/image-vector/angry-boy-child-red-shirt-600nw-1234164919.jpg",
            "question": "او چِه اِحساسی دارَد؟",
            "answer": "عَصَبانی"
        },
        {
            "image": "https://t3.ftcdn.net/jpg/01/13/59/16/360_F_113591652_jEU485fiyHhYkriuVzH2iBluBzop1QMb.jpg",
            "question": "او چِه اِحساسی دارَد؟",
            "answer": "تَرسیده"
        },
        {
            "image": "https://media.istockphoto.com/id/960695820/vector/surprised-boy.jpg?s=612x612&w=0&k=20&c=oj1EeFtZA0p6fIUxQVpW0AnWJ6T2UsGbEhS_sB_gmCQ=",
            "question": "او چِه اِحساسی دارَد؟",
            "answer": "مُتَعَجِب"
        },
        {
            "image": "https://c8.alamy.com/comp/2R80CGP/cartoon-of-sleepy-little-boy-yawning-he-was-a-teddy-isolated-2R80CGP.jpg",
            "question": "او چِه اِحساسی دارَد؟",
            "answer": "خواب‌آلود"
        },
        {
            "image": "https://thumbs.dreamstime.com/b/young-shy-woman-embarrassed-expression-hands-face-shy-woman-embarrassed-132165692.jpg",
            "question": "او چِه اِحساسی دارَد؟",
            "answer": "خِجالَتی"
        },
        {
            "image": "https://www.clipartmax.com/png/full/92-924898_cartoon-royalty-free-child-illustration-excited-child-cartoon.png",
            "question": "او چِه اِحساسی دارَد؟",
            "answer": "هَیجان‌زَده"
        },
        {
            "image": "https://www.shutterstock.com/image-vector/confused-child-shrugging-shoulders-isolated-600nw-285543569.jpg",
            "question": "او چِه اِحساسی دارَد؟",
            "answer": "گیج"
        },
        {
            "image": "https://previews.123rf.com/images/rubynurbaidi/rubynurbaidi2205/rubynurbaidi220500008/185645887-cartoon-kids-laughing.jpg",
            "question": "او چِه اِحساسی دارَد؟",
            "answer": "خَندان"
        },
        {
            "image": "https://media.istockphoto.com/id/511660608/vector/illustration-of-a-sad-child-helpless-bullying.jpg?s=612x612&w=0&k=20&c=lIonbBVE4bs8lina3bLP3QSGPODYF2VgIEc5L2pnAgY=",
            "question": "او چِه اِحساسی دارَد؟",
            "answer": "گِریان"
        },
        {
            "image": "https://img.freepik.com/premium-vector/joyful-child-proudly-displays-trophy-with-big-smile-celebrating-recent-achievement-one-child-won-award_538213-148739.jpg",
            "question": "او چِه اِحساسی دارَد؟",
            "answer": "اِفتخار"
        },
        {
            "image": "https://www.shutterstock.com/image-vector/illustration-bored-boy-his-chin-600nw-149142053.jpg",
            "question": "او چِه اِحساسی دارَد؟",
            "answer": "بی‌حُوصِله"
        },
        {
            "image": "https://png.pngtree.com/png-vector/20241225/ourmid/pngtree-worried-boy-cartoon-clipart-png-image_14854025.png",
            "question": "او چِه اِحساسی دارَد؟",
            "answer": "نِگَران"
        }
        ],
    "فعالیت در خانه":[
        {
            "image": "https://i.pinimg.com/736x/08/13/bf/0813bfa3995932617fe84606ab8d0422.jpg",
            "question": "این کودک چه کاری انجام می‌دهد؟",
            "answer": "تلویزیون تماشا می‌کند"
        },
        {
            "image": "https://media.craiyon.com/2025-04-27/92jmpReWRma70diJzImKVg.webp",
            "question": "این کودک چه کاری انجام می‌دهد؟",
            "answer": "دوچرخه‌سواری"
        },
        {
            "image": "https://www.shutterstock.com/image-vector/illustration-featuring-cute-little-boy-600nw-674369587.jpg",
            "question": "این کودک چه کاری انجام می‌دهد؟",
            "answer": "نقاشی"
        },
        {
            "image": "https://us.123rf.com/450wm/iimages/iimages1207/iimages120700325/14411808-illustration-of-boys-playing-football-on-a-play-ground.jpg?ver=6",
            "question": "بچه‌ها چه کار می‌کنند؟",
            "answer": "فوتبال بازی می‌کنند"
        },
        {
            "image": "https://www.shutterstock.com/image-vector/mother-kid-girl-preparing-healthy-260nw-1034522320.jpg",
            "question": "کودک چه کاری انجام می‌دهد؟",
            "answer": "کمک در آشپزی"
        },
        {
            "image": "https://i.etsystatic.com/41972288/r/il/ce82e4/5782884002/il_570xN.5782884002_bjkn.jpg",
            "question": "بچه‌ها کجا هستند؟",
            "answer": "در زمین بازی"
        },
        {
            "image": "https://img.freepik.com/premium-vector/boy-spends-his-leisure-time-reading-book-home-flat-design-illustration_207579-1361.jpg?w=360",
            "question": "کودک چه کاری انجام می‌دهد؟",
            "answer": "کتاب می‌خواند"
        },
        {
            "image": "https://png.pngtree.com/png-clipart/20250118/original/pngtree-happy-family-enjoying-a-delicious-meal-together-png-image_20001789.png",
            "question": "خانواده چه کار می‌کنند؟",
            "answer": "شام می‌خورند"
        },
        {
            "image": "https://media.istockphoto.com/id/1696588693/vector/cute-little-kids-playing-with-toys-in-preschool-classroom.jpg?s=612x612&w=0&k=20&c=Xm3xYsLhuil6-ci6XLAKTCYPB_hkecOJEbinv7ewVpk=",
            "question": "بچه‌ها چه کار می‌کنند؟",
            "answer": "بازی با اسباب‌بازی"
        },
        {
            "image": "https://png.pngtree.com/png-clipart/20250201/original/pngtree-discover-the-joy-of-gardening-a-fun-adventure-for-kids-png-image_20356328.png",
            "question": "کودک چه کاری انجام می‌دهد؟",
            "answer": "گل می‌کارد"
        },
        {
            "image": "https://thumbs.dreamstime.com/b/cartoon-children-jumping-swimming-pool-cute-happy-cartoon-children-jumping-swimming-pool-161463234.jpg",
            "question": "بچه‌ها چه کار می‌کنند؟",
            "answer": "شنا می‌کنند"
        },
        {
            "image": "https://thumbs.dreamstime.com/b/boy-playing-game-illustrator-design-eps-47878915.jpg",
            "question": "پسر چه کاری انجام می‌دهد؟",
            "answer": "بازی رایانه‌ای"
        },
        {
            "image": "https://www.shutterstock.com/image-vector/child-jumping-on-trampoline-park-260nw-49592125.jpg",
            "question": "کودک چه کاری انجام می‌دهد؟",
            "answer": "می‌پرد"
        },
        {
            "image": "https://static.vecteezy.com/system/resources/thumbnails/036/148/378/small_2x/girl-watering-a-plant-illustration-vector.jpg",
            "question": "کودک چه کاری انجام می‌دهد؟",
            "answer": "به گل‌ها آب می‌دهد"
        },
        {
            "image": "https://media.gettyimages.com/id/79345769/vector/children-cleaning-room-painting-illustration-illustrative-technique-front-view-side-view.jpg?s=1024x1024&w=gi&k=20&c=kJwDg80tg90wQ5bU7jEKeFGbsDrHC_V3WSgS2sl1DZI=",
            "question": "بچه‌ها چه کار می‌کنند؟",
            "answer": "اتاقشان را تمیز می‌کنند"
        }
        ],

    "صبح هنگام": [
    {
      image: "https://png.pngtree.com/png-clipart/20250119/original/pngtree-happy-child-sits-up-on-bed-to-start-the-day-png-image_19692945.png",
      question: "صبح بخیر! خوبی؟",
      answer: "صبح بخیر! من خوبم، ممنون."
    },
    {
      image: "https://previews.123rf.com/images/mickallnice/mickallnice1706/mickallnice170600010/79736943-kid-wake-up-in-the-morning-vector-and-illustration.jpg",
      question: "کی بیدار شدی؟",
      answer: "من ساعت هفت بیدار شدم."
    },
    {
      image: "https://www.shutterstock.com/shutterstock/photos/1151499506/display_1500/stock-vector-vector-illustration-kid-eating-breakfast-cartoon-concept-1151499506.jpg",
      question: "چی صبحانه خوردی؟",
      answer: "من نان و مربا خوردم."
    },
    {
      image: "https://c8.alamy.com/comp/2EMDHWB/vector-illustration-of-cute-boy-brushing-teeth-2EMDHWB.jpg",
      question: "مسواک زدی؟",
      answer: "بله، دندان‌هایم را مسواک زدم."
    },
    {
      image: "https://img.freepik.com/premium-vector/happy-cute-little-kid-girl-preparing-uniform-school_97632-2212.jpg",
      question: "آماده‌ای برای مدرسه؟",
      answer: "بله، کیفم را آماده کردم."
    }
  ],
    "در مدرسه": [
    {
      image: "https://www.shutterstock.com/shutterstock/photos/682866226/display_1500/stock-vector-students-in-front-of-school-cartoon-vector-illustration-682866226.jpg",
      question: "کجا هستی؟",
      answer: "من در مدرسه هستم."
    },
    {
      image: "https://us.123rf.com/450wm/yusufdemirci/yusufdemirci2307/yusufdemirci230700008/209891892-kids-and-teacher-at-kindergarten.jpg?ver=6",
      question: "در کدام کلاس هستی؟",
      answer: "من در کلاس اول هستم."
    },
    {
      image: "https://img.freepik.com/free-vector/teacher-teaching-students-classroom-scene_1308-67531.jpg",
      question: "معلم تو کیست؟",
      answer: "خانم .... معلم من است."
    },
    {
      image: "https://classroomclipart.com/image/static7/preview2/three-school-friends-in-the-classroom-cartoon-style-60049.jpg",
      question: "دوستت در مدرسه کیست؟",
      answer: "دوست من .... است."
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/001/436/916/non_2x/student-at-school-playground-free-vector.jpg",
      question: "در زنگ تفریح چه می‌کنی؟",
      answer: "با دوستانم بازی می‌کنم."
    },
    {
      image: "https://thumbs.dreamstime.com/b/cartoon-school-children-book-isolated-illustration-60524736.jpg",
      question: "چه کتابی دوست داری بخونی؟",
      answer: "من کتاب ... دوست دارم بخونم."
    },
    {
      image: "https://thumbs.dreamstime.com/b/schoolboy-interactive-whiteboard-elementary-school-student-writing-39631129.jpg",
      question: "روی تخته چه نوشته؟",
      answer: "روی تخته .... نوشته است."
    },
    {
      image: "https://media.istockphoto.com/id/578573356/vector/child-writing-big-pencil.jpg?s=612x612&w=0&k=20&c=dyolE5RMA6f9n-CW5VmogJ2LFwH52sy0mTJ1j8aYJjY=",
      question: "با چی می‌نویسی؟",
      answer: "با مداد می‌نویسم."
    },
    {
      image: "https://static7.depositphotos.com/1007989/750/i/950/depositphotos_7507486-stock-illustration-kids-drawing.jpg",
      question: "در کلاس هنر چه کار می‌کنی؟",
      answer: "من نقاشی می‌کشم."
    },
    {
      image: "https://img.favpng.com/20/17/15/physical-education-clip-art-png-favpng-sqVb9fT8SyhYCZRRdBndDy0F1.jpg",
      question: "کلاس ورزش را دوست داری؟",
      answer: "بله، کلاس ورزش را خیلی دوست دارم."
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/000/300/516/non_2x/vector-many-kids-reading-books-in-library.jpg",
      question: "کتابخانه کجاست؟",
      answer: "کتابخانه کنار دفتر است."
    },
    {
      image: "https://media.istockphoto.com/id/466565297/vector/elementary-students-eating-lunch-in-cafeteria.jpg?s=612x612&w=0&k=20&c=HRSLck8pqadx2WUf1B8tmd1nZGchf1Pa4n9-2cbDIoY=",
      question: "نهار را کجا می‌خوری؟",
      answer: "در سالن غذاخوری نهار می‌خورم."
    },
    {
      image: "https://i.pinimg.com/736x/63/25/fa/6325faac6d388d8b2ca7679a7edbefab.jpg",
      question: "دفتر مشقت کجاست؟",
      answer: "در کیفم است."
    },
    {
      image: "https://static7.depositphotos.com/1007989/773/i/950/depositphotos_7734154-stock-illustration-packing-school-bag.jpg",
      question: "چه چیزی در کیفت هست؟",
      answer: "در کیفم کتاب، دفتر و مداد است."
    },
    {
      image: "https://core-docs.s3.amazonaws.com/somerville_isd_ar/article/image/large_ec563ba0-55ff-4f1e-8278-272e394d2a14.png",
      question: "چه موقع به خانه می‌روی؟",
      answer: "بعد از زنگ آخر به خانه می‌روم."
    }
  ],

};

const TypingQAImageSlider = () => {
  const categoryNames = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryNames[0]);
  const [data, setData] = useState(categories[selectedCategory]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentTyping, setCurrentTyping] = useState(''); // 'question' or 'answer'

  const current = data[currentIndex];

  // تایپ تدریجی
const typeText = (fullText, callback) => {
  setTypedText('');
  setIsTyping(true);
  let indexRef = { current: 0 };  // یک ref داخلی

  const interval = setInterval(() => {
    const currentChar = fullText.charAt(indexRef.current);

    // اضافه کردن حرف فعلی به متن تایپ‌شده
    setTypedText((prev) => prev + currentChar);

    indexRef.current++;

    if (indexRef.current >= fullText.length) {
      clearInterval(interval);
      setIsTyping(false);
      if (callback) callback();
    }
  }, 50);
};



  const handleStep = () => {
    if (isTyping) return;

    if (!showQuestion) {
      setShowQuestion(true);
      setCurrentTyping('question');
      typeText(current.question);
    } else if (!showAnswer) {
      setShowAnswer(true);
      setCurrentTyping('answer');
      typeText(current.answer);
    } else {
      const nextIndex = (currentIndex + 1) % data.length;
      goToIndex(nextIndex);
    }
  };

  const handleBack = () => {
    if (isTyping || currentIndex === 0) return;
    goToIndex(currentIndex - 1);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    setShowQuestion(false);
    setShowAnswer(false);
    setTypedText('');
    setIsTyping(false);
    setCurrentTyping('');
  };

  const handleCategoryChange = (name) => {
    setSelectedCategory(name);
    setData(categories[name]);
    setCurrentIndex(0);
    setShowQuestion(false);
    setShowAnswer(false);
    setTypedText('');
    setIsTyping(false);
    setCurrentTyping('');
  };

  // Space key to go forward
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleStep();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, showQuestion, showAnswer, isTyping]);

  return (
    <div className="container ">
      {/* 🔷 لیست موضوعات */}
      <div className="my-5 text-center">
        <h4 className="mb-3">موضوع را انتخاب کنید</h4>
        {categoryNames.map((name) => (
          <button
            key={name}
            className={`btn btn-outline-primary mx-2 ${name === selectedCategory ? 'active' : ''}`}
            onClick={() => handleCategoryChange(name)}
            disabled={isTyping}
          >
            {name}
          </button>
        ))}
      </div>
        <br /><br /><br /> 
      {/* 🔷 تصویر و متن سوال */}
      <div className="row mt-4 align-items-center justify-content-center">
        <div className="col-md-6 text-center mb-4">
          <img
            src={current.image}
            alt="تصویر"
            className="img-fluid rounded shadow"
            style={{ maxHeight: '300px' }}
          />
        </div>

        <div className="col-md-6">
          <div className="bg-light p-4 rounded shadow" >
            {/* <h5 className="text-primary mb-3">سؤال و جواب</h5> */}
            <div className='mt-5 text-center' style={{minHeight:'65px'}}>
                {showQuestion && (
                <p className="mb-3 h3">
                    <strong className='text-info'>سؤال: </strong>
                    {currentTyping === 'question' ? typedText : current.question}
                </p>
                )}

                {showAnswer && (
                <p className='h3'>
                    <strong className='text-warning'>  جواب :  </strong>
                    {currentTyping === 'answer' ? typedText : current.answer}
                </p>
                )}

            </div>

            <div className="d-flex  gap-2  mt-5">
              <button
                className="btn btn-secondary mt-5"
                onClick={handleBack}
                disabled={isTyping || currentIndex === 0}
              >
                ⬅️ قبلی
              </button>
              <button
                className="btn-sm btn-primary mt-5"
                onClick={handleStep}
                disabled={isTyping}
              >
                {showAnswer ? 'مرحله بعدی ⏭' : 'نمایش ⏵'}
              </button>
            </div>
            {/* <small className="d-block mt-2 text-muted">
              با زدن Space هم می‌توانید پیش بروید.
            </small> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingQAImageSlider;
