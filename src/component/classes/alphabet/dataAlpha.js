import {infoCard} from "./cardAlpha/cardDataAlpha";
import { nanoid } from "nanoid";
// ************************************************************************ REFRENCES****************************************************************
// refrences:
// بازی جمله سازی با تصویر: component:ObjectSentenceGamse ____ data: questions
//  بازی جفت سازی کلمات :   componetn:MathGame ______ data : inside component
//  با هم بخوانیم : component : SylabeWords--> Reading _________ data : sylabelWord1
// بازی جدول(اعداد و رنگها و ...) : component :FlippingTable _____ data : tableDataNum
// جدول کلمات : component : BrokenGlassess --> WordBox _____ data : words   ;&&&&&&&&;   component:  WordTable --> WordBox ____ data: words
// داستان ها : component : CarouselAlpha _____ data : storyAlpha3    ;&&&&&&&;    component: TheStory ____ data: ququly
// بخش های کلمات : component : SyllableApp __________ data : در خود صفحه سایت وارد می شود
// ***************************************************************************************************************************************************
// ******************************* Start Just Carousel ***************
export let alphaCrousel={
    buttonId:"alphaC1",
    carouselImg:[
    "./images/assetAlpha/cardAlpha/Untitled-2.jpg",
    "./images/assetAlpha/cardAlpha/Untitled-2-2.jpg",
    "./images/assetAlpha/cardAlpha/Untitled-2-3.jpg",
    "./images/assetAlpha/cardAlpha/Untitled-2-4.jpg",
    "./images/assetAlpha/cardAlpha/Untitled-2-5.jpg",
    "./images/assetAlpha/cardAlpha/Untitled-2-6.jpg",
]}

// ****************** Start Alpha Story*********
export let storyAlpha1={
    buttonId:"storyAlp1",
    carouselImg:[
    "/images/assetAlpha/alphaStory/family/family-1.png",
    "/images/assetAlpha/alphaStory/family/family-2.png",
    "/images/assetAlpha/alphaStory/family/family-3.png",
    "/images/assetAlpha/alphaStory/family/family-4.png",
]}
export let storyAlpha2={
    buttonId:"storyAlp2",
    carouselImg:[
        "/images/assetAlpha/alphaStory/variety/variety-1.png",
        "/images/assetAlpha/alphaStory/variety/variety-2.jpg",
        "/images/assetAlpha/alphaStory/variety/variety-3.jpg",
        "/images/assetAlpha/alphaStory/variety/variety-4.jpg",
        "/images/assetAlpha/alphaStory/variety/variety-5.jpg",
        "/images/assetAlpha/alphaStory/variety/variety-6.jpg",
        "/images/assetAlpha/alphaStory/variety/variety-7.jpg",
        "/images/assetAlpha/alphaStory/variety/variety-8.png",
        "/images/assetAlpha/alphaStory/variety/kakoly.png",
        "/images/assetAlpha/alphaStory/variety/happyFamily.png",
        "/images/assetAlpha/alphaStory/variety/sara.png",
        "/images/assetAlpha/alphaStory/variety/windCat.png",
        "/images/assetAlpha/alphaStory/variety/firefighter.png",
        "/images/assetAlpha/alphaStory/variety/goodBoy.png",
        "/images/assetAlpha/alphaStory/variety/police1.png",
        "/images/assetAlpha/alphaStory/variety/waiting-1.png",
        "/images/assetAlpha/alphaStory/variety/waiting-2.png",
        "/images/assetAlpha/alphaStory/variety/doctor-1.png",
        "/images/assetAlpha/alphaStory/variety/dad&basket.png",
        "/images/assetAlpha/alphaStory/variety/umberellaBoy.png",
        "/images/assetAlpha/alphaStory/variety/snowPlay.png",
        "/images/assetAlpha/alphaStory/variety/startEarly.png",
        "/images/assetAlpha/alphaStory/variety/dad_camping.png",
    ]}
    
export let storyAlpha3={
    buttonId:"storyAlp3",
    carouselImg:[
        "/images/assetAlpha/alphaStory/anty/anty-1.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-2.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-3.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-4.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-5.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-6.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-7.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-8.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-9.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-10.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-11.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-12.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-13.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-14.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-15.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-16.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-17.jpg",
        "/images/assetAlpha/alphaStory/anty/anty-18.jpg",
]}
export let storyAlpha4={
    buttonId:"storyAlp4",
    carouselImg:[
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-ba7f09f6-beeb.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-cfacfab0-c5d2.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-a0117f2a-2b50.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-fccf781d-0792.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-228b6786-04cd.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-2234e576-1925.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-7df53eef-6038.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-5446f0f4-a95f.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-3275bc5d-477b.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-7b1d3070-d2dd.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-582c0078-dfab.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-be365445-3d06.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-09357cfb-7b7d.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-14f59814-1b43.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-2d7d8fa4-e1a0.png",
        "https://www.farsiamoozi.com/wp-content/uploads/h5p/content/51/images/file-3f309db7-78ca.png",
]}

export let ququly ={
    wordId:"ququl",
    targetHref:"ququlyQu",
    titleStory:" داستان قوقولی ",
    imageStory:["/images/assetWord/storyWord/ququly.png",],
    wordPart:[
        {
            wordMean:"",
            engMean:""
        },
    ],
    accordionItems : [
        {
          title: "",
          content: "",
        },
      ]

    
}
export let puyaStory ={
    wordId:"puya1",
    targetHref:"CarouselAlphaExp/alphaStory/puyaStory1",
    titleStory:" داستان روز بارانی پویا ",
    imageStory:["/images/assetWord/storyWord/puya.png",],
    wordPart:[
        {
            wordMean:"",
            engMean:""
        },
    ],
    accordionItems : [
        {
          title: "",
          content: "",
        },
      ]

    
}
export let aminFireFighter ={
    wordId:"amin1",
    targetHref:"aminfireFighter1",
    titleStory:"داستان اَمین آتَش نِشان  ",
    imageStory:["/images/assetAlpha/alphaStory/storyPage/AminFireFighter.png",],
    wordPart:[
        {
            wordMean:"",
            engMean:""
        },
    ],
    accordionItems : [
        {
          title: "",
          content: "",
        },
      ]

    
}
export let pami ={
    wordId:"pami1",
    targetHref:"woreidPami1",
    titleStory:"داستان پامی با هزارپا  ",
    imageStory:["/images/assetAlpha/alphaStory/storyPage/pami.png",],
    wordPart:[
        {
            wordMean:"",
            engMean:""
        },
    ],
    accordionItems : [
        {
          title: "",
          content: "",
        },
      ]

    
}
export let smallPea ={
    wordId:"pea1",
    targetHref:"smallPea1",
    titleStory:"داستان نخود کوچولو",
    imageStory:["/images/assetAlpha/alphaStory/storyPage/smallPea.png",],
    wordPart:[
        {
            wordMean:"",
            engMean:""
        },
    ],
    accordionItems : [
        {
          title: "",
          content: "",
        },
      ]

    
}

// ********************************* End Alpha Story***************
// ************************************************* start short sound *************************
let shortSoundExa = [];
infoCard.map((item , index)=>{
    shortSoundExa =[...shortSoundExa, item.shortSoundPic]
})
export let alphaShortCrousel={
    buttonId:"shortCa1",
    carouselImg:shortSoundExa
}
// ************************************************* End short sound *****************************
// ********************************* start long sound ********************************************
let longSoundExa = [];
infoCard.map((item , index)=>{
    longSoundExa =[...longSoundExa, item.longSoundPic]
})
export let alphaLongCrousel={
    buttonId:"longCa1",
    carouselImg:longSoundExa
}
//********************************** */ End long sound *******************************************
// ******************************* End Just Carousel data ****************************************
// ************************* Modal for new words (for Side Bar ) (فهرست های جانبی side bar)****************
export let contentListAlpha = {
        newword :{
            idModal:"newTest",
            infoWords:[
            {id:nanoid(4),title:"رنگ ها",targetHref:"colorPart-2",idLetter:"color1"},
            {id:nanoid(4),title:"میوه ها",targetHref :"fruitPart-2",idLetter:"fruit1"},
            {id:nanoid(4),title:"اعضای بدن",targetHref :"bodyPart-2",idLetter:"body1"},
            {id:nanoid(4),title:"پوشیدنی ها",targetHref :"wearPart-2",idLetter:"wear1"},
            {id:nanoid(4),title:"لوازم تحریر",targetHref :"supplyPart-2",idLetter:"supply1"},
            {id:nanoid(4),title:"روزهای هفته",targetHref :"daysPart-2",idLetter:"days1"},
            {id:nanoid(4),title:"اعداد 0-20 ",targetHref :"numPart-2",idLetter:"nums1"},
            {id:nanoid(4),title:"جملات کوتاه دستوری",targetHref :"orderPart-2",idLetter:"orderv1"},
            {id:nanoid(4),title:"ظروف آشپزخانه",targetHref :"kitchen1Part-2",idLetter:"kitchen1-1"},
            {id:nanoid(4),title:"شغل ها ",targetHref :"professionsPart-2",idLetter:"kitchen1-1"},
            {id:nanoid(4),title:"حیوانات ",targetHref :"animalsPart-2",idLetter:"animal-1"},
            {id:nanoid(4),title:"بخش های خانه ",targetHref :"houseParts-2",idLetter:"houseP-1"},
            {id:nanoid(4),title:"نشانه های بیماری",targetHref :"healthP-2",idLetter:"healthPro-1"},
            {id:nanoid(4),title:"حَشَرات",targetHref :"insectA-2",idLetter:"insectA-1"},
            ],
        },
        readTogether :{
            idModal:"readTo1",
            infoWords:[
            {id:nanoid(4),title:"با هم بخوانیم-1(س)",targetHref:"reading/read-1",idLetter:"readtogether-1"},
            {id:nanoid(4),title:"با هم بخوانیم-2",targetHref:"reading/read-2",idLetter:"readtogether-2"},
            {id:nanoid(4),title:"با هم بخوانیم-3",targetHref:"reading/read-3",idLetter:"readtogether-3"},
            {id:nanoid(4),title:"با هم بخوانیم-4(ش)",targetHref:"reading/read-4",idLetter:"readtogether-4"},
            {id:nanoid(4),title:"با هم بخوانیم-5(ع)",targetHref:"reading/read-5",idLetter:"readtogether-5"},
            {id:nanoid(4),title:"با هم بخوانیم-6(ق)",targetHref:"reading/read-6",idLetter:"readtogether-6"},
            {id:nanoid(4),title:"با هم بخوانیم-7(ن)",targetHref:"reading/read-7",idLetter:"readtogether-7"},
            {id:nanoid(4),title:"با هم بخوانیم-8 (ذ)",targetHref:"reading/read-8",idLetter:"readtogether-8"},
            ],
        },
        brokenWords :{
            idModal:"brokenWords11",
            infoWords:[
                {id:nanoid(4),title:"حروف اب پ",targetHref:"wordTable/wordBox-4",idLetter:"wordB-4"},
            {id:nanoid(4),title:" حرف ر",targetHref:"wordTable/brokenW-5",idLetter:"broken-5"},
            {id:nanoid(4),title:"حرف ز",targetHref:"wordTable/brokenW-6",idLetter:"broken-6"},
            {id:nanoid(4),title:" کلمات تا ژ",targetHref:"wordTable/wordBox-1",idLetter:"wordB-1"},
            {id:nanoid(4),title:" حرف ق",targetHref:"wordTable/brokenW-1",idLetter:"broken-1"},
            {id:nanoid(4),title:" حرف ص",targetHref:"wordTable/brokenW-2",idLetter:"broken-2"},
            {id:nanoid(4),title:" حرف غ",targetHref:"wordTable/brokenW-3",idLetter:"broken-3"},
            {id:nanoid(4),title:" حرف ف",targetHref:"wordTable/brokenW-4",idLetter:"broken-4"},
            {id:nanoid(4),title:" حرف ک",targetHref:"wordTable/wordBox-5",idLetter:"wordB-5"},
            {id:nanoid(4),title:" حرف گ",targetHref:"wordTable/brokenW-8",idLetter:"broken-8"},
            {id:nanoid(4),title:" حرف ل",targetHref:"wordTable/wordBox-2",idLetter:"wordB-2"},
            {id:nanoid(4),title:"حروف س",targetHref:"wordTable/wordBox-6",idLetter:"wordB-6"},
            {id:nanoid(4),title:"حروف ش",targetHref:"wordTable/wordBox-7",idLetter:"wordB-7"},
            {id:nanoid(4),title:"حرف م",targetHref:"wordTable/wordBox-3", idLetter:"wordB-3"},  
            {id:nanoid(4),title:"حرف ن",targetHref:"wordTable/brokenW-9",idLetter:"broken-9"},
            {id:nanoid(4),title:"حرف ض",targetHref:"wordTable/brokenW-10",idLetter:"broken-10"},
            {id:nanoid(4),title:"مسابقه کلمات",targetHref:"wordTable/wordGameGride",idLetter:"broken-11"},
            {id:nanoid(4),title:"چرخش کلمات",targetHref:"wordTable/wordFlipBox",idLetter:"broken-12"},
            ],
        },
        gameTable :{
            idModal:"tableGame1",
            infoWords:[
            {id:nanoid(4),title:"بازی اعداد",targetHref:"FlippingTableExa/numberGame",idLetter:"numberGame-1"},
            {id:nanoid(4),title:"بازی آشپزخانه",targetHref:"kitchenGame",idLetter:"kitchentGame-1"},
            {id:nanoid(4),title:" بازی شغل ها و میوه ها",targetHref:"professions",idLetter:"professionsGame-3"},
            {id:nanoid(4),title:"بازی حیوانات",targetHref:"animals",idLetter:"animalsGame-3"},
            {id:nanoid(4),title:"بازی رنگ و بدن",targetHref:"tableColor_body",idLetter:"colorB-1"},
            {id:nanoid(4),title:" جمله سازی با تصویر",targetHref:"objectSentenceGame",idLetter:"objectS-1"},
            {id:nanoid(4),title:" جفت سازی کلمه ها",targetHref:"matchGameWord",idLetter:"matchG-1"},
            ],
        },
        storyAlpha:{
            idModal:"storyAlpha1",
            infoWords:[
            {id:nanoid(4),title:"خانواده من",targetHref:"CarouselAlphaExp/storyA1",idLetter:"storyAl-1"},
            {id:nanoid(4),title:"متون کوتاه",targetHref:"CarouselAlphaExp/storyA2",idLetter:"storyAl-2"},
            {id:nanoid(4),title:"مورچه تنبل",targetHref:"CarouselAlphaExp/storyA3",idLetter:"storyAl-3"},
            {id:nanoid(4),title:"کلمات شبیه",targetHref:"CarouselAlphaExp/storyA4",idLetter:"storyAl-4"},
            {id:nanoid(4),title:"قوقولی",targetHref:"CarouselAlphaExp/alphaStory/ququlyQu",idLetter:"ququl"},
            {id:nanoid(4),title:"پویا و روز بارانی",targetHref:"CarouselAlphaExp/alphaStory/puyaStory1",idLetter:"puya1"},
            {id:nanoid(4),title:"اَمین آتَش نِشان",targetHref:"CarouselAlphaExp/alphaStory/aminFireFighter1",idLetter:"amin1"},
            {id:nanoid(4),title:"پامی با هزار پا",targetHref:"CarouselAlphaExp/alphaStory/worriedPami1",idLetter:"pami1"},
            {id:nanoid(4),title:"نُخود کوچَک",targetHref:"CarouselAlphaExp/alphaStory/smallPea1",idLetter:"pea1"},
            {id:nanoid(4),title:"داستان های بیشتر",targetHref:"moreStoryWordsAlpha",idLetter:"story"},
            ],
        },
}


