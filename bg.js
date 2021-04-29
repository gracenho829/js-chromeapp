const body = document.querySelector("body");
const COLOR_NUMBER = 3;
const colorObj = [
    {
        bgColor: '#5d7599',
        textColor: '#ABB6C8',
        clockColor: '#f7f0c6'
    },
    {
        bgColor: '#e5efc1',
        textColor: '#557b83',
        clockColor: '#a2d5ab'
    }, 
    {
        bgColor: '#c6df76',
        textColor: '#fe72a9',
        clockColor: '#dd4470'
    }
]

function getRandom(){
    const number = Math.floor(Math.random()*COLOR_NUMBER);
    return number;
}

function paintBg(randomNumber){
    console.log(colorObj[randomNumber].bgColor);
    body.style.color = colorObj[randomNumber].textColor;
    document.querySelector('.js-clock').style.color = colorObj[randomNumber].clockColor;
    document.body.style.backgroundColor = colorObj[randomNumber].bgColor;
    document.querySelector('.inputText').style.border = `2px solid ${colorObj[randomNumber].textColor}`;
    document.querySelectorAll('li').style.color = colorObj[randomNumber].textColor;
}
function init(){
    const randomNumber = getRandom();
    paintBg(randomNumber);
    console.log(randomNumber);
}

init();