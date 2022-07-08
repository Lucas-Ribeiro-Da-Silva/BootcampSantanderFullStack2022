// solução 1
function verificaPalindromo(string) {
	if (!string) return "string não encontrada";
	return (string === string.split('').reverse().join(''));
}
let string = "abba"
console.log(verificaPalindromo(string));

// solução 2

function varificaPalindromo2(string) {
	if (!string) return console.log("string não encontrada");
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('abba');