// ************************* end List for List Content****************
// ******************************* Start SylabelWords data  (با هم بخوانیم ) ************************************************

// ##########--> برای حرف ت ##########
export let sylabelWord1={
    buttonTargetId:"testSylabe1",
    titleHead:"با هم بخوانیم",
    titleColor:"rgb(187, 39, 88)",
    sylabelBg:"rgb(209, 79, 79)",
    sentenceRow:[
        // each arrow is one sentence
        [
            {
            word:"او",
            syla:""
            },
            {
            word:"توت",
            syla:""
            },
            {
            word:"داد.",
            syla:""
            },
        ],
        [
            {
            word:"دوستَم",
            syla:"دوس + تَم"
            },
            {
            word:"با",
            syla:""
            },
            {
            word:"سام",
            syla:""
            },
            {
            word:"دَست",
            syla:""
            },
            {
            word:"داد.",
            syla:""
            },
        ],
        [
            {
            word:"او",
            syla:""
            },
            {
            word:"تاب",
            syla:""
            },
            {
            word:"بَست.",
            syla:""
            },
        ],
        [
            {
            word:"او",
            syla:""
            },
            {
            word:"با",
            syla:""
            },
            {
            word:"اَسَد",
            syla:"اَ + سَد"
            },
            {
            word:"دَست",
            syla:""
            },
            {
            word:"داد.",
            syla:""
            },
        ],
        [
            {
            word:"سام",
            syla:""
            },
            {
            word:"تاب",
            syla:""
            },
            {
            word:"بَست.",
            syla:""
            },
        ],
        [
            {
            word:"سام",
            syla:""
            },
            {
            word:"با",
            syla:""
            },
            {
            word:"اَسَد",
            syla:"اَ + سَد"
            },
            {
            word:"دوست",
            syla:""
            },
            {
            word:"اَست.",
            syla:""
            },
        ],
        [
            {
            word:"سَبا",
            syla:""
            },
            {
            word:"با",
            syla:""
            },
            {
            word:"سوت",
            syla:""
            },
            {
            word:"آمَد.",
            syla:"آ + مَد"
            },
        ],
        [
            {
            word:"او",
            syla:""
            },
            {
            word:"ماست",
            syla:""
            },
            {
            word:"داد.",
            syla:""
            },
        ],
    ]
}
// ########## برای حرف ت <--########

// ##########-->برای حرف  (ا - و - ی - ر - س - ض - ش - ب)  ########
export let sylabelWord2={
    buttonTargetId:"testSylabe2",
    titleHead:"با هم بخوانیم",
    titleColor:"rgb(58, 86, 210)",
    sylabelBg:"rgb(36, 113, 190)",
    sentenceRow:[
        // each arrow is one sentence
        [
            {
            word:"آسِمان",
            syla:"آ + سِ + مان"
            },
            {
            word:"اَبر",
            syla:""
            },
            {
            word:"دارَد.",
            syla:"دا + رَد"
            },
        ],
        [
            {
            word:"تو",
            syla:""
            },
            {
            word:"دَر",
            syla:""
            },
            {
            word:"سَبَد",
            syla:"سَ + بَد"
            },
            {
            word:"توت",
            syla:""
            },
            {
            word:"داری.",
            syla:"دا + ری"
            },
        ],
        [
            {
            word:"سارا",
            syla:"سا + را"
            },
            {
            word:"با",
            syla:""
            },
            {
            word:"اَدَب",
            syla:"اَ + دَب"
            },
            {
            word:"اَست.",
            syla:""
            },
        ],
        [
            {
            word:"توت",
            syla:""
            },
            {
            word:"تازِه",
            syla:"تا + زِه"
            },
            {
            word:"وَ",
            syla:""
            },
            {
            word:"سَرد",
            syla:""
            },
            {
            word:"بود.",
            syla:""
            },
        ],
        [
            {
            word:"دِرَخت",
            syla:"دِ + رَخت"
            },
            {
            word:"سَبز",
            syla:""
            },
            {
            word:"اَست.",
            syla:""
            },
        ],
        [
            {
            word:"دارا",
            syla:"دا + را"
            },
            {
            word:"سَردَرد",
            syla:"سَر + دَرد"
            },
            {
            word:"دارَد.",
            syla:"دا + رَد"
            },
        ],
        [
            {
            word:"اَسب",
            syla:""
            },
            {
            word:"بار",
            syla:""
            },
            {
            word:"شیر",
            syla:""
            },
            {
            word:"رِضا",
            syla:"رِ + ضا"
            },
            {
            word:"بَشَر",
            syla:"بَ + شَر"
            },
            {
            word:"سیر",
            syla:""
            },
        ],
        [
            {
            word:"شور",
            syla:""
            },
            {
            word:"آبی",
            syla:"آ + بی"
            },
            {
            word:"ریش",
            syla:""
            },
            {
            word:"اَبر",
            syla:""
            },
            {
            word:"شیب",
            syla:""
            },
            {
            word:"سیب",
            syla:""
            },
        ],
        [
            {
            word:"سُرب",
            syla:""
            },
            {
            word:"اَبرو",
            syla:"اَب + رو"
            },
            {
            word:"ساری",
            syla:"سا + ری"
            },
            {
            word:"سَبز",
            syla:""
            },
            {
            word:"سَراب",
            syla:"سَ + راب"
            },
            {
            word:"سُروش",
            syla:"سُ + روش"
            },
        ],
        [
            {
            word:"اَبری",
            syla:"اَب + ری"
            },
            {
            word:"ضارِب",
            syla:"ضا + رِب"
            },
            {
            word:"روسی",
            syla:"رو + سی"
            },
            {
            word:"ویروس",
            syla:"وی + روس"
            },
            {
            word:"زیبا",
            syla:"زی + با"
            },
            {
            word:"خُروس",
            syla:"خُ + روس"
            },
        ],

    ]
}
// ##########-->برای حرف  (ا - و - ی - ر - س - ض - ش - ب)  ########
// ##########-->برای حرف  (از اول تا حرف ظ)  ########
export let sylabelWord3={
    buttonTargetId:"testSylabe3",
    titleHead:"با هم بخوانیم",
    titleColor:"rgb(88, 191, 57)",
    sylabelBg:"rgb(36, 187, 190)",
    sentenceRow:[
        // each arrow is one sentence
        [
            {
            word:"بابا",
            syla:"با + با"
            },
            {
            word:"بی تاب",
            syla:"بی + تاب"
            },
            {
            word:"اَست.",
            syla:""
            },
        ],
        [
            {
            word:"پِدَر ",
            syla:"پِ + دَر"
            },
            {
            word:"شَب",
            syla:""
            },
            {
            word:"دَر",
            syla:""
            },
            {
            word:"حَیاط",
            syla:"حَ + یاط"
            },
            {
            word:"اَست.",
            syla:""
            },
        ],
        [
            {
            word:"حَسن",
            syla:"حَ + سَن"
            },
            {
            word:"شاد",
            syla:""
            },
            {
            word:"اَست.",
            syla:""
            },
        ],
        [
            {
            word:"بابا ",
            syla:"با + با"
            },
            {
            word:"آب",
            syla:""
            },
            {
            word:"داد.",
            syla:""
            },
        ],
        [
            {
            word:"بابا",
            syla:"با + با"
            },
            {
            word:"تَب",
            syla:""
            },
            {
            word:"دارَد.",
            syla:"دا + رَد"
            },
        ],
        [
            {
            word:"حُباب",
            syla:"حُ + باب"
            },
            {
            word:"پاک",
            syla:""
            },
            {
            word:"اَست",
            syla:""
            },
        ],
        [
            {
            word:"شَب",
            syla:""
            },
            {
            word:"تار",
            syla:""
            },
            {
            word:"اَست.",
            syla:""
            },
        ],
        [
            {
            word:"سَبَد",
            syla:"سَ + بَد"
            },
            {
            word:"پُر",
            syla:""
            },
            {
            word:"اَز",
            syla:""
            },
            {
            word:"سیب",
            syla:""
            },
            {
            word:"شُد.",
            syla:""
            },
        ],
        [
            {
            word:"سارا",
            syla:"سا + را"
            },
            {
            word:"توپ",
            syla:""
            },
            {
            word:"را",
            syla:""
            },
            {
            word:"زَد",
            syla:""
            },
        ],
        [
            {
                word:"بابا با حسن در حیاط بود. حسن یک توپ داشت. توپ در سبد بود."
            }
        ],
        [
            {
                word:"بابا توپ را برداشت. حسن با پا توپ را زد. توپ در باد رفت."
            }
        ],
        [
            {
                word:"حسن دوید. توپ به پله خورد و برگشت. بابا خندید. "
            }
        ],
        [
            {
                word:"حسن توپ را بغل کرد. شب شد. بابا و حسن به خانه رفتند."
            }
        ],
    ]
}
// ##########-->برای حرف  (از اول تا حرف ظ)  ########
// ##########-->برای حرف  (از اول تا حرف خ)  ########
export let sylabelWord4={
    buttonTargetId:"testSylabe4",
    titleHead:"با هم بخوانیم",
    titleColor:"rgb(89, 108, 19)",
    sylabelBg:"rgb(100, 190, 36)",
    sentenceRow:[
        // each arrow is one sentence
        [
            {
            word:"آب",
            syla:""
            },
            {
            word:"پیچ",
            syla:""
            },
            {
            word:"چاپ",
            syla:""
            },
            {
            word:"خوب",
            syla:""
            },
            {
            word:"بَحر",
            syla:""
            },
        ],
        [
            {
            word:"پُخت",
            syla:""
            },
            {
            word:"چوب",
            syla:""
            },
            {
            word:"چُرت",
            syla:""
            },
            {
            word:"تاب",
            syla:""
            },
            {
            word:"بَخت",
            syla:""
            },
        ],
        [
            {
            word:"توپ",
            syla:""
            },
            {
            word:"بیخ",
            syla:""
            },
            {
            word:"تیپ",
            syla:""
            },
            {
            word:"بِتا",
            syla:""
            },
            {
            word:"پَتو",
            syla:""
            },
        ],
        [
            {
            word:"تاج",
            syla:""
            },
            {
            word:"ثَبت",
            syla:""
            },
            {
            word:"جیب",
            syla:""
            },
            {
            word:"باج",
            syla:""
            },
            {
            word:"اُتو",
            syla:""
            },
        ],
        [
            {
            word:"چَتر",
            syla:""
            },
            {
            word:"حاج",
            syla:""
            },
            {
            word:"پوچ",
            syla:""
            },
            {
            word:"ثابِت",
            syla:"ثا + بِت"
            },
            {
            word:"تابو",
            syla:"تا + بو"
            },
        ],
        [
            {
            word:"بُطری",
            syla:"بُط + ری"
            },
            {
            word:"دَر",
            syla:""
            },
            {
            word:"سَبَد",
            syla:"سَ + بَد"
            },
            {
            word:"اَست.",
            syla:""
            },
        ],
        [
            {
            word:"شَب",
            syla:""
            },
            {
            word:"باد",
            syla:""
            },
            {
            word:"آمَد.",
            syla:"آ + مَد"
            },
        ],
        [
            {
            word:"آرِزو",
            syla:"آ + رِ + زو"
            },
            {
            word:"دَست",
            syla:""
            },
            {
            word:"پِدَر",
            syla:"پِ + دَر"
            },
            {
            word:"را",
            syla:""
            },
            {
            word:"بوسید.",
            syla:"بو + سید"
            },
        ],
        [
            {
            word:"شَب",
            syla:""
            },
            {
            word:"سَرد",
            syla:""
            },
            {
            word:"شُد.",
            syla:""
            },
        ],
        [
            {
            word:"او",
            syla:""
            },    
            {
            word:"سیب",
            syla:""
            },
            {
            word:"سُرخ",
            syla:""
            },
            {
            word:"دارَد.",
            syla:"دا + رَد"
            },
        ],


    ]
}
// ############################# تا حرف ذ #################
export let sylabelWordOnlyTaughtLetters = {
  buttonTargetId: "taughtLettersSet1",
  titleHead: "با هم بخوانیم (تا حرف ذ)",
  titleColor: "rgb(19, 108, 107)",
  sylabelBg: "rgb(212, 137, 235)",
  sentenceRow: [
    [
      { word: "پِدَر", syla: "پِ + دَر" },
      { word: "باد", syla: "با + د" },
      { word: "را", syla: "را" },
      { word: "دید.", syla: "دی + د" }
    ],
    [
      { word: "جوجِه", syla: "جو + جه" },
      { word: "چای", syla: "چا + ی" },
      { word: "را", syla: "را" },
      { word: "خورد.", syla: "خور + د" }
    ],
    [
      { word: "بوتِه", syla: "بو + ته" },
      { word: "دَر", syla: "دَر" },
      { word: "باد", syla: "با + د" },
      { word: "چَرخید.", syla: "چر + خی + د" }
    ],
    [
      { word: "تیپ", syla: "تی + پِ" },
      { word: "بَچِه", syla: "بَ + چه" },
      { word: "جالِب", syla: "جا + لِب" },
      { word: "بود.", syla: "بو + د" }
    ],
    [
      { word: "پُتک", syla: "پُت + کِ" },
      { word: "دَر", syla: "دَر" },
      { word: "دَست", syla: "دَس + ت" },
      { word: "پِدَر", syla: "پِ + دَر" },
      { word: "بود.", syla: "بو + د" }
    ],
    [
      { word: "اَبر", syla: "اَ + بر" },
      { word: "چوبی", syla: "چو + بی" },
      { word: "دیدَم!", syla: "دی + دَ + م" }
    ],
    [
      { word: "بی‌تاب", syla: "بی + تاب" },
      { word: "بودَم.", syla: "بو + دَ + م" }
    ],
    [
      { word: "باد", syla: "با + د" },
      { word: "آمَد", syla: "آ + مَـد" },
      { word: "َو", syla: "وَ" },
      { word: "چادُر", syla: "چا + دُر" },
      { word: "را", syla: "را" },
      { word: "بُرد.", syla: "بُر + د" }
    ]
  ]
};

