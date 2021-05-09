let title = document.querySelectorAll('.title')

title.forEach( e => {
    window.addEventListener('scroll' , () => {
        e.style.transform = `translateX(` + window.scrollY / 20 + `%` + `)`;
    })
})