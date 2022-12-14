'use strict'

var gMemes = []
var gImages = [
    {
        id: 1,
        url: 'meme-imgs (square)/1.jpg',
        keyWords: ['polticians', 'funny', 'sarcasm']
    },
    {
        id: 2,
        url: 'meme-imgs (square)/2.jpg',
        keyWords: ['cute', 'animals']
    },
    {

        id: 3,
        url: 'meme-imgs (square)/3.jpg',
        keyWords: ['baby', 'cute', 'animals']
    
    },
    {
        id: 4,
        url: 'meme-imgs (square)/4.jpg',
        keyWords: ['animal', 'funny']
    },
    {
        id: 5,
        url: 'meme-imgs (square)/5.jpg',
        keyWords: ['baby', 'funny']
    },
    {
        id: 6,
        url: 'meme-imgs (square)/6.jpg',
        keyWords: ['sarcasm', 'funny', 'geeky']
    },
    {
        id: 7,
        url: 'meme-imgs (square)/7.jpg',
        keyWords: ['crazy', 'funny', 'baby']
    },
    {
        id: 8,
        url: 'meme-imgs (square)/8.jpg',
        keyWords: ['funny', 'sarcasm', 'geeky']
    },
    {
        id: 9,
        url: 'meme-imgs (square)/9.jpg',
        keyWords: ['baby', 'funny', 'sarcasm']
    },
    {
        
        id: 10,
        url: 'meme-imgs (square)/10.jpg',
        keyWords: ['politicians', 'funny', 'sarcasm']
    },
    {
        id: 11,
        url: 'meme-imgs (square)/11.jpg',
        keyWords: ['sports', 'funny', 'ackward']
    },
    {
        id: 12,
        url: 'meme-imgs (square)/12.jpg',
        keyWords: ['funny', 'sarcasm']
    },
    {
        id: 13,
        url: 'meme-imgs (square)/13.jpg',
        keyWords: ['actor', 'sarcasm']
    },
    {
        id: 14,
        url: 'meme-imgs (square)/14.jpg',
        keyWords: ['scary', 'actor']
    },
    {
        id: 15,
        url: 'meme-imgs (square)/15.jpg',
        keyWords: ['sarcasm', 'actor', 'happy']
    },
    {
        id: 16,
        url: 'meme-imgs (square)/16.jpg',
        keyWords: ['actor', 'funny', 'happy']


    },
    {
        id: 17,
        url: 'meme-imgs (square)/17.jpg',
        keyWords: ['politician', 'funny', 'happy']
    },
    {
        id: 18,
        url: 'meme-imgs (square)/18.jpg',
        keyWords: ['anime', 'funny']

    }
   
]


var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Iv sometimes eat falafel',
            size: 20,
            align: 'center',
            innerColor: 'black',
            strColor:'black',

        },
        // {
        //     txt: 'Try cabbage ',
        //     size: 20,
        //     align: 'left',
        //     color: 'red'
        // }
    ]
}


function addLine() {
    var line = {
        txt: "Add some new text here",
        size : 20,
        align :'center',
        font: 'impact',
        innerColor: 'black',
        strColor: "white"



    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx++
    console.log('new line is line:', line);
    
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