// ##########-->برای حرف  (از اول تا حرف ع)  ########
export let sylabelWord5={
    buttonTargetId:"testSylabe5",
    titleHead:"( حرف ع ) با هم بخوانیم",
    titleColor:"rgb(108, 19, 105)",
    sylabelBg:"rgb(190, 36, 105)",
    sentenceRow:[
        // each arrow is one sentence
        [
            {
                word:"ساعَت",
                syla:"سا + عَت"
            },
            {
                word:"عاشورا",
                syla:"عا + شو + را"
            },
            {
                word:"عَبد",
                syla:""
            },
            {
                word:"عابِد",
                syla:"عا + بِد"
            },
            {
                word:"عِبادَت",
                syla:"عِ + با + دَت"
            }
        ],
        [
            {
                word:"عادَت",
                syla:"عا + دَت"
            },
            {
                word:"عاجِز",
                syla:"عا + جِز"
            },
            {
                word:"عاج",
                syla:""
            },
            {
                word:"عادی",
                syla:"عا + دی"
            },
            {
                word:"عُبور",
                syla:"عُ + بور"
            }
        ],
        [
            {
                word:"عابِر",
                syla:"عا + بِر"
            },
            {
                word:"عِبارَت",
                syla:"عِ + با + رَت"
            },
            {
                word:"عَدَد",
                syla:"عَ + دَد"
            },
            {
                word:"عَدَس",
                syla:"عَ + دَس"
            },
            {
                word:"عَذاب",
                syla:"عَ + ذاب"
            }
        ],
        [
            {
                word:"عَجَب",
                syla:"عَ + جَب"
            },
            {
                word:"عاری",
                syla:"عا + ری"
            },
            {
                word:"عَصا",
                syla:"عَ + صا"
            },
            {
                word:"عَروس",
                syla:"عَ + روس"
            },
            {
                word:"عَزیز",
                syla:"عَ + زیز"
            }
        ],
        [
            {
                word:"تاسوعا",
                syla:"تا + سو + عا"
            },
            {
                word:"دُعا",
                syla:"دُ + عا"
            },
            {
                word:"سُرعَت",
                syla:"سُر + عَت"
            },
            {
                word:"شاعِر",
                syla:"شا + عِر"
            },
            {
                word:"اَعداد",
                syla:"اَع + داد"
            }
        ],
        [
            {
                word:"مادَر ",
                syla:"ما + دَر"
            },
            {
                word:"سوپ",
                syla:""
            },
            {
                word:"عَدَس",
                syla:"عَ + دَس"
            },
            {
                word:"خوشمَزِه",
                syla:"خوش + مَ + زِه"
            },
            {
                word:"پُخت.",
                syla:""
            },
        ],
        [
            {
                word:"سُرعَت",
                syla:"سُر + عَت"
            },
            {
                word:"نور",
                syla:""
            },
            {
                word:"زیاد",
                syla:"زی + یاد"
            },
            {
                word:"اَست . ",
                syla:""
            },
        ],
        [
            {
                word:"عَروس ",
                syla:"عَ + روس"
            },
            {
                word:"وَ",
                syla:""
            },
            {
                word:"داماد",
                syla:"دا + ماد"
            },
            {
                word:"خوشحال",
                syla:"خوش + حال"
            },
            {
                word:"بودَند . ",
                syla:"بو + دَند "
            },
        ],
        [
            {
                word:"ما ",
                syla:""
            },
            {
                word:"عَدَد",
                syla:"عَ + دَد"
            },
            {
                word:"پَنج",
                syla:""
            },
            {
                word:"را ",
                syla:""
            },
            {
                word:"دوست",
                syla:""
            },
            {
                word:"داریم .",
                syla:"دا + ریم"
            },

        ],
        [
            {
                word:"عادَت",
                syla:"عا + دَت"
            },
            {
                word:"بِه",
                syla:""
            },
            {
                word:"وَرزِش",
                syla:"وَر + زِش"
            },
            {
                word:"خوب",
                syla:""
            },
            {
                word:"اَست .",
                syla:""
            },
        ],
        [
            {
                word:"عَدَس",
                syla:"عَ + دَس"
            },
            {
                word:"سَرشار",
                syla:"سَر + شار"
            },
            {
                word:"اَز",
                syla:""
            },
            {
                word:"ویتامین",
                syla:"وی + تا + مین"
            },
            {
                word:"اَست .",
                syla:""
            },
        ],

    ]
}
// ##########-->برای حرف  (از اول تا حرف ع)  ########
// ##########-->برای حرف  (از اول تا حرف ق)  ########************************ فعلا تغییر دادم درستش کن!!!!!!
export let sylabelWord6={
    buttonTargetId:"testSylabe6",
    titleHead:"( تا حرف ق ) با هم بخوانیم",
    titleColor:"rgb(21, 19, 108)",
    sylabelBg:"rgb(139, 36, 190)",
    // sent
    sentenceRow:[
  [
    { word: "با‌ر‌ا‌ن", syla: "با + ران" },
    { word: "شَب", syla: "شب" },
    { word: "آ‌را‌م", syla: "آ + رام" },
    { word: "بود", syla: "بود" }
  ],
  [
    { word: "پِدَر", syla: "پِ + دَر" },
    { word: "تاب", syla: "تاب" },
    { word: "را", syla: "را" },
    { word: "بَردا‌شت", syla: "بَرد + داشت" }
  ],
  [
    { word: "سارا", syla: "سا + را" },
    { word: "چوب", syla: "چوب" },
    { word: "خُشک", syla: "خُشک" },
    { word: "را", syla: "را" },
    { word: "سو‌زا‌ند", syla: "سو + زاند" }
  ],
  [
    { word: "آب", syla: "آب" },
    { word: "بی‌بو", syla: "بی + بو" },
    { word: "اَست", syla: "اَست" }
  ],
  [
    { word: "باد", syla: "باد" },
    { word: "بَر", syla: "بَر" },
    { word: "سَر", syla: "سَر" },
    { word: "شاخ", syla: "شاخ" },
    { word: "دِرَخت", syla: "دِ + رَخت" },
    { word: "چَر‌خید", syla: "چَر + خید" }
  ],
  [
    { word: "حُبا‌بی", syla: "حُ + با + بی" },
    { word: "بَر", syla: "بَر" },
    { word: "آب", syla: "آب" },
    { word: "نِشَست", syla: "نِ + شَست" }
  ],
  [
    { word: "دُختَر", syla: "دُخ + تَر" },
    { word: "چَتر", syla: "چَتر" },
    { word: "را", syla: "را" },
    { word: "بَردا‌شت", syla: "بَرد + داشت" }
  ],
  [
    { word: "صَدا", syla: "صَ + دا" },
    { word: "دَر", syla: "دَر" },
    { word: "چاه", syla: "چاه" },
    { word: "پَخش", syla: "پَخش" },
    { word: "شُد", syla: "شُد" }
  ],
  [
    { word: "صُبحِ", syla: "صُبحِ" },
    { word: "پاک", syla: "پاک" },
    { word: "وَ", syla: "وَ" },
    { word: "روشَن", syla: "روْ + شَن" },
    { word: "بود", syla: "بود" }
  ],
  [
    { word: "شیشِه", syla: "شی + شِه" },
    { word: "بَر", syla: "بَر" },
    { word: "سَنگ", syla: "سَنگ" },
    { word: "خورد", syla: "خوْرد" },
    { word: "وَ", syla: "وَ" },
    { word: "شِکَست", syla: "شِ + کَسْت" }
  ],
  [
    { word: "چِراغ", syla: "چِ + راغ" },
    { word: "چو‌بی", syla: "چو + بی" },
    { word: "بَر", syla: "بَر" },
    { word: "طا‌قچِه", syla: "طا + ق + چِه" },
    { word: "بود", syla: "بود" }
  ],
  [
    { word: "بُطری", syla: "بُط + ری" },
    { word: "پُر", syla: "پُر" },
    { word: "اَز", syla: "اَز" },
    { word: "آبِ", syla: "آ + بِ" },
    { word: "سَرد", syla: "سَرد" },
    { word: "اَست", syla: "اَست" }
  ],
  [
    { word: "پِسَر", syla: "پِ + سَر" },
    { word: "با", syla: "با" },
    { word: "پِدَر", syla: "پِ + دَر" },
    { word: "بِه", syla: "بِه" },
    { word: "رود", syla: "رود" },
    { word: "رَفت", syla: "رَفت" }
  ],
  [
    { word: "حِس", syla: "حِس" },
    { word: "شادی", syla: "شا+دی" },
    { word: "دَر", syla: "دَر" },
    { word: "دِل", syla: "دِل" },
    { word: "نِشَست", syla: "نِ + شَسْت" }
  ],
  [
    { word: "باد", syla: "باد" },
    { word: "صَدا", syla: "صَ + دا" },
    { word: "را", syla: "را" },
    { word: "بُرد", syla: "بُرد" }
  ],
  [
    { word: "صَبر", syla: "صَبْر" },
    { word: "دارو‌یِ", syla: "دا + رو + یِ" },
    { word: "دَرد", syla: "دَرْد" },
    { word: "اَست", syla: "اَست" }
  ],
  [
    { word: "شَب", syla: "شَب" },
    { word: "سِتا‌رِه‌ها", syla: "سِ + تا + ره + ها" },
    { word: "را", syla: "را" },
    { word: "دید", syla: "دید" }
  ],
  [
    { word: "دَر", syla: "دَر" },
    { word: "حَیا‌ط", syla: "حَ + یا + ط" },
    { word: "بُط", syla: "بُط" },
    { word: "پَر", syla: "پَر" },
    { word: "زَد", syla: "زَد" }
  ],
  [
    { word: "ضَربِ", syla: "ضَر + بِ" },
    { word: "سا‌ز", syla: "سا + ز" },
    { word: "شَب", syla: "شَب" },
    { word: "را", syla: "را" },
    { word: "پُر", syla: "پُر" },
    { word: "کَرد", syla: "کَرد" }
  ],
  [
    { word: "پَر‌تو", syla: "پَر + تو" },
    { word: "خُورشید", syla: "خور + شید" },
    { word: "بَر", syla: "بَر" },
    { word: "چِهرَه‌اش", syla: "چِه + رَه + اش" },
    { word: "تا‌بید", syla: "تا + بید" }
  ],
  [
    { word: "دُختَر", syla: "دُخ + تَر" },
    { word: "چَشمان", syla: "چَش + مان" },
    { word: "خود", syla: "خود" },
    { word: "را", syla: "را" },
    { word: "شُسْت", syla: "شُسْت" }
  ],
  [
    { word: "طَیِّب", syla: "طَ + یِّب" },
    { word: "وَ", syla: "وَ" },
    { word: "پاک", syla: "پاک" },
    { word: "باش", syla: "باش" }
  ],
  [
    { word: "شور", syla: "شور" },
    { word: "دَر", syla: "دَر" },
    { word: "دِلِ", syla: "دِ + لِ" },
    { word: "پِدَر", syla: "پِ + دَر" },
    { word: "بود", syla: "بود" }
  ],
  [
    { word: "زیر", syla: "زیْر" },
    { word: "چَتر", syla: "چَتْر" },
    { word: "بارا‌ن", syla: "با + ران" },
    { word: "صَدا", syla: "صَ + دا" },
    { word: "نداشت", syla: "نَ + داشت" }
  ],
  [
    { word: "بازیِ", syla: "با + زیِ" },
    { word: "با", syla: "با" },
    { word: "توپ", syla: "توپ" },
    { word: "آغاز", syla: "آ + غاز" },
    { word: "شُد", syla: "شُد" }
  ],
]



}
// ##########-->برای حرف  (از اول تا حرف ق)  ########
// ##########-->شروع : برای حرف  (از اول تا حرف ن)  ########
export let sylabelWord7={
    buttonTargetId:"testSylabe7",
    titleHead:"( تا حرف ن ) با هم بخوانیم",
    titleColor:"rgb(108, 19, 107)",
    sylabelBg:"rgb(190, 36, 85)",
    sentenceRow:[
        // each arrow is one sentence
        [
            {
                word:"مَن",
                syla:""
            },
            {
                word:"نان",
                syla:""
            },
            {
                word:"تازِه",
                syla:""
            },
            {
                word:"دوست",
                syla:""
            },
            {
                word:"دارَم.",
                syla:""
            },
        ],
        [
            {
                word:"مادَر",
                syla:""
            },
            {
                word:"کَمی",
                syla:""
            },
            {
                word:"نَمک ",
                syla:""
            },
            {
                word:"به",
                syla:""
            },
            {
                word:"غَذا",
                syla:""
            },
            {
                word:"زَد.",
                syla:""
            },
        ],
        [
            {
                word:"نَرگِس",
                syla:""
            },
            {
                word:"یِک",
                syla:""
            },
            {
                word:"گُل",
                syla:""
            },
            {
                word:"زیباست.",
                syla:""
            },
        ],
        [
            {
                word:"نَهَنگ",
                syla:""
            },
            {
                word:"دَر",
                syla:""
            },
            {
                word:"دَریا",
                syla:""
            },
            {
                word:"زِندِگی ",
                syla:""
            },
            {
                word:"می کُنَد.",
                syla:""
            },
        ],
        [
            {
                word:"پِدَرَم ",
                syla:""
            },
            {
                word:"بَرایَم",
                syla:""
            },
            {
                word:"یِک",
                syla:""
            },
            {
                word:"کُلاه",
                syla:""
            },
            {
                word:"نَمَدی",
                syla:""
            },
            {
                word:"خَرید.",
                syla:""
            },
        ],
        [
            {
                word:"مادَر",
                syla:""
            },
            {
                word:"مَرا",
                syla:""
            },
            {
                word:"نَوازِش",
                syla:""
            },
            {
                word:"کَرد.",
                syla:""
            },
        ],
        [
            {
                word:"پَرَنده ",
                syla:""
            },
            {
                word:"نوک",
                syla:""
            },
            {
                word:"کوچَکی",
                syla:""
            },
            {
                word:"دارَد.",
                syla:""
            },
        ],
        [
            {
                word:"بَچِه",
                syla:""
            },
            {
                word:"به",
                syla:""
            },
            {
                word:"ماه",
                syla:""
            },
            {
                word:"نِگاه",
                syla:""
            },
            {
                word:"کَرد.",
                syla:""
            },
        ],
        [
            {
                word:"او",
                syla:""
            },
            {
                word:"از",
                syla:""
            },
            {
                word:"نَردِبان",
                syla:""
            },
            {
                word:"بالا",
                syla:""
            },
            {
                word:"رَفت.",
                syla:""
            },
        ],
        [
            {
                word:"این",
                syla:""
            },
            {
                word:"اَنگُشتَر",
                syla:""
            },
            {
                word:"اَز",
                syla:""
            },
            {
                word:"نُقرِه",
                syla:""
            },
            {
                word:"اَست.",
                syla:""
            },
        ],
        [
            {
                word:"مَن",
                syla:""
            },
            {
                word:"آبمیوِه",
                syla:""
            },
            {
                word:"دوست",
                syla:""
            },
            {
                word:"دارَم.",
                syla:""
            },
        ],
        [
            {
                word:"حالا",
                syla:""
            },
            {
                word:"نوبَتِ",
                syla:""
            },
            {
                word:"توست.",
                syla:""
            },
        ],
        [
            {
                word:"کِلاس",
                syla:""
            },
            {
                word:"دَه",
                syla:""
            },
            {
                word:"نَفَر",
                syla:""
            },
            {
                word:"شاگِرد",
                syla:""
            },
            {
                word:"دارَد.",
                syla:""
            },
        ],
        [
            {
                word:"مَن",
                syla:""
            },
            {
                word:"کَفش",
                syla:""
            },
            {
                word:"نو",
                syla:""
            },
            {
                word:"خَریدَم.",
                syla:""
            },
        ],
        [
            {
                word:"مادَر ",
                syla:""
            },
            {
                word:"نِگَرانِ",
                syla:""
            },
            {
                word:"مَن",
                syla:""
            },
            {
                word:"بود.",
                syla:""
            },
        ],
        [
            {
                word:"خانِه",
                syla:""
            },
            {
                word:"ما",
                syla:""
            },
            {
                word:"نَزدیک",
                syla:""
            },
            {
                word:"پارک",
                syla:""
            },
            {
                word:"اَست.",
                syla:""
            },
        ],
        [
            {
                word:"آتَش نِشان",
                syla:""
            },
            {
                word:"کودَک",
                syla:""
            },
            {
                word:"را",
                syla:""
            },
            {
                word:"نجات",
                syla:""
            },
            {
                word:"داد.",
                syla:""
            },
        ],

    ]
}
// ##########-->برای حرف  (از اول تا حرف ن) پایان ########

