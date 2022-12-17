'use strict'

var gCanvas = document.querySelector('#meme-canvas')
var gCtx = gCanvas.getContext('2d')


function onCreateMeme(imgId) {
    getSelectedImg(imgId)
    renderMeme()
    setPage()
}

function onChangeOutlineColor(color) {
    changeOutlineColor(color)
    renderMeme()
}

function onChangeFont(value) {
    changeFont(value)
    renderMeme()
}

function onChangeTextSize(num) {
    changeSize(num)
    renderMeme()

}

function onChangeFillColor(color) {
    changeFillColor(color)
    renderMeme()
}

function onAlignText(pos) {
    alignText(pos)
    renderMeme()
}

function onMoveLineUp(num) {
    moveLineUp(num)
    renderMeme()
}


function onMoveLineDown(num) {
    moveLineDown(num)
    renderMeme()
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function renderMeme() {
    const img = new Image()
    img.src = getImgUrl()
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        renderText()
    }
}


function renderText() {
    const meme = getMeme()
    const idx = getLineIdx()
    const currLine = meme.lines[idx]
    const lines = meme.lines
    console.log('lines are lines:',lines );
    if (lines.length === 0) return
    meme.lines.forEach(line => drawText(line))
    document.querySelector('.userTxt').value = currLine.txt
}


function drawRect(x, y, size) {
    gCtx.beginPath()
    gCtx.rect(10, y - size, gCanvas.width - 20, size + 10)
    gCtx.strokeStyle = 'black'
    gCtx.setLineDash([6, 2])
    gCtx.stroke()
}


function onSwitchFocus() {
    switchFocus()
    renderMeme()
}

function drawText(currLine) {
    gCtx.lineWidth = 2
    gCtx.font = `${currLine.size}px ${currLine.font}`
    gCtx.textAlign = currLine.align
    gCtx.strokeStyle = currLine.strColor
    gCtx.fillStyle = currLine.innerColor
    gCtx.save()
    const positionX = currLine.positionX
    const positionY = currLine.positionY

    const idx = getLineIdxById(currLine.id)
    if (currLine.txt && idx === gMeme.selectedLineIdx) {
        drawRect(positionX, positionY, currLine.size)
    }
    gCtx.fillText(currLine.txt, positionX, positionY)
    gCtx.restore()
    gCtx.strokeText(currLine.txt, positionX, positionY)

}

function onsendInput(userTxt) {
    sendInput(userTxt)
    renderMeme()
}


function onAddLine() {
    document.querySelector('.userTxt').value = ''
    addLine()
    renderMeme()
}


function onRemoveText() {
    document.querySelector('.userTxt').value = ''
    removeLine()
    renderMeme()
}