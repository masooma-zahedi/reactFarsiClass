// ********************************** Refrences*********************
// جمله سازی فارسی: component : SentenceBuilder ____ data : sentenceOptions1
// جمله را کامل کن : component : DragDropQuize ______ data :questions1
// بازی پیدا کردن کلمات(بازی حروف): component : LetterPuzzle ______ data : داده ها در خود صفحه وارد می شود
// جملات و مترادف ها : component : SentenceCarousel __________ data : sentenceCarousel

// **********Start Sidebar Word*****************
export let contentListWord = {
    newword :{
        idModal:"wordList",
        infoWords:[
        {title:"داستان شیر و خرس ",targetHref:"lionB2"},    //tagetHref --> from export data of story
        {title:"دوستی واقعی",targetHref :"realF2"},
        {title:"الاغ تنبل",targetHref :"lazyD2"},   
        {title:"لک لک و جوجه ها",targetHref :"lakLak"},
        {title:"موش و قورباغه",targetHref :"FrogMouse"},
        {title:"موش کور",targetHref :"blindMouse"},
        {title:"شوخی خیاط و فیل",targetHref :"elephantT1"},
        {title:"خرس خواب آلود",targetHref :"sleepBear1"},
        {title:"دو گُنجَشک",targetHref :"twoSparrow1"},
        {title:"راز شب کمپینگ",targetHref :"kidsCamping1"},
        {title:"داستان های بیشتر...",targetHref :"moreStoryWords"},
        {title:"",targetHref :""},
        ],
    },
}

// ********** End Sidebar Word*****************



// export let sentenceCarousel = {
//     carouselInfo:{
//         targetCarouselId:"letterHa1",
//         titleCarousel:'جملات و کلمات حرف ح',
//         wordTarget:"letterHa2"
//     },
//     contentCarousel:
//         {
//             textCarousel:[
//                 {
//                     sentence:"ما هَر روز صُبحانه می خوریم.",
//                      wordsSentence:[
//                        { word:'ما',
//                         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/We_logo.svg/1200px-We_logo.svg.png",
//                         eng:'We'},
//                        { word:'صبحانه',
//                         img:"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/breakfast-houston-phpk9GPFf",
//                         eng:'breakFast'},
//                        { word:'خوردن',
//                         img:"https://plantbasedjuniors.com/wp-content/uploads/2022/03/intuitive-eating-kids-1-scaled.jpg",
//                         eng:'eat'},
//                     ]
//                 },
//                 {
//                     sentence:"حَلزون موقعِ حَرِکَت بَدَنَش را روی زمین می کِشَد",
//                      wordsSentence:[
//                        { word:'حلزون',
//                         img:"https://mostaql.hsoubcdn.com/uploads/thumbnails/33360/6209414b5e6dd/%D8%B9%D9%85%D9%84-%D9%81%D9%86%D9%8A-%D8%A8%D9%84%D8%A7-%D8%B9%D9%86%D9%88%D8%A7%D9%86-9.png",
//                         eng:'Snail'},
//                        { word:'موقع',
//                         img:"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/breakfast-houston-phpk9GPFf",
//                         eng:'breakFast'},
//                        { word:'حرکت',
//                         img:"https://plantbasedjuniors.com/wp-content/uploads/2022/03/intuitive-eating-kids-1-scaled.jpg",
//                         eng:'eat'},
//                        { word:'بدن',
//                         img:"https://plantbasedjuniors.com/wp-content/uploads/2022/03/intuitive-eating-kids-1-scaled.jpg",
//                         eng:'eat'},
//                        { word:'زمین',
//                         img:"https://plantbasedjuniors.com/wp-content/uploads/2022/03/intuitive-eating-kids-1-scaled.jpg",
//                         eng:'eat'},
//                     ]
//                 },
//                 {
//                     sentence:"من اِحساسِ تِشنِگی  می کُنَم.",
//                      wordsSentence:[
//                        { word:'احساس',
//                         img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/We_logo.svg/1200px-We_logo.svg.png",
//                         eng:'We'},
//                        { word:'تشنگی',
//                         img:"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/breakfast-houston-phpk9GPFf",
//                         eng:'breakFast'},
//                        { word:'من',
//                         img:"",
//                         eng:'eat'},
//                     ]
//                 },
//                 {
//                     sentence:"او در جاده راه می رود ",
//                      wordsSentence:[
//                        { word:'راه رفتن',
//                         img:"/images/assetWord/actionVerb/12-31-1-verb.png",
//                         eng:'راه رفتن'},
//                        { word:'جاده',
//                         img:"",
//                         eng:'Road'},
//                        { word:'راه می رود',
//                         img:"",
//                         eng:'Walk'},
//                     ]
//                 },
//             ],
//         }

//     }

export let sentenceCarousel = {
    carouselInfo:{
        targetCarouselId:"letterHa1",
        titleCarousel:'جملات و کلمات حرف ه',
        wordTarget:"letterHa2"
    },
    contentCarousel:
        {
            textCarousel:[
                {
                    sentence:"بَچِه‌ها بِه خانِه می‌رَوَند.",
                    wordsSentence:[
                        { word:'بَچِه‌ها', img:'https://s3.envato.com/files/62940466/Cartoon%20Kids.jpg', eng:'Children' },
                        { word:'خانه', img:'https://static.vecteezy.com/system/resources/previews/025/902/055/non_2x/house-cartoon-style-illustration-ai-generated-vector.jpg', eng:'House' },
                        { word:'هُلو', img:'https://static.vecteezy.com/system/resources/previews/050/473/895/non_2x/cute-cartoon-peach-with-face-eyes-smile-and-leafy-green-stem-free-png.png', eng:'Peaches' },
                        { word:'میز', img:'https://img.freepik.com/premium-vector/wooden-table-with-different-racks_642458-763.jpg?semt=ais_hybrid&w=740', eng:'Table' },
                        { word:'بَهار', img:'https://as2.ftcdn.net/jpg/02/56/61/45/1000_F_256614501_8ng35vnx4tr5MvH564fLZRrSynSeyP7w.jpg', eng:'Spring' },
                        { word:'آیِنِه', img:'https://img.pikbest.com/wp/202405/gazing-3d-cartoon-illustration-of-a-child-at-his-reflection-in-mirror-with-copy-space_9840868.jpg!sw800', eng:'Mirror' },
                    ]
                },
                {
                    sentence:"هُلوها روی میز اَست.",
                    wordsSentence:[
                        { word:'تَمیز کَردَن', img:'https://c8.alamy.com/comp/2B190HD/family-cleaning-house-father-mother-and-kids-cleaning-living-room-together-housework-cartoon-vector-illustration-2B190HD.jpg', eng:'Clean' },
                        { word:'پَنجَرِه', img:'https://img.freepik.com/free-vector/window_1308-3890.jpg', eng:'Window' },
                        { word:'باز کَردَن', img:'https://static.vecteezy.com/system/resources/previews/026/119/347/non_2x/little-kid-standing-and-holding-door-knob-vector.jpg', eng:'Open' },
                        { word:'ماه', img:'https://cdn3.vectorstock.com/i/1000x1000/62/77/half-moon-cartoon-vector-1936277.jpg', eng:'Moon' },
                        { word:'آسِمان', img:'https://static.vecteezy.com/system/resources/previews/022/394/347/non_2x/blue-sky-with-clouds-anime-style-background-with-shining-sun-and-white-fluffy-clouds-sunny-day-sky-scene-cartoon-illustration-vector.jpg', eng:'Sky' },
                    ]
                },
                {
                    sentence:"هَوا بهاری است.",
                    wordsSentence:[
                    { word: "هَواپیما", img:'https://img.freepik.com/premium-vector/happy-cartoon-airplane-ready-takeoff_1308-161838.jpg', eng: "Airplane" },
                    { word: "هندوانه", img:'https://t3.ftcdn.net/jpg/01/31/17/02/360_F_131170289_mCTXUvCsNnc0VjZqITGEyNUOiuoI6Gii.jpg', eng: "Watermelon" },
                    { word: "رنگین‌کمان", img:'https://elements-resized.envatousercontent.com/elements-video-cover-images/files/e951e06d-91dd-4465-bfd9-850358e0db57/inline_image_preview.jpg?w=500&cf_fit=cover&q=85&format=auto&s=3fbf5c070aa1f45310f322799736f8e36892171f1dce42d0ee2094940e4536a4', eng: "Rainbow" },
                    { word: "هَدهد", img:'https://static.vecteezy.com/system/resources/previews/020/901/687/non_2x/cute-woodpecker-cartoon-style-vector.jpg', eng: "woodpecker (bird)" },
                    ]
                },
                {
                    sentence:"آیِنِه را تَمیز کُن.",
                    wordsSentence:[
                    ]
                },
                {
                    sentence:"پَنجَرِه را باز کُن.",
                    wordsSentence:[
                    ]
                },
                {
                    sentence:"ماه دَر آسِمان اَست.",
                    wordsSentence:[
                    ]
                },
                {
                    sentence: "هَواپِیما می‌رَوَد.",
                    wordsSentence: [
                    ]
                },
                {
                    sentence: "هِندِوانِه بُزُرگ اَست.",
                    wordsSentence: [
                    ]
                },
                {
                    sentence: "رَنگین‌کَمان هَفت رَنگ دارَد. ",
                    wordsSentence: [
                    ]
                },
                {
                    sentence: "هُدهُد پَرَندِه‌یِ زیباست.",
                    wordsSentence: [
                    ]
                },
            ],
        }
}