// ******************************* End SylabelWords data (با هم بخوانیم)*********************

// **************************** start flipping Table data (game) ***********************
export const tableDataNum ={
    bgTable:"./images/webPic/cute-stitch-1.png",
    photoData: [
    [
      { front: './images/assetAlpha/numbers/1-8-25-16-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-8-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-13-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-9-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-10-num.png', back: 'Back A1 Info' },
    ],
    [
      { front: './images/assetAlpha/numbers/1-8-25-1-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-17-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-19-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-3-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-5-num.png', back: 'Back A1 Info' },
    ],
    [
      { front: './images/assetAlpha/numbers/1-8-25-6-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-2-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-4-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-15-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-12-num.png', back: 'Back A1 Info' },
    ],
    [
      { front: './images/assetAlpha/numbers/1-8-25-14-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-7-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-11-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-18-num.png', back: 'Back A1 Info' },
      { front: './images/assetAlpha/numbers/1-8-25-20-num.png', back: 'Back A1 Info' },
    ],
  ]};

export const kitchenDataTable ={
    bgTable:"./images/webPic/zootopia-1.jpg",
    photoData: [
    [
      { front: './images/assetAlpha/kitchen-utensills/kitchen-2.png', back: './images/assetAlpha/kitchen-utensills/kitchen-1.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-8.png', back: './images/assetAlpha/kitchen-utensills/kitchen-7.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-4.png', back: './images/assetAlpha/kitchen-utensills/kitchen-3.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-10.png', back: './images/assetAlpha/kitchen-utensills/kitchen-9.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-6.png', back: './images/assetAlpha/kitchen-utensills/kitchen-5.png' },
    ],
    [
      { front: './images/assetAlpha/kitchen-utensills/kitchen-22.png', back: './images/assetAlpha/kitchen-utensills/kitchen-21.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-28.png', back: './images/assetAlpha/kitchen-utensills/kitchen-27.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-24.png', back: './images/assetAlpha/kitchen-utensills/kitchen-23.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-30.png', back: './images/assetAlpha/kitchen-utensills/kitchen-29.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-26.png', back: './images/assetAlpha/kitchen-utensills/kitchen-25.png' },
    ],
    [
      { front: './images/assetAlpha/kitchen-utensills/kitchen-12.png', back: './images/assetAlpha/kitchen-utensills/kitchen-11.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-18.png', back: './images/assetAlpha/kitchen-utensills/kitchen-17.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-14.png', back: './images/assetAlpha/kitchen-utensills/kitchen-13.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-20.png', back: './images/assetAlpha/kitchen-utensills/kitchen-19.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-16.png', back: './images/assetAlpha/kitchen-utensills/kitchen-15.png' },
    ],
    [
      { front: './images/assetAlpha/kitchen-utensills/kitchen-32.png', back: './images/assetAlpha/kitchen-utensills/kitchen-31.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-38.png', back: './images/assetAlpha/kitchen-utensills/kitchen-37.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-34.png', back: './images/assetAlpha/kitchen-utensills/kitchen-33.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-40.png', back: './images/assetAlpha/kitchen-utensills/kitchen-39.png' },
      { front: './images/assetAlpha/kitchen-utensills/kitchen-36.png', back: './images/assetAlpha/kitchen-utensills/kitchen-35.png' },
    ],
    
  ]};

