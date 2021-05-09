const data = document.querySelectorAll('.letter')
console.log(data)


data.forEach( e => {
    window.addEventListener('scroll' , () => {
        let amount =  -350 + window.scrollY * 0.4;
        let updatedamount = Math.floor(amount)
        if (amount < 10) {
           const f =  e.style.left  = updatedamount + "px"
           console.log(f)
        }
    })

})