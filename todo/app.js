const input = document.querySelector('.todo__input');
const todo = document.querySelector('.todo__list');
// const listdo = document.querySelectorAll('.todo__list > *');

// Reset The input on load
function load() {
	input.value = '';
	// set up the function on load to delete beginners lists if neccessary
	delet();
}

function delet() {
	// check the newlist of todo's
	const listdo = document.querySelectorAll('.todo__list > *');
	// for each list if clicked remove it
	listdo.forEach((e) => {
		e.addEventListener('click', (e) => {
			return e.target.remove();
		});
	});
}

// Add new item list
function write(e) {
	// add list content to the list
	const values = `<li class="todo__item">${e.target.value}</li>`;
	// if Enter is clicked and length of string is > 0
	// add the content list in menu and reset the input value
	if (e.key === 'Enter' && e.target.value.length > 0) {
		todo.insertAdjacentHTML('afterbegin', values);
		input.value = '';
	}

	delet();
}

input.addEventListener('keydown', write);
window.addEventListener('load', load);