export const tableProfessions ={
bgTable:"./images/webPic/minions-1.jpg",
photoData: [
[
    { front: './images/assetAlpha/professions/pro-1.png', back: './images/assetAlpha/fruitExa/12-2-17-e.png' },
    { front: './images/assetAlpha/professions/pro-2.png', back: './images/assetAlpha/fruitExa/12-2-16-e.png' },
    { front: './images/assetAlpha/professions/pro-3.png', back: './images/assetAlpha/fruitExa/12-2-15-e.png' },
    { front: './images/assetAlpha/professions/pro-4.png', back: './images/assetAlpha/fruitExa/12-2-14-e.png' },
    { front: './images/assetAlpha/professions/pro-5.png', back: './images/assetAlpha/fruitExa/12-2-13-e.png' },
],
[
    { front: './images/assetAlpha/professions/pro-6.png', back: './images/assetAlpha/fruitExa/12-2-12-e.png' },
    { front: './images/assetAlpha/professions/pro-7.png', back: './images/assetAlpha/fruitExa/12-2-11-e.png' },
    { front: './images/assetAlpha/professions/pro-8.png', back: './images/assetAlpha/fruitExa/12-2-10-e.png' },
    { front: './images/assetAlpha/professions/pro-9.png', back: './images/assetAlpha/fruitExa/12-2-8-e.png' },
    { front: './images/assetAlpha/professions/pro-10.png', back: './images/assetAlpha/fruitExa/12-2-6-e.png' },
],
[
    { front: './images/assetAlpha/professions/pro-11.png', back: './images/assetAlpha/fruitExa/12-2-4-e.png' },
    { front: './images/assetAlpha/professions/pro-12.png', back: './images/assetAlpha/fruitExa/12-2-3-e.png' },
    { front: './images/assetAlpha/professions/pro-13.png', back: './images/assetAlpha/fruitExa/12-2-2-e.png' },
    { front: './images/assetAlpha/professions/pro-14.png', back: './images/assetAlpha/fruitExa/12-2-1-e.png' },
    { front: './images/assetAlpha/professions/pro-15.png', back: './images/assetAlpha/fruitExa/11-07-28.png' },
],
[
    { front: './images/assetAlpha/professions/pro-16.png', back: './images/assetAlpha/fruitExa/11-07-27.png' },
    { front: './images/assetAlpha/professions/pro-17.png', back: './images/assetAlpha/fruitExa/11-07-26.png' },
    { front: './images/assetAlpha/professions/pro-18.png', back: './images/assetAlpha/fruitExa/11-07-24.png' },
    { front: './images/assetAlpha/professions/pro-19.png', back: './images/assetAlpha/fruitExa/11-07-19.png' },
    { front: './images/assetAlpha/professions/pro-20.png', back: './images/assetAlpha/fruitExa/11-07-18.png' },
],

]};
export const tableAnimals ={
bgTable:"./images/webPic/theking-1.jpg",
photoData: [
[
    { front: './images/assetAlpha/animals/anim-28.png', back: './images/assetAlpha/animals/anim-62.png' },
    { front: './images/assetAlpha/animals/anim-29.png', back: './images/assetAlpha/animals/anim-64.png' },
    { front: './images/assetAlpha/animals/anim-30.png', back: './images/assetAlpha/animals/anim-65.png' },
    { front: './images/assetAlpha/animals/anim-31.png', back: './images/assetAlpha/animals/anim-66.png' },
    { front: './images/assetAlpha/animals/anim-32.png', back: './images/assetAlpha/animals/anim-63.png' },
],
[
    { front: './images/assetAlpha/animals/anim-33.png', back: './images/assetAlpha/animals/anim-69.png' },
    { front: './images/assetAlpha/animals/anim-34.png', back: './images/assetAlpha/animals/anim-3.png' },
    { front: './images/assetAlpha/animals/anim-35.png', back: './images/assetAlpha/animals/anim-1.png' },
    { front: './images/assetAlpha/animals/anim-36.png', back: './images/assetAlpha/animals/anim-7.png' },
    { front: './images/assetAlpha/animals/anim-37.png', back: './images/assetAlpha/animals/anim-5.png' },
],
[
    { front: './images/assetAlpha/animals/anim-38.png', back: './images/assetAlpha/animals/anim-4.png' },
    { front: './images/assetAlpha/animals/anim-39.png', back: './images/assetAlpha/animals/anim-6.png' },
    { front: './images/assetAlpha/animals/anim-40.png', back: './images/assetAlpha/animals/anim-2.png' },
    { front: './images/assetAlpha/animals/anim-41.png', back: './images/assetAlpha/animals/anim-68.png' },
    { front: './images/assetAlpha/animals/anim-42.png', back: './images/assetAlpha/animals/anim-67.png' },
],
[
    { front: './images/assetAlpha/animals/anim-43.png', back: './images/assetAlpha/animals/anim-13.png' },
    { front: './images/assetAlpha/animals/anim-44.png', back: './images/assetAlpha/animals/anim-20.png' },
    { front: './images/assetAlpha/animals/anim-45.png', back: './images/assetAlpha/animals/anim-9.png' },
    { front: './images/assetAlpha/animals/anim-46.png', back: './images/assetAlpha/animals/anim-18.png' },
    { front: './images/assetAlpha/animals/anim-47.png', back: './images/assetAlpha/animals/anim-12.png' },
],
[
    { front: './images/assetAlpha/animals/anim-48.png', back: './images/assetAlpha/animals/anim-21.png' },
    { front: './images/assetAlpha/animals/anim-49.png', back: './images/assetAlpha/animals/anim-70.jpeg' },
    { front: './images/assetAlpha/animals/anim-50.png', back: './images/assetAlpha/animals/anim-17.png' },
    { front: './images/assetAlpha/animals/anim-51.png', back: './images/assetAlpha/animals/anim-10.png' },
    { front: './images/assetAlpha/animals/anim-52.png', back: './images/assetAlpha/animals/anim-11.png' },
],
[
    { front: './images/assetAlpha/animals/anim-53.png', back: './images/assetAlpha/animals/anim-19.png' },
    { front: './images/assetAlpha/animals/anim-54.png', back: './images/assetAlpha/animals/anim-8.png' },
    { front: './images/assetAlpha/animals/anim-55.png', back: './images/assetAlpha/animals/anim-16.png' },
    { front: './images/assetAlpha/animals/anim-56.png', back: './images/assetAlpha/animals/anim-22.png' },
    { front: './images/assetAlpha/animals/anim-57.png', back: './images/assetAlpha/animals/anim-23.png' },
],
[
    { front: './images/assetAlpha/animals/anim-58.png', back: './images/assetAlpha/animals/anim-27.png' },
    { front: './images/assetAlpha/animals/anim-59.png', back: './images/assetAlpha/animals/anim-24.png' },
    { front: './images/assetAlpha/animals/anim-60.png', back: './images/assetAlpha/animals/anim-26.png' },
    { front: './images/assetAlpha/animals/anim-43.png', back: './images/assetAlpha/animals/anim-13.png' },
    { front: './images/assetAlpha/animals/anim-33.png', back: './images/assetAlpha/animals/anim-69.png' },
],

]};
export const tableColor_body ={
bgTable:"/images/webPic/mashroom-1.jpg",
photoData: [
[
    { front: '/images/assetAlpha/colorExa/12-14-1-c.png', back: '/images/assetAlpha/body-exa/12-6-17.png' },
    { front: '/images/assetAlpha/colorExa/12-14-3-c.png', back: '/images/assetAlpha/body-exa/12-6-4.png' },
    { front: '/images/assetAlpha/colorExa/12-14-5-c.png', back: '/images/assetAlpha/body-exa/12-6-2.png' },
    { front: '/images/assetAlpha/colorExa/12-14-7-c.png', back: '/images/assetAlpha/body-exa/12-6-3.png' },
],
[
    { front: '/images/assetAlpha/colorExa/12-14-2-c.png', back: '/images/assetAlpha/body-exa/12-6-5.png' },
    { front: '/images/assetAlpha/colorExa/12-14-4-c.png', back: '/images/assetAlpha/body-exa/12-6-8.png' },
    { front: '/images/assetAlpha/colorExa/12-14-6-c.png', back: '/images/assetAlpha/body-exa/12-6-6.png' },
    { front: '/images/assetAlpha/colorExa/12-14-8-c.png', back: '/images/assetAlpha/body-exa/12-6-7.png' },
],
[
    { front: '/images/assetAlpha/colorExa/12-14-9-c.png', back: '/images/assetAlpha/body-exa/12-6-12.png' },
    { front: '/images/assetAlpha/colorExa/12-14-10-c.png', back: '/images/assetAlpha/body-exa/12-6-9.png' },
    { front: '/images/assetAlpha/colorExa/12-14-1-c.png', back: '/images/assetAlpha/body-exa/12-6-11.png' },
    { front: '/images/assetAlpha/colorExa/12-14-4-c.png', back: '/images/assetAlpha/body-exa/12-6-10.png' },
],
[
    { front: '/images/assetAlpha/colorExa/12-14-7-c.png', back: '/images/assetAlpha/body-exa/12-6-14.png' },
    { front: '/images/assetAlpha/colorExa/12-14-3-c.png', back: '/images/assetAlpha/body-exa/12-6-16.png' },
    { front: '/images/assetAlpha/colorExa/12-14-8-c.png', back: '/images/assetAlpha/body-exa/12-6-15.png' },
    { front: '/images/assetAlpha/colorExa/12-14-1-c.png', back: '/images/assetAlpha/body-exa/12-6-13.png' },
],


]};
// **************************** End  flipping Table data ************************


// ******************************* Start MakeWordCarousel data (معنی لغات تازه) *********************
export let testColor = {
    
        wordCarousel:{
            title:"رنگ ها",
            targetCarouselId :"colorPart1",
            targetHref:"colorPart-2",
            idLetter :"color1",
            imageCarousel :"imgcarousel2"
        },
        alphaColor : [
            {
                image :"./images/assetAlpha/colorExa/12-14-1-c.png",
                sylabelWord : "س ِ + فید --> سِفید",
                active :"active"
            },
            {
                image : "./images/assetAlpha/colorExa/12-14-2-c.png",
                sylabelWord : "زرد",
                active :""
            },
            {
                image : "./images/assetAlpha/colorExa/12-14-3-c.png",
                sylabelWord : "سَبز",
                active :""
            },
            {
                image : "./images/assetAlpha/colorExa/12-14-4-c.png",
                sylabelWord : "قِر + مِز --> قِرمِز",
                active :""
            },
            {
                image : "./images/assetAlpha/colorExa/12-14-5-c.png",
                sylabelWord : "آ + بی --> آبی",
                active :""
            },
            {
                image : "./images/assetAlpha/colorExa/12-14-6-c.png",
                sylabelWord : "بَ + نَفش --> بَنَفش",
                active :""
            },
            {
                image : "./images/assetAlpha/colorExa/12-14-7-c.png",
                sylabelWord : "صو + رَ + تی --> صورَتی",
                active :""
            },
            {
                image : "./images/assetAlpha/colorExa/12-14-8-c.png",
                sylabelWord : "نا + رِن + جی --> نارِنجی",
                active :""
            },
            {
                image : "./images/assetAlpha/colorExa/12-14-9-c.png",
                sylabelWord : "قَه + وِه + ای --> قهوه ای",
                active :""
            },
            {
                image : "./images/assetAlpha/colorExa/12-14-10-c.png",
                sylabelWord : "خا + کِس + تَ + ری--> خاکِستَری",
                active :""
            },
            {
                image : "./images/assetAlpha/colorExa/12-14-11-c.png",
                sylabelWord : "سی + یاه --> سیاه",
                active :""
            }
        ]
    
};

