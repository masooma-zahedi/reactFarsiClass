import {infoCard} from "./cardAlpha/cardDataAlpha"
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

// &&&&&& start short sound
let shortSoundExa = [];
infoCard.map((item , index)=>{
    shortSoundExa =[...shortSoundExa, item.shortSoundPic]
})
export let alphaShortCrousel={
    buttonId:"shortCa1",
    carouselImg:shortSoundExa
}
// &&&&&& End short sound
// &&&&&& start short sound
let longSoundExa = [];
infoCard.map((item , index)=>{
    longSoundExa =[...longSoundExa, item.longSoundPic]
})
export let alphaLongCrousel={
    buttonId:"longCa1",
    carouselImg:longSoundExa
}
// &&&&&& End short sound




// ******************************* End Just Carousel data ************************
// ************************* start List for List Content (for Side Bar )****************
export let contentListAlpha = {
        newword :{
            idModal:"newTest",
            infoWords:[
            {title:"رنگ ها",targetHref:"colorPart-2",idLetter:"color1"},
            {title:"میوه ها",targetHref :"fruitPart-2",idLetter:"fruit1"},
            {title:"اعضای بدن",targetHref :"bodyPart-2",idLetter:"body1"},
            {title:"پوشیدنی ها",targetHref :"wearPart-2",idLetter:"wear1"},
            {title:"لوازم تحریر",targetHref :"supplyPart-2",idLetter:"supply1"},
            {title:"روزهای هفته",targetHref :"daysPart-2",idLetter:"days1"},
            {title:"اعداد 0-20 ",targetHref :"numPart-2",idLetter:"nums1"},
            {title:"جملات کوتاه دستوری",targetHref :"orderPart-2",idLetter:"orderv1"},
            {title:"ظروف آشپزخانه",targetHref :"kitchen1Part-2",idLetter:"kitchen1-1"},
            {title:"شغل ها ",targetHref :"professionsPart-2",idLetter:"kitchen1-1"},
            ],
        },
        readTogether :{
            idModal:"readTo1",
            infoWords:[
            {title:"با هم بخوانیم-1",targetHref:"read-1",idLetter:"readtogether-1"},
            {title:"با هم بخوانیم-2",targetHref:"read-2",idLetter:"readtogether-2"},
            {title:"با هم بخوانیم-3",targetHref:"read-3",idLetter:"readtogether-3"},
            ],
        },
        gameTable :{
            idModal:"tableGame1",
            infoWords:[
            {title:"بازی اعداد",targetHref:"numberGame",idLetter:"numberGame-1"},
            {title:"بازی آشپزخانه",targetHref:"kitchenGame",idLetter:"kitchentGame-1"},
            {title:"بازی شغل ها",targetHref:"professions",idLetter:"professionsGame-3"},
            {title:"بازی حیوانات",targetHref:"animals",idLetter:"animalsGame-3"},
            ],
        },
}


// ************************* end List for List Content****************
// ******************************* Start SylabelWords data *********************

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
        // [
        //     {
        //     word:"بُطری",
        //     syla:"بُط + ری"
        //     },
        //     {
        //     word:"دَر",
        //     syla:""
        //     },
        //     {
        //     word:"سَبَد",
        //     syla:"سَ + بَد"
        //     },
        //     {
        //     word:"اَست.",
        //     syla:""
        //     },
        // ],
        // [
        //     {
        //     word:"شَب",
        //     syla:""
        //     },
        //     {
        //     word:"باد",
        //     syla:""
        //     },
        //     {
        //     word:"آمَد.",
        //     syla:"آ + مَد"
        //     },
        // ],
        // [
        //     {
        //     word:"آرِزو",
        //     syla:"آ + رِ + زو"
        //     },
        //     {
        //     word:"دَست",
        //     syla:""
        //     },
        //     {
        //     word:"پِدَر",
        //     syla:"پِ + دَر"
        //     },
        //     {
        //     word:"را",
        //     syla:""
        //     },
        //     {
        //     word:"بوسید.",
        //     syla:"بو + سید"
        //     },
        // ],
        // [
        //     {
        //     word:"شَب",
        //     syla:""
        //     },
        //     {
        //     word:"سَرد",
        //     syla:""
        //     },
        //     {
        //     word:"شُد.",
        //     syla:""
        //     },
        // ],
        // [
        //     {
        //     word:"او",
        //     syla:""
        //     },    
        //     {
        //     word:"سیب",
        //     syla:""
        //     },
        //     {
        //     word:"سُرخ",
        //     syla:""
        //     },
        //     {
        //     word:"دارَد.",
        //     syla:"دا + رَد"
        //     },
        // ],
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
// ##########-->برای حرف  (ا - و - ی - ر - س - ض - ش - ب)  ########

