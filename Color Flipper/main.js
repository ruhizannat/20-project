const colors = [" #993366", "#666633", "rgba(252, 186, 3)", " #558000"];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', ()=>{
    // console.log(document.body);
    // get random Number between 0-3
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()* colors.length);
}