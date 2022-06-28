const first = 'Lukas';
const last = 'Baksys';
const born = 1990;
const thisYear = 2022;

const h1 = document.querySelector('.message');

function message() {
	let age = thisYear - born;
	return (h1.innerText = `Aš esu ${first} ${last}. Man yra ${age} metai.`);
}

message();
