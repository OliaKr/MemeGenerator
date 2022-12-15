'use strict'

var gImg
var gCurrtMeme
var CurrLine;
var gFont = 'Impact'
///


var dataURL

let gCanvas = document.querySelector('#meme-canvas')
let gCtx = gCanvas.getContext('2d')
gCanvas.width = 450
gCanvas.height = 450

function onInit() {
    renderGallery()
    renderCanvas()
    gCanvas.width = 450
    gCanvas.height = 450
    //text var 
   
   
}


function onCreateMeme(imgId) {
    setPage()
    getSelectedImg(imgId)
    var currImgId = getCurrImgId()
    renderMeme(currImgId)
    renderCanvas()
}


function renderCanvas() {
    gCanvas = document.querySelector('#meme-canvas')
    gCtx = gCanvas.getContext('2d')
    renderMeme()
    onChangeTextSize
}

// function renderImg(img) {
//     gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
// }

function renderMeme(imgId) {
    var meme = getMeme()
    var txt = meme.lines[0].txt
    var meme = new Image()
    meme.src = onGetMemeUrl(imgId)
    meme.onload = function () {
        gCtx.drawImage(meme, 0, 0, gCanvas.width, gCanvas.height)
        drawText(txt, 10, 50)
    }
}


function onsendInput(elTxt) {
    var meme = getMeme()
    meme.lines[0].txt = elTxt.value
    // var idx = returnIdx()
    // meme.lines[idx].txt = elTxt.value
    console.log('meme', meme);

    console.log(elTxt.value)

    drawText(elTxt.value, 30, 50)
    renderMeme()
}


function drawText(text, x, y) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'red'
    gCtx.font = '40px IMPACT'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

}

function onGetMemeUrl(id) {
    return getImgById(id).url
}


function setPage() {
    document.querySelector('.img-container').style.display = 'none'
    document.querySelector('.canvas-container').style.display = 'block'
    document.querySelector('.canvas-editors').style.display = 'block'
}

function onChangeTextSize(num) {

    changeSize(num)
    renderCanvas()

}

// function onChangeTextClor(color) {
//     editMeme('innerColor', color)
//     renderMeme()
    
// }

// function onChangeTextColor(color) {
//     editMeme('innerColor', color)

    
// }

function onChangeTextColor(color) {
    editMeme('innerColor', color)
    renderMeme()
}
function onChangeStrokeColor(color) {
    editMeme('strColor', color)
    renderMeme()

}

// function onChangeTextColor() {
//     setInnerColor()
//     renderMeme()
    
// }



function onAddNewLine() {
    document.querySelector('.userTxt').value = ''
    addLine()
    renderMeme()

}

//filter 
function onFilterMemes(theme) {
    var strHtml = ``
    var imgs = getImgs()
    var newImgs = imgs.filter((img) => {
        var keyWords = img.keyWords
        return keyWords.find(keyword => keyword.startsWith(theme.toLowerCase()))
    })

    newImgs.forEach(img => {
        strHtml += `<img class="meme-image" src="${img.url}" id="${img.id}" onclick="onCreateMeme('${img.id}')">`
    })
    document.querySelector('.img-container').innerHTML = strHtml

}



