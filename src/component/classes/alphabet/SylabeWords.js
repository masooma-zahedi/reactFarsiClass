import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

export const SylabeWords = () => {
  const [selectedWord, setSelectedWord] = useState("");
  const [animation, setAnimation] = useState("animate__bounceIn");
  const displayRef = useRef(null)

  const animations = [
    "animate__bounceIn",
    "animate__fadeIn",
    "animate__zoomIn",
    "animate__lightSpeedInRight",
    "animate__jackInTheBox",
    "animate__rotateIn",
  ];

  const datasets =[
    {
        // buttonTargetId:"testSylabe1",
        id:1,
        titleHead:"تا حرف ت بخوانیم",
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
    },
    
    {
        // buttonTargetId:"testSylabe2",
        id:2,
        titleHead:"تا حرف س بخوانیم",
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
    },
    
    {
        // buttonTargetId:"testSylabe3",
        id:3,
        titleHead:" تا حرف ظ بخوانیم",
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
    },

    {
        // buttonTargetId:"testSylabe4",
        id:4,
        titleHead:"تا حرف خ بخوانیم",
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
    },

    {
    // buttonTargetId: "taughtLettersSet1",
    id:5,
    titleHead: "تا حرف ذ بخوانیم ",
    titleColor: "rgb(19, 108, 107)",
    sylabelBg: "rgb(212, 137, 235)",
    sentenceRow: [
        [
        { word: "پِدَر", syla: "پِ + دَر" },
        { word: "اَبر", syla: "اَب+ر" },
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
    },
    {
        // buttonTargetId:"testSylabe5",
        id:6,
        titleHead:"تا حرف ع بخوانیم",
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
    },
    {
        // buttonTargetId:"testSylabe6",
        id:7,
        titleHead:"تا حرف ق بخوانیم",
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
    },
    {
        // buttonTargetId:"testSylabe7",
        id:8,
        titleHead:"تا حرف ن بخوانیم",
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
    },


  ]

  const [selectedDatasetId, setSelectedDatasetId] = useState(datasets[0].id);
  const currentDataset = datasets.find(ds => ds.id === selectedDatasetId);

  const handleSelect = (word) => {
    setSelectedWord(word);
    const randomAnim =
      animations[Math.floor(Math.random() * animations.length)];
    setAnimation(randomAnim);

    // برای sticky ستون سمت راست نیاز به scroll نیست
    // اگر بخوای می‌توانی این بخش را حذف کنی
  };
  return (
    <section className="mt-4">
        <div className="mb-4 d-flex flex-wrap gap-2 justify-content-center">
        {datasets.map(ds => (
          <button
            key={ds.id}
            className={`btn ${
              selectedDatasetId === ds.id ? "btn-primary" : "btn-outline-primary"
            } btn-lg`}
            onClick={() => setSelectedDatasetId(ds.id)}
          >
            {ds.titleHead}
          </button>
        ))}
      </div>
      <div className="row g-4">
        {/* سمت چپ: جملات */}
        <div className="col-md-7" dir="rtl">
          <h2
            className="text-center text-light py-3 rounded-3 shadow"
            style={{ backgroundColor: currentDataset.titleColor || "#6c5ce7" }}
          >
            {currentDataset.titleHead}
          </h2>

          <div className="d-flex flex-column gap-4 mt-4">
            {currentDataset.sentenceRow.map((sentence, rowIndex) => (
              <div
                key={rowIndex}
                className="d-flex flex-wrap justify-content-start gap-3"
              >
                {sentence.map((item, wordIndex) => (
                  <div
                    key={wordIndex}
                    className="card text-center shadow border-0"
                    style={{
                      width: "120px",
                      cursor: "pointer",
                      borderRadius: "20px",
                      background: "linear-gradient(135deg, #74b9ff, #81ecec)",
                    }}
                    onMouseOver={(e)=>{e.target.style.background="linear-gradient(135deg, #74b9ffff, #e184f3ff)"
                        e.target.style.borderRadius='20px'
                    }}
                    onMouseLeave={(e)=>{e.target.style.background="linear-gradient(135deg, #74b9ffff,  #84f3f3ff )"}}
                    onClick={() => {
                        
                        handleSelect(item.syla || item.word)}
                    }
                  >
                    <div className="card-body d-flex justify-content-center align-items-center  p-3" dir="rtl">
                      <h4 className="fw-bold text-white" onMouseLeave={(e)=>{e.target.style.background="transparent"}} onMouseOver={(e)=>{e.target.style.background="transparent"}} >{item.word}</h4>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* سمت راست: نمایش انتخاب */}
        <div className="col-md-5">
          <div
            ref={displayRef}
            className="d-flex flex-column justify-content-center align-items-center shadow-lg rounded-4 p-4"
            style={{
              minHeight: "350px",
              background: currentDataset.sylabelBg || "#00cec9",
              position: "sticky",
              top: "20px",
            }}
          >
            {selectedWord ? (
              <h1
                key={selectedWord + animation}
                className={`display-2 fw-bold text-light animate__animated ${animation}`}
              >
                {selectedWord}
              </h1>
            ) : (
              <span className="fs-4 text-light">یک کلمه را انتخاب کن ✨</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


