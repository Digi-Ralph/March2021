//selecting The element to animate
const title = document.querySelectorAll('.title')
const img = document.querySelectorAll('.img')

//animation happen on scroll only
window.addEventListener('scroll', e => {
    //set up the element animation
    title.forEach(e => {
        // get the position of the element using getBouding Top
        const a = e.getBoundingClientRect().top
        // if the top is smaller than the viewport it will trigger the animation
        // if element container class "not on page " trigger animation else don't trigger
        if (a < window.innerHeight - 100) {
            e.classList.add('fade-out')
        }
    })
    img.forEach(e => {
        const c = e.getBoundingClientRect().top
        if (c < window.innerHeight - 100) {
            e.classList.add('fade-out')
        }
    })


})