const bar = document.querySelector('.loading-bar__item');
const loadingbar = document.querySelector('.loading-bar');

function loadBar() {
	for (let i = 0; i <= 100; i++) {
		bar.style.width = i + '%';
	}
	bar.style.transition = 'all 1s ease-out';

	setTimeout(function invisible() {
		if (bar.style.width == '100%') {
			loadingbar.style.display = 'none';
		}
	}, 1000);
}

window.addEventListener('load', loadBar);