export let testFruit = {
    
        wordCarousel:{
        title:"میوه ها و سبزیجات",
        targetCarouselId :"fruitPart1",
        targetHref :"fruitPart-2",
        idLetter :"fruit1",
        imageCarousel :"imgcarousel2"
        },
    alphaImage : [
        {
            image : "./images/assetAlpha/fruitExa/11-07-6.png",
            sylabelWord : "اِس + فِ + ناج --> اِسفِناج",
            active :"active"
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-7.png",
            sylabelWord : "با + دِن + جان--> بادِنجان",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-8.png",
            sylabelWord : "پی + یاز -->پیاز",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-9.png",
            sylabelWord : "پی + یاز + چه --> پیازچه",
            active :""
        },
        // {
        //     image : "./images/assetAlpha/fruitExa/11-07-10.png",
        //     sylabelWord : "تُ + رُب --> تُرُب",
        //     active :""
        // },
        // {
        //     image : "./images/assetAlpha/fruitExa/11-07-11.png",
        //     sylabelWord : "جَع + فَ + ری --> جَعفَری",
        //     active :""
        // },
        // {
        //     image : "./images/assetAlpha/fruitExa/11-07-12.png",
        //     sylabelWord : "چُ + غُن + دَر --> چُغُندَر",
        //     active :""
        // },
        {
            image : "./images/assetAlpha/fruitExa/11-07-13.png",
            sylabelWord : "سیر",
            active :""
        },
        // {
        //     image : "./images/assetAlpha/fruitExa/11-07-14.png",
        //     sylabelWord : "شَل + غَم --> شَلغَم",
        //     active :""
        // },
        // {
        //     image : "./images/assetAlpha/fruitExa/11-07-15.png",
        //     sylabelWord : "شِ + وید --> شِوید",
        //     active :""
        // },
        {
            image : "./images/assetAlpha/fruitExa/11-07-16.png",
            sylabelWord : "فِل + فِل --> فِلفِل",
            active :""
        },
        // {
        //     image : "./images/assetAlpha/fruitExa/11-07-17.png",
        //     sylabelWord : "فِل + فِل + دُل +مِه --> فِلفِل دُلمِه",
        //     active :""
        // },
        {
            image : "./images/assetAlpha/fruitExa/11-07-18.png",
            sylabelWord : "قارچ",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-19.png",
            sylabelWord : "کا + هو --> کاهو",
            active :""
        },
        // {
        //     image : "./images/assetAlpha/fruitExa/11-07-20.png",
        //     sylabelWord : "کَ + دو --> کَدو",
        //     active :""
        // },
        // {
        //     image : "./images/assetAlpha/fruitExa/11-07-21.png",
        //     sylabelWord : " کَ + دو + سَبز --> کَدوسَبز",
        //     active :""
        // },
        // {
        //     image : "./images/assetAlpha/fruitExa/11-07-22.png",
        //     sylabelWord : "کَ + رَفس --> کَرَفس",
        //     active :""
        // },
        // {
        //     image : "./images/assetAlpha/fruitExa/11-07-23.png",
        //     sylabelWord : "کَ + لَم --> کَلَم",
        //     active :""
        // },
        {
            image : "./images/assetAlpha/fruitExa/11-07-24.png",
            sylabelWord : "کَ + لَم + بُ + روک + لی--> کَلَم بُروکلی",
            active :""
        },
        // {
        //     image : "./images/assetAlpha/fruitExa/11-07-25.png",
        //     sylabelWord : "گُل + کَ + لَم --> گُل کَلَم",
        //     active :""
        // },
        {
            image : "./images/assetAlpha/fruitExa/11-07-26.png",
            sylabelWord : "لو + بی + یا --> لوبیا ",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-27.png",
            sylabelWord : "نُ + خُود + فَ + رَن + گی --> نُخود فَرَنگی",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-28.png",
            sylabelWord : "هَ + ویج --> هَویج",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-1-e.png",
            sylabelWord : "آ + لو --> آلو",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-2-e.png",
            sylabelWord : "اَ + نار --> اَنار",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-3-e.png",
            sylabelWord : "آ + نا + ناس --> آناناس",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-4-e.png",
            sylabelWord : "اَن + به --> اَنبه",
            active :""
        },
        // {
        //     image : "./images/assetAlpha/fruitExa/12-2-5-e.png",
        //     sylabelWord : "اَن + جیر --> اَنجیر",
        //     active :""
        // },
        {
            image : "./images/assetAlpha/fruitExa/12-2-6-e.png",
            sylabelWord : "اَن + گور --> اَنگور",
            active :""
        },
        // {
        //     image : "./images/assetAlpha/fruitExa/12-2-7-e.png",
        //     sylabelWord : "پا + پا + یا --> پاپایا",
        //     active :""
        // },
        {
            image : "./images/assetAlpha/fruitExa/12-2-8-e.png",
            sylabelWord : "پُر + تِ + قال --> پُرتِقال",
            active :""
        },
        // {
        //     image : "./images/assetAlpha/fruitExa/12-2-9-e.png",
        //     sylabelWord : "تَ + مِشک --> تَمِشک",
        //     active :""
        // },
        {
            image : "./images/assetAlpha/fruitExa/12-2-10-e.png",
            sylabelWord : "توت + فَ + رَن + گی --> توت فَرَنگی",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-11-e.png",
            sylabelWord : "زَرد + آ + لو --> زردآلو",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-12-e.png",
            sylabelWord : "سیب",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-13-e.png",
            sylabelWord : "گُ + لا + بی --> گُلابی",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-14-e.png",
            sylabelWord : "گی + لاس --> گیلاس",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-15-e.png",
            sylabelWord : "لی + مو --> لیمو",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-16-e.png",
            sylabelWord : "موز",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-17-e.png",
            sylabelWord : "هُ + لو --> هُلو",
            active :""
        },
        // {
        //     image : "./images/assetAlpha/fruitExa/12-2-18-e.png",
        //     sylabelWord : "هِن + دِ + وا + نه --> هندوانه",
        //     active :""
        // },
        
    ]
}

export let testBody = {
    
    wordCarousel:{
        title:"اعضای بدن",
        targetCarouselId :"bodyPart1",
        targetHref :"bodyPart2",
        idLetter :"body1",
        imageCarousel :"imgbody"
        },
    alphaBody : [
        {
            image : "./images/assetAlpha/body-exa/12-6-1.png" ,
            sylabelWord : "اَعضای بَدَن",
            active :"active"
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-2.png",
            sylabelWord : "چِشم",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-3.png",
            sylabelWord : "اَب + رو --> اَبرو",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-4.png",
            sylabelWord : "دَست",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-5.png",
            sylabelWord : "پا",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-6.png",
            sylabelWord : "لَب",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-7.png",
            sylabelWord : "دَن + دان --> دَندان",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-8.png",
            sylabelWord : "مو",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-9.png",
            sylabelWord : "اَن + گُش + تان --> اَنگُشتان",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-10.png",
            sylabelWord : "شَست",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-11.png",
            sylabelWord : "بی + نی --> بینی",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-12.png",
            sylabelWord : "گوش",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-13.png",
            sylabelWord : "زا + نو --> زانو",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-14.png",
            sylabelWord : "زَ + بان --> زَبان",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-15.png",
            sylabelWord : "گَر + دَن --> گَردَن",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-16.png",
            sylabelWord : "شِ + کَم --> شِکَم",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-17.png",
            sylabelWord : "نا + خُن --> ناخُن",
            active :""
        },
        {
            image : "./images/assetAlpha/body-exa/12-6-18.png",
            sylabelWord : "صو + رَت --> صورَت",
            active :""
        },
    ]
}

export let testWear = {
    
    wordCarousel:{
        title:"پوشیدنی ها",
        targetCarouselId :"wearPart-1",
        targetHref :"wearPart-2",
        idLetter :"wear1",
        imageCarousel :"imgwear"
        },
    alphaWear : [
        {
            image :"./images/assetAlpha/clothes-exa/12-18-1-clothes.png",
            sylabelWord : "پو + شی + دَ + نی + ها --> پوشیدنی ها",
            active :"active"
        },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-2-clothes.png",
            sylabelWord : "تی + شِرت --> تی شرت",
            active :""
        },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-3-clothes.png",
            sylabelWord : "بُ + لوز --> بُلوز",
            active :""
        },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-4-clothes.png",
            sylabelWord : "دا + مَن",
            active :""
        },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-5-clothes.png",
            sylabelWord : "شَل + وار --> شَلوار",
            active :""
        },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-6-clothes.png",
            sylabelWord : "شَل + وا + رَک --> شَلوارَک",
            active :""
        },
        // {
        //     image :"./images/assetAlpha/clothes-exa/12-18-7-clothes.png",
        //     sylabelWord : "جِ + لی + قِه --> جِلیقه",
        //     active :""
        // },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-8-clothes.png",
            sylabelWord : "پال + تو --> پالتو",
            active :""
        },
        // {
        //     image :"./images/assetAlpha/clothes-exa/12-18-9-clothes.png",
        //     sylabelWord : "پُ + لی + وِر --> پُلیوِر ",
        //     active :""
        // },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-10-clothes.png",
            sylabelWord : "پی + را + هَن --> پیراهَن",
            active :""
        },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-11-clothes.png",
            sylabelWord : "کِ + را + وات --> کِراوات",
            active :""
        },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-12-clothes.png",
            sylabelWord : "مان + تو --> مانتو",
            active :""
        },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-13-clothes.png",
            sylabelWord : "جو + راب --> جوراب",
            active :""
        },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-14-clothes.png",
            sylabelWord : "کُ + لاه --> کُلاه ",
            active :""
        },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-15-clothes.png",
            sylabelWord : "عِی + نَک --> عِینَک ",
            active :""
        },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-16-clothes.png",
            sylabelWord : "پی + را + هَن --> پیراهَن",
            active :""
        },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-17-clothes.png",
            sylabelWord : "شال + گَر + دَن --> شال گَردَن",
            active :""
        },
        // {
        //     image :"./images/assetAlpha/clothes-exa/12-18-18-clothes.png",
        //     sylabelWord : "دَم + پا + یی --> دَمپایی",
        //     active :""
        // },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-19-clothes.png",
            sylabelWord : "کَفش + زَ + نا + نِه--> کفش زنانه",
            active :""
        },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-20-clothes.png",
            sylabelWord : "کَ + مَر + بَند --> کَمَربَند",
            active :""
        },
        {
            image :"./images/assetAlpha/clothes-exa/12-18-21-clothes.png",
            sylabelWord : "کَفش + مَر + دا + نِه",
            active :""
        },
    ]
}

export let testSchoolSupplies = {
    
    wordCarousel:{
        title:"لوازم تحریر",
        targetCarouselId :"supplyPart-1",
        targetHref:"supplyPart-2",
        idLetter :"supply1",
        imageCarousel :"imgsupply"
        },
    alphaWear : [
        {
            image :"./images/assetAlpha/school-supplies/12-30-1-sch.png",
            sylabelWord : " لَ + وا + زِم --> لَوازِم تَحریر",
            active :"active"
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-2-sch.png",
            sylabelWord : "مِ + داد --> مِداد",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-3-sch.png",
            sylabelWord : "مِ + داد + رَن + گی --> مِدادرَنگی",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-4-sch.png",
            sylabelWord : "خود + کار --> خودکار",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-5-sch.png",
            sylabelWord : "تَ + راش --> تَراش",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-6-sch.png",
            sylabelWord : "پاک + کُن --> پاک کن",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-7-sch.png",
            sylabelWord : "خَط + کِش --> خَط کِش",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-8-sch.png",
            sylabelWord : "قِی + چی --> قِیچی",
            active :""
        },
        // {
        //     image :"./images/assetAlpha/school-supplies/12-30-9-sch.png",
        //     sylabelWord : "گو + نی + یا --> گونیا",
        //     active :""
        // },
        // {
        //     image :"./images/assetAlpha/school-supplies/12-30-10-sch.png",
        //     sylabelWord : "نَ + قا + لِه --> نَقالِه",
        //     active :""
        // },
        // {
        //     image :"./images/assetAlpha/school-supplies/12-30-11-sch.png",
        //     sylabelWord : "پَر + گار --> پَرگار",
        //     active :""
        // },
        {
            image :"./images/assetAlpha/school-supplies/12-30-12-sch.png",
            sylabelWord : "دَف + تَر --> دَفتَر",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-13-sch.png",
            sylabelWord : "کِ + تاب --> کِتاب",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-14-sch.png",
            sylabelWord : "قَ + لَم + نَ + قا + شی",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-15-sch.png",
            sylabelWord : "کا + غَذ --> کاغَذ",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-16-sch.png",
            sylabelWord : "آب + رَنگ --> آبرَنگ",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-17-sch.png",
            sylabelWord : "کو + لِه + پُش + تی--> کوله پُشتی",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-18-sch.png",
            sylabelWord : "خَ + میر + با + زی --> خمیر بازی",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-19-sch.png",
            sylabelWord : "جا + مِ + دا + دی --> جامِدادی",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-20-sch.png",
            sylabelWord : "چَسب + ما + تی + کی --> چسب ماتیکی",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-21-sch.png",
            sylabelWord : "گی + ره --> گیره",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-22-sch.png",
            sylabelWord : "چُرت + که --> چُرتکه",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-23-sch.png",
            sylabelWord : "ما + شین + حِ + ساب --> ماشین حساب",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-24-sch.png",
            sylabelWord : "",
            active :""
        },
    ]
}

