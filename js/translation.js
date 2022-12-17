

var gCurrLang = 'en'

var gTrans = {
    galery: {
        en: 'Galery',
        he: 'גלריה'
    },
    memes: {
        en: 'Memes',
        he: 'ממים'
    },
    about: {
        en: 'About',
        he: 'על היוצרת'
    },
    language: {
        en: 'language',
        he: 'שפה'
    },
    'presented-by': {
        en: 'Presented By Olia krasilnikov',
        he: 'מוצג על ידי אוליה קרסילניקובי'
    },
    copyrights: {
        en: '&copy; Copyright 2022, All Right Reserved',
        he: ' 2022 כל הזכויות שמורות ©',
    },
    'about-me': {
        en: `Hello, my name is Olia Krasilnikov.I'm a Full Stack Web Developer student at Coding Academy, 
        skilled in JavaScript language and with applying the top WEB technologies. I'm an effective team player, hard worker and self-learner..`,
        he: ` שלום, שמי אוליה קרסילניקוב. אני סטודנטית לפיתוח אפלעקציות ואתרים ב-Full Stack עם ניסיון בשפת הג'אווה סקריפט  
        וביישום טכנולוגיות ווב מתקדמות ביותר. `
    },
    contact: {
        en: `You can contact me through:`,
        he: 'אפשר ליצור איתי קשר ב:'
    },
    funny: {
        en: 'funny',
        he: 'מצחיק'
    },
    animal: {
        en: 'animal',
        he: 'בעל חיים'
    },
    bad: {
        en: 'bad',
        he: 'רע'
    },
    awkward: {
        en: 'awkward',
        he: 'מביך'
    },
    happy: {
        en: 'happy',
        he: 'שמח'
    },
    politic: {
        en: 'politics',
        he: 'פוליטיקה'
    },
    celebrity: {
        en: 'celebrity',
        he: 'מפורסם'
    },
    animation: {
        en: 'animation',
        he: 'אנימציה'
    },
    baby: {
        en: 'baby',
        he: 'תינוק'
    },
    sport: {
        en: 'sport',
        he: 'ספורט'
    },
    sarcasm: {
        en: 'sarcasm',
        he: 'סרקזם'
    },
    inputSearch: {
        en: 'Search a category....',
        he: 'חפש לפי קטגוריה'
    },
    english:{
        en: 'English',
        he: 'אנגלית'
    },
    hebrew:{
        en: 'hebrew',
        he: 'עברית'
    },
    'edited-memes':{
        en: 'Your Memes',
        he: 'הממים השמורים שלך'
    },
}


function setLang(lang) {
    console.log(lang)
    gCurrLang = lang
}

function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'פוליטיקה'
    var transTxt = keyTrans[gCurrLang]
    if (!transTxt) transTxt = keyTrans.en
    return transTxt
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    els.forEach((el) => {
        var elTrans = el.dataset.trans
        el.innerText = getTrans(elTrans)
    })

}

function getLang() {
    return gCurrLang
}



