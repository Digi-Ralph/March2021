// Covert Formulas from google.
// Celsius to fahrenheit => F=9/5C+32
// celsius to kelvin =>  k = celsius + 273.15
// kelvin to celsius => K = C - 273.15
// kelvin to fahrenheit => F = 1.8(K - 273) + 32
// fahrenheit to kelvin ==> K = (F − 32) × 5/9 + 273.15
// fahrenheit to Celsius ==> C = (F − 32) × 5/9

const input = document.querySelectorAll('.data');

function converter(e) {
	const temp = e.currentTarget.id;
	kelvin = 273.15;
	// convert Celsius to fahrenheit & kelvin
	if (temp == 'celsius') {
		return (
			(input[1].valueAsNumber = (9 / 5) * e.currentTarget.valueAsNumber + 32) &&
			(input[2].valueAsNumber = e.currentTarget.valueAsNumber + kelvin)
		);
	}
	// convert kelvin to fahrenheit & celsius
	if (temp == 'kelvin') {
		return (
			(input[0].valueAsNumber = e.currentTarget.valueAsNumber - kelvin) &&
			(input[1].valueAsNumber =
				1.8 * (e.currentTarget.valueAsNumber - 273.15) + 32)
		);
	}
	// convert fahrenheit to kelvin & celsius
	if (temp == 'fahrenheit') {
		return (
			(input[2].valueAsNumber =
				(e.currentTarget.valueAsNumber - 32) * (5 / 9) + kelvin) &&
			(input[0].valueAsNumber = (e.currentTarget.valueAsNumber - 32) * (5 / 9))
		);
	}
}

function deleteValue(e) {
	// reset Kelvin value
	if (input[0].value.length < 2 && e.currentTarget.id != 'kelvin') {
		return (input[2].value = '');
	}
	// reset fahrenheit value
	if (input[2].value.length < 2 && e.currentTarget.id != 'fahrenheit') {
		return (input[1].value = '');
	}
	// reset fahrenheit value
	if (input[1].value.length < 2 && e.currentTarget.id != 'celsius') {
		return (input[0].value = '');
	}
}

input.forEach((e) => e.addEventListener('input', converter));
input.forEach((e) => e.addEventListener('keydown', deleteValue));
