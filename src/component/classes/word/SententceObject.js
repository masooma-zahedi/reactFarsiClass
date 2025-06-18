import React, { useState } from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Button,
  Image,
  ListGroup,
} from "react-bootstrap";

const lessonGroups = [
    {
    title: " صُبحانِه ",
    slides: [
        {
        sentence: "مَن صُبحانِه خوردَم.",
        words: [
            { text: "صُبحانِه", pronunciation: "sobhāne", image: "https://cdn.vectorstock.com/i/1000v/83/83/delicious-tasty-breakfast-cartoon-vector-24468383.jpg", translation: "Breakfast" },
        ]
        },
        {
        sentence: "مَن نان و پَنیر دوست دارَم.",
        words: [
            { text: "نان", pronunciation: "nān", image: "https://cdn.vectorstock.com/i/1000v/53/07/thanksgiving-baked-bread-cartoon-colored-clipart-vector-43185307.jpg", translation: "Bread" },
            { text: "پَنیر", pronunciation: "panir", image: "https://img.freepik.com/premium-vector/cartoon-drawing-cheese-with-face-it_602454-7870.jpg", translation: "Cheese" },
        ]
        },
        {
        sentence: "صُبحانِه‌اَم شیر و عَسَل بود.",
        words: [
            { text: "صُبحانِه‌", pronunciation: "sobhāne'am", image: "https://cdn.vectorstock.com/i/1000v/83/83/delicious-tasty-breakfast-cartoon-vector-24468383.jpg", translation: "My breakfast" },
            { text: "شیر", pronunciation: "shir", image: "https://cbx-prod.b-cdn.net/COLOURBOX62417729.jpg?width=800&height=800&quality=70", translation: "Milk" },
            { text: "عَسل", pronunciation: "asal", image: "https://static.vecteezy.com/system/resources/previews/017/219/938/non_2x/cartoon-cute-bee-carrying-honey-dipper-to-take-honey-from-honey-pot-bee-character-illustration-png.png", translation: "Honey" },
        ]
        },
        {
        sentence: "مادَر برایَم تُخم‌مُرغ پُخت.",
        words: [
            { text: "تَخم‌مُرغ", pronunciation: "tokhm-e morgh", image:"https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/509fefb5-bf9c-42d5-934a-0425d8612e11/eadbd16b-14a1-4191-809e-34232364e071.png" , translation: "Egg" },
        ]
        },
        {
        sentence: "مَن با خواهَرَم صُبحانِه خوردم.",
        words: [
        ]
        },
        {
        sentence: "صُبح زود چای خوردَم.",
        words: [
            { text: "چای", pronunciation: "chāy", image: "https://img.freepik.com/premium-vector/cartoon-illustration-cup-tea-with-smiley-face_180868-3002.jpg?w=360", translation: "Tea" },
        ]
        },
        {
        sentence: "دوست دارم نان و مُرَبا بُخورَم.",
        words: [
            { text: "نان", pronunciation: "nān", image: "https://cdn.vectorstock.com/i/1000v/53/07/thanksgiving-baked-bread-cartoon-colored-clipart-vector-43185307.jpg", translation: "Bread" },
            { text: "مُرَبا", pronunciation: "marbā", image: "https://icon2.cleanpng.com/ci2/gzz/iut/aqru265v3.webp", translation: "Jam" },
        ]
        },
        {
        sentence: "صُبحانِه مُهم اَست.",
        words: [
        ]
        },
        {
        sentence: "بابا نان خَرید.",
        words: [
            { text: "نان", pronunciation: "nān", image: "https://cdn.vectorstock.com/i/1000v/53/07/thanksgiving-baked-bread-cartoon-colored-clipart-vector-43185307.jpg", translation: "Bread" },
        ]
        },
        {
        sentence: "مَن خُرما و شیر دوست دارَم.",
        words: [
            { text: "خُرما", pronunciation: "kharmā", image: "https://img.freepik.com/premium-photo/dates-2d-vector-illustration-cartoon-white-background-h_889056-22146.jpg", translation: "Date" },
            { text: "شیر", pronunciation: "shir", image: "https://cbx-prod.b-cdn.net/COLOURBOX62417729.jpg?width=800&height=800&quality=70", translation: "Milk" },
        ]
        },
        {
        sentence: "هَر روز صُبح شیر می‌نوشَم.",
        words: [
            { text: "شیر", pronunciation: "shir", image: "https://cbx-prod.b-cdn.net/COLOURBOX62417729.jpg?width=800&height=800&quality=70", translation: "Milk" },
        ]
        },
        {
        sentence: "بیسکُویت و ماست خوردَم.",
        words: [
            { text: "بیسکُویت", pronunciation: "biskuit", image: "https://i.pinimg.com/736x/bb/7c/29/bb7c293a568df9297ba03933f50380f0.jpg", translation: "Biscuit" },
            { text: "ماست", pronunciation: "māst", image: "https://www.shutterstock.com/image-vector/spoon-yogurt-vector-illustration-600nw-1396014698.jpg", translation: "Yogurt" },
        ]
        },
        {
        sentence: "مَن با دوست‌هایَم صُبحانِه خوردَم.",
        words: [
            { text: "صُبحانِه", pronunciation: "sobhāne", image: "https://cdn.vectorstock.com/i/1000v/83/83/delicious-tasty-breakfast-cartoon-vector-24468383.jpg", translation: "Breakfast" },
        ]
        },
        {
        sentence: "صُبحانِه‌اَم خُوشمَزه بود.",
        words: [
        ]
        },
        {
        sentence: "اِمروز کَره وَ عَسَل خوردَم.",
        words: [
            { text: "کَرِه", pronunciation: "koreh", image: "https://thumbs.dreamstime.com/z/cartoon-butter-cutting-board-margarine-spread-natural-dairy-product-vector-brick-wooden-high-calorie-food-cooking-225918083.jpg", translation: "Butter" },
            { text: "عَسَل", pronunciation: "asal", image: "https://t4.ftcdn.net/jpg/06/12/86/49/360_F_612864989_v6TrLkbttR4sjm9vj7bMvtTxO7Xw4ZXY.jpg", translation: "Honey" },
        ]
        }
    ]
    },

  {
    title: "حرف ب",
    slides: [
      {
        sentence: "بابا به بازار رفت.",
        words: [
          { text: "بابا", image: "https://via.placeholder.com/300x200?text=بابا", translation: "Father" },
          { text: "بازار", image: "https://via.placeholder.com/300x200?text=بازار", translation: "Market" },
          { text: "رفت", image: "https://via.placeholder.com/300x200?text=رفتن", translation: "Went" },
        ],
      },
    ],
  },
];