export let testDaysOfWeek = {
    
    wordCarousel:{
        title:"روزهای هفته",
        targetCarouselId :"daysPart-1",
        targetHref:"daysPart-2",
        idLetter :"days1",
        imageCarousel :"imgdays"
        },
    alphaDays : [
        {
            image :"./images/assetAlpha/days-of-week/1-5-25-1.png",
            sylabelWord : "یِک + شَن + به --> یِک شَنبه ",
        },
        {
            image :"./images/assetAlpha/days-of-week/1-5-25-2.png",
            sylabelWord : " دو + شَن + به --> دوشنبه",
        },
        {
            image :"./images/assetAlpha/days-of-week/1-5-25-3.png",
            sylabelWord : "سِه + شَن + به --> سه شنبه ",
        },
        {
            image :"./images/assetAlpha/days-of-week/1-5-25-4.png",
            sylabelWord : "چَ + هار + شَن + به --> چهارشنبه ",
        },
        {
            image :"./images/assetAlpha/days-of-week/1-5-25-5.png",
            sylabelWord : "پَنج + شَن + به --> پنج شنبه ",
        },
        {
            image :"./images/assetAlpha/days-of-week/1-5-25-6.png",
            sylabelWord : "جُم + عه --> جمعه ",
        },
        {
            image :"./images/assetAlpha/days-of-week/1-5-25-7.png",
            sylabelWord : " شَن + به --> شنبه",
        },
        {
            image :"./images/assetAlpha/days-of-week/1-5-25-8.gif",
            sylabelWord : "اِم + روز --> امروز ",
        },
        {
            image :"./images/assetAlpha/days-of-week/1-5-25-10.gif",
            sylabelWord : " فَر + دا --> فَردا",
        },
        {
            image :"./images/assetAlpha/days-of-week/1-5-25-9.gif",
            sylabelWord : "دی + روز --> دیروز ",
        },
        {
            image :"./images/assetAlpha/days-of-week/1-5-25-11.png",
            sylabelWord : "اِمروز چه روزی اَست ؟ ",
        },
    ]
}

export let testNumbers = {
    
    wordCarousel:{
        title:"اعداد 0-20 ",
        targetCarouselId :"numPart-1",
        targetHref :"numPart-2",
        idLetter :"nums1",
        imageCarousel :"imgnums"
        },
    alphaDays : [
        {
            image :"/images/assetAlpha/numbers/1-8-25-0-num.png",
            sylabelWord : "صِفر",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-1-num.png",
            sylabelWord : "یک",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-2-num.png",
            sylabelWord : "دو",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-3-num.png",
            sylabelWord : "سِه",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-4-num.png",
            sylabelWord : "چَ + هار --> چَهار",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-5-num.png",
            sylabelWord : "پَنج",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-6-num.png",
            sylabelWord : "شش",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-7-num.png",
            sylabelWord : "هَفت",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-8-num.png",
            sylabelWord : "هَشت",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-9-num.png",
            sylabelWord : "نُه",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-10-num.png",
            sylabelWord : "دَه",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-11-num.png",
            sylabelWord : "یاز + دَه --> یازدَه",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-12-num.png",
            sylabelWord : "دَ + واز + دَه --> دَوازدَه",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-13-num.png",
            sylabelWord : "سیز + دَه --> سیزدَه",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-14-num.png",
            sylabelWord : "چَ + هار + دَه --> چَهاردَه",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-15-num.png",
            sylabelWord : "پانز + دَه --> پانزدَه",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-16-num.png",
            sylabelWord : "شانز + دَه --> شانزدَه",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-17-num.png",
            sylabelWord : "هِف + دَه --> هِفدَه",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-18-num.png",
            sylabelWord : "هِج + دَه --> هِجدَه",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-19-num.png",
            sylabelWord : "نوز + دَه --> نوزدَه",
        },
        {
            image :"/images/assetAlpha/numbers/1-8-25-20-num.png",
            sylabelWord : "بیست",
        },
    ]
}
export let testOrder1 = {
    
    wordCarousel:{
        title:"جملات کوتاه دستوری",
        targetCarouselId :"orderPart-1",
        targetHref :"orderPart-2",
        idLetter :"order1",
        imageCarousel :"imgOrder"
        },
    alphaDays : [
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-2.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-3.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-4.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-5.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-6.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-7.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-8.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-9.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-10.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-11.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-12.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-13.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-14.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-15.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-16.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-17.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-18.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-19.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-20.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-21.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-22.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-23.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-24.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-25.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-26.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-27.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-28.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-29.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-30.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-31.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-32.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-33.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-34.jpg",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/actionOrder/1-20-order-35.jpg",
            sylabelWord : "",
        },
    ]
}
export let kitchenUtensils1 = {
    
    wordCarousel:{
        title:"ظروف آشپزخانه",
        targetCarouselId :"kitchen1Part-1",
        targetHref :"kitchen1Part-2",
        idLetter :"kitchen1-1",
        imageCarousel :"kitchenU1"
        },
    alphaKitchen : [
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-00.png",
            sylabelWord : "Kitchen Utensils",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-2.png",
            sylabelWord : "Kitchen Knife",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-4.png",
            sylabelWord : "Refrigerator",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-6.png",
            sylabelWord : "Freezer",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-8.png",
            sylabelWord : "Peeler",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-10.png",
            sylabelWord : "Cutting board",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-12.png",
            sylabelWord : "Colander",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-14.png",
            sylabelWord : "Bowl",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-16.png",
            sylabelWord : "Kitchen mortar",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-18.png",
            sylabelWord : "Kitchen sink",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-20.png",
            sylabelWord : "Grate",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-22.png",
            sylabelWord : "Kitchen scissors",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-24.png",
            sylabelWord : "Ice tray",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-26.png",
            sylabelWord : "Coffee maker",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-28.png",
            sylabelWord : "Pot",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-30.png",
            sylabelWord : "Frying pan",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-32.png",
            sylabelWord : "Skimmer",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-34.png",
            sylabelWord : "Mixer",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-36.png",
            sylabelWord : "Gas stove",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-38.png",
            sylabelWord : "Microwave",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-40.png",
            sylabelWord : "Pressure cooker",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-42.png",
            sylabelWord : "Toaster",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-01.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/kitchen-utensills/kitchen-02.png",
            sylabelWord : "",
        },
    ]
}
export let professions1 = {
    
    wordCarousel:{
        title:"شغل ها",
        targetCarouselId :"professionPart-1",
        targetHref :"professionPart-2",
        idLetter :"profession-1",
        imageCarousel :"profesion1-1"
        },
    alphaKitchen : [
        {
            image :"./images/assetAlpha/professions/pro-1.png",
            sylabelWord : "آ + تَش + نِ + شان",
        },
        {
            image :"./images/assetAlpha/professions/pro-2.png",
            sylabelWord : "آ + را + یِش + گَر",
        },
        {
            image :"./images/assetAlpha/professions/pro-3.png",
            sylabelWord : "آش + پَز",
        },
        {
            image :"./images/assetAlpha/professions/pro-4.png",
            sylabelWord : "بَر + نا + مِه + نِ + ویس",
        },
        {
            image :"./images/assetAlpha/professions/pro-5.png",
            sylabelWord : "بَن + نا",
        },
        {
            image :"./images/assetAlpha/professions/pro-6.png",
            sylabelWord : "پُ + لیس ",
        },
        {
            image :"./images/assetAlpha/professions/pro-7.png",
            sylabelWord : "خَی + یاط",
        },
        {
            image :"./images/assetAlpha/professions/pro-8.png",
            sylabelWord : "دا + نِش + مَند",
        },
        {
            image :"./images/assetAlpha/professions/pro-9.png",
            sylabelWord : "دُک + تُر",
        },
        {
            image :"./images/assetAlpha/professions/pro-10.png",
            sylabelWord : "را + نَن + دِه",
        },
        {
            image :"./images/assetAlpha/professions/pro-11.png",
            sylabelWord : "کِ + شا + وَرز",
        },
        {
            image :"./images/assetAlpha/professions/pro-12.png",
            sylabelWord : "کَف + فاش",
        },
        {
            image :"./images/assetAlpha/professions/pro-13.png",
            sylabelWord : "مُ + عَل + لِم",
        },
        {
            image :"./images/assetAlpha/professions/pro-14.png",
            sylabelWord : "نِ + ظا + می",
        },
        {
            image :"./images/assetAlpha/professions/pro-15.png",
            sylabelWord : "نَق + قاش",
        },
        {
            image :"./images/assetAlpha/professions/pro-16.png",
            sylabelWord : "وَر + زِش + کار",
        },
        {
            image :"./images/assetAlpha/professions/pro-17.png",
            sylabelWord : "خَ + لَ + بان",
        },
        {
            image :"./images/assetAlpha/professions/pro-18.png",
            sylabelWord : "دَن + دان + پِ + زِشک",
        },
        {
            image :"./images/assetAlpha/professions/pro-19.png",
            sylabelWord : "فَ + ضا + نَ + وَرد",
        },
        {
            image :"./images/assetAlpha/professions/pro-20.png",
            sylabelWord : "مِ + کا + نیک",
        },

    ]
}
export let animals1 = {
    
    wordCarousel:{
        title:"حیوانات",
        targetCarouselId :"animalPart-1",
        targetHref :"animalPart-2",
        idLetter :"animal-1",
        imageCarousel :"animalsWild1-1"
        },
    alphaAnimal : [
        {
            image :"./images/assetAlpha/animals/anim-28.png",
            sylabelWord : "Polar bear",
        },
        {
            image :"./images/assetAlpha/animals/anim-29.png",
            sylabelWord : "Deer",
        },
        {
            image :"./images/assetAlpha/animals/anim-30.png",
            sylabelWord : "Crocodile",
        },
        {
            image :"./images/assetAlpha/animals/anim-31.png",
            sylabelWord : "Fox",
        },
        {
            image :"./images/assetAlpha/animals/anim-32.png",
            sylabelWord : "ostrich",
        },
        {
            image :"./images/assetAlpha/animals/anim-33.png",
            sylabelWord : "Woodpecker",
        },
        {
            image :"./images/assetAlpha/animals/anim-34.png",
            sylabelWord : "Cat",
        },
        {
            image :"./images/assetAlpha/animals/anim-35.png",
            sylabelWord : "Chimpanzee",
        },
        {
            image :"./images/assetAlpha/animals/anim-36.png",
            sylabelWord : "Frog",
        },
        {
            image :"./images/assetAlpha/animals/anim-37.png",
            sylabelWord : "Kangaroo",
        },
        {
            image :"./images/assetAlpha/animals/anim-38.png",
            sylabelWord : "Hamster",
        },
        {
            image :"./images/assetAlpha/animals/anim-39.png",
            sylabelWord : "Squirrel",
        },
        {
            image :"./images/assetAlpha/animals/anim-40.png",
            sylabelWord : "Bear",
        },
        {
            image :"./images/assetAlpha/animals/anim-41.png",
            sylabelWord : "Horse",
        },
        {
            image :"./images/assetAlpha/animals/anim-42.png",
            sylabelWord : "Monkey",
        },
        {
            image :"./images/assetAlpha/animals/anim-43.png",
            sylabelWord : "Zebra",
        },
        {
            image :"./images/assetAlpha/animals/anim-44.png",
            sylabelWord : "Gorilla",
        },
        {
            image :"./images/assetAlpha/animals/anim-45.png",
            sylabelWord : "Hippopotamus",
        },
        {
            image :"./images/assetAlpha/animals/anim-46.png",
            sylabelWord : "Shrimp",
        },
        {
            image :"./images/assetAlpha/animals/anim-47.png",
            sylabelWord : "Wolf",
        },
        {
            image :"./images/assetAlpha/animals/anim-48.png",
            sylabelWord : "Koala",
        },
        {
            image :"./images/assetAlpha/animals/anim-49.png",
            sylabelWord : "Killer whale",
        },
        {
            image :"./images/assetAlpha/animals/anim-50.png",
            sylabelWord : "Lemur",
        },
        {
            image :"./images/assetAlpha/animals/anim-51.png",
            sylabelWord : "Panda",
        },
        {
            image :"./images/assetAlpha/animals/anim-52.png",
            sylabelWord : "Octopus",
        },
        {
            image :"./images/assetAlpha/animals/anim-53.png",
            sylabelWord : "Giraffe",
        },
        {
            image :"./images/assetAlpha/animals/anim-54.png",
            sylabelWord : "Cheetah",
        },
        {
            image :"./images/assetAlpha/animals/anim-55.png",
            sylabelWord : "Hyena",
        },
        {
            image :"./images/assetAlpha/animals/anim-56.png",
            sylabelWord : "Sea lion",
        },
        {
            image :"./images/assetAlpha/animals/anim-57.png",
            sylabelWord : "Eagle",
        },
        {
            image :"./images/assetAlpha/animals/anim-58.png",
            sylabelWord : "Peacock",
        },
        {
            image :"./images/assetAlpha/animals/anim-59.png",
            sylabelWord : "Tiger",
        },
        {
            image :"./images/assetAlpha/animals/anim-60.png",
            sylabelWord : "Elephant",
        },
        {
            image :"./images/assetAlpha/animals/anim-61.png",
            sylabelWord : "Lion",
        },

    ]
}
export let houseParts1 = {
    
    wordCarousel:{
        title:"بخش های خانه",
        targetCarouselId :"housePart-1",
        targetHref :"housePart-2",
        idLetter :"housePa-1",
        imageCarousel :"housePartD-1"
        },
    alphaHouse : [
        {
            image :"/images/assetAlpha/house/house-1.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-2.png",
            sylabelWord : "House",
        },
        {
            image :"/images/assetAlpha/house/house-3.png",
            sylabelWord : "Living room",
        },
        {
            image :"/images/assetAlpha/house/house-4.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-5.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-6.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-2.png",
            sylabelWord : "Sofa",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-4.png",
            sylabelWord : "Cushion",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-6.png",
            sylabelWord : "Coffee table",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-8.png",
            sylabelWord : "TV and TV table",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-10.png",
            sylabelWord : "Carpet",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-12.png",
            sylabelWord : "Clock",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-14.png",
            sylabelWord : "Lamp",
        },
        {
            image :"/images/assetAlpha/house/house-7.png",
            sylabelWord : "Kitchen",
        },
        {
            image :"/images/assetAlpha/house/house-8.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-9.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-10.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-11.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-12.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-13.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-14.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-15.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-16.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-17.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-16.png",
            sylabelWord : "Refrigerator",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-18.png",
            sylabelWord : "stove",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-20.png",
            sylabelWord : "Microwave",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-22.png",
            sylabelWord : "Kitchen sink",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-24.png",
            sylabelWord : "Electric kettle",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-26.png",
            sylabelWord : "Kitchen cabinet",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-28.png",
            sylabelWord : "Plate",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-30.png",
            sylabelWord : "Bowl",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-32.png",
            sylabelWord : "Glass",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-34.png",
            sylabelWord : "Clay mug",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-36.png",
            sylabelWord : "Cutlery",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-38.png",
            sylabelWord : "Kitchen utensils",
        },
        {
            image :"/images/assetAlpha/house/house-18.png",
            sylabelWord : "Dining room",
        },
        {
            image :"/images/assetAlpha/house/house-19.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-40.png",
            sylabelWord : "Chair",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-42.png",
            sylabelWord : "Dining table",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-44.png",
            sylabelWord : "Bathroom",
        },
        {
            image :"/images/assetAlpha/house/house-20.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-21.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-22.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-23.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-24.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-46.png",
            sylabelWord : "Bathtub",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-48.png",
            sylabelWord : "Bathroom sink",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-50.png",
            sylabelWord : "Shampoo and conditioner",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-52.png",
            sylabelWord : "Bath towel",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-54.png",
            sylabelWord : "Leaf",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-56.png",
            sylabelWord : "Soap",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-58.png",
            sylabelWord : "Toothpaste and toothbrush",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-60.png",
            sylabelWord : "Toilet",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-62.png",
            sylabelWord : "Toilet paper",
        },
        {
            image :"/images/assetAlpha/house/house-25.png",
            sylabelWord : "Bedroom",
        },
        {
            image :"/images/assetAlpha/house/house-26.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-27.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-28.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-29.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/house-30.png",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-64.png",
            sylabelWord : "Bed",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-66.png",
            sylabelWord : "Pillow",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-68.png",
            sylabelWord : "Blanket",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-70.png",
            sylabelWord : "Study table",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-72.png",
            sylabelWord : "Study lights",
        },
        {
            image :"/images/assetAlpha/house/nameTools/toolsH-74.png",
            sylabelWord : "Wardrobe",
        },

    ]
}
export let healthProblem1 = {
    
    wordCarousel:{
        title:"نشانه های بیماری",
        targetCarouselId :"healthP-1",
        targetHref :"healthP-2",
        idLetter :"healthPro-1",
        imageCarousel :"healthproblem-1"
        },
    alphaHealth : [
        {
            image :"/images/assetAlpha/problemHealth/New folder/health-1.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/New folder/health-2.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/New folder/health-3.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/New folder/health-4.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/New folder/health-5.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/New folder/health-6.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/New folder/health-7.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/New folder/health-8.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/New folder/health-12.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/New folder/health-13.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/health-1-1.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/health-1-2.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/health-1-3.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/health-1-4.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/health-1-5.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/health-1-6.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/health-1-7.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/health-1-8.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/health-1-9.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/health-1-10.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/health-1-11.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/health-1-12.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/problemHealth/health-1-13.jpg",
            sylabelWord : "",
        },

    ]
}
export let insect1 = {
    
    wordCarousel:{
        title:"حَشَرات",
        targetCarouselId :"insect-1",
        targetHref :"insectA-2",
        idLetter :"insectA-1",
        imageCarousel :"insectCarousel-1"
        },
    alphaInsect : [
        {
            image :"/images/assetAlpha/insects/insect-1.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/insects/insect-2.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/insects/insect-3.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/insects/insect-4.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/insects/insect-5.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/insects/insect-6.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/insects/insect-7.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/insects/insect-8.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/insects/insect-10.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/insects/insect-11.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/insects/insect-12.jpg",
            sylabelWord : "",
        },
        {
            image :"/images/assetAlpha/insects/insect-13.jpg",
            sylabelWord : "",
        },
    ]
}

