const c = document.querySelector('.toggle')
const n = document.querySelector('.nav_toggle')

c.addEventListener('click' , e => {
    c.classList.toggle('active')
    n.classList.toggle('active')
})