const b = document.getElementsByClassName('matrix')
// declar variablesto be used
const num = "0123456789"
const eng = "AaZzEeRrTtYyUuIiOoPpQqSsDdFfGgHhJjKkLlMmWwXxCcVvBbNn"
const rus = "ΔΛΞΟΠϘΣΦΨ";
const jap = 'いち二に三さん四しよん五ご六ろく七しちななen八はちt九きゅう十じゅう百ひゃく';
//creat  characters and letters and set them up in an array
const sArray = [num, eng, rus, jap]
//creat a space btw variable in array using join(' ')
const sString = sArray.join(' ')

// Get random number using string.length 
const randomized = () => Math.floor(Math.random() * sString.length)

const shuffleString = () => sArray.sort(() => randomized() - 0.5).join('')
const sliced = () => {
    let random1 = randomized();
    const prandom = random1;
    let random2 = randomized();
    if (random1 < random2) {
        random1 = random2;
        random2 = prandom;
    }
    return shuffleString().slice(random1, random2)
}


const a = document.querySelector('#index');
const matrixbar = `<div class=matrix></div>`
for (let i = 0; i < sString.length; i++) {
    a.innerHTML += matrixbar;
    b[i].style.opacity = (Math.random() + .3) * 1;
    b[i].style.transitionDelay = Math.random() * (b.length / 2) + "s";
    b[i].style.transform = `translateZ(${Math.floor(Math.random() * window.innerWidth) + "px"})`
    b[i].innerHTML = shuffleString();
    // b[i].style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);

}

function init() {
    a.className = "loaded"
}

setTimeout(init, 2000);

setInterval(function () {
    for (i = 0; i < sString.length; i++) {
        b[randomized()].innerHTML = sliced() + shuffleString();
    }
}, 300);