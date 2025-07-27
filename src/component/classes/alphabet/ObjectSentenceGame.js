import React, { useEffect, useState } from 'react';

const questions1 = [
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
  {
    image: 'https://thumbs.dreamstime.com/b/illustration-cute-little-boy-eating-red-apple-isolated-white-background-kid-eats-red-apple-good-appetite-healthy-331433166.jpg',
    correct: 'بَچِه سیب می‌خورَد',
    options: ['بَچِه توپ بازی می‌کُنَد', 'بَچِه سیب می‌خورَد', 'بَچِه می‌خوابَد'],
  },
  {
    image: 'https://img.freepik.com/premium-vector/cute-boy-eating-ramen-noodle-cartoon-vector-icon-illustration-people-food-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3943.jpg',
    correct: 'پَسر نودِل می‌خورَد',
    options: ['پَسر خَوابیده اَست', 'پَسر نودِل می‌خورَد', 'پَسر می‌دَوَد'],
  },
  {
    image: 'https://cdn.vectorstock.com/i/500p/93/71/young-cartoon-student-writing-vector-1149371.jpg',
    correct: 'او دَر حال نِوِشتَن اَست',
    options: ['او دَر حال نِوِشتَن اَست', 'او دَر حال خَواب اَست', 'او دَر حال دویدن اَست'],
  },
  {
    image: 'https://png.pngtree.com/png-clipart/20241106/original/pngtree-happy-girl-reading-book-clipart-illustration-png-image_16698789.png',
    correct: 'دُختَر دَر حالِ خواندَن اَست',
    options: ['دُختَر دَر حالِ خواندَن اَست', 'دُختَر دَر حالِ نِوِشتَن اَست', 'دُختَر دَر حالِ نِشِستن اَست'],
  },
  {
    image: 'https://png.pngtree.com/png-clipart/20241128/original/pngtree-the-little-cartoon-girl-drinks-water-png-image_17338893.png',
    correct: 'دُختَر آب می‌نوشَد',
    options: ['دُختَر آب می‌نوشَد', 'دُختَر با دوستَش گَپ می‌زَنَد', 'دُختَر نِقاشی می‌کِشَد'],
  },
  {
    image: 'https://media.craiyon.com/2025-04-27/RGZNQMV3TySXtvyvna7Ahg.webp',
    correct: 'رایان فوتبَال بازی می‌کُنَد',
    options: ['رایان کتاب می‌خوانَد', 'رایان فوتبَال بازی می‌کُنَد', 'رایان دَر آشپَزخانه اَست'],
  },
  {
    image: 'https://thumb.ac-illust.com/8b/8bf2db3079bb61f16432d86299f3678f_t.jpeg',
    correct: 'بَهار دَریچه را پاک می‌کُنَد',
    options: ['بَهار دَریچه را پاک می‌کُنَد', 'بَهار دَرس می‌خوانَد', 'بَهار رَنگ می‌کِشَد'],
  },
  {
    image: 'https://i.etsystatic.com/17675358/r/il/418fd2/3470834387/il_fullxfull.3470834387_pf6y.jpg',
    correct: 'کودَک بستَنی می‌خورَد',
    options: ['کودَک بستَنی می‌خورَد', 'کودَک می‌نویسَد', 'کودَک می‌شوید'],
  },
  {
    image: 'https://thumb.ac-illust.com/43/43eb28381357d2977d672e2f1cadc1a1_t.jpeg',
    correct: 'گُلنار دَر حالِ شُست‌وشو اَست',
    options: ['گُلنار دَر حالِ بازی اَست', 'گُلنار دَر حالِ خَواب اَست', 'گُلنار دَر حالِ شُست‌وشو اَست'],
  },
  {
    image: 'https://www.shutterstock.com/image-vector/cute-family-feeding-cats-vectorchildren-260nw-2336242187.jpg',
    correct: 'بابا گُربه را غذا می‌دَهَد',
    options: ['بابا گُربه را غذا می‌دَهَد', 'بابا با گُربه می‌دوَد', 'بابا گُربه را می‌شوید'],
  },
];

