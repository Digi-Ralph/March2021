const cursor = document.querySelector('.cursor') 
const list = document.querySelectorAll('.nav-li > .box')

// Solution Mouse
window.addEventListener('mousemove' , e => {
    //  get x and y cordonate
    // const {clientX : x , clientY:y} = e;
    let x = e.clientX
    let y = e.clientY
    // apply cordonate to style
    cursor.style.top = y + 'px'
    cursor.style.left = x + 'px'
    
})

// Solution I
   function zigzap (e) {
        const span = this.parentElement
        let x = e.offsetX
        let y = e.offsetY
        let width = this.offsetWidth;
        console.log(width)
        let height = this.offsetHeight;
        let move = 25;
        let xMove = x / width * (move * 4) - move;
        let yMove = y / height * (move * 4) - move;
        span.style.transform = `translate(${xMove}px, ${yMove}px)`; 
        if (e.type === "mouseleave") span.style.transform = '';
    };

    list.forEach(b => b.addEventListener('mousemove' ,  zigzap
    ));
    list.forEach(b => b.addEventListener('mouseleave' ,  zigzap
    ))



//Solution II
// const btn = document.querySelectorAll('.nav-li')

// btn.forEach((b) => {
//     b.addEventListener('mousemove' , (e) => {
//         const position = b.getBoundingClientRect()
//         let x = e.pageX -  position.x  - position.width / 2 ;
//         let y =   e.pageY - position.y -  position.height / 2;
//         b.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`
//     })
// })

// btn.forEach(b => b.addEventListener('mouseleave' ,  (e) => {
//     b.style.transform = '';

// }
// ))