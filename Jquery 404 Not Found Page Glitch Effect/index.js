//pure JS Glitch with background fixed 
// let bg = document.querySelector('.glitch')
// let count = 20;
// for(let i = 0; i < count ; i++){
//     let glitchbox = document.createElement('div')
//     glitchbox.className = "box"
//     bg.appendChild(glitchbox)
// }

// setInterval(function(){
    
//     let glitch = document.getElementsByClassName('box')
//     for (i = 0 ; i < glitch.length; i++) {
//         glitch[i].style.left = 
//         Math.floor(Math.random() * 100) + "vw"
//         glitch[i].style.top = 
//         Math.floor(Math.random() * 100) + "vh"
//         glitch[i].style.width = 
//         Math.floor(Math.random() * 400) + "px"
//         glitch[i].style.height = 
//         Math.floor(Math.random() * 100) + "px"
//         glitch[i].style.backgroundPosition = 
//         Math.floor(Math.random() * 50) + "px"
//     }

// },500)

//JQuery .. i hate query 
// https://github.com/hmongouachon/mgGlitch

function glithy() {
    $( ".glitch" ).mgGlitch({
      // set 'true' to stop the plugin
              destroy : false, 
      // set 'false' to stop glitching
      glitch: true, 
      // set 'false' to stop scaling
      scale: true, 
      // set 'false' to stop glitch blending
      blend : true, 
      // select blend mode type
      blendModeType : 'hue',
      // set min time for glitch 1 elem
      glitch1TimeMin : 100, 
      // set max time for glitch 1 elem
      glitch1TimeMax : 200,
      // set min time for glitch 2 elem
      glitch2TimeMin : 10, 
      // set max time for glitch 2 elem
      glitch2TimeMax : 200, 
    });
};

glithy();

