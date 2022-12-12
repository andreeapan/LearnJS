'use sctrict'

// Default parameters
// const bookings = [];

// const createBooking = function(flightNum, numPassangers = 1, price = 199 * numPassangers){

//     const booking = {
//         flightNum,
//         numPassangers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);

// }

// createBooking("asas")
// createBooking("LH23", 2, 800)
// createBooking("LH23", 5)

// Passing arguments
// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas',
//     passport: 23242141212
// }

// const checkin = function(flightNum, passanger){
//     flightNum = 'LH99'
//     passanger.name = 'MR' + passanger.name

//     if(passanger.passanger === 23242141212){
//         alert('Check in')
//     } else {
//         alert('Wrong pass')
//     }
// }

// checkin(flight, jonas)
// console.log(flight);
// console.log(jonas);

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 100000000)
// }

// newPassport(jonas);
// checkin(flight, jonas);

//Functions accepting callback functions
// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// }

// const uppserFirstWord = function(str){
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-order function
// const transformer = function(str, fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', uppserFirstWord);
// transformer('JavaScript is the best!', oneWord);

// //JS uses callbacks all the time
// const hig5 = function(){
//     console.log("Hi!")
// }

// document.body.addEventListener('click', hig5);

// ['Andreea', 'Martha', 'Adam'].forEach(hig5)

//Return a new function
// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// //How can it be re-written
// const greetArr = greeting => name =>  console.log(`${greeting} ${name}`)
// greetArr('Hi')('Jonas')

// const lufthansa = {
//     airline: "Lufthansa",
//     iataCode: "LH",
//     bookings: [],
//     book(flightNum, name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//     }
// }

// lufthansa.book(234, "Andreea")
// lufthansa.book(635, 'John')
// console.log(lufthansa);

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// const book = lufthansa.book;

// book.call(eurowings, 23, 'Sarah Williams')
// console.log(eurowings)

// book.call(lufthansa, 239, 'Marry Cooper')
// console.log(lufthansa)

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: []
// }

// book.call(swiss, 583, "Mary Cooper")
// console.log(swiss)

// const flightData = [583, 'George Cooper']
// book.call(swiss, ...flightData)


// //Bind method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steve');

// //partial application
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas');

// //With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function(){
//     console.log(this);
//     this.planes++;
//     console.log(this.planes)
// }

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// //Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200))

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(123))

// const addTaxRate = function(rate){
//     return function(value){
//         return value + value * rate;
//     }
// }

// const addVAT2 = addTaxRate(0.23)


// const runOnce = function(){
//     console.log('This will never run again!')
// }

// runOnce();

//Immediately Invoked Function Expression IIFE 
// good tools to "hide" variables: the above function can access outside variables but inside variables can't be accessed by outside variables
// (function(){
//     console.log('This will never run again!')

// })();

// (() => console.log('This will never run again!'))();


