// nebaigta, reikia padaryt pirma parametra optional

const h1 = document.querySelector('.message');
const btn = document.querySelector('button');

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function generate(exclude = 'b', length) {
	let text = '';

	characters = characters.replace(exclude, '');
	for (let i = 0; i < length; i++) {
		text += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return (h1.innerText = text);
}

//veikia tik paduodant abu parametrus

generate('', 5);
btn.addEventListener('click', () => {
	generate('', 5);
});
