'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

   openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  
  },

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function({time, address, mainIndex, starterIndex}){
      // console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){{
    console.log('mainIngredient', mainIngredient);
    console.log('otherIngredients', otherIngredients);
  }}
};



// REST PATTERN AND PARAMETERS
// 1. Destructuring
//SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3,4]];

//REST, because on the LEFT side of =
// const [a, b, ...others] = [1,2,3,4,5];
// console.log(a,b, others);

// const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza,risotto, otherFood);

//Objects
// const {sat, ...weekDays} = restaurant.openingHours;
// console.log('weekdays', weekDays);

// 2. Functions

// const add = function(...numbers){
//   let sum = 0;
//   for(let i = 0; i<numbers.length; i++) sum += numbers[i]
//   // console.log('sum', sum);
// }

// add(1,2);
// add(3,4,5,6);
// add(7,8,9,1,2,4,5);

// const x = [23,5,7];
// add(...x)


// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach')

// restaurant.orderPizza('mushroom')


// restaurant.orderDelivery({ 
//   time: "22:30",
//   address: "Sole",
//   mainIndex: 2,
//   starterIndex: 0
// })


// const [starter, main] = restaurant.order(2,0);
// // console.log(starter, main);

// const {name, openingHours, categories} = restaurant;
// // console.log(name,openingHours, categories);

// const{
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags
// } = restaurant;
// // console.log( hours)

// //nested objects
// const {fri: {open, close}} = openingHours
// // console.log(open,close);


// //mutating variables
// // let a = 23;
// // let b = 39;
// // const obj = {a:40, b:11, c:98};
// // ({a,b} = obj)
// // console.log(a,b)

// //Spread operator
// const arr = [3,4,5]
// const newArray = [1,2, ...arr]
// // console.log(newArray);

// const newMenu = [...restaurant.mainMenu, 'Gelato', 'Orichette', 'Tomato']
// // console.log('new menu', newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu]


// //join 2 arrays
// const joinedMenus = [...restaurant.mainMenu, ...restaurant.starterMenu]
// // console.log(joinedMenus);

// //Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas'
// const letters = [...str, '', '.S'] 
// // console.log('new str', letters);

// const ingridients = [
//   // prompt("Let's make pasta! Ingridient 1?"),
//   // prompt("Ingridient 2?"),
//   // prompt("Ingridient 3?")
// ]

// restaurant.orderPasta(...ingridients)

// //Objects
// const newRestaurant = {foundedIn: 1965, ...restaurant, foundedBy: 'Giuseppe'}
// console.log(newRestaurant);

