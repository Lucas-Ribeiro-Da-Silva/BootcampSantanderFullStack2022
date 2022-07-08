// var currentNumberWrapper = document.getElementById("currentNumber");
// var currentNumber = 0

// function increment() {
//     currentNumber = currentNumber + 1
//     currentNumberWrapper.innerHTML = currentNumber;
// }

// function decrement() {
//     currentNumber = currentNumber - 1
//     currentNumberWrapper.innerHTML = currentNumber;
// }


let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	if (count < 10) {
		count++;
		CURRENT_NUMBER.innerHTML = count; }
}

function decrement() {
	if (count > 0) {
		count--;
		CURRENT_NUMBER.innerHTML = count; }
}
