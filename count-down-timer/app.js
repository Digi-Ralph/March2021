// timer__day // 7
//timer__hour // 24
// timer__min // 60
// timer__sec // 60

const days = document.querySelector('.timer__day');
const hour = document.querySelector('.timer__hour');
const min = document.querySelector('.timer__min');
const sec = document.querySelector('.timer__sec');

// count down
// console.log();
// function countdown() {
// 	let nOfDays = Number(days.textContent);
// 	let nOfHours = Number(hour.textContent);
// 	let nOfMinutes = Number(min.textContent);
// 	let nOfSeconds = Number(sec.textContent);
// 	const timer = setInterval(function seconds() {
// 		sec.textContent = nOfSeconds;
// 		min.textContent = nOfMinutes;
// 		hour.textContent = nOfHours;
// 		days.textContent = nOfDays;

// 		if ((nOfDays || nOfHours || nOfMinutes || nOfSeconds) != 0) {
// 			nOfSeconds -= 1;
// 			if (nOfSeconds < 0) {
// 				nOfSeconds = 59;
// 				nOfMinutes -= 1;
// 			}
// 			console.log(nOfSeconds);
// 			if (nOfMinutes < 0) {
// 				nOfMinutes = 59;
// 				nOfHours -= 1;
// 			}
// 			if (nOfHours < 0) {
// 				nOfHours = 24;
// 				nOfDays -= 1;
// 			}
// 		}
// 		// Add zero for beauty
// 		if (nOfSeconds < 10) {
// 			sec.textContent = '0' + nOfSeconds;
// 		}
// 		if (nOfMinutes < 10) {
// 			min.textContent = '0' + nOfMinutes;
// 		}
// 		if (nOfHours < 10) {
// 			hour.textContent = '0' + nOfHours;
// 		}
// 		if (nOfDays < 10) {
// 			days.textContent = '0' + nOfDays;
// 		}
// 		if (nOfHours == 0 && nOfDays == 0 && nOfMinutes == 0 && nOfSeconds == 0) {
// 			alert('Time IS UP');
// 			return clearInterval(timer);
// 		}
// 	}, 1000);
// }

// window.addEventListener('load', countdown);

function getTimer(start, end) {
	//code
	let milliseconds = Math.floor(end - start);
	let seconds = Math.floor(milliseconds / 1000);
	let minutes = Math.floor(seconds / 60);
	let hours = Math.floor(minutes / 60);
	let day = Math.floor(hours / 24);
	let h = hours - day * 24;
	let m = minutes - hours * 60;
	let s = seconds - minutes * 60;
	let d = day;
	return {
		nDay: d,
		nHours: h,
		nMinutes: m,
		nSeconds: s,
	};
}
const timer = setInterval(function x() {
	const startDate = new Date();
	// change to how end time
	const endDate = new Date('May 16 2021 7:43:00');
	getTimer(startDate, endDate);
	hour.textContent = getTimer(startDate, endDate).nHours;
	days.textContent = getTimer(startDate, endDate).nDay;
	min.textContent = getTimer(startDate, endDate).nMinutes;
	sec.textContent = getTimer(startDate, endDate).nSeconds;
	if (getTimer(startDate, endDate).nSeconds < 10) {
		sec.textContent = '0' + getTimer(startDate, endDate).nSeconds;
	}
	if (getTimer(startDate, endDate).nMinutes < 10) {
		min.textContent = '0' + getTimer(startDate, endDate).nMinutes;
	}
	if (getTimer(startDate, endDate).nHours < 10) {
		hour.textContent = '0' + getTimer(startDate, endDate).nHours;
	}
	if (getTimer(startDate, endDate).nDay < 10) {
		days.textContent = '0' + getTimer(startDate, endDate).nDay;
	}

	if (
		getTimer(startDate, endDate).nSeconds == 0 &&
		getTimer(startDate, endDate).nMinutes == 0 &&
		getTimer(startDate, endDate).nHours == 0 &&
		getTimer(startDate, endDate).nDay == 0
	) {
		alert('TIME IS UP');
		return clearInterval(timer);
	}
}, 1000);