export let testPicture = {

    wordCarousel:{
        title:"(1) فعل ها",
        targetCarouselId :"verbAction1",
        idLetter :"verbId",
        imageCarousel :"imgcarouselv1"
    },
    alphaColor : [
        {
            image :"/images/assetWord/actionVerb/12-31-1-verb.png",
            sylabelWord : ".او در جاده راه می رَود",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-2-verb.png",
            sylabelWord : ".او سریعتر از من می دود",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-3-verb.png",
            sylabelWord : ".او دوچرخه سواری می کند",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-4-verb.png",
            sylabelWord : ".آنها نمی توانند جَنگیدَن را متوقف کنند",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-5-verb.png",
            sylabelWord : ".او به شوخی می خندد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-6-verb.png",
            sylabelWord : ".او یک کتاب انگلیسی می خواند",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-7-verb.png",
            sylabelWord : ".آنها همیشه فوتبال بازی می کنند",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-8-verb.png",
            sylabelWord : ".او در حال گوش دادن به موسیقی است",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-9-verb.png",
            sylabelWord : ".تام وقتی به زمین افتاد گریه کرد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-10-verb.png",
            sylabelWord : ".پسر در فکر جابجایی هفته آینده است",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-11-verb.png",
            sylabelWord : ".سارا در حال خواندن یک آهنگ روی صحنه است",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-12-verb.png",
            sylabelWord : ".او یک فیلم کارتونی از تلویزیون تماشا می کند",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-14-verb.png",
            sylabelWord : ".او این جایزه را برای کسب مقام اول در مسابقه بَرَنده شد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-15-verb.png",
            sylabelWord : ".او در حال نوشتن یک داستان برای بچه ها است",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-16-verb.png",
            sylabelWord : ".هَرگِز در را به روی غَریبه ها باز نکُنید",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-17-verb.png",
            sylabelWord : ".لُطفا در را بِبَند",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-18-verb.png",
            sylabelWord : ".من مَعمولا سَعی می کُنم هر شب حداقل هَشت ساعَت بِخوابَم",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-19-verb.png",
            sylabelWord : ".او با استفاده از قیچی یک تکه کاغذ را برش می دهد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-20-verb.png",
            sylabelWord : ".هواپیما در آسمان در حال پرواز است",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-21-verb.png",
            sylabelWord : ".پُلیس یک ماشین را مُتِوَقِف کرد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-22-verb.png",
            sylabelWord : ".بند کفش هایت را بِبَند",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-23-verb.png",
            sylabelWord : ".او با قایق بادبانی از اقیانوس عبور کرد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-24-verb.png",
            sylabelWord : ".کودک شروع به خَزیدَن با دست ها و زانوهایش به سمت در کرد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-25-verb.png",
            sylabelWord : ".مادر بزرگ من در بافتن لباس مهارت دارد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-26-verb.png",
            sylabelWord : ".من دوست دارم صبح حَمام کنم تا روزم را با طَراوَت و تَمیزی شروع کنم",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-27-verb.png",
            sylabelWord : ".او داخِل اِستَخر شیرجه زَد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-28-verb.png",
            sylabelWord : ".آدامس به ته کفشم چسبیده بود",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-29-verb.png",
            sylabelWord : ".او چیپس را با دوستَش شریک کرد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-30-verb.png",
            sylabelWord : ".او با مشت به صورتم زد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-65-verb.png",
            sylabelWord : ".او برگشت و به مادرش دست تکان داد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-66-verb.png",
            sylabelWord : ".او لباس هایش را با دست می دوزد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-67-verb.png",
            sylabelWord : ".او توپی را روی انگشتش می چرخاند",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-68-verb.png",
            sylabelWord : ".من دیروز یک دلار از او دریافت کردم",
        },
    ]

};
export let testPicture2 = {

    wordCarousel:{
        title:" 2 فعل ها",
        targetCarouselId :"verbAction2",
        idLetter :"verbId2",
        imageCarousel :"imgcarouselv2"
    },
    alphaColor : [
        {
            image :"/images/assetWord/actionVerb/12-31-31-verb.png",
            sylabelWord : ".او لیز خورد و افتاد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-32-verb.png",
            sylabelWord : ".نگذار بستنی ات آب شود",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-33-verb.png",
            sylabelWord : ".میمون موز را پوست کند و خورد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-34-verb.png",
            sylabelWord : ".دانش آموزان در حال آزمایش یک ماده شیمیایی جدید هستند",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-35-verb.png",
            sylabelWord : ".او انگشتانش را می شمارد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-36-verb.png",
            sylabelWord : ".آچار خود را بردارید و مهره را سفت کنید",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-37-verb.png",
            sylabelWord : ".لیلی با صدای بلند شروع به خروپف کردن کرد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-38-verb.png",
            sylabelWord : ".پسر دیروز با قایق روی دریاچه رفت",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-39-verb.png",
            sylabelWord : ".میشه نتایج آزمون انگلیسی خود را به من نشان دهید",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-40-verb.png",
            sylabelWord : ".انگشتت را به سمت من اشاره نکن",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-41-verb.png",
            sylabelWord : ".ما در سفرمان عکس های زیادی گرفتیم",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-42-verb.png",
            sylabelWord : ".حضار پس از سخنرانی او با صدای بلند دست زدند",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-43-verb.png",
            sylabelWord : " .او دستکش را در آورد تا با دوستش دست بدهد.",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-44-verb.png",
            sylabelWord : ".او در حال گرفتن توپ است",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-45-verb.png",
            sylabelWord : ". او جعبه را از روی میز بلند کرد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-46-verb.png",
            sylabelWord : ".من به دانش آموزانم انگلیسی آموزش می دهم",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-47-verb.png",
            sylabelWord : ".وقتی به ایستگاه اتوبوس رسیدم دوباره با شما تماس خواهم گرفت",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-48-verb.png",
            sylabelWord : ".او به مدرسه می رود",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-49-verb.png",
            sylabelWord : ".هر جا می رفتم کتاب را با خودم حمل می کردم",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-50-verb.png",
            sylabelWord : ".او در را قفل کرد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-51-verb.png",
            sylabelWord : ". من میخوام برای جشن تولد دوستم کیک بپزم",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-52-verb.png",
            sylabelWord : " .او روی پشتش شناور بود",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-53-verb.png",
            sylabelWord : ".جوکر همزمان با پنج توپ بازی کرد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-54-verb.png",
            sylabelWord : ".سگ پایش را گاز گرفت",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-55-verb.png",
            sylabelWord : ".من یک توپ را به خانه پرتاب کردم",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-56-verb.png",
            sylabelWord : ".او پتو را تا می کند",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-57-verb.png",
            sylabelWord : " .او آرد را با دو عدد تخم مرغ مخلوط کرد",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-58-verb.png",
            sylabelWord : ".او در حال حفر یک چاله عمیق است",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-59-verb.png",
            sylabelWord : ".من هفته ای دوبار کف آشپزخانه را تمیز می کنم",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-60-verb.png",
            sylabelWord : ".ما می خواهیم خانه خود را بسازیم",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-61-verb.png",
            sylabelWord : ".او برای من تصویری از دایناسور کشید",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-62-verb.png",
            sylabelWord : ".من قبل از خروج از خانه موهایم را شانه کردم",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-63-verb.png",
            sylabelWord : ".ما در پارک اسکیت می کنیم",
        },
        {
            image :"/images/assetWord/actionVerb/12-31-64-verb.png",
            sylabelWord : ".او با ظرافت روی تاب در پارک تاب خورد",
        },
    ]

};
    
