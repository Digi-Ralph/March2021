const dice__image = document.querySelector('.dice__image');
const button = document.querySelector('.dice__trigger');

button.addEventListener('click', (e) => {
	dice__image.classList.add('active');
	dice__image.src = `images/dice${Math.ceil(Math.random() * 6)}.png`;
	console.log(Math.ceil(Math.random() * 6));
});