const SententceObject = () => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true); // وضعیت نمایش فهرست
  const [mainTitle,setMainTitle] = useState('صبحانه')

  const currentGroup = lessonGroups[activeGroupIndex];
  const currentSlides = currentGroup.slides;
  const currentWords = currentSlides[activeSlideIndex].words;

  const handleGroupSelect = (index,i) => {
    setMainTitle(i)
    setActiveGroupIndex(index);
    setActiveSlideIndex(0);
    setSelectedWord(null);
  };

  const handleSlideSelect = (index) => {
    setActiveSlideIndex(index);
    setSelectedWord(null);
  };

  return (
    <Container className="mt-4" dir="rtl" style={{minHeight:'700px'}}>
      <Row>
        {/* دکمه نمایش/پنهان‌سازی فهرست */}
        <Col xs={12} className="mb-3 text-end">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? "پنهان کردن فهرست" : "نمایش فهرست"}
          </Button>
        </Col>
      </Row>

      <Row>
        {/* فهرست عناوین درس‌ها */}
        {showSidebar && (
          <Col md={3}>
            <h5 className="mb-3">فهرست </h5>
            <ListGroup>
              {lessonGroups.map((group, index) => (
                <ListGroup.Item
                  key={index}
                  active={index === activeGroupIndex}
                  action
                  onClick={() => handleGroupSelect(index,group.title)}
                >
                  {group.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        )}

        {/* بخش اصلی کروسل و کلمات */}
        <Col md={showSidebar ? 9 : 12}>
        <h3 className="mx-5 my-3 p-4 rounded-pill text-light text-center " style={{backgroundColor:' #cc43aa'}}>{mainTitle}</h3>
          <Carousel
            activeIndex={activeSlideIndex}
            onSelect={handleSlideSelect}
            controls={true}
            indicators={false}
            interval={null}
          >
            {currentSlides.map((slide, index) => (
              <Carousel.Item key={index} >
                <h1 className=" py-5 mx-4  rounded text-center" style={{backgroundColor:'rgba(135, 187, 239, 0.7)'}}>
                  {slide.sentence}
                </h1>
              </Carousel.Item>
            ))}
          </Carousel>

          <Row className="mt-4 justify-content-center">
            <Col>
              <div className="d-flex  flex-wrap justify-content-start mx-5 gap-2">
                {currentWords.map((word, i) => (
                  <Button
                    key={i}
                    variant="outline-success"
                    className="px-3 "
                    onClick={() => setSelectedWord(word)}
                  >
                   <h3>{word.text}</h3> 
                  </Button>
                ))}
              </div>
            </Col>
          </Row>

          {selectedWord && (
            <Row className="mt-4 justify-content-center text-center">
              <Col md={6} className="bg-warning p-2 rounded" >
                <Image src={selectedWord.image} fluid rounded />
                <p className="mt-2  h2 fs-2" style={{color:'rgb(240, 19, 148)'}}>
                  {selectedWord.translation}
                </p>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SententceObject;
