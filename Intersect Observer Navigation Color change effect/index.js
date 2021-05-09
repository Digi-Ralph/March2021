const header = document.querySelector('.nav--bar');
const targets = document.querySelectorAll('.wrapper');

//observer options
let options = {
	root: null, // relative to document viewport
	rootMargin: '-450px 0px 0px 0px', // margin around root. Values are similar to css property. Unitless values not allowed
	threshold: 0.1, // visible amount of item shown in relation to root
};
//for some reason using flex in body screw up boserver and using position fixed screwe up the observer too
//creat Observer
let observer = new IntersectionObserver(change, options);

function change(entries, observer) {
	entries.forEach((entry) => {
		// console.log(entry);
		if (entry.isIntersecting) {
			header.classList.toggle('black');
		}
		// observer.unobserve(entry.target);
	});
}

// observer each target Element

targets.forEach((target) => {
	observer.observe(target);
});
