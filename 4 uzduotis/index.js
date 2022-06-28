const message = document.querySelector('.message');

const chars = 'ABCD';
const length = 200;
let string = '';
let letter = [];

for (let i = 0; i < length; i++) {
	string += chars.charAt(Math.floor(Math.random() * chars.length));
	arr = string.split('');
}

console.log(arr);

const counts = {};

arr.forEach((x) => {
	counts[x] = (counts[x] || 0) + 1;
});

console.log(counts.A);

message.innerHTML = `
			<p>A: ${counts.A}</p>
<p>B: ${counts.B}</p>
<p>C: ${counts.C}</p>
<p>D: ${counts.D}</p>`;
