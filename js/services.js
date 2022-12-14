'use strict'

var gMemes = []
var gImages = [
    {
        id: 1,
        url: 'meme-imgs (square)/1.jpg',
        keyWords: ['polics', 'funny', 'sarcasm']
    },
    {
        id: 2,
        url: 'meme-imgs (square)/2.jpg',
        keyWords: ['cute', 'animals']
    }
   
]


var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Iv sometimes eat falafel',
            size: 20,
            align: 'left',
            color: 'red'
        },
        {
            txt: 'Try cabbage ',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}


function getImgById() {
    console.log(img)
    var img = gImages.find((img) => img.id === gMeme.selectedImgId)
    return img
}


function getCurrImgId() {
    return gMeme.selectedImgId
}


function getSelectedImg(id) {
    gMeme.selectedImgId = +id
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImages
}