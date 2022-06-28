const one = Math.floor(Math.random() * 8999 + 1000);
const two = Math.floor(Math.random() * 8999 + 1000);
const three = Math.floor(Math.random() * 8999 + 1000);
const four = Math.floor(Math.random() * 8999 + 1000);
const five = Math.floor(Math.random() * 8999 + 1000);
const six = Math.floor(Math.random() * 8999 + 1000);

let arr = [ one, two, three, four, five, six ].sort().reverse();

console.log(arr);
