const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

setInterval(function clockdigi() {
	const clock = new Date();
	hours.textContent = clock.getHours();
	minutes.textContent = clock.getMinutes();
	seconds.textContent = clock.getSeconds();
	if (hours.textContent < 10) {
		hours.textContent = '0' + clock.getHours();
	}
	if (minutes.textContent < 10) {
		minutes.textContent = '0' + clock.getMinutes();
	}
	if (seconds.textContent < 10) {
		seconds.textContent = '0' + clock.getSeconds();
	}
}, 1000);
