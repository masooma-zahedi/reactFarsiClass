import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const items1 = [
  { id: 1, word: 'ساندِویچ', image: 'https://www.sargento.com/assets/Uploads/Recipe/Image/Sargento11501.jpg' },
  { id: 2, word: 'کُنسِروِ ماهی', image: 'https://100jewishfoods.tabletmag.com/wp-content/uploads/2018/02/tuna-fish.jpg' },
  { id: 3, word: 'بُطری آب', image: 'https://dayapolymercaspian.com/wp-content/uploads/2019/05/293f571bace5aea56074a1106afe3842.jpg' },
  { id: 4, word: 'مارشمالو', image: 'https://www.finedininglovers.com/sites/default/files/body_images/marshmallows-what-are%C2%A9iStock.jpg' },
  { id: 5, word: 'میوِه خُشک', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6HQNf43QNPQjfDv86t7pHFhWweeCEpHbpA&s' },
  { id: 6, word: 'چای', image: 'https://goodricketea.com/cdn/shop/articles/IMAGE-2.png?v=1686659498' },
  { id: 7, word: 'نوشابه', image: 'https://mykathmandukitchen.com/wp-content/uploads/2018/03/coke-all1.png' },
  { id: 8, word: 'کُلوچه', image: 'https://harnika.ir/wp-content/uploads/2022/10/koloche-ahari-min.jpg' },
  { id: 9, word: 'نان ', image: 'https://cdn.vectorstock.com/i/1000v/53/07/thanksgiving-baked-bread-cartoon-colored-clipart-vector-43185307.jpg' },
  { id: 10, word: 'بیسکویت', image: 'https://www.shutterstock.com/image-vector/illustration-on-theme-big-set-600nw-1530904565.jpg' }
];

const items2 = [
  { id: 1, word: 'چادُر', image: 'https://classroomclipart.com/image/static7/preview2/small-backpacking-tent-clip-art-59364.jpg' },
  { id: 2, word: 'کوله‌پُشتی', image: 'https://i.ebayimg.com/images/g/xEYAAOSw4P9lFi~c/s-l1200.png' },
  { id: 3, word: 'چِراغ ', image: 'https://cdn.outsideonline.com/wp-content/uploads/2018/08/17/barebones-canyon-light_s.jpg' },
  { id: 4, word: 'کیسه خواب', image: 'https://m.media-amazon.com/images/I/61X+v2ij6KL._AC_UF1000,1000_QL80_.jpg' },
  { id: 5, word: 'اُجاقِ گاز', image: 'https://sarvkooh.ir/wp-content/uploads/2021/04/125-6.jpg' },
  { id: 6, word: 'قُمقُمه', image: 'https://www.overlanded.com/wp-content/uploads/2023/02/vessel-32-oz-stainless-steel-camping-water-bottle-tuff-stuff-overland-ts-8-1100-6.webp' },
  { id: 7, word: 'پَتو', image: 'https://kodiakcanvas.com/cdn/shop/files/1351_Main__73673.1637789104.1280.1280.jpg?v=1701717233&width=1214' },
  { id: 8, word: 'فَندک', image: 'https://images.thdstatic.com/productImages/3e3fe8a9-efac-4ed9-a3bb-5fdee54a2da7/svn/bic-lighters-ump4dc-ast-64_1000.jpg' },
  { id: 9, word: 'نَقشه', image: 'https://media.gettyimages.com/id/165586562/vector/treasure-map-cartoon.jpg?s=1024x1024&w=gi&k=20&c=gnkFtgjNxJMXYpE3brL_CEOcHCTpy3YcLDWUhD_vSlU=' },
  { id: 10, word: 'کَفشِ کوه', image: 'https://www.shutterstock.com/image-vector/hiking-shoes-boots-vector-illustration-260nw-354922850.jpg' }
];

const items3 = [
  { id: 1, word: 'جَنگَل', image:'https://foodtank.com/wp-content/uploads/2015/09/agroforestry-FAO.jpg'},
  { id: 2, word: 'دِرَخت', image:'https://www.fertilome.com/media/klowrey/Article%20Images/Tree.jpg'},
  { id: 3, word: 'کوه', image:'https://upload.wikimedia.org/wikipedia/commons/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg'},
  { id: 4, word: 'رودخانه', image:'https://img.redbull.com/images/c_crop,x_0,y_0,h_3840,w_5760/c_fill,w_800,h_539/q_auto,f_auto/redbullcom/2024/9/18/uarvhdfxqihzmnyddkoo/adrian-mattern-kayak-ivindo-gabon'},
  { id: 5, word: 'دَریاچِه', image:'https://t4.ftcdn.net/jpg/04/30/46/87/360_F_430468753_hjeCITV6815pAztrEiOyElhwCao4v6XS.jpg'},
  { id: 6, word: 'خورشید', image:'https://static.scientificamerican.com/sciam/cache/file/A53E2873-F8D7-48F7-8DD5FB9F5B32A420_source.jpg?w=1200'},
  { id: 7, word: 'اَبر', image:'https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15788040/20150428-cloud-computing.0.1489222360.jpg?quality=90&strip=all&crop=0,15.095986038394,100,69.808027923211'},
  { id: 8, word: 'سِتارِه', image:'https://imageio.forbes.com/specials-images/imageserve/6724a083c587bccd03d3b5a9/0x0.jpg?format=jpg&crop=3077,1729,x1272,y0,safe&height=600&width=1200&fit=bounds'},
  { id: 9, word: 'ماه', image: 'https://images.newscientist.com/wp-content/uploads/2024/06/27164847/SEI_210650080.jpg' },
  { id: 10, word: 'بیابان', image: 'https://cdn.prod.website-files.com/5f58a077d654db1a689fd95b/60ab777e17b2c9be9058c96c_picfair-01350937-dunes-and-desert-landscape-of-namib-fu-PREVIEW-ONLY.jpg' }
];

const itemsFood = [
  { id: 3, word: 'پَنیر', image: 'https://img.freepik.com/premium-vector/cartoon-drawing-cheese-with-face-it_602454-7870.jpg' },
  { id: 4, word: 'تُخم‌مُرغ', image: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/509fefb5-bf9c-42d5-934a-0425d8612e11/eadbd16b-14a1-4191-809e-34232364e071.png' },
  { id: 5, word: 'مُرَبا', image: 'https://icon2.cleanpng.com/ci2/gzz/iut/aqru265v3.webp' },
  { id: 6, word: 'کَرِه', image: 'https://thumbs.dreamstime.com/z/cartoon-butter-cutting-board-margarine-spread-natural-dairy-product-vector-brick-wooden-high-calorie-food-cooking-225918083.jpg' },
  { id: 7, word: 'عَسَل', image: 'https://t4.ftcdn.net/jpg/06/12/86/49/360_F_612864989_v6TrLkbttR4sjm9vj7bMvtTxO7Xw4ZXY.jpg' },
  { id: 8, word: 'گِردو', image: 'https://e7.pngegg.com/pngimages/836/823/png-clipart-walnut-transparency-walnut-food-desktop-wallpaper.png' },
  { id: 9, word: 'چای', image: 'https://img.freepik.com/premium-vector/cartoon-illustration-cup-tea-with-smiley-face_180868-3002.jpg?w=360' },
  { id: 10, word: 'آب‌میوه', image: 'https://img.freepik.com/premium-vector/orange-fruit-juice-vector-logo_1306769-453.jpg' },
  { id: 12, word: 'خامِه', image: 'https://png.pngtree.com/png-vector/20220519/ourmid/pngtree-meringue-cream-icon-cartoon-vector-png-image_4691580.png' },
  { id: 19, word: 'ماست', image: 'https://www.shutterstock.com/image-vector/spoon-yogurt-vector-illustration-600nw-1396014698.jpg' },
];
const transport1 = [
  { id: 1, word: 'ماشین', image: 'http://i.pinimg.com/474x/07/ef/87/07ef878fdd9734f674ce709bfb6523be.jpg' },
  { id: 2, word: 'اتوبوس', image: 'https://www.citypng.com/public/uploads/preview/white-cartoon-illustration-bus-7040816948746366ehecfbrpq.png' },
  { id: 3, word: 'قطار', image: 'https://static.vecteezy.com/system/resources/previews/033/520/223/non_2x/train-cartoon-illustration-train-train-engine-train-cartoon-train-cartoon-cartoon-ai-generative-png.png' },
  { id: 4, word: 'هواپیما', image: 'https://img.freepik.com/free-vector/airplane-cartoon-sticker-white-background_1308-76926.jpg?semt=ais_hybrid&w=740' },
  { id: 5, word: 'قایق', image: 'https://media.istockphoto.com/id/2150065784/vector/cute-sailing-ship-marine-transport-clipart-vector-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=upvS-ntka7jrD27TTxM6Z6N08hHdH9aA_KzRKqpabpE=' },
  { id: 6, word: 'دوچرخه', image: 'https://www.clker.com/cliparts/9/2/a/5/1217862219992805751lescinqailes_bicycle.svg.hi.png' },
  { id: 7, word: 'تاکسی', image: 'https://t3.ftcdn.net/jpg/04/74/98/04/360_F_474980460_iR8TN3ev27lpeg8tZVu1plboDfew2j5W.jpg' },
  { id: 8, word: 'کشتی', image: 'https://i.pinimg.com/736x/6d/c3/79/6dc3792181622a60cf04c512af0e78a7.jpg' },
  { id: 9, word: 'کامیون', image: 'https://img.freepik.com/premium-vector/cartoon-truck-trailer-isolated-vehicle-vector-illustration_939711-4064.jpg?semt=ais_hybrid&w=740' },
  { id: 10, word: 'موتور', image: 'https://t3.ftcdn.net/jpg/06/08/99/08/360_F_608990870_yAJaCtKKmmhU7jiSuAS8ZxsdL5VlA9ZM.jpg' }
];
const diningTableItems = [
  { id: 1, word: 'بشقاب', image: 'https://cdn.pixabay.com/photo/2012/04/13/01/39/plate-31732_640.png' },
  { id: 2, word: 'قاشق', image: 'https://img.freepik.com/premium-vector/cartoon-spoon-vector-illustration-cooking-designs_1138840-4464.jpg' },
  { id: 3, word: 'چنگال', image: 'https://t4.ftcdn.net/jpg/10/43/71/15/360_F_1043711536_EeQ5oQvMidA4xEv5ZLnt4zAYsZ8N19pt.jpg' },
  { id: 4, word: 'کارد', image: 'https://img.freepik.com/free-vector/floating-knife-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-premium-vector_138676-5784.jpg' },
  { id: 5, word: 'لیوان', image: 'https://img.freepik.com/premium-vector/hand-drawn-glass-cartoon-vector-illustration-clipart-white-background_191095-41097.jpg' },
  { id: 6, word: ' دستمال کاغذی', image: 'https://static.vecteezy.com/system/resources/previews/014/504/574/non_2x/box-with-napkins-icon-cartoon-style-vector.jpg' },
  { id: 9, word: 'پارچ آب', image:'https://img.freepik.com/premium-photo/cartoon-pitcher-with-blue-handle-white-background-generative-ai_1034058-50154.jpg'},
  { id: 11, word: 'کاسه', image: 'https://img.freepik.com/free-vector/blue-bowl-from-goldilocks-story_1308-168955.jpg?semt=ais_items_boosted&w=740' },
  { id: 13, word: 'نمکدان', image: 'https://static.vecteezy.com/system/resources/previews/027/565/570/non_2x/salt-shaker-bottle-seasoning-container-cartoon-vector.jpg' },
  { id: 15, word: 'سینی', image: 'https://www.shutterstock.com/image-vector/cartoon-food-tray-icon-vector-260nw-2588075195.jpg' }
];
const bathItems = [
  { id: 1, word: 'صابون', image: 'https://www.shutterstock.com/image-vector/soap-bubbles-260nw-187215893.jpg' },
  { id: 3, word: 'لیف', image: 'https://media.istockphoto.com/id/1371070501/vector/purple-shower-loofah-cartoon-bath-mesh-sponge.jpg?s=612x612&w=0&k=20&c=a2ZgaNp9--EvSGl6LNgW6F7iNdWSRQ816yigek4jPZI=' },
  { id: 4, word: 'حوله', image: 'https://www.shutterstock.com/image-vector/cartoon-home-kitchen-towel-isolated-600nw-95509165.jpg' },
  { id: 6, word: 'خمیردندان', image: 'https://png.pngtree.com/png-clipart/20230307/ourmid/pngtree-toothpaste-cartoon-png-image_6635972.png' },
  { id: 7, word: 'تیغ اصلاح', image: 'https://thumbs.dreamstime.com/b/creative-sticker-cartoon-disposable-razor-original-150936137.jpg' },
  { id: 8, word: 'آینه', image: 'https://cdn.pixabay.com/photo/2022/09/08/22/57/mirror-7442023_960_720.png' },
  { id: 10, word: 'سطل زباله', image: 'https://thumbs.dreamstime.com/z/cartoon-trash-can-20097337.jpg' },
  { id: 12, word: 'پادری', image: 'https://img.kwcdn.com/product/fancy/fdea41db-2986-4acf-afc9-58d85b45d29c.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp' },
  { id: 13, word: 'وان حمام', image: 'https://as2.ftcdn.net/jpg/02/97/22/83/1000_F_297228382_4NN3RAuZTdc4A0qZWyBexgsVt6BLOFwJ.jpg' },
  { id: 15, word: 'دوش', image: 'https://t4.ftcdn.net/jpg/01/23/78/13/360_F_123781353_rLB4kTmqwgoWpW0YNBjGN8Vu99PCFXIw.jpg' }
];





const MatchGame = () => {
    const [items,setItems] = useState(items1);
  const[idModal,setIdModal]=useState('item1');
  const [newtitle,setNewtitle] = useState(false)

  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [turnIndex, setTurnIndex] = useState(0);
  const [data, setData] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);
  const [disableClicks, setDisableClicks] = useState(false);
  const [alert, setAlert] = useState('');
  const [winner, setWinner] = useState(null);
  // 

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (matchedIds.length === items.length) {
      const maxScore = Math.max(...players.map(p => p.score));
      const topPlayers = players.filter(p => p.score === maxScore);
      if (topPlayers.length === 1) {
        setWinner(topPlayers[0]);
      } else {
        setWinner({ name: 'همه برنده‌اند! 🎉', score: maxScore });
      }
    }
  }, [matchedIds]);

  const resetGame = () => {
    const shuffled = shuffleArray([...items.map(i => ({ ...i, type: 'image' })), ...items.map(i => ({ ...i, type: 'word' }))]);
    setData(shuffled);
    setMatchedIds([]);
    setSelectedCards([]);
    setTurnIndex(0);
    setPlayers(players.map(p => ({ ...p, score: 0 })));
    setDisableClicks(false);
    setAlert('');
    setWinner(null);
    setNewtitle(false)
  };

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  function handlePlayerSubmit(e) {
    e.preventDefault();
    if (!currentPlayer.trim()) {
      setAlert('لطفاً نام بازیکن را وارد کنید.');
      return;
    }
    if (!players.find(p => p.name === currentPlayer)) {
      setPlayers([...players, { name: currentPlayer, score: 0 }]);
    }
    setCurrentPlayer('');
    setAlert('');
  }

  function handleCardClick(item) {
    if (players.length === 0) {
      setAlert('اول بازیکن‌ها را اضافه کنید.');
      return;
    }
    if (disableClicks || matchedIds.includes(item.id)) return;
    if (selectedCards.find(card => card.index === item.index)) return;

    const newSelected = [...selectedCards, item];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      setDisableClicks(true);

      const [first, second] = newSelected;
      if (first.id === second.id && first.type !== second.type) {
        setMatchedIds([...matchedIds, first.id]);
        setPlayers(prev => {
          const updated = [...prev];
          updated[turnIndex].score += 1;
          return updated;
        });
        setTimeout(() => {
          setSelectedCards([]);
          setDisableClicks(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setSelectedCards([]);
          setTurnIndex((prev) => (prev + 1) % players.length);
          setDisableClicks(false);
        }, 1000);
      }
    }
  }

  // new change *****************************
    const stylebg = {
    backgroundColor:'rgba(232, 231, 231, 0.99)'
  }
