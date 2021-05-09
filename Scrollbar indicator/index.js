const progressbar = document.querySelector('.scroll--progress');

const scroll = () => {
  // return the scroll height of the entier page
  const pageHeight = document.body.scrollHeight;
  //return the innerheight of the ViewPort
  const ViewableHeight = window.innerHeight;
  //   Calculate number of pixels user can scroll.
  const maxHeight = pageHeight - ViewableHeight;
  //   Number of pixels the user has scrolled down so far.
  const roundedvalue = Math.round(window.pageYOffset);
  // divide offsets and multiply them by 100 for % 1-100
  const value = (roundedvalue / maxHeight) * 100;
  progressbar.style.width = `${value}` + '%';
};

window.addEventListener('scroll', scroll);