export let testGramer = {

    wordCarousel:{
        title:"دستور زبان",
        targetCarouselId :"gramer-1",
        idLetter :"gramer1Id",
        imageCarousel :"imggramer1"
    },
    alphaColor : [
        {
            image :"/images/assetWord/grammer/1-1-25-1.png",
            sylabelWord : "ضمایر فاعلی",
        },
        {
            image :"/images/assetWord/grammer/1-1-25-2.png",
            sylabelWord : "تطابق فعل و فاعل",
        },
        {
            image :"/images/assetWord/grammer/1-1-25-3-زمان.png",
            sylabelWord : "زمان-1",
        },
        {
            image :"/images/assetWord/grammer/1-1-25-4.png",
            sylabelWord : "زمان-2",
        },
    ]

};



// *********************** Start Story Parts Data ****************

export let lionBear ={
    wordId:"lionB1",
    targetHref:"lionB2",
    titleStory:"داستان شیر و خرس و روباه",
    imageStory:["/images/assetWord/storyWord/1-6-25-1-lion.png",],
    wordPart:[
        {
            wordMean:"شَریک",
            engMean:"Partner"
        },
        {
            wordMean:"صاحِب",
            engMean:"Owner"
        },
        {
            wordMean:"به درازا کشید",
            engMean:"It took a long time."
        },
        {
            wordMean:"توان جنگیدن",
            engMean:"Ability to fight"
        },
        {
            wordMean:"زخم عمیق",
            engMean:"Deep wound"
        },
        {
            wordMean:"زیر نظر داشتن",
            engMean:"To keep an eye on"
        },
        {
            wordMean:"فرصت طلایی",
            engMean:"Golden opportunity"
        },
        {
            wordMean:"نیشخند",
            engMean:"Laughter"
        },
        {
            wordMean:"گرسنه",
            engMean:"Hungry"
        },
        {
            wordMean:"هیچ کدام",
            engMean:"None"
        },
        {
            wordMean:"قبول کردن",
            engMean:"Accepted"
        },
        {
            wordMean:"خرگوش",
            engMean:"Rabbit"
        },
        {
            wordMean:"دَلیل",
            engMean:"Reason"
        },
        {
            wordMean:"خسته",
            engMean:"Tired"
        },
        {
            wordMean:"افتادن",
            engMean:"Falling"
        },
    ],
    accordionItems : [
        {
          title: " ",
          content: "",
        },
        {
          title: " ",
          content: "",
        },
        {
          title: " ",
          content: "",
        },
      ]
    
    
}
export let realFriends ={
    wordId:"realF1",
    targetHref:"realF2",
    titleStory:"داستان دوستی واقعی",
    imageStory:["/images/assetWord/storyWord/1-6-25-1-friends.png",],
    wordPart:[
        {
            wordMean:"دوستی واقعی",
            engMean:"True friendship"
        },
        {
            wordMean:"آب و هوا",
            engMean:"Weather"
        },
        {
            wordMean:"زیرک",
            engMean:"Smart"
        },
        {
            wordMean:"لاک پشت",
            engMean:"Turtle"
        },
        {
            wordMean:"کلاغ",
            engMean:"Crow"
        },
        {
            wordMean:"آهو",
            engMean:"Deer"
        },
        {
            wordMean:"آرامش",
            engMean:"Peace"
        },
        {
            wordMean:"وقت ظهر",
            engMean:"Noon time"
        },
        {
            wordMean:"نهار",
            engMean:"Lunch"
        },
        {
            wordMean:"مُنتَظر",
            engMean:"Waiting"
        },
        {
            wordMean:"نگران",
            engMean:"Worried"
        },
        {
            wordMean:"اطراف",
            engMean:"Around"
        },
        {
            wordMean:"شکارچی",
            engMean:"Hunter"
        },
        {
            wordMean:"پاره کردن",
            engMean:"Tear"
        },
        {
            wordMean:"نجات دادن",
            engMean:"rescue"
        },
        {
            wordMean:"جویدن",
            engMean:"Chewing"
        },
        {
            wordMean:"متعجب",
            engMean:"Surprised"
        },
        {
            wordMean:"پاسخ دادن",
            engMean:"Reply"
        },
        {
            wordMean:"نزدیک شدن",
            engMean:"come close"
        },
        {
            wordMean:"فرار کردن",
            engMean:"To escape"
        },
        {
            wordMean:"خالی",
            engMean:"Empty"
        },
        {
            wordMean:"چاره",
            engMean:"Solution"
        },
        {
            wordMean:"زخمی",
            engMean:"Wounded"
        },
        {
            wordMean:"عجله",
            engMean:"Hurry"
        },
        {
            wordMean:"ناامید",
            engMean:"disappointed"
        },
        {
            wordMean:"شگفت زده",
            engMean:"Surprised"
        },
        {
            wordMean:"باز گشت",
            engMean:"Return"
        },
    ],
    accordionItems : [
        {
          title: " ",
          content: "",
        },
        {
          title: " ",
          content: "",
        },
        {
          title: " ",
          content: "",
        },
      ]

    
}
export let lazyDonky ={
    wordId:"lazyDonky1",
    targetHref:"lazyD2",
    titleStory:"داستان اُلاغ تَنبل",
    imageStory:["/images/assetWord/storyWord/lazyDonky-1.png","/images/assetWord/storyWord/lazyDonky-2.png",],
    wordPart:[
        {
            wordMean:"تنگ دست",
            engMean:"Poor"
        },
        {
            wordMean:"به فکر فرورفتن",
            engMean:"Thinking"
        },
        {
            wordMean:"کاسبی کردن",
            engMean:"To do business"
        },
        {
            wordMean:"سرپاشدن",
            engMean:"To rise again"
        },
        {
            wordMean:"لغزیدن",
            engMean:"Slipping"
        },
        {
            wordMean:"آغل",
            engMean:"Stable"
        },
        {
            wordMean:"زانوی غم بغل کردن",
            engMean:"to sit in despair"
        },
        {
            wordMean:"تن به کار دادن",
            engMean:"Being forced"
        },
        {
            wordMean:"مزرعه دار",
            engMean:"Farmer"
        },
        {
            wordMean:"تنبل",
            engMean:"Lazy"
        },
        {
            wordMean:"همسایه",
            engMean:"Neighbor"
        },
        {
            wordMean:"روستا",
            engMean:"Village"
        },
        {
            wordMean:"رودخانه",
            engMean:"River"
        },
        {
            wordMean:"ارزان",
            engMean:"Cheap"
        },
        {
            wordMean:"عبور کردن",
            engMean:"Passing"
        },
        {
            wordMean:"احتیاط کردن",
            engMean:"Be careful"
        },
        {
            wordMean:"این دفعه",
            engMean:"This time"
        },
        {
            wordMean:"گیرافتادن ",
            engMean:"Getting stuck"
        },
        {
            wordMean:"داد و بیداد ",
            engMean:"Screaming and shouting"
        },
        {
            wordMean:"پنبه ",
            engMean:"Cotton"
        },
    ],
    accordionItems : [
        {
          title: " ",
          content: "",
        },
        {
          title: " ",
          content: "",
        },
        {
          title: " ",
          content: "",
        },
      ]

    
}
export let laklak ={
    wordId:"laklak1",
    targetHref:"lakLak",
    titleStory:"داستان لک لک و جوجه هایش",
    imageStory:["/images/assetWord/storyWord/laklak-1.png","/images/assetWord/storyWord/laklak-2.png",],
    wordPart:[
        {
            wordMean:"لک لک  ",
            engMean:"Stork"
        },
        {
            wordMean:"جوجه لک لک ",
            engMean:"Stork chick"
        },
        {
            wordMean:"گندم زار ",
            engMean:"Wheat field"
        },
        {
            wordMean:" لانه",
            engMean:"Nest"
        },
        {
            wordMean:" نیرومند",
            engMean:"Strong"
        },
        {
            wordMean:"پر و بال ",
            engMean:"Wing"
        },
        {
            wordMean:"رشد کردن ",
            engMean:"To grow"
        },
        {
            wordMean:"سرگرم بازی ",
            engMean:"Having fun playing"
        },
        {
            wordMean:" برداشت گندم",
            engMean:"Wheat harvest"
        },
        {
            wordMean:"محصول ",
            engMean:"Product"
        },
        {
            wordMean:" دوان دوان",
            engMean:"Run Run"
        },
        {
            wordMean:" کشاورز",
            engMean:"Farmer"
        },
        {
            wordMean:" جدی",
            engMean:"Serious"
        },
        {
            wordMean:" جای امن",
            engMean:"Safe place"
        },
        {
            wordMean:"تاخیر ",
            engMean:"Delay"
        },
        {
            wordMean:"آستین ",
            engMean:"Sleeve"
        },
        {
            wordMean:" کارگر",
            engMean:"Worker"
        },
        {
            wordMean:" وابسته",
            engMean:"Dependent"
        },
    ],
    accordionItems : [
        {
          title: " چرا جوجه های لک لک دوست نداشتند از آن مزرعه بروند؟ ",
          content: "چون آنجا بزرگ شده بودند و گندمزار را خیلی دوست داشت. ",
        },
        {
          title: "چرا در بار اول، لک لک مادر به جدیت کشاورز شک کرد؟",
          content: "کشاورزی که بخواد برای درو کردن محصولش فقط از همسایه هاش کمک بگیره، نمی تونه خیلی جدی باشه",
        },
        {
          title: " چرا در دومین بار، لک لک مادر از جوجه هایش خواست که برای رفتن آماده شوند؟ ",
          content: "چون دیگر او برای انجام کارهای مهم، به دیگران وابسته نبود و می خواست روی پای خودش بایستد.",
        },
        {
          title: " ضرب المثل آستین بالا زدن به چه معناست؟ ",
          content: "با جدیت و تلاش، شروع به انجام کاری کردن",
        },
      ]

    
}
export let FrogM ={
    wordId:"frogM1",
    targetHref:"FrogMouse",
    titleStory:"داستان موش و قورباغه",
    imageStory:["/images/assetWord/storyWord/frog&mouse.png",],
    wordPart:[
        {
            wordMean:" روزی روزگاری ",
            engMean:"Once upon a time"
        },
        {
            wordMean:" دشت ",
            engMean:"Plain"
        },
        {
            wordMean:" باهوش ",
            engMean:"Intelligent"
        },
        {
            wordMean:" کنجکاو ",
            engMean:"Curious"
        },
        {
            wordMean:" چمنزار ",
            engMean:"Meadow"
        },
        {
            wordMean:" گشت و گذار ",
            engMean:"Sightseeing"
        },
        {
            wordMean:" جمع آوری ",
            engMean:"Collection"
        },
        {
            wordMean:" دانه",
            engMean:"Seed"
        },
        {
            wordMean:" پریدن ",
            engMean:"Jumping"
        },
        {
            wordMean:" برکه ",
            engMean:"pond"
        },
        {
            wordMean:" بازیگوش ",
            engMean:"Playful"
        },
        {
            wordMean:" برخلاف ",
            engMean:"Unlike"
        },
        {
            wordMean:" نیزار ",
            engMean:"Reed"
        },
        {
            wordMean:" شیرجه زدن ",
            engMean:"Diving"
        },
        {
            wordMean:" شگفت زده ",
            engMean:"Surprised"
        },
        {
            wordMean:" ماجراجویی ",
            engMean:"Adventure"
        },
        {
            wordMean:" لذت بردن ",
            engMean:"Enjoy"
        },
        {
            wordMean:" خودخواه ",
            engMean:"Selfish"
        },
        {
            wordMean:" عَجیب ",
            engMean:"Strange"
        },
        {
            wordMean:"نازک",
            engMean:"thin"
        },
        {
            wordMean:"تعجب کردن",
            engMean:"To be surprised"
        },
        {
            wordMean:"متوجه شدن",
            engMean:"To understand"
        },
        {
            wordMean:"آزادانه",
            engMean:"Freely"
        },
        {
            wordMean:"وحشت",
            engMean:"Horror"
        },
    ],
    accordionItems : [
        {
          title: "چگونه موش و قورباغه با هم آشنا شدند؟  ",
          content: "کنار یک برکه، موش با قورباغه‌ای بازیگوش آشنا شد. ",
        },
        {
          title: " قورباغه چه کاری کرد که باعث دردسر برای موش شد؟ ",
          content: "قورباغه با طنابی پای خودش را به پای موش بست و او را همه جا با خودش برد. ",
        },
        {
          title: " چه اتفاقی افتاد وقتی به برکه رسیدند؟ ",
          content: "  قورباغه پرید داخل آب و موش را هم با خودش کشید، ولی موش شنا بلد نبود و غرق شد.",
        },
        {
          title: " شاهین چگونه وارد داستان شد؟ ",
          content: " شاهین که در آسمان پرواز می‌کرد، موش را دید که روی آب شناور است و آمد تا او را شکار کند. ",
        },
        {
          title: "چرا قورباغه هم شکار شد؟  ",
          content: " چون به پای موش بسته شده بود و وقتی شاهین موش را گرفت، قورباغه هم همراه او بالا رفت.",
        },
      ]

    
}
export let blindMouse ={
    wordId:"blindM",
    targetHref:"blindMouse",
    titleStory:"داستان موش کور",
    imageStory:["/images/assetWord/storyWord/blindMouse.png",],
    wordPart:[
        {
            wordMean:"آرام  و خاموش",
            engMean:"Quiet and silent"
        },
        {
            wordMean:"هیاهو",
            engMean:"Noise"
        },
        {
            wordMean:"لانه",
            engMean:"Nest"
        },
        {
            wordMean:"ریشه های ستبر",
            engMean:"Thick roots"
        },
        {
            wordMean:"کهنسال",
            engMean:"Old"
        },
        {
            wordMean:"نوجوان",
            engMean:"Teenager"
        },
        {
            wordMean:"شوق",
            engMean:"Passion"
        },
        {
            wordMean:"جوانه زدن",
            engMean:"Sprouting"
        },
        {
            wordMean:"فراتر از تاریکی",
            engMean:"Beyond the Darkness"
        },
        {
            wordMean:"شور و هیجان",
            engMean:"Passion and excitement"
        },
        {
            wordMean:"فریاد زدن",
            engMean:"Shouting"
        },
        {
            wordMean:"سکوت کردن",
            engMean:"To be silent"
        },
        {
            wordMean:"تردید",
            engMean:"Doubt"
        },
        {
            wordMean:"تمسخر",
            engMean:"Ridicule"
        },
        {
            wordMean:"عمیق",
            engMean:"Deep"
        },
        {
            wordMean:"واقعیت",
            engMean:"Reality"
        },
        {
            wordMean:"ماندگار",
            engMean:"Permanent"
        },
        {
            wordMean:"لمس کردن",
            engMean:"Touching"
        },
        {
            wordMean:"شکل",
            engMean:"Shape"
        },
        {
            wordMean:"جنس",
            engMean:"material"
        },
        {
            wordMean:"گرد",
            engMean:"Round"
        },
        {
            wordMean:"زبر",
            engMean:"Rough"
        },
        {
            wordMean:"اندوه",
            engMean:"Sadness"
        },
        {
            wordMean:"ملایم",
            engMean:"Gentle"
        },
        {
            wordMean:"درک کردن",
            engMean:"Understand"
        },
        {
            wordMean:"قضاوت کردن",
            engMean:"To judge"
        },
    ],
    accordionItems : [
        {
          title: "موش کور و پسرش کجا زندگی می‌کردند؟ ",
          content: "آن‌ها در یک جنگل سرسبز و آرام، زیر درخت بزرگی زندگی می‌کردند. ",
        },
        {
          title: "پسر موش کور صبح چه چیزی را ادعا کرد؟ ",
          content: "او گفت که می‌تواند همه‌چیز را ببیند و چشم‌هایش کار می‌کنند. ",
        },
        {
          title: "مادر برای امتحان کردن حرف پسرش چه کاری انجام داد؟ ",
          content: "چند دانه کندر جلوی پسرش گذاشت و از او خواست بگوید که آن‌ها چه هستند. ",
        },
        {
          title: " پسر موش کور دانه‌های کندر را چه چیزی تصور کرد؟ ",
          content: "او فکر کرد که آن‌ها چند تکه سنگ کوچک هستند. ",
        },
        {
          title: "مادر چگونه ثابت کرد که پسرش اشتباه کرده است؟ ",
          content: "او گفت اگر پسرش بوی دانه‌ها را حس می‌کرد، می‌فهمید که آن‌ها کندر هستند، نه سنگ. ",
        },
      ]

    
}
export let elephantT ={
    wordId:"elephantT",
    targetHref:"elephantT1",
    titleStory:"  داستان شوخی خیاط و فیل",
    imageStory:["/images/assetWord/storyWord/elephantT.png",],
    wordPart:[
        {
            wordMean:"خیاط",
            engMean:"Tailor"
        },
        {
            wordMean:"فیل",
            engMean:"Elephant"
        },
        {
            wordMean:"سرزمین",
            engMean:"Land"
        },
        {
            wordMean:"رنگارنگ",
            engMean:"Colorful"
        },
        {
            wordMean:"شگفت انگیز",
            engMean:"Amazing"
        },
        {
            wordMean:"نیرومند",
            engMean:"Strong"
        },
        {
            wordMean:"مردم",
            engMean:"People"
        },
        {
            wordMean:"جایگاه",
            engMean:"position"
        },
        {
            wordMean:"خاص",
            engMean:"Special"
        },
        {
            wordMean:"قریه",
            engMean:"Village"
        },
        {
            wordMean:"مناطق",
            engMean:"Regions"
        },
        {
            wordMean:"دوردست",
            engMean:"Distant"
        },
        {
            wordMean:"حمل کردن",
            engMean:"Carrying"
        },
        {
            wordMean:"مسافر",
            engMean:"Passenger"
        },
        {
            wordMean:"معبد",
            engMean:"Temple"
        },
        {
            wordMean:"استفاده کردن",
            engMean:"Use"
        },
        {
            wordMean:"انتقال دادن",
            engMean:"Transfer"
        },
        {
            wordMean:"نفقه",
            engMean:"Alimony"
        },
        {
            wordMean:"ختم کار",
            engMean:"End of work"
        },
        {
            wordMean:"مسیر",
            engMean:"path"
        },
        {
            wordMean:"درخت کهن",
            engMean:"Old tree"
        },
        {
            wordMean:"نوش جان کردن",
            engMean:"To enjoy"
        },
        {
            wordMean:"دکان",
            engMean:"Shop"
        },
        {
            wordMean:"بازیگوش",
            engMean:"Playful"
        },
        {
            wordMean:"عادت",
            engMean:"Habit"
        },
        {
            wordMean:"سوزن",
            engMean:"Needle"
        },
        {
            wordMean:"خرطوم",
            engMean:"Hose"
        },
        {
            wordMean:"قاه قاه خندیدن",
            engMean:"Laughing out loud"
        },
        {
            wordMean:"خواهش کردن",
            engMean:"To beg"
        },
        {
            wordMean:"مزاق کردن",
            engMean:"To joke"
        },
        {
            wordMean:"کوشش کردن",
            engMean:"To try"
        },
    ],
    accordionItems : [
        {
          title: "۱. فیل در کجا و برای چه کارهایی استفاده می‌شد؟",
          content: "در روستاهای هندوستان، فیل برای حمل بار و رساندن مردم به معبد استفاده می‌شد. ",
        },
        {
          title: "۲. مردی که فیل داشت، چگونه با آن کار می‌کرد؟",
          content: "او با فیل بار مردم را انتقال می‌داد و از این طریق پول به دست می‌آورد. گاهی هم مردم را سوار فیل می‌کرد و به معبد می‌برد. ",
        },
        {
          title: "۳. خیاط با فیل چه رفتاری داشت و چرا این کار نادرست بود؟",
          content: "خیاط هر روز سوزن را در خرطوم فیل فرو می‌کرد و به آن شوخی می‌گفت. این کار نادرست بود چون فیل هم احساس دارد و از این کار اذیت می‌شد. ",
        },
        {
          title: "۴. چرا صاحب فیل نتوانست راه فیل را تغییر دهد؟",
          content: " جواب: چون فیل عاشق موز بود و نمی‌توانست از کنار درخت موز بگذرد.",
        },
        {
          title: "۵. فیل چگونه از خیاط انتقام گرفت؟",
          content: "فیل آب گل‌آلود را در خرطوم خود نگه داشت و وقتی خیاط خواست باز هم شوخی کند، آن آب را روی خیاط و لباس‌هایش پاشید. ",
        },
        {
          title: "۶. مردم بعد از دیدن این ماجرا چه عکس‌العملی نشان دادند؟",
          content: "مردم خندیدند و به خیاط گفتند حالا مزه‌ی شوخی را چشیدی. چون همیشه با فیل شوخی می‌کردی، حالا فیل هم با تو شوخی کرد. ",
        },
      ]

    
}
export let sleepBear ={
    wordId:"sleepBearD",
    targetHref:"sleepBear1",
    titleStory:"  داستان خرسک خواب آلود",
    imageStory:["/images/assetWord/storyWord/sleepBear.png",],
    wordPart:[
        {
            wordMean:"",
            engMean:""
        },
    ],
    accordionItems : [
        {
          title: "",
          content: " ",
        },
      ]

    
}
export let twoSparrow ={
    wordId:"twoSparrowW",
    targetHref:"twoSparrow1",
    titleStory:"  داستان دو گُنجَشک",
    imageStory:["/images/assetWord/storyWord/03-10-storyBirds.jpg",],
    wordPart:[
        {
            wordMean:"",
            engMean:""
        },
    ],
    accordionItems : [
        {
          title: "",
          content: " ",
        },
      ]

    
}
export let kidsCamping ={
    wordId:"kidsCamp",
    targetHref:"kidsCamping1",
    titleStory:"  داستان راز شب کمپینگ",
    imageStory:["/images/assetWord/storyWord/kids_camping-1.png","/images/assetWord/storyWord/kids_camping-2.png"],
    wordPart:[
        {
            wordMean:"راز",
            engMean:""
        },
        {
            wordMean:"رُخصَتی",
            engMean:""
        },
        {
            wordMean:"تابستان",
            engMean:""
        },
        {
            wordMean:"شروع",
            engMean:""
        },
        {
            wordMean:"نوجوان",
            engMean:""
        },
        {
            wordMean:"تصمیم گرفتن",
            engMean:""
        },
        {
            wordMean:"استاد راهنما",
            engMean:""
        },
        {
            wordMean:"اِنرژی",
            engMean:""
        },
        {
            wordMean:"هیجان",
            engMean:""
        },
        {
            wordMean:"کوله پشتی",
            engMean:""
        },
        {
            wordMean:"بوت",
            engMean:""
        },
        {
            wordMean:"بستر خواب",
            engMean:""
        },
        {
            wordMean:"مینی بَس",
            engMean:""
        },
        {
            wordMean:"تماس نگیرین",
            engMean:""
        },
        {
            wordMean:"بدون اجازه",
            engMean:""
        },
        {
            wordMean:"مرغان",
            engMean:""
        },
        {
            wordMean:"فَضا",
            engMean:""
        },
        {
            wordMean:"نان چاشت",
            engMean:""
        },
        {
            wordMean:"رودخانه",
            engMean:""
        },
        {
            wordMean:"مرموز",
            engMean:""
        },
        {
            wordMean:"ترسناک",
            engMean:""
        },
        {
            wordMean:"گرگ",
            engMean:""
        },
        {
            wordMean:"شجاع",
            engMean:""
        },
        {
            wordMean:"چراغ قوه",
            engMean:""
        },
        {
            wordMean:"راکون",
            engMean:""
        },
        {
            wordMean:"ناپدید",
            engMean:""
        },
        {
            wordMean:"رمزآلود",
            engMean:""
        },
    ],
    accordionItems : [
        {
          title: "کمپینگ در کجا انجام شد؟",
          content: "در دل جنگل ",
        },
        {
          title: "بچه ها چه چیزهایی با خود برده بودند؟",
          content: "غذا، لباس گرم، بوت محکم، و بستر خواب ",
        },
        {
          title: "استاد کاویانی به بچه‌ها چه هشدارهایی داد؟",
          content: " گفت یک‌دیگر را تنها نگذارند، با گیاه‌های ناشناس تماس نگیرند و شب بدون اجازه از چادر بیرون نروند.",
        },
        {
          title: "بچه‌ها وقتی رسیدند، چه کارهایی کردند؟",
          content: "چادرها را زدند، نان چاشت خوردند، چوب برای آتش جمع کردند و رودخانه را پیدا کردند. ",
        },
        {
          title: "شب چه چیزی باعث ترس بچه‌ها شد؟",
          content: "صدای خش‌خش بیرون از چادر. ",
        },
        {
          title: "چه حیوانی از پشت بوته‌ها بیرون آمد؟",
          content: "یک راکون کوچک با چشم‌های درخشان. ",
        },
      ]

    
}

