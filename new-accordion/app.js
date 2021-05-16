const accordionHeading = document.querySelectorAll('.accordion__heading');

accordionHeading.forEach((e) =>
	e.addEventListener('click', (e) => {
		e.currentTarget.nextElementSibling.classList.toggle('open');
		e.currentTarget.nextElementSibling.classList.toggle('active');

		if (
			e.currentTarget.nextElementSibling.classList.contains('open') === true
		) {
			console.log(e.currentTarget.children[1].innerHTML);
			e.currentTarget.children[1].innerHTML = '-';
		} else {
			e.currentTarget.children[1].innerHTML = '+';
		}
	})
);