// test
  const questionsqq = (e, i) => {
    // setItems([]);
    setItems(e);
    setIdModal(i);
    setNewtitle(true)
    setPlayers([]);
    setCurrentPlayer('');
    setData([]);
  setTurnIndex(0);
  setSelectedCards([]);
  setMatchedIds([]);
  setDisableClicks(false);
  setAlert('');
  setWinner(null);
};



  return (
    <div className=" mt-5 ">
              {/* masooma */}
        {/*Start modal for titles */}
        <div className="border border-success container text-end p-3">
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
                    <button className='btn  shadow-sm border  m-2' style={stylebg} onClick={()=>questionsqq(items1,'item1')}>خوراکی کمپینگ</button>
                    <button className='btn shadow-sm border  m-2' style={stylebg} onClick={()=>questionsqq(items2,'item2')}>وسایل کمپینگ</button>
                    <button className='btn shadow-sm border m-2' style={stylebg} onClick={()=>questionsqq(items3,'item3')}>طَبیعَت</button>
                    <button className='btn shadow-sm border m-2' style={stylebg} onClick={()=>questionsqq(itemsFood,'item4')}>صبحانه</button>
                    <button className='btn shadow-sm border  m-2' style={stylebg} onClick={()=>questionsqq(transport1,'item5')}>حمل و نقل</button>
                    <button className='btn shadow-sm border  m-2' style={stylebg} onClick={()=>questionsqq(diningTableItems,'item6')}>میز غذاخوری</button>
                    <button className='btn shadow-sm border  m-2' style={stylebg} onClick={()=>questionsqq(bathItems ,'item7')}>وسایل حمام</button>
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



      <div className="container border border-warning p-4">
        <h2 className="mb-3">🎮 بازی جفت‌سازی کلمه و تصویر</h2>

        {alert && <div className="alert alert-warning">{alert}</div>}

        <form onSubmit={handlePlayerSubmit} className="mb-3 d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="نام بازیکن"
            value={currentPlayer}
            onChange={(e) => setCurrentPlayer(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">افزودن بازیکن</button>
        </form>

        {players.length > 0 && (
          <div className="mb-3">
            <strong>نوبت: </strong> {players[turnIndex]?.name}
            <ul className="mt-2">
              {players.map((p, i) => (
                <li key={i}>{p.name} — امتیاز: {p.score}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="row g-3">
          {data.map((item, index) => {
            const isFlipped =
              matchedIds.includes(item.id) ||
              selectedCards.find(c => c.word === item.word && c.type === item.type);

            return (
              <div className="col-3" key={index} onClick={() => handleCardClick({ ...item, index })}>
                <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}> 
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-light d-flex align-items-center justify-content-center fw-bold fs-3">
                      {index + 1}
                    </div>
                    <div className="flip-card-back bg-success text-white d-flex align-items-center h1 justify-content-center">
                      {item.type === 'word' ? (
                        <strong>{item.word}</strong>
                      ) : (
                        <img src={item.image} alt={item.word} style={{ maxHeight: '120px' }} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {winner && (
          <div className="alert alert-success mt-4 winner-alert animate__animated animate__bounceIn">
            🏆 <span className="display-5">برنده بازی: <strong>{winner.name}</strong></span>
            <div className="fs-4">با {winner.score} امتیاز! 🎁 جایزه‌ات مبارک!</div>
          </div>
        )}

        <button className="btn btn-danger mt-4" onClick={resetGame}>{newtitle == true ? `شروع بازی ` : 'ریست بازی'}</button>

        <style jsx>{`
          .flip-card {
            background-color: transparent;
            width: 100%;
            height: 150px;
            perspective: 1000px;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }

          .flipped .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          }

          .flip-card-back {
            transform: rotateY(180deg);
          }

          .winner-alert {
            text-align: center;
            background: linear-gradient(to right, #fceabb, #f8b500);
            color: #222;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 6px 16px rgba(0,0,0,0.3);
          }
        `}</style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      </div>
    </div>
  );
};

export default MatchGame;
