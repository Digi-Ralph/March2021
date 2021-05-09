let imgitems = [...document.querySelectorAll('.imgbox')]
let titles = [...document.querySelectorAll('h2')]

//Intersection observer options {root , rootMargin , threshold}
let options = {
    threshold: 1,

}

let setItemActive  = (entreis => {
    entreis.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active')
        }
    })
})

let observer = new IntersectionObserver( setItemActive, options)
imgitems.forEach((item, idx) => {
    console.log(idx)
    console.log(imgitems)
    item.children[0].style.backgroundImage = `url(./img/index${idx + 1}.jpg)`,
idx % 2  == 0  ? item.style.left = `50%` : item.style.left = `5%`
observer.observe(item)
})

titles.forEach((title, idx) => {
    idx % 2  == 0  ? title.style.left = `55%` : title.style.left = `35%`
    observer.observe(title)
})