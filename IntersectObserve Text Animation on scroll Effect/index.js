//list -2
let listTargets = [...document.querySelectorAll('.wrapper-1 > ul > li')];
// console.log(listTargets);

let options = {
	root: null,
	rootMargin: '-10%',
	threshold: 0.5,
};
let observer = new IntersectionObserver(list, options);

function list(entries, observer) {
	entries.forEach((entry) => {
		// console.log(entry.target);
		// entry.target => li
		// if the element is intersecting do the following
		if (entry.isIntersecting) {
			//select all spans inside list (variant 2)
			// items = li.queryselector('span")
			// this select all the lists that are intersecting
			let items = [...entry.target.querySelectorAll('span')];
			//this select all the spans in the DOM
			// let items = [...document.querySelectorAll('.wrapper-1 > ul> li > span')];
			// for each item(span with a letter) inside the list we set a timeout P/S/ idx =index of element
			items.forEach((item, idx) => {
				setTimeout(() => {
					// add the active class to each span letter
					item.classList.add('active');
					// index * number : time out of each element to show up
				}, idx * 50);
			});
		}
	});
}

listTargets.forEach((target) => {
	//creat empty string
	let newString = '';
	//split the text inside span to an array of letters
	let itemText = target.children[0].innerText.split('');
	//creat each span for each letter if there's a space creat an empty span for it
	itemText.map(
		(item) =>
			(newString +=
				item == ' ' ? `<span class="space"></span>` : `<span>${item}</span>`)
	);
	//put the new string inside list HTML DOM
	target.innerHTML = newString;
	//observe the target
	observer.observe(target);
});