// *********************** End Story Parts Data ****************


// ************************* Start Mix word for sentences (کلمات بهم ریخته برای جمله سازی) ***********
// هر جای خالی باید از سه بار تکرار "crt + - "
// اگر عکس برای سوالات نداشتید در قسمت image: null
export let sentenceOptions1 = [
  {
    fa: ["مهربان", "خانه ای","خانواده ای","زندگی","در","می کُنَند.","کوچَک",],
    en: 'A kind family lives in a small house.',
    correctFa:["در","خانه ای","کوچَک","خانواده ای","مهربان","زندگی","می کُنَند.",]
  },
  {
    fa: [ "ما","روز","می خوریم.","با ","صُبح","هَم","هُر","صُبحانه",],
    en: 'We have breakfast together every morning.',
    correctFa:["ما","هر","روز","صُبح","با ","هَم","صُبحانه","می خوریم.",]
  },
  {
    fa: [ "دوست","بازی","دارَم","با ","مَن","نازَنین","کُنَم.",],
    en: 'I like to play with Nazanin.',
    correctFa:["مَن","دوست","دارَم","با ","نازَنین","بازی","کُنَم.",]
  },
  {
    fa: [ "تاب بازی","مَن","می کُند.","دوچَرخِه سَواری","می کُنم","و","نازَنین",],
    en: 'I ride a bike and Nazanin plays on the swing.',
    correctFa:["مَن","دوچَرخِه سَواری","می کُنم","و","نازَنین","تاب بازی","می کُند.",]
  },
  {
    fa: ["شاد","ما","خانواده ی ","یِک","هَستیم.", ],
    en: 'We are a happy family.',
    correctFa:["ما","یِک","خانواده ی ","شاد","هَستیم.",]
  },
  {
    fa: ["هَمدیگَر","را","دوست","داریم.","خیلی","ما", ],
    en: 'We love each other very much.',
    correctFa:["ما","هَمدیگَر","را","خیلی","دوست","داریم.",]
  },
  {
    fa: ["و","ما","پارک","میوه","دَر","می خوریم.", "غَذا",],
    en: 'We eat food and fruit in the park.',
    correctFa:["ما","دَر","پارک","غَذا","و","میوه","می خوریم.",]
  },
  {
    fa: ["می گویَد.","مادر","با","شب ها","برایِمان","لبخند","قصه", ],
    en: 'Mother tells us stories at night with a smile.',
    correctFa:["مادر","با","لبخند","شب ها","برایِمان","قصه","می گویَد.",]
  },
  {
    fa: [ ],
    en: '',
    correctFa:[]
  },
];
export let sentenceOptions2 = [
  {
    fa: ["یاسیهاصخمهربان", "خانه ای","خانواده ای","زندگی","در","می کُنَند.","کوچَک",],
    en: 'A kind family lives in a small house.',
    correctFa:["درآهای این مننم","خانه ای","کوچَک","خانواده ای","مهربان","زندگی","می کُنَند.",]
  },
  {
    fa: [ "بصبصث یسما","روز","می خوریم.","با ","صُبح","هَم","هُر","صُبحانه",],
    en: 'We have breakfast together every morning.',
    correctFa:["ما","هر","روز","صُبح","با ","هَم","صُبحانه","می خوریم.",]
  },
  {
    fa: [ "ثص ثثث ثث دوست","بازی","دارَم","با ","مَن","نازَنین","کُنَم.",],
    en: 'I like to play with Nazanin.',
    correctFa:["مَن","دوست","دارَم","با ","نازَنین","بازی","کُنَم.",]
  },
  {
    fa: [ "یص صثصث تاب بازی","مَن","می کُند.","دوچَرخِه سَواری","می کُنم","و","نازَنین",],
    en: 'I ride a bike and Nazanin plays on the swing.',
    correctFa:["مَن","دوچَرخِه سَواری","می کُنم","و","نازَنین","تاب بازی","می کُند.",]
  },
  {
    fa: ["یسبص صصص شاد","ما","خانواده ی ","یِک","هَستیم.", ],
    en: 'We are a happy family.',
    correctFa:["ما","یِک","خانواده ی ","شاد","هَستیم.",]
  },
  {
    fa: ["سبصبص س هَمدیگَر","را","دوست","داریم.","خیلی","ما", ],
    en: 'We love each other very much.',
    correctFa:["ما","هَمدیگَر","را","خیلی","دوست","داریم.",]
  },
  {
    fa: ["و","ما","پارک","میوه","دَر","می خوریم.", "غَذا",],
    en: 'We eat food and fruit in the park.',
    correctFa:["ما","دَر","پارک","غَذا","و","میوه","می خوریم.",]
  },
  {
    fa: ["می گویَد.","مادر","با","شب ها","برایِمان","لبخند","قصه", ],
    en: 'Mother tells us stories at night with a smile.',
    correctFa:["مادر","با","لبخند","شب ها","برایِمان","قصه","می گویَد.",]
  },
  {
    fa: [ ],
    en: '',
    correctFa:[]
  },
];
export let sentenceOptions3 = [
  {
    fa: ["نَند.","کوچَک",],
    en: 'A kind family lives in a small house.',
    correctFa:["درآهای این مننم","خانه ای","کوچَک","خانواده ای","مهربان","زندگی","می کُنَند.",]
  },
  {
    fa: [ "بصبصث ",],
    en: 'We have breakfast together every morning.',
    correctFa:["ما","هر","روز","صُبح","با ","هَم","صُبحانه","می خوریم.",]
  },
  {
    fa: [ "ثص ثثث ثث"," دکُنَم.",],
    en: 'I like to play with Nazanin.',
    correctFa:["مَن","دوست","دارَم","با ","نازَنین","بازی","کُنَم.",]
  },
  {
    fa: [ "یص صثصث تاب بازی","مَن","می کُند.","دوچَرخِه سَواری","می کُنم","و","نازَنین",],
    en: 'I ride a bike and Nazanin plays on the swing.',
    correctFa:["مَن","دوچَرخِه سَواری","می کُنم","و","نازَنین","تاب بازی","می کُند.",]
  },
  {
    fa: ["یسبص صصص شاد","ما","خانواده ی ","یِک","هَستیم.", ],
    en: 'We are a happy family.',
    correctFa:["ما","یِک","خانواده ی ","شاد","هَستیم.",]
  },
  {
    fa: ["سبصبص س هَمدیگَر","را","دوست","داریم.","خیلی","ما", ],
    en: 'We love each other very much.',
    correctFa:["ما","هَمدیگَر","را","خیلی","دوست","داریم.",]
  },
  {
    fa: ["و","ما","پارک","میوه","دَر","می خوریم.", "غَذا",],
    en: 'We eat food and fruit in the park.',
    correctFa:["ما","دَر","پارک","غَذا","و","میوه","می خوریم.",]
  },
  {
    fa: ["می گویَد.","مادر","با","شب ها","برایِمان","لبخند","قصه", ],
    en: 'Mother tells us stories at night with a smile.',
    correctFa:["مادر","با","لبخند","شب ها","برایِمان","قصه","می گویَد.",]
  },
  {
    fa: [ ],
    en: '',
    correctFa:[]
  },
];

