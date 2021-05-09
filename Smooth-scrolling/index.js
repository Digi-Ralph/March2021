const body = document.body // select The body in the document 
// document is the entier HyperText marque up.
// getElementsbyClassName returns HTMLCollection Object of nodes in form of Array that can be accessed 
//using [0]
// const scrollWrap = document.getElementsByClassName('smooth-scroll-wrapper')[0]
//QuerySelector returns the first Element TAG 
const scrollWrap = document.querySelector('.smooth-scroll-wrapper')

const height = scrollWrap.getBoundingClientRect().height - 1
const speed = 0.09;

let offset = 0;

 body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    //pageYOffset : the number of pixels by which the contents of the document are scrolled upward,
    offset += (window.pageYOffset - offset) * speed;
    var scroll = "translateY(-" + offset + "px) translateZ(0)";

    scrollWrap.style.transform = scroll;
    callScroll = requestAnimationFrame(smoothScroll);
console.log(offset)
}

smoothScroll();




// what does [0] mean in document.query()
// why using -1 on getboudingClientRect().height 
// why set height for body 
//