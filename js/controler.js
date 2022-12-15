'use strict'

var gImg
var gCurrtMeme


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
    console.log(elTxt.value)

    drawText(elTxt.value, 30, 50)
    renderMeme()
}


function drawText(text, x, y) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
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

function onChangeTextClor(color) {
    editMeme('innerColor', color)
    renderMeme()
    
}

function onChangeTextColor(clr) {
    // setTextColor()
    renderCanvas()
    
}


function onChangeStrokeColor(color) {
    editMeme('strColor', color)
    renderCanvas()

}



function onAddNewLine() {
    document.querySelector('.userTxt').value = ''
    addLine()
    renderCanvas()

}