// ************************* End Mix word for sentences (کلمات بهم ریخته برای جمله سازی) ***********
// ************************* Start جمله را کامل کن* ****************************************
export let questions1 = [
      {
        sentence: 'مَن هَر روز به ___ می‌رَوَم.',
        correctWord: 'مدرسه',
        options: ['مدرسه', 'سیب', 'باران'],
        image: 'https://i.pinimg.com/736x/28/07/eb/2807eb52c3035c3caa48347167545cd4.jpg'
      },
      {
        sentence: 'او یِک ___ در دست دارَد.',
        correctWord: 'کتاب',
        options: ['کتاب', 'دویدن', 'زنگ'],
        image: 'https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200'
      },
      {
        sentence: 'مَن نان تازه ___ دارَم.',
        correctWord: 'دوست',
        options: ['بَستَنی', 'دوست', 'سَرما','نیما'],
        image: 'https://borna.news/files/fa/news/1399/3/23/1788123_900.jpg'
      },
      {
        sentence: 'مادَر کَمی ___ به غَذا زَد.',
        correctWord: 'نَمَک',
        options: ['نَمَک', 'میوه', 'بُشقاب'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Table_salt_with_salt_shaker_V1.jpg'
      },
      {
        sentence: ' ___ دَر دَریا زِندِگی می کُنَد.',
        correctWord: 'نَهَنگ',
        options: ['جوجه', 'شیر', 'گَوَزن','نَهَنگ'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/1200px-Killerwhales_jumping.jpg'
      },
      {
        sentence: 'پِدَرَم بَرایَم یِک ___ خَرید.',
        correctWord: 'کُلاه',
        options: ['هَوا', 'آسمان', 'مادَر','کُلاه'],
        image: 'https://sainc2.myshopify.com/cdn/shop/products/beach-hat-red-front-ss20-2500px_6a3730db-77cc-44d6-b437-b027b32bb044.jpg?v=1718389492'
      },
      {
        sentence: ' ___نوک کوچَکی دارَد.',
        correctWord: 'پَرَندِه',
        options: ['پَرَندِه', 'روباه', 'ماهی','تِمساح'],
        image: 'https://statics.basalam.com/public-7/users/kRZKpN/2110/wq4ytYJSJBtoG93qZQpTpO390nrWk4rbf79ftOGJ.jpg'
      },
      {
        sentence: 'مَن با ___ لِباس دوختَم.',
        correctWord: 'نَخ',
        options: [ 'چوب','نَخ', 'لیوان','مِداد'],
        image: 'https://www.lavanbaft.com/wp-content/uploads/2022/02/nakh.jpg'
      },
      {
        sentence: 'زَنبور ___ زَد.',
        correctWord: 'نیش',
        options: [ 'گِریه', 'کُتَک','عَسَل','نیش'],
        image: 'https://www.digikala.com/mag/wp-content/uploads/2023/05/01-Bee-Sting-Treatment-1.jpg'
      },
      {
        sentence: '___ بالای دِرَخت رَفت.',
        correctWord: 'گُربه',
        options: ['کَفش', 'گُربه', 'گُل','موبایل'],
        image: 'https://cdn.fararu.com/thumbnail/OTliY2YXgLxy/fCohl8MdDeqLuUiNxwx9X4gYrgKL9XBZBWdbZWUJQbHweEbOeibJ3lKhwCXPcymMenByfMSSpsbh46ioIqLjxbHMRm21_h7HQpcPeRTlTup9Fg2BIMEOf3jclM_4J6zeNSYMgfXaohvvVGVyDx5LlALVa--jwrBG/OTliY2YXgLxy.jpg'
      },
    
]
export let questions2 = [
    // masooma
      {
        sentence: 'او ___ وَ اُفتاد.',
        correctWord: 'لیز خورد',
        options: ['لیز خورد', 'غَذاخورد', 'کِتاب خواند'],
        image: '/images/assetWord/actionVerb/12-31-31-verb.png'
      },
      {
        sentence: 'نَگذار بَستَنی اَت ___',
        correctWord: 'آب شَوَد(ذوب شَوَد)',
        options: ['پُخته شَوَد', 'آب شَوَد(ذوب شَوَد)', 'بُزُرگ شَوَد '],
        image: '/images/assetWord/actionVerb/12-31-32-verb.png'
      },
      {
        sentence: 'مِیمون موز را ___ وَ خورد.',
        correctWord: 'پوست کَند',
        options: ['اَنداخت','پوست کَند' ,'بازی کَرد'],
        image: '/images/assetWord/actionVerb/12-31-33-verb.png'
      },
      {
        sentence: 'دانِش آموزان ___ یِک مادِه شیمیایی جَدید هَستَند.',
        correctWord: 'دَر حالِ آزمایِش',
        options: ['دَر حالِ آزمایِش', 'در حال تماشا کردن', ' در حال خوابیدن'],
        image: '/images/assetWord/actionVerb/12-31-34-verb.png'
      },
      {
        sentence: 'او اَنگُشتانَش را ___.',
        correctWord: 'می شُمارَد',
        options: ['گِریه می کُنَد', 'راه می رَوَد', 'می شُمارَد'],
        image: '/images/assetWord/actionVerb/12-31-35-verb.png'
      },
      {
        sentence: 'آچار خود را بَردارید وَ مُهرِه را ___ .',
        correctWord: 'سِفت کُنید',
        options: ['سِفت کُنید', 'بیاندازید', 'خَراب کُنید'],
        image: '/images/assetWord/actionVerb/12-31-36-verb.png'
      },
      {
        sentence: 'لیلی با صِدایِ بُلَند شَروع به ___ کَرد.',
        correctWord: 'خُروپُف کَردَن',
        options: ['جیغ زَدَن ', 'بالا پَریدَن', 'خُروپُف کَردَن'],
        image: '/images/assetWord/actionVerb/12-31-37-verb.png'
      },
      {
        sentence: 'پِسر دیروز با قایِق روی دَریاچه ___.',
        correctWord: 'عُبور کَرد',
        options: ['زِندِگی کَرد', 'عُبور کَرد', 'کار کَرد'],
        image: '/images/assetWord/actionVerb/12-31-38-verb.png'
      },
      {
        sentence: 'میشه نَتایِج آزمون اِنگِلیسی خود را به مَن ___.',
        correctWord: 'نِشان دَهید',
        options: ['نِشان دَهید', 'بپوشانی', 'بِرَوید'],
        image: '/images/assetWord/actionVerb/12-31-39-verb.png'
      },
      {
        sentence: 'اَنگُشتت را به سَمتِ مَن ___.',
        correctWord: 'اِشارِه نَکن',
        options: ['نَدِه', 'نَخور', 'اِشارِه نَکن'],
        image: '/images/assetWord/actionVerb/12-31-40-verb.png'
      },
      {
        sentence: 'حُضار پَس اَز سَخَنرانی او با صِدایِ بُلَند ___.',
        correctWord: 'دَست زَدَند',
        options: ['دَست زَدَند', 'خوابیدَند', 'کار کَردَند'],
        image: '/images/assetWord/actionVerb/12-31-42-verb.png'
      },
      {
        sentence: 'او دَستکِش را دَر آوَرد تا با دوستَش ___.',
        correctWord: 'دَست بِدَهَد',
        options: ['راه بِرَوَد', 'دَست بِدَهَد', 'پَرواز کُنَد'],
        image: '/images/assetWord/actionVerb/12-31-43-verb.png'
      },
      {
        sentence: 'او دَر حال ___ توپ اَست.',
        correctWord: 'گِرِفتَن',
        options: ['گِرِفتَن', 'زَدَن', 'نِوِشتَن'],
        image: '/images/assetWord/actionVerb/12-31-44-verb.png'
      },
    
]

export let questions3 = [
      {
        sentence: 'مَن هَر روز به ___ می‌رَوَم.jh jio ou iuou ooi ouoi iiou ',
        correctWord: 'مدرسه',
        options: ['مدرسه', 'سیب', 'باران'],
        image: 'https://i.pinimg.com/736x/28/07/eb/2807eb52c3035c3caa48347167545cd4.jpg'
      },
      {
        sentence: 'او یِک ___ در دست دارَد.',
        correctWord: 'کتاب',
        options: ['کتاب', 'دویدن', 'زنگ'],
        image: 'https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200'
      },
      {
        sentence: 'مَن نان تازه ___ دارَم.',
        correctWord: 'دوست',
        options: ['بَستَنی', 'دوست', 'سَرما','نیما'],
        image: null
      },
      {
        sentence: 'مادَر کَمی ___ به غَذا زَد.',
        correctWord: 'نَمَک',
        options: ['نَمَک', 'میوه', 'بُشقاب'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Table_salt_with_salt_shaker_V1.jpg'
      },
      {
        sentence: ' ___ دَر دَریا زِندِگی می کُنَد.',
        correctWord: 'نَهَنگ',
        options: ['جوجه', 'شیر', 'گَوَزن','نَهَنگ'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/1200px-Killerwhales_jumping.jpg'
      },
      {
        sentence: 'پِدَرَم بَرایَم یِک ___ خَرید.',
        correctWord: 'کُلاه',
        options: ['هَوا', 'آسمان', 'مادَر','کُلاه'],
        image: 'https://sainc2.myshopify.com/cdn/shop/products/beach-hat-red-front-ss20-2500px_6a3730db-77cc-44d6-b437-b027b32bb044.jpg?v=1718389492'
      },
      {
        sentence: ' ___نوک کوچَکی دارَد.',
        correctWord: 'پَرَندِه',
        options: ['پَرَندِه', 'روباه', 'ماهی','تِمساح'],
        image: 'https://statics.basalam.com/public-7/users/kRZKpN/2110/wq4ytYJSJBtoG93qZQpTpO390nrWk4rbf79ftOGJ.jpg'
      },
      {
        sentence: 'مَن با ___ لِباس دوختَم.',
        correctWord: 'نَخ',
        options: [ 'چوب','نَخ', 'لیوان','مِداد'],
        image: 'https://www.lavanbaft.com/wp-content/uploads/2022/02/nakh.jpg'
      },
      {
        sentence: 'زَنبور ___ زَد.',
        correctWord: 'نیش',
        options: [ 'گِریه', 'کُتَک','عَسَل','نیش'],
        image: 'https://www.digikala.com/mag/wp-content/uploads/2023/05/01-Bee-Sting-Treatment-1.jpg'
      },
      {
        sentence: '___ بالای دِرَخت رَفت.',
        correctWord: 'گُربه',
        options: ['کَفش', 'گُربه', 'گُل','موبایل'],
        image: 'https://cdn.fararu.com/thumbnail/OTliY2YXgLxy/fCohl8MdDeqLuUiNxwx9X4gYrgKL9XBZBWdbZWUJQbHweEbOeibJ3lKhwCXPcymMenByfMSSpsbh46ioIqLjxbHMRm21_h7HQpcPeRTlTup9Fg2BIMEOf3jclM_4J6zeNSYMgfXaohvvVGVyDx5LlALVa--jwrBG/OTliY2YXgLxy.jpg'
      },
    
]

// ************************* End جمله را کامل کن* ****************************************







