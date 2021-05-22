const imgElement = document.getElementById('game-img')
const optionButtons = document.getElementById('gameBtns')

let state = {}

function startallGame() {
    state = {}
    showImgNode(1)
}

function showImgNode(imgNodeIndex) {
    const imgNode = imgNodes.find(imgNode => imgNode.id === imgNodeIndex)
    imgElement.src = imgNode.img
}

function selectOption(option) {
    
}

const imgNodes = [
    {
        id: 1,
        img: 'static/img/mbti/1.jpg',
        options: [
            {
                text: "보기 1",
                setState: {supper: true},
                nextImg: 2
            },
            {
                text: "보기 2",
                setState: {supper: false},
                nextImg: 2
            },
        ]
    },
    {
        id: 2,
        img: 'static/img/2.jpg',
        options: [
            {
                text: "오늘 할 일 다 했는지 스케줄러 확인해야지!",
                nextImg: 4
            },
        ]
    },
    {
        id: 3,
        img: 'static/img/3.jpg',
        options: [
            {
                text: "보기 1",
                setState: {exercise: true},
                nextImg: 4
            },
            {
                text: "보기 2",
                setState: {exercise: false},
                nextImg: 4
            },
        ]
    }
]

startallGame()