// ******************************* End SylabelWords data *********************

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
    { front: './images/assetAlpha/professions/pro-1.png', back: '' },
    { front: './images/assetAlpha/professions/pro-2.png', back: '' },
    { front: './images/assetAlpha/professions/pro-3.png', back: '' },
    { front: './images/assetAlpha/professions/pro-4.png', back: '' },
    { front: './images/assetAlpha/professions/pro-5.png', back: '' },
],
[
    { front: './images/assetAlpha/professions/pro-6.png', back: '' },
    { front: './images/assetAlpha/professions/pro-7.png', back: '' },
    { front: './images/assetAlpha/professions/pro-8.png', back: '' },
    { front: './images/assetAlpha/professions/pro-9.png', back: '' },
    { front: './images/assetAlpha/professions/pro-10.png', back: '' },
],
[
    { front: './images/assetAlpha/professions/pro-11.png', back: '' },
    { front: './images/assetAlpha/professions/pro-12.png', back: '' },
    { front: './images/assetAlpha/professions/pro-13.png', back: '' },
    { front: './images/assetAlpha/professions/pro-14.png', back: '' },
    { front: './images/assetAlpha/professions/pro-15.png', back: '' },
],
[
    { front: './images/assetAlpha/professions/pro-16.png', back: '' },
    { front: './images/assetAlpha/professions/pro-17.png', back: '' },
    { front: './images/assetAlpha/professions/pro-18.png', back: '' },
    { front: './images/assetAlpha/professions/pro-19.png', back: '' },
    { front: './images/assetAlpha/professions/pro-20.png', back: '' },
],

]};
export const tableAnimals ={
bgTable:"./images/webPic/minions-1.jpg",
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
// **************************** End  flipping Table data ************************


// ******************************* Start MakeWordCarousel data *********************
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
        {
            image : "./images/assetAlpha/fruitExa/11-07-10.png",
            sylabelWord : "تُ + رُب --> تُرُب",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-11.png",
            sylabelWord : "جَع + فَ + ری --> جَعفَری",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-12.png",
            sylabelWord : "چُ + غُن + دَر --> چُغُندَر",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-13.png",
            sylabelWord : "سیر",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-14.png",
            sylabelWord : "شَل + غَم --> شَلغَم",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-15.png",
            sylabelWord : "شِ + وید --> شِوید",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-16.png",
            sylabelWord : "فِل + فِل --> فِلفِل",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-17.png",
            sylabelWord : "فِل + فِل + دُل +مِه --> فِلفِل دُلمِه",
            active :""
        },
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
        {
            image : "./images/assetAlpha/fruitExa/11-07-20.png",
            sylabelWord : "کَ + دو --> کَدو",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-21.png",
            sylabelWord : " کَ + دو + سَبز --> کَدوسَبز",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-22.png",
            sylabelWord : "کَ + رَفس --> کَرَفس",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-23.png",
            sylabelWord : "کَ + لَم --> کَلَم",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-24.png",
            sylabelWord : "کَ + لَم + بُ + روک + لی--> کَلَم بُروکلی",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/11-07-25.png",
            sylabelWord : "گُل + کَ + لَم --> گُل کَلَم",
            active :""
        },
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
        {
            image : "./images/assetAlpha/fruitExa/12-2-5-e.png",
            sylabelWord : "اَن + جیر --> اَنجیر",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-6-e.png",
            sylabelWord : "اَن + گور --> اَنگور",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-7-e.png",
            sylabelWord : "پا + پا + یا --> پاپایا",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-8-e.png",
            sylabelWord : "پُر + تِ + قال --> پُرتِقال",
            active :""
        },
        {
            image : "./images/assetAlpha/fruitExa/12-2-9-e.png",
            sylabelWord : "تَ + مِشک --> تَمِشک",
            active :""
        },
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
        {
            image : "./images/assetAlpha/fruitExa/12-2-18-e.png",
            sylabelWord : "هِن + دِ + وا + نه --> هندوانه",
            active :""
        },
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
        {
            image :"./images/assetAlpha/school-supplies/12-30-9-sch.png",
            sylabelWord : "گو + نی + یا --> گونیا",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-10-sch.png",
            sylabelWord : "نَ + قا + لِه --> نَقالِه",
            active :""
        },
        {
            image :"./images/assetAlpha/school-supplies/12-30-11-sch.png",
            sylabelWord : "پَر + گار --> پَرگار",
            active :""
        },
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
            image :"./images/assetAlpha/numbers/1-8-25-0-num.png",
            sylabelWord : "صِفر",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-1-num.png",
            sylabelWord : "یک",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-2-num.png",
            sylabelWord : "دو",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-3-num.png",
            sylabelWord : "سِه",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-4-num.png",
            sylabelWord : "چَ + هار --> چَهار",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-5-num.png",
            sylabelWord : "پَنج",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-6-num.png",
            sylabelWord : "شش",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-7-num.png",
            sylabelWord : "هَفت",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-8-num.png",
            sylabelWord : "هَشت",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-9-num.png",
            sylabelWord : "نُه",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-10-num.png",
            sylabelWord : "دَه",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-11-num.png",
            sylabelWord : "یاز + دَه --> یازدَه",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-12-num.png",
            sylabelWord : "دَ + واز + دَه --> دَوازدَه",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-13-num.png",
            sylabelWord : "سیز + دَه --> سیزدَه",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-14-num.png",
            sylabelWord : "چَ + هار + دَه --> چَهاردَه",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-15-num.png",
            sylabelWord : "پانز + دَه --> پانزدَه",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-16-num.png",
            sylabelWord : "شانز + دَه --> شانزدَه",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-17-num.png",
            sylabelWord : "هِف + دَه --> هِفدَه",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-18-num.png",
            sylabelWord : "هِج + دَه --> هِجدَه",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-19-num.png",
            sylabelWord : "نوز + دَه --> نوزدَه",
        },
        {
            image :"./images/assetAlpha/numbers/1-8-25-20-num.png",
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
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-29.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-30.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-31.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-32.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-33.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-34.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-35.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-36.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-37.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-38.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-39.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-40.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-41.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-42.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-43.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-44.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-45.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-46.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-47.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-48.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-49.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-50.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-51.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-52.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-53.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-54.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-55.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-56.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-57.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-58.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-59.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-60.png",
            sylabelWord : "",
        },
        {
            image :"./images/assetAlpha/animals/anim-61.png",
            sylabelWord : "",
        },

    ]
}

// ******************************* End MakeWordCarousel data *********************



  