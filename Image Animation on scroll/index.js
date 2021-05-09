const header = document.querySelector('.header')

window.addEventListener('scroll' , e => {
    // add window.ScrollY output to the background Size , but the output of scrollY
    //is far more big that why we do a division operation on it in order to add a smaller
    //value to backgroundSize therefor everytime we scroll the backgroundSize value increased
    header.style.backgroundSize =  100  + window.scrollY / 10 + '%' ;
    // in opacity 1 it means the image is visible.
    //therefor we substruct the output of scrollY from opacity while scrolling down
    //ScrollY value is way to big to substract from 1 the moment we move the scroll bar the moment the opacity value
    //well go down to 0 there for we need to do a division operation on scrollY Value to make the value more smaller 
    
    header.style.opacity =  1 - window.scrollY / 1000 ;
    // scrollY has another alias it's pageYOffset that can be used same way same goes for scrollX and pageXOffset
})