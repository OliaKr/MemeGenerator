'use strict'
var gImg
gCanvas.width = 400
gCanvas.height = 400


let gKeywords = [
    {
        category: 'funny',
        fontSize: 13
    },
    {
        category: 'celebrity',
        fontSize: 4
    },
    {
        category: 'politics',
        fontSize: 2
    },
    {
        category: 'animal',
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
        category: 'sport',
        fontSize: 1
    },
    {
        category: 'sarcasm',
        fontSize: 9
    }
]


let gImages = [
    {
        id: 1,
        url: 'meme-imgs (square)/1.jpg',
        keyWords: ['politics', 'funny', 'sarcasm']
    },
    {
        id: 2,
        url: 'meme-imgs (square)/2.jpg',
        keyWords: ['cute', 'animals']
    },
    {
        id: 3,
        url: 'meme-imgs (square)/3.jpg',
        keyWords: ['cute', 'animals', 'baby']
    },
    {
        id: 4,
        url: 'meme-imgs (square)/4.jpg',
        keyWords: ['funny', 'animal']
    },
    {
        id: 5,
        url: 'meme-imgs (square)/5.jpg',
        keyWords: ['funny', 'baby']
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
        keyWords: ['politics', 'happy', 'funny']
    },
    {
        id: 11,
        url: 'meme-imgs (square)/11.jpg',
        keyWords: ['sports', 'awkward', 'funny']
    },
    {
        id: 12,
        url: 'meme-imgs (square)/12.jpg',
        keyWords: ['funny', 'sarcasm','geeky']
    },
    {
        id: 13,
        url: 'meme-imgs (square)/13.jpg',
        keyWords: ['celebrity', 'sarcasm']
    },
    {
        id: 14,
        url: 'meme-imgs (square)/14.jpg',
        keyWords: ['scary', 'celebraty']
    },
    {
        id: 15,
        url: 'meme-imgs (square)/15.jpg',
        keyWords: ['celebraty', 'sarcasm']
    },
    {
        id: 16,
        url: 'meme-imgs (square)/16.jpg',
        keyWords: ['celebraty', 'funny', 'happy']
    },
    {
        id: 17,
        url: 'meme-imgs (square)/17.jpg',
        keyWords: ['politics', 'funny', 'sarcasm']
    },
    {
        id: 18,
        url: 'meme-imgs (square)/18.jpg',
        keyWords: ['animation', 'funny', 'sarcasm']
    }
]


let gStickers = [
    {
        id: 1,
        url: 'stickers/1.png',
        positionX: 200,
        positionY: 200,
        isDragging: false,
        height: 12,
        width: 75

    },
    {
        id: 2,
        url: 'stickers/2.png',
        positionX: 200,
        positionY: 200,
        isDragging: false,
        height: 12,
        width: 85

    },
    {
        id: 3,
        url: 'stickers/3.png',
        positionX: 200,
        positionY: 200,
        isDragging: false,
        height: 12,
        width: 85

    },
    {
        id: 4,
        url: 'stickers/4.png',
        positionX: 200,
        positionY: 200,
        isDragging: false,
        height: 12,
        width: 85
    },
    {
        id: 5,
        url: 'stickers/5.png',
        positionX: 200,
        positionY: 200,
        isDragging: false,
        height: 12,
        width: 85

    }
]


let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            font: 'Impact',
            size: 28,
            align: 'center',
            innerColor: 'white',
            strColor: 'black',
            positionX: 225,
            positionY: 30,
            id: getRandomeId()
        },
        {
            txt: 'Add text here',
            size: 28,
            font: 'Impact',
            align: 'center',
            innerColor: 'white',
            strColor: 'black',
            positionX: 225,
            positionY: 380,
            id: getRandomeId()
        }
    ]

}



//edit canvas

function switchFocus() {
    if (gMeme.lines.length === 0) return
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
}


function addLine() {
    let line = {
        txt: '',
        size: 28,
        align: 'center',
        font: 'impact',
        innerColor: 'white',
        strColor: 'black',
        positionX: 225,
        positionY: 225,
        id: getRandomeId()
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx++
}


function changeOutlineColor(color) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].strColor = color

}


function changeFillColor(color) {
      const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].innerColor = color

}


function changeFont(font) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].font = font
}


function moveLineUp(val) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].positionY -= val
}


function moveLineDown(val) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].positionY -= val

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

sendInput()
function sendInput(userTxt) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].txt = userTxt
    console.log('linesIdx is:', lineIdx);
}



function modifyKeyWordSize(id) {
    gKeywords[id].fontSize += 1
}





//helpers
function getImgUrl() {
    const idx = getImgId()
    return gImages[idx].url
}

function getLineIdx() {
    return gMeme.selectedLineIdx
}


function getStickers(){
    return gStickers
}

function getKeyWords() {
    return gKeywords
}

function getMemeText(lineIdx) {
    return gMeme.lines[lineIdx].txt
}

function getLineIdxById(id) {
    return gMeme.lines.findIndex(function (line) {
        return line.id === id
    })
}


function getKeywordId(categary) {
    return gKeywords.findIndex(function (keyWord) {
        return keyWord.category === categary
    })
}

function getImgId() {
    const imgIdx = gImages.findIndex((img) => img.id == gMeme.selectedImgId)
    return imgIdx
}


function getCurrImgId() {
    return gMeme.selectedImgId
}


function getSelectedImg(id) {
    gMeme.selectedImgId = id
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImages
}

//upload & download

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}


function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}




