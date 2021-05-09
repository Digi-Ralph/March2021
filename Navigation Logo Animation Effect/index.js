let img = document.querySelector('.nav--bar');
let logo = document.querySelector('.logo ');
let list = document.querySelector('.container > .nav--bar > .list > ul ');
let hambergur = document.querySelector('#nav--mobile');
let close = document.querySelector('#nav--close');

window.addEventListener('scroll', (e) => {
	//get scroll Y value
	const scrolltop = window.pageYOffset;

	if (scrolltop > 0) {
		list.classList.add('active');
		img.classList.add('active');
		logo.classList.add('active');
	} else {
		list.classList.remove('active');
		img.classList.remove('active');
		logo.classList.remove('active');
	}
});

hambergur.addEventListener('click', (e) => {
	// check the width of the window (if it's screen or mobile screen)
	if (window.innerWidth < '1000') {
		list.classList.remove('close');
	}
});
close.addEventListener('click', (e) => {
	if (window.innerWidth < '1000') {
		list.classList.add('close');
	}
});

window.addEventListener('DOMContentLoaded', OnList);
window.addEventListener('scroll', OnList);
function OnList() {
	const scrolltop = window.pageYOffset;
	console.log(scrolltop);
	if (window.innerWidth < '1000' && scrolltop === 0) {
		hambergur.style.display = 'none';
	} else if (window.innerWidth < '1000' && scrolltop > 50) {
		hambergur.style.display = 'block';
	}
}