// masooma
const questions2 = [
  {
    image: ' //static.vecteezy.com/system/resources/previews/007/637/871/non_2x/cute-summer-sunny-day-weather-character-smiling-with-clouds-in-yellow-background-illustration-vector.jpg',
    correct: '.هَوا آفتابی اَست',
    options: ['.هَوا آفتابی اَست', '.هَوا بارانی اَست', '.هَوا بادی اَست'],
  },
  {
    image: 'https://img.freepik.com/free-vector/nature-raining-scene_1308-22369.jpg',
    correct: '.هَوا بارانی اَست',
    options: ['.هَوا بَرفی اَست', '.هَوا بارانی اَست', '.هَوا گَرم اَست'],
  },
  {
    image: 'https://thumbs.dreamstime.com/b/cold-weather-boy-freezing-shivering-young-winter-cartoon-style-illustration-landscape-115782671.jpg',
    correct: '.هَوا سَرد و بَرفی اَست',
    options: ['.هَوا گَرم اَست', '.هَوا سَرد و بَرفی اَست', '.هَوا بارانی اَست'],
  },
  {
    image: 'https://t3.ftcdn.net/jpg/07/25/45/18/360_F_725451899_HXqF8T8cUpTdg8DyhfVu1Qle0jhvJPH5.jpg',
    correct: '.هَوا بادی اَست',
    options: ['.هَوا بادی اَست', '.هَوا آفتابی اَست', '.هَوا بَرفی اَست'],
  },
  {
    image: 'https://www.shutterstock.com/image-vector/person-suffering-summer-sun-heat-600nw-2356554209.jpg',
    correct: '.هَوا گَرم اَست',
    options: ['.هَوا گَرم اَست', '.هَوا سَرد اَست', '.هَوا بارانی اَست'],
  },
  {
    image: 'https://img.freepik.com/free-photo/anime-style-clouds_23-2151071731.jpg?semt=ais_hybrid&w=740',
    correct: '.آسمان اَبری اَست',
    options: ['.آسمان آبی اَست', '.آسمان اَبری اَست', '.آسمان روشن اَست'],
  },
  {
    image: 'https://t3.ftcdn.net/jpg/03/22/97/22/360_F_322972200_yN6Lz4k7uLZAnOs3pt3ODmLL0vHgBUJ0.jpg',
    correct: '.توفان آمدِه اَست',
    options: ['.توفان آمدِه اَست', '.باران نِیامده اَست', '.خورشید دَر آسمان اَست'],
  },
  {
    image: 'https://st4.depositphotos.com/31862216/38693/v/450/depositphotos_386930238-stock-illustration-beautiful-rainbow-sky-paper-art.jpg',
    correct: '.رَنگین‌کَمان در آسمان اَست',
    options: ['.اَبَر در آسمان اَست', '.رَنگین‌کَمان در آسمان اَست', '.خورشید پُشت کوه اَست'],
  },
  {
    image: 'https://www.shutterstock.com/image-photo/children-a-boy-girl-aged-260nw-2639401605.jpg',
    correct: '.بَرق و رَعد در آسمان اَست',
    options: ['.باران مِی‌بارد', '.بَرق و رَعد در آسمان اَست', '.باد آرام اَست'],
  },
  {
    image: 'https://img.freepik.com/free-vector/dirt-road-foggy-forest-dull-weather-cartoon-nature-landscape-with-road-going-along-field-coni_107791-7449.jpg',
    correct: '.هَوا مِه‌آلود اَست',
    options: ['.هَوا روشَن اَست', '.هَوا مِه‌آلود اَست', '.هَوا گَرم و خُشک اَست'],
  },
];
const illnessSignsQuestions = [
  {
    image: 'https://media.istockphoto.com/id/598785430/vector/sick-girl-in-bed.jpg?s=612x612&w=0&k=20&c=sp_1S46NAWTwVYfiln8cv6sKc-PJNT-HR54GNeryy5Q=',
    correct: '.او تَب دارَد',
    options: ['.او تَب دارَد', '.او می‌خَندَد', '.او گُرسنه اَست'],
  },
  {
    image: 'https://www.shutterstock.com/image-vector/boys-people-suffering-various-symptoms-260nw-1658168074.jpg',
    correct: '.او سَرفه می‌کُنَد',
    options: [ '.او مِی‌دَوَد','.او سَرفه می‌کُنَد', '.او بازی می‌کُنَد'],
  },
  {
    image: 'https://media.istockphoto.com/id/1624886149/vector/vector-illustration-of-a-sick-child-in-hospital.jpg?s=612x612&w=0&k=20&c=TRUdAA59SS_14Y-5wmH0372qHCAhVKqf7uTI0uV6ob8=',
    correct: '.او حالِ خوبی نَدارَد',
    options: [ '.او حالِ خوبی دارَد', '.او خوشحال اَست','.او حالِ خوبی نَدارَد',],
  },
  {
    image: 'https://www.shutterstock.com/image-vector/child-has-got-flu-sneezing-600nw-216852040.jpg',
    correct: '.او عَطسِه می‌کُنَد',
    options: ['.او عَطسِه می‌کُنَد', '.او آواز می‌خوانَد', '.او می‌خوابَد'],
  },
  {
    image: 'https://img.freepik.com/free-vector/hand-drawn-headache-cartoon-illustration_23-2150696197.jpg',
    correct: '.او سَردَرد دارَد',
    options: ['.او سَردَرد دارَد', '.او دَست‌دَرد دارَد', '.او خوشحال اَست'],
  },
  {
    image: 'https://www.shutterstock.com/image-vector/illustration-depicts-child-character-tuft-260nw-703924654.jpg',
    correct: '.او گَلودَرد دارَد',
    options: [ '.او پا دَرد دارَد', '.او خوابیده اَست','.او گَلودَرد دارَد',],
  },
  {
    image: 'https://www.shutterstock.com/image-vector/vector-illustration-little-boy-suffering-600nw-1582302751.jpg',
    correct: '.او شِکم‌دَرد دارَد',
    options: [ '.او دَست دَرد دارَد', '.او شِکم‌دَرد دارَد','.او دَندان دَرد دارَد'],
  },
  {
    image: 'https://previews.123rf.com/images/colorfuelstudio/colorfuelstudio2104/colorfuelstudio210400194/167735574-young-good-looking-woman-feeling-tired-and-sick.jpg',
    correct: '.او خَستِه اَست',
    options: [ '.او بیدار اَست', '.او تَب دارَد','.او خَستِه اَست',],
  },
  {
    image: 'https://previews.123rf.com/images/ruangdesign19/ruangdesign191909/ruangdesign19190900013/129710506-cartoon-child-toothache-vector-illustration.jpg',
    correct: '.او دَندان‌دَرد دارَد',
    options: ['.او دَندان‌دَرد دارَد', '.او گوش‌دَرد دارَد', '.او خوابش می‌آیَد'],
  },
  {
    image: 'https://www.shutterstock.com/image-vector/earache-sore-boy-sick-person-600nw-1671298501.jpg',
    correct: '.او گوش‌دَرد دارَد',
    options: ['.او گوش‌دَرد دارَد', '.او شِکم‌دَرد دارَد', '.او حالِ خوب دارَد'],
  },
  {
    image: 'https://media.istockphoto.com/id/1423379495/vector/girl-sweating-sunny-day-cute-child.jpg?s=612x612&w=0&k=20&c=FU0s8UF13Ms0UaOVXG5RUr3iWukOirvKnhdf1SZ7Xss=',
    correct: '.او عَرق می‌کُنَد',
    options: [ '.او لَبخَند می‌زَنَد','.او عَرق می‌کُنَد', '.او دَر راه اَست'],
  },
  {
    image: 'https://png.pngtree.com/png-clipart/20250210/original/pngtree-a-runny-nose-for-a-child-png-image_20412369.png',
    correct: '.بینیِ او گِرفتِه اَست',
    options: [ '.او بینی نَدارَد', '.او دَندان دَرد دارَد','.بینیِ او گِرفتِه اَست',],
  },
  {
    image: 'https://www.shutterstock.com/image-vector/little-kid-feel-tired-low-260nw-2524893147.jpg',
    correct: '.او نِیرویی نَدارَد',
    options: [ '.او دَرس می‌خوانَد','.او نِیرویی نَدارَد', '.او تَشنه اَست'],
  },
  {
    image: 'https://t.pimg.jp/084/974/769/1/84974769.jpg',
    correct: '.او روی تَخت دراز کِشیدِه اَست',
    options: ['.او روی تَخت دراز کِشیدِه اَست', '.او بازی می‌کُنَد', '.او مِی‌دَوَد'],
  },
  {
    image: 'https://cdn.motherhood.com.my/wp-content/uploads/2022/04/14190652/child-eat-medicine.png',
    correct: '.او دارو می‌خورد',
    options: [ '.او میوه می‌خورَد', '.او آب می‌خورَد','.او دارو می‌خورد',],
  },
];




