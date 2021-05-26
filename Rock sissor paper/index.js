const gameAI = document.querySelectorAll('.box-game > *');

// click to retrive result
let pc = 0;
let user = 0;

const clickHand = (e) => {
	// console.log(user_score);
	//Creat  a simple Ai
	const random = () => {
		const randomChoice = Math.floor(Math.random() * 3);
		const generatedAi = gameAI[randomChoice].className;
		return generatedAi;
	};
	let test = random();
	const player = e.target.className;
	//
	// built comparation logic for each case
	// => paper beats rock / lose to sissor
	// => sissor beats paper / lose to rock
	// => rock beats sissors / lose to paper
	if (player == 'sissors' && test == 'paper') {
		return winCase(player, test);
	}
	if (player == 'paper' && test == 'rock') {
		return winCase(player, test);
	}
	if (player == 'rock' && test == 'sissors') {
		return winCase(player, test);
	}
	if (player == 'sissors' && test == 'rock') {
		return loseCase(player, test);
	}
	if (player == 'rock' && test == 'paper') {
		return loseCase(player, test);
	}

	if (player == 'paper' && test == 'sissors') {
		return loseCase(player, test);
	}

	if (player == test) {
		return drawCase(player, test);
	}
};

function winCase(gamer, AI) {
	let user_score = document.querySelector('.user');
	user_score.innerHTML = `<span class="user">${(user += 1)}</span>`;
	const head = document.querySelector('.box-text > h1');
	head.textContent = 'Win';
	head.setAttribute('style', 'color:green');
	const headline = document.querySelector('.state');
	headline.textContent = `You Chose ${gamer} , AI Chose ${AI}. YOU WON ✨`;
}

function loseCase(gamer, AI) {
	let pc_score = document.querySelector('.pc');
	pc_score.innerHTML = `<span class=pc">${(pc += 1)}</span>`;
	const head = document.querySelector('.box-text > h1');
	head.textContent = 'Lost';
	head.setAttribute('style', 'color:red');
	const headline = document.querySelector('.state');
	headline.textContent = `You Chose ${gamer} , AI Chose ${AI}. YOU LOST 😞`;
}

function drawCase(gamer, AI) {
	const head = document.querySelector('.box-text > h1');
	head.textContent = 'Draw';
	head.setAttribute('style', 'color:gray');
	const headline = document.querySelector('.state');
	headline.textContent = `You Chose ${gamer} , AI Chose ${AI}. It's A Draw 🤪`;
}

gameAI.forEach((e) => e.addEventListener('click', clickHand));
