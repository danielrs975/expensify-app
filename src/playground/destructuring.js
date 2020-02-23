// const person = {
// 	name     : 'Daniel',
// 	age      : 22,
// 	location : {
// 		city : 'Evry',
// 		temp : '12'
// 	}
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
// 	title     : 'Ego is the Enemy',
// 	author    : 'Ryan Holiday',
// 	publisher : {
// 		name : 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

const address = [ '6 rue Charles Fourier', 'Evry', 'Ile-de-France', '91000' ];

const [ , city, state ] = address;

console.log(`You are in ${city} ${state}.`);

const item = [ 'Coffee (hot)', '$2.0', '$2.50', '$2.75' ];
const [ coffee, , mediumPrice ] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`);
