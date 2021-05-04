let img = document.querySelector('.word')
let card = document.querySelector('.card')

let img1 = `url(./img/concept1.bmp)`,
    img2 = `url(./img/concept2.bmp)`,
    img3 = `url(./img/concept3.bmp)`,
    img4 = `url(./img/concept4.bmp)`;


let imgGroup = [img1, img2, img3, img4]

let i = 0;
img.addEventListener('mouseenter', e => {
    img.style.setProperty("--pseudo-backgroundImage", imgGroup[i++])
    if ( i >  4) {
        i = 0;
        img.style.setProperty("--pseudo-backgroundImage", imgGroup[i])
    }
})

// cursor 
const cursor = document.querySelector('.cursor')
window.addEventListener('mousemove' , e => {
    const {clientX :x , clientY:y} = e
    cursor.style.top = y + "px"
    cursor.style.left = x + "px"

})
