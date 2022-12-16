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

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

//TO DO - SET-lANG
function onSetLang(lang) {
    if (lang === 'HE') console.log('he')
    if (lang === 'EN') console.log('en')
}