const ObjectSentenceGame = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [questions, setQuestions] = useState(questions1);
  const[idModal,setIdModal]=useState('question1')
  

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
    }, 1500);
  };

  const resetGame = () => {
    setCurrent(0);
    setScore(0);
    setSelected('');
    setIsFinished(false);
  };

  const progress = (current / questions.length) * 100;
// new change****************************************************************************
  const stylebg = {
    backgroundColor:'rgba(232, 231, 231, 0.99)'
  }

  const questionsqq = (e, i) => {
  setQuestions(e);
  setIdModal(i);
  setCurrent(0);
  setSelected('');
  setScore(0);
  setIsFinished(false);
};


  return (
      <div className=" mt-5 text-center border border-2 border-info py-5">
        {/* masooma */}
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
                    <button className='btn  shadow-sm border  mx-2' style={stylebg} onClick={()=>questionsqq(questions1,'question1')}>اشیا و فعل ها</button>
                    <button className='btn shadow-sm border  mx-2' style={stylebg} onClick={()=>questionsqq(questions2,'question2')}>آب و هوا</button>
                    <button className='btn shadow-sm border mx-2' style={stylebg} onClick={()=>questionsqq(illnessSignsQuestions,'question3')}>علایم بیماری</button>
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
  );
};

export default ObjectSentenceGame;

