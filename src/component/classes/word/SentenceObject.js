import React, { useState } from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Button,
  Image,
  ListGroup,
  Form,
} from "react-bootstrap";


const lessonGroups = [
  // جلمات صبحانه
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
  // جملات حرف پ
    {
    title: "جُملات حرف پ",
    slides: [
        {
          sentence: "پِدَر کُت پوشید.",
          words: [
            { text: "پِدَر", pronunciation: "pedar", image: "https://as2.ftcdn.net/jpg/05/90/76/63/1000_F_590766385_fNUflArJKMCTiF5g693MIqibUugq2Ugc.jpg", translation: "Father" },
            { text: "کُت", pronunciation: "kat", image: "https://www.shutterstock.com/image-vector/men-suit-english-mustard-color-260nw-2325792317.jpg", translation: "Coat" }
          ]
        },
        {
          sentence: "شاپَرَک پَر کَشید.",
          words: [
            { text: "شاپَرَک", pronunciation: "shāparak", image: "https://static.vecteezy.com/system/resources/previews/046/498/192/non_2x/cartoon-butterfly-isolated-on-transparent-background-colorful-and-detailed-nature-illustration-png.png", translation: "Butterfly" },
            { text: "پَر", pronunciation: "par", image: "https://i.ytimg.com/vi/w4aIAK6KgCE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDUAB3kdRPXoKVK9-h_vl443lg97Q", translation: "Wing" }
          ]
        },
        {
          sentence: "پَرَندِه دَر آسِمان پَرواز می کُنَد.",
          words: [
            { text: "پَرَندِه", pronunciation: "parande", image: "https://t3.ftcdn.net/jpg/07/85/95/08/360_F_785950828_ztkvuSs1EjXxRWlX4Twer4QG5HZNSCaa.jpg", translation: "Bird" },
            { text: "آسِمان", pronunciation: "āsemān", image: "https://static.vecteezy.com/system/resources/thumbnails/039/351/223/small_2x/cartoon-summer-sky-landscape-of-bright-sunny-day-with-floating-white-cumulus-clouds-outdoor-scenery-with-blue-sky-background-illustration-vector.jpg", translation: "Sky" },
            { text: "پَرواز", pronunciation: "parvaz", image: "https://www.clipartmax.com/png/middle/296-2960357_birds-flying-clipart-birds-cartoon-black-and-white.png", translation: "Flying" }
          ]
        },
        {
          sentence: "پارسـا توپ را پَرت کَرد.",
          words: [
            { text: "توپ", pronunciation: "tup", image: "https://images.freeimages.com/clg/istock/previews/1048/104803801-ball-kids-toys-colored-illustration-for-children.jpg", translation: "Ball" },
            { text: "پَرت", pronunciation: "part", image: "https://png.pngtree.com/png-clipart/20230814/original/pngtree-little-boy-throwing-ball-illustration-small-pupil-vector-picture-image_10629685.png", translation: "Throw" }
          ]
        },
        {
          sentence: "پَری با پَنیر پیتزا می پَزَد.",
          words: [
            { text: "پَنیر", pronunciation: "panir", image: "https://i.graphicmama.com/uploads/2024/7/6683c6ccb2947-Cheese-Cartoon-Character.png", translation: "Cheese" },
            { text: "پیتزا", pronunciation: "pitza", image: "https://png.pngtree.com/png-clipart/20250309/original/pngtree-funny-pizza-slice-cartoon-character-png-image_20610973.png", translation: "Pizza" },
            { text: "پُختَن", pronunciation: "pokhtan", image: "https://media.istockphoto.com/id/1369712605/vector/cooking-food-in-frying-pan-vector-illustration-of-cut-vegetables-cooked-on-gas-stove-cartoon.jpg?s=612x612&w=0&k=20&c=3H9TU5PosN-vYYFQCahK-RdA695_41QiT90n1re_0j0=", translation: "Cooking" }
          ]
        },
        {
          sentence: "نان کَپَک زَدِه است.",
          words: [
            { text: "نان", pronunciation: "nān", image: "https://cdn.vectorstock.com/i/500p/51/09/animated-sliced-bread-character-vector-4015109.jpg", translation: "Bread" },
            { text: "کَپَک", pronunciation: "kapak", image: "https://www.shutterstock.com/image-vector/inedible-bread-mould-illustration-260nw-2206427471.jpg", translation: "Mold" }
          ]
        },
        {
          sentence: "شامپو مو را پاک می کُنَد.",
          words: [
            { text: "شامپو", pronunciation: "shampo", image: "https://static.vecteezy.com/system/resources/previews/007/706/933/non_2x/shampoo-natural-organic-skin-care-products-natural-shampoo-for-hair-cosmetics-with-herbs-for-body-modern-cartoon-illustrations-isolated-on-a-white-background-vector.jpg", translation: "Shampoo" },
            { text: "مو", pronunciation: "mu", image: "https://thumbs.dreamstime.com/b/red-wavy-back-hairstyle-single-icon-cartoon-style-vector-symbol-stock-illustration-web-93761686.jpg", translation: "Hair" },
          ]
        },
        {
          sentence: "سُپیده به دیوار پَرده آویزَان کَرد.",
          words: [
            { text: "دیوار", pronunciation: "divār", image: "https://static9.depositphotos.com/1526816/1158/v/450/depositphotos_11580176-stock-illustration-wall.jpg", translation: "Wall" },
            { text: "پَرده", pronunciation: "parde", image: "https://previews.123rf.com/images/rastudio/rastudio1202/rastudio120200010/12372140-cartoon-home-window.jpg", translation: "Curtain" },
            { text: "آویزان", pronunciation: "āvizān", image: "https://www.shutterstock.com/image-vector/man-hanging-curtains-flat-color-260nw-1792604128.jpg", translation: "Hanging" }
          ]
        }
      ]
    },
// جملات حرف خ
// (باید عکس ها را عوض کنی!!!!!)
    {
      title: "جُملات حرف خ",
      slides: [
        {
          sentence: "اُستاد با میخ و تَخته تَخت می سازَد.",
          words: [
            { text: "میخ", pronunciation: "mikh", image: "https://cdn-icons-png.flaticon.com/512/2933/2933827.png", translation: "Nail" },
            { text: "تُخته", pronunciation: "takhte", image: "https://cdn-icons-png.flaticon.com/512/2830/2830308.png", translation: "Wood plank" },
            { text: "تُخت", pronunciation: "takht", image: "https://cdn-icons-png.flaticon.com/512/1046/1046896.png", translation: "Bed" }
          ]
        },
        {
          sentence: "خانُواده‌ ی خانُم مُدیر به کِنار رودخانه رَفتَند.",
          words: [
            { text: "خانُواده", pronunciation: "khānevāde", image: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png", translation: "Family" },
            { text: "خانُم مُدیر", pronunciation: "khānom modir", image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png", translation: "Mrs. Principal" },
            { text: "رودخانه", pronunciation: "rudkhāne", image: "https://cdn-icons-png.flaticon.com/512/4150/4150947.png", translation: "River" }
          ]
        },
        {
          sentence: "خانه‌ ی خَرگوش زِیر دَرَخت اَست.",
          words: [
            { text: "خانه", pronunciation: "khāne", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", translation: "House" },
            { text: "خَرگوش", pronunciation: "khargush", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", translation: "Rabbit" },
            { text: "دَرَخت", pronunciation: "derakht", image: "https://cdn-icons-png.flaticon.com/512/765/765481.png", translation: "Tree" }
          ]
        },
        {
          sentence: "شاخِ گوزَن شِکَستِه اَست.",
          words: [
            { text: "شاخ", pronunciation: "shākh", image: "https://cdn-icons-png.flaticon.com/512/3081/3081840.png", translation: "Horn" },
            { text: "گوزَن", pronunciation: "gavazn", image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", translation: "Deer" }
          ]
        },
        {
          sentence: "خُدا بَخشَندِه اَست.",
          words: [
            { text: "خُدا", pronunciation: "khodā", image: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png", translation: "God" },
            { text: "بَخشَندِه", pronunciation: "bakhshande", image: "https://cdn-icons-png.flaticon.com/512/2917/2917242.png", translation: "Forgiving" }
          ]
        },
        {
          sentence: "مادَر با نَخ دامَنِ دُختَر را می دوزَد.",
          words: [
            { text: "مادَر", pronunciation: "mādar", image: "https://cdn-icons-png.flaticon.com/512/921/921008.png", translation: "Mother" },
            { text: "نَخ", pronunciation: "nakh", image: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png", translation: "Thread" },
            { text: "دامَن", pronunciation: "dāman", image: "https://cdn-icons-png.flaticon.com/512/3348/3348419.png", translation: "Skirt" },
            { text: "دُختَر", pronunciation: "dokhtar", image: "https://cdn-icons-png.flaticon.com/512/921/921086.png", translation: "Girl" }
          ]
        },
        {
          sentence: "آب دَر گَرمـا آدَم را خُنُک می کُنَد.",
          words: [
            { text: "آب", pronunciation: "āb", image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png", translation: "Water" },
            { text: "گَرمـا", pronunciation: "garmā", image: "https://cdn-icons-png.flaticon.com/512/1684/1684375.png", translation: "Heat" },
            { text: "آدَم", pronunciation: "ādam", image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png", translation: "Person" },
            { text: "خُنُک", pronunciation: "khonok", image: "https://cdn-icons-png.flaticon.com/512/3075/3075928.png", translation: "Cool" }
          ]
        }
      ]
    },


];


/* lessonGroups ... (همان داده‌ای که شما قبلاً گذاشته‌اید) */
// const lessonGroups = [ /* ... keep your existing data ... */ ];

const removeArabicDiacritics = (text = "") => {
  // حذف تشکيل‌ها/حركات عربی و برخی ترکیبات رایج
  return text.replace(/[\u064B-\u0652\u0670\u06D6-\u06ED]/g, "");
};

const SentenceObject = () => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [mainTitle, setMainTitle] = useState("صبحانه");

  // states for highlighting
  const [highlightChar, setHighlightChar] = useState("");
  const [stripDiacritics, setStripDiacritics] = useState(true);

  const currentGroup = lessonGroups[activeGroupIndex];
  const currentSlides = currentGroup.slides;
  const currentWords = currentSlides[activeSlideIndex].words;

  const handleGroupSelect = (index, i) => {
    setMainTitle(i);
    setActiveGroupIndex(index);
    setActiveSlideIndex(0);
    setSelectedWord(null);
  };

  const handleSlideSelect = (index) => {
    setActiveSlideIndex(index);
    setSelectedWord(null);
  };

  // helper: آیا یک کاراکتر باید هایلایت شود؟
  const charMatches = (ch) => {
    if (!highlightChar) return false;
    if (stripDiacritics) {
      return (
        removeArabicDiacritics(ch) ===
        removeArabicDiacritics(highlightChar)
      );
    }
    return ch === highlightChar;
  };

  // render متن با هایلایت کردن کاراکترهایی که تطابق دارند
  const highlightText = (text) => {
    // اگر خالی است، فقط متن ساده برگردان
    if (!text) return text;

    // تبدیل به آرایه کاراکترها (در صورت نیاز می‌توان grapheme clustering پیچیده‌تری اضافه کرد)
    const chars = Array.from(text);
    return chars.map((ch, idx) => {
      const should = charMatches(ch);
      if (should) {
        return (
          <span
            key={idx}
            style={{ color: "red", fontWeight: "700" }}
            aria-label={`highlight-${ch}`}
          >
            {ch}
          </span>
        );
      }
      return <span key={idx}>{ch}</span>;
    });
  };

  return (
    <Container className="mt-4" dir="rtl" style={{ minHeight: "700px" }}>
      <Row className="mb-3">
        <Col xs={12} className="text-end">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? "پنهان کردن فهرست" : "نمایش فهرست"}
          </Button>
        </Col>
      </Row>

      {/* input برای تایپ حرف و گزینه حذفِ حرکات */}
      {showSidebar &&
      <Row className="mb-3 justify-content-center">
        <Col md={6} className="text-end">
          <Form>
            <Form.Group className="d-flex gap-2 align-items-center" controlId="highlightChar">
              <Form.Label className="mb-0">حرف برای هایلایت:</Form.Label>
              <Form.Control
                style={{ width: "120px", display: "inline-block" }}
                value={highlightChar}
                onChange={(e) => {
                  // فقط یک کاراکتر بگیریم (در صورت چسبیدن چند، اولین کاراکتر)
                  const val = e.target.value;
                  setHighlightChar(val.slice(0, 1));
                }}
                placeholder="یک حرف بنویس"
              />
              <Form.Check
                type="checkbox"
                label="حذف حرکات"
                checked={stripDiacritics}
                onChange={(e) => setStripDiacritics(e.target.checked)}
              />
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => setHighlightChar("")}
              >
                پاک کن
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      }

      <Row>
        {showSidebar && (
          <Col md={3}>
            <h5 className="mb-3">فهرست</h5>
            <ListGroup>
              {lessonGroups.map((group, index) => (
                <ListGroup.Item
                  key={index}
                  active={index === activeGroupIndex}
                  action
                  onClick={() => handleGroupSelect(index, group.title)}
                >
                  {group.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        )}

        <Col md={showSidebar ? 9 : 12}>
          <h3
            className="mx-5 my-3 p-4 rounded-pill text-light text-center"
            style={{ backgroundColor: " #cc43aa" }}
          >
            {mainTitle}
          </h3>

          <Carousel
            activeIndex={activeSlideIndex}
            onSelect={handleSlideSelect}
            controls={true}
            indicators={false}
            interval={null}
          >
            {currentSlides.map((slide, index) => (
              <Carousel.Item key={index}>
                <h1
                  className="py-5 mx-4 rounded text-center"
                  style={{ backgroundColor: "rgba(135, 187, 239, 0.7)" }}
                >
                  {/* sentence را با هایلایت رندر می‌کنیم */}
                  {highlightText(slide.sentence)}
                </h1>
              </Carousel.Item>
            ))}
          </Carousel>

          <Row className="mt-4 justify-content-center">
            <Col>
              <div className="d-flex flex-wrap justify-content-start mx-5 gap-2">
                {currentWords.map((word, i) => (
                  <Button
                    key={i}
                    variant="outline-success"
                    className="px-3"
                    onClick={() => setSelectedWord(word)}
                  >
                    <h3 style={{ margin: 0 }}>
                      {/* واژه را هم با هایلایت رندر می‌کنیم */}
                      {highlightText(word.text)}
                    </h3>
                  </Button>
                ))}
              </div>
            </Col>
          </Row>

          <div style={{ minHeight: "500px" }}>
            {selectedWord && (
              <Row className="mt-4 justify-content-center text-center">
                <Col md={5} className="bg-warning p-2 rounded" style={{ width: "400px" }}>
                  <Image className="w-100" src={selectedWord.image} fluid rounded />
                  <p className="mt-2 h2 fs-2" style={{ color: "rgb(240, 19, 148)" }}>
                    {selectedWord.translation}
                  </p>
                </Col>
              </Row>
            )}
          </div>
        </Col>
      </Row>
      <div className="text-muted">SentenceObject</div>
    </Container>
  );
};

export default SentenceObject;


