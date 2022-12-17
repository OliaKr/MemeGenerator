'use strict'


var gMemes = []
var gIdx = 0


var gKeywords = [

    {
        category: 'funny',
        fontSize: 13
    },
    {
        category: 'actor',
        fontSize: 4
    },
    {
        category: 'politician',
        fontSize: 2
    },
    {
        category: 'animals',
        fontSize: 3
    },
    {
        category: 'animation',
        fontSize: 1
    },
    {
        category: 'baby',
        fontSize: 4
    },
    {
        category: 'sports',
        fontSize: 1
    },
    {
        category: 'sarcasm',
        fontSize: 9
    }

]
    // 'funny': 12,
    // 'cat': 1,
    // 'happy': 4,
    // 'actor': 4,
    // 'politician': 3,
    // 'cute': 12,
    // 'animals': 3,
    // 'animation': 1,
    // 'baby': 3,
    // 'love': 1,
    // 'sports': 2,
    // 'dog': 2,
    // 'sarcasm': 7,
    // 'geeky': 2,
    // 'scary': 1,
    // 'bad': 1,
    // 'ackward': 1
    



var gImages = [
    {
        id: 1,
        url: 'meme-imgs (square)/1.jpg',
        keyWords: ['politician', 'funny', 'sarcasm']
    },
    {
        id: 2,
        url: 'meme-imgs (square)/2.jpg',
        keyWords: ['cute', 'animals', 'happy']
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
        keyWords: ['funny', 'sarcasm', 'geeky']
    },
    {
        id: 7,
        url: 'meme-imgs (square)/7.jpg',
        keyWords: ['crazy', 'funny', 'baby']
    },
    {
        id: 8,
        url: 'meme-imgs (square)/8.jpg',
        keyWords: ['funny', 'sarcasm','geeky']
    },
    {
        id: 9,
        url: 'meme-imgs (square)/9.jpg',
        keyWords: ['baby', 'funny', 'sarcasm']
    },
    {
        id: 10,
        url: 'meme-imgs (square)/10.jpg',
        keyWords: ['politicians', 'funny', 'happy']
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
        keyWords: ['politician', 'funny', 'sarcasm']
    },
    {
        id: 18,
        url: 'meme-imgs (square)/18.jpg',
        keyWords: ['animation', 'funny']
    }
]

let gStickers = [
    {
        id: 1,
        url: 'stickers/2.png',
        positionX: 200,
        positionY: 200,
        isDragging: false,
        height: 12,
        width: 75

    },
    {
        id: 2,
        url: 'stickers/5.png',
        positionX: 200,
        positionY: 200,
        isDragging: false,
        height: 12,
        width: 85

    },
    {
        id: 3,
        url: 'stickers/6.png',
        positionX: 200,
        positionY: 200,
        isDragging: false,
        height: 12,
        width: 85

    },
    {
        id: 4,
        url: 'stickers/7.png',
        positionX: 200,
        positionY: 200,
        isDragging: false,
        height: 12,
        width: 85
    },
    {
        id: 5,
        url: 'stickers/8.png',
        positionX: 200,
        positionY: 200,
        isDragging: false,
        height: 12,
        width: 85

    }
]




var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat falafel!',
            font: 'IMPACT',
            size: 20,
            align: 'center',
            innerColor: 'white',
            strColor: 'black',
            positionX: gCanvas.width / 2,
            positionY: 30,
        },
       
    ]

}


function switchFocus() {
    if (gMeme.lines.length === 0) return
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
}

function addLine() {
    var line = {
        txt: 'Add a new text here',
        size: 25,
        align: 'center',
        font: 'impact',
        innerColor: 'yellow',
        strColor: 'blue',
        positionX: 225,
        positionY: 225
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx++
    console.log('new line is line:', line);
}

function editMeme(key, value) {
    if (gMeme.lines.length === 0) return
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx][key] = value
}



function changeFont(font) {
    gFont = font
    console.log('font is font', font);
}

function getLineIdx() {
    return gMeme.selectedLineIdx
}

function getStickers(){
    return gStickers
}



function getMemeText(lineIdx) {
    return gMeme.lines[lineIdx].txt
}


function changeSize(num) {
    if (gMeme.lines.length === 0) return
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].size += num

}


function alignText(aligPs) {
    if (gMeme.lines.length === 0) return
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].align = aligPs

}


function removeLine() {
    if (gMeme.lines.length === 0) return
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].txt = ''

}


function setStroke(color) {
    console.log(color)
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].strColor = color
}

function setTxtColor(color) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].innerColor = color
}


function returnIdx() {
    return gIdx
}


function setLine() {
    gIdx++
    console.log(gIdx)
}


function getMemeUrl() {
    var idx = getImgId()
    return gImages[idx].url
}


function getImgId() {
    var imgIdx = gImages.findIndex((img) => img.id == gMeme.selectedImgId)
    return imgIdx
}


function getCurrImgId() {
    return gMeme.selectedImgId
}


function getSelectedImg(id) {
    console.log(id)
    gMeme.selectedImgId = id
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImages
}

function moveLineUp(val) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].positionY -= val
}

function moveLineDown(val) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].positionY -= val

}

function modifyKeyWordSize(id) {
    gKeywords[id].fontSize += 1
}

function getKeywordId(categary) {
    return gKeywords.findIndex(function (keyWord) {
        return keyWord.category === categary
    })
}

function getKeyWords() {
    return gKeywords
}
