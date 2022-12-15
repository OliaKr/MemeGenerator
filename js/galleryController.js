'use strict'

function renderGallery() {
    var images = getImgs()
    var strHtmls = images.map(function (img) {
        return `  
        <img class="meme-image" src="${img.url}" id="${img.id}" onclick="onCreateMeme('${img.id}')">
       `
    })
    document.querySelector('.img-container').innerHTML = strHtmls.join('');
}



//TO DO - FILTER
function onFilterMemes(val) {
    if (val === 'Funny') console.log('Funny')
    if (val === 'Animal') console.log('Animal')
    if (val === 'Bad') console.log('Bad')
    if (val === 'Funny') console.log('Funny')
    if (val === 'Funny') console.log('Funny')

}

//TO DO - SET-lANG
function onSetLang(lang) {
    if (lang === 'HE') console.log('he')
    if (lang === 'EN') console.log('en')

}

function OnGetEmailLink() {
    var userEmailInput = document.querySelector('[name="user-email"]').value
    var userSubInput = document.querySelector('[name="user-subject"]').value
    var userMsgInput = document.querySelector('[name="massage"]').value
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${userEmailInput}.com&su=${userSubInput}&body=${userMsgInput}`)
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

//To keep track of the link we are on
const activePage = window.location.pathname
const navLinks = document.querySelectorAll('a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active')
    }
})