// ******************************* End MakeWordCarousel data *********************

// ************************* start BrokenGlassess for word Pract *******************
export let words1 = ["قاب","رَقیق","حُقوق","نُقرِه","صادِق","قارچ","ناطِق","یَقین","نَقاش","قُدرَت","عاشِق","سَقف","قاشُق","حَقیر","قَشَنگ","قَلب","مَقصَد","قِرمِز","قانون","قامَت",];
export let words2 = ['صابون','اِصرار','صَندوق','عَصا','وِصال','صَبر','صَندَلی','صَدر','مُصیبَت','قِصه','صَفحِه','صِداقَت','صُحبَت','بَصیرَت','وَصف','خالِص','اَصلی','تَصمیم','تَصویر','صورَت', ];
export let words3 = ["غَذا","باغ","غُرور","غُروب","غار","غَریب","غُرِش","غَضَب","باغدار","بَستر","جَذاب","خَطَر","ضَرب","صَبر","تاریخ","پِدَر","سِپَس","بازار","سَبزی","ساعَت",];
export let words4 = ["فَردا","فَرش","دَفتَر","رَفتَن","شَرَف","عَرف","حَرف","فَراموش","تَفریح","فانوس","سِفید","فارسی","فَریاد","ظَرف","فُروتَن","فَرزاد","فِردوس","فارس","فَرض","تُف",];
export let words5 = ["بَرادَر","بَر","خِرَد","رُخ","بَرباد","پَرچَم","دارَد","تَر","دَرد","رَد","بار","تاجِر","رُب","چَتر","تُرُب","دَر","چَرخ","اَبر","خَرج","بُخار",];
export let words6 = ["بُز","روز","زور","زَرد","زیب","باز","پاز","چیز","زِبر","بازی","تیز","زیر","زَر","خَز","زو","زیبا","زِشت","زار","راز","رُز",];
export let words7 = ["کِتاب","کوکَب","کَبک","کَبود","کوبید","کَفش","کِیک","کَبِد","کِبریت","کَپَک","کِشتی","کیش","کَثیف","کوثَر","کودَک","کاخ","کار","کَشف","کاشی","کوشا",];
export let words8 = ["گُربه","گُرگ","گاو","گُل","گوش","گوشی","گاز","تَگ","گُذاشت","توت فَرَنگی","اَگَر","شِگِفت","سازگار","سَگ","گِراف","گُذَر","دِگر","جِگَر","حَق گو","تَگَرگ",];
export let words9 = ["بابا","پِدَر","پاپا","داد","بَد","بَر","پَد","بُرج","بید","پیر","چَپ","جَد","دود","زَر","رَد","ژَر","دُزد","دَرد","چَسب","بَرچَسب","پَتو","پود","بَرزَخ",];
export let words10 = ["طَلا","لاک","بالا","لیز","قالی","کالا","سالو","لولا","لوک","پِلاک","پولاد","کِلاس","لِباس","بُلور","لوکس","زُلال","جَلال","زِلزِلِه","بالارو","دِلاوَر","لاک پُشت","سالاد",];

export let words11 = ["مار","مات","موز","مَغز","مُلک","مَرد","موم","مَکر","ماست","ماسک","مِداد","ماکارونی","ماتیک","موتور","آمار","رام","کَلام","گام","سُماق","مَطبَخ","مُبل","مُپ","موج","سیمُرغ","مُقَوا","مَخمل","مُژده","ماتَم",];

export let words12 = ["نان","اَنار","نارنج","نیش","نَرم","نَقاش","سَنگ","رَنگ","بَنَفش","دَندان","آب نَبات","نَسیم","کَمان","تَکان","نارِنگی","کَفَن","آتَش نِشان","نِگران","نَرگِس","نَوَسان","نازُک","ناقوس","نَعل","ناحَق","نِجات","ناخُن","نازَنین","نَردِبان","نارَس","نازِل","نیکو","دانِش","سَنجاق","نَمَد",];

export let words13 = ["آ","تُ","با","تا","پَ","بِ","او","پی","تَ","اُ","بَ","اَ","بو","بُ","پُ","تو","بُ","پو","تُ","بو","پِ","تا","بو","اِ","بی","ای","تِ","پِ","پا","او","تی","پی",];
export let words14 = ["سَبَد","سَرباز","سَبز","بَست","سیراب","بَسی","سِپاس","بَسیج","سِز","ساز","سُرب","سُرخ","سِپَر","سَر","اَست","سیر","سَبا","سیری","سیب","سوز",];
export let words15 = ["شِش","شوش","شیشه","باش","پوش","پاش","پیش","بیش","تَشت","چِشم","خوش","خوشی","باشی","شاد","شَب","شور","شیر","شَب رو","شَبَح","بَشیر","شِتاب","چِشید",];
export let words16 = ["ضَرب","ضِد","رِضا","راضی","رضوان","حُضور","وَضع","اِضطِراب","اِضافِه","تَضاد","حافِظ",];


// ************************* End BrokenGlassess for word Pract *******************

export let gameWords = {
    iframe1:<iframe style={{maxWidth:'100%'}} src='https://wordwall.net/embed/9585e62f49974baf8997bab3e0c6a277?themeId=46&templateId=30&fontStackId=2' width='100%' height='100%' frameborder='0' allowfullscreen></iframe>,
    iframe2:<iframe style={{maxWidth:"100%"}} src="https://wordwall.net/embed/7b1b9050f37f40a7b8beab4b54c1ffad?themeId=51&templateId=30&fontStackId=2" width="100%" height="100%" frameborder="10" allowfullscreen></iframe>
    }


// ****************** For StoryPage3*****************
//  export const storiesAlpha = {
//   1: {
//     title: 'راز شب در جنگل',
//     content: [{ type: 'text', content: 'چند نوجوان به جنگل رفتند...' }],
//     vocab: [{ word: 'جنگل', meaning: 'forest' }],
//     qa: [{ question: 'آن‌ها کجا رفتند؟', answer: 'جنگل' }]
//   }
// };
// ******************************



  