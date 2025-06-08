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
    image: 'https://thumbs.dreamstime.com/b/pencil-character-facial-expressions-19965263.jpg',
    correct: '.این یِک مِدادددددددددددددددددددددددددددددد اَست',
    options: ['.این یِک کِتاب اَست', '.این یِک صَندَلی اَست', '.این یِک مِدادnnnnnnnnnnnnnnnnnnnnnnnnn اَست'],
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
  // 10 مورد جدید
  {
    image: 'https://static.vecteezy.com/system/resources/previews/008/154/102/original/kid-eating-healthy-food-illustration-cartoon-flat-design-free-vector.jpg',
    correct: 'بَچِه سیب می‌خورَد',
    options: ['بَچِه توپ بازی می‌کُنَد', 'بَچِه سیب می‌خورَد', 'بَچِه می‌خوابَد'],
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/04/01/09/25/girl-1299629_960_720.png',
    correct: 'او دَر حال نِوِشتَن اَست',
    options: ['او دَر حال نِوِشتَن اَست', 'او دَر حال خَواب اَست', 'او دَر حال دویدن اَست'],
  },
  {
    image: 'https://cdn4.vectorstock.com/i/1000x1000/79/66/cute-boy-reading-book-cartoon-vector-46347966.jpg',
    correct: 'پَسر دَر حالِ خواندَن اَست',
    options: ['پَسر دَر حالِ خواندَن اَست', 'پَسر دَر حالِ نِوِشتَن اَست', 'پَسر دَر حالِ نِشِستن اَست'],
  },
  {
    image: 'https://static.vecteezy.com/system/resources/previews/008/372/310/original/cartoon-character-girl-drinking-water-vector.jpg',
    correct: 'دُختَر آب می‌نوشَد',
    options: ['دُختَر آب می‌نوشَد', 'دُختَر با دوستَش گَپ می‌زَنَد', 'دُختَر نِقاشی می‌کِشَد'],
  },
  {
    image: 'https://cdn3.vectorstock.com/i/1000x1000/76/39/boy-playing-football-cartoon-vector-44277639.jpg',
    correct: 'او فوتبَال بازی می‌کُنَد',
    options: ['او کتاب می‌خوانَد', 'او فوتبَال بازی می‌کُنَد', 'او دَر آشپَزخانه اَست'],
  },
  {
    image: 'https://img.freepik.com/premium-vector/young-girl-cleaning-window-cartoon-illustration-white-background_549750-167.jpg',
    correct: 'دُختَر دَریچه را پاک می‌کُنَد',
    options: ['دُختَر دَریچه را پاک می‌کُنَد', 'دُختَر دَرس می‌خوانَد', 'دُختَر رَنگ می‌کِشَد'],
  },
  {
    image: 'https://static.vecteezy.com/system/resources/previews/017/452/353/original/cute-boy-eating-noodles-cartoon-illustration-vector.jpg',
    correct: 'پَسر نودِل می‌خورَد',
    options: ['پَسر خَوابیده اَست', 'پَسر نودِل می‌خورَد', 'پَسر می‌دَوَد'],
  },
  {
    image: 'https://cdn.vectorstock.com/i/1000x1000/30/68/happy-kid-boy-eating-ice-cream-vector-31013068.webp',
    correct: 'کودَک بستَنی می‌خورَد',
    options: ['کودَک بستَنی می‌خورَد', 'کودَک می‌نویسَد', 'کودَک می‌شوید'],
  },
  {
    image: 'https://static.vecteezy.com/system/resources/previews/017/086/361/original/cartoon-boy-taking-a-bath-in-the-bathroom-illustration-vector.jpg',
    correct: 'او دَر حالِ شُست‌وشو اَست',
    options: ['او دَر حالِ بازی اَست', 'او دَر حالِ خَواب اَست', 'او دَر حالِ شُست‌وشو اَست'],
  },
  {
    image: 'https://cdn4.vectorstock.com/i/1000x1000/29/39/girl-feeding-cat-cartoon-vector-45822939.jpg',
    correct: 'دُختَر گُربه را غذا می‌دَهَد',
    options: ['دُختَر گُربه را غذا می‌دَهَد', 'دُختَر با گُربه می‌دوَد', 'دُختَر گُربه را می‌شوید'],
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
    }, 1000);
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
                    <button className='btn  shadow-sm border  mx-2' style={stylebg} onClick={()=>questionsqq(questions1,'question1')}>مرحله 1</button>
                    <button className='btn shadow-sm border  mx-2' style={stylebg} onClick={()=>questionsqq(questions2,'question2')}>مرحله 2</button>
                    {/* <button className='btn shadow-sm border mx-2' style={stylebg} onClick={()=>questionsqq(questions3,'question3')}>مرحله 3</button> */}
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

