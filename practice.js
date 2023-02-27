//?!!!!!!!!!!!!!!!!!!!!
// Coding Challenge #2
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
//??????????????????????
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// const data = [5, 2, 4, 1, 15, 8, 3];
// const calcAverageHumanAge = data =>
//   data
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(val => (val > 18 ? val : false))
//     .reduce((acc, val) => acc + val, 0) / data.length;
// console.log(calcAverageHumanAge(data));
// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5));
// // x.fill(1);
// x.fill(1, 3, 5);
// console.log(x);
// Arr.fill(23,2,6)
// const diceRoll = Array.from({ length: 100 }, (cur, i) =>
//   Math.floor(Math.random() * 6 + 1)
// );
// console.log(diceRoll);

// Coding Challenge #4
//?! Julia and Kate are still studying dogs, and this time they are studying if dogs are
//?! eating too much or too little.
//?! Eating too much means the dog's current food portion is larger than the
//?! recommended portion, and eating too little is the opposite.
//?! Eating an okay amount means the dog's current food portion is within a range 10%
//?! above and 10% below the recommended portion (see hint).
//?! Your tasks:
//?! 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
//?! the recommended food portion and add it to the object as a new property. Do
//?! not create a new array, simply loop over the array. Forumla:
//?! recommendedFood = weight ** 0.75 * 28. (The result is in grams of
//?! food, and the weight needs to be in kg)
//?! 2. Find Sarah's dog and log to the console whether it's eating too much or too
//?! little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
//?! the owners array, and so this one is a bit tricky (on purpose) �
//?! 3. Create an array containing all owners of dogs who eat too much
//?! ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
//?! ('ownersEatTooLittle').
//?! 4. Log a string to the console for each array created in 3., like this: "Matilda and
//?! Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
//?! too little!"
//?! 5. Log to the console whether there is any dog eating exactly the amount of food
//?! that is recommended (just true or false)
//?! 6. Log to the console whether there is any dog eating an okay amount of food
//?! (just true or false)
//?! 7. Create an array containing the dogs that are eating an okay amount of food (try
//?! to reuse the condition used in 6.)
//?! 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
//?! portion in an ascending order (keep in mind that the portions are inside the
//?! array's objects �

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
let recomendedFood;
dogs.forEach((dog, i, arr) => {
  dog.recomendedFood = Math.trunc(dog.weight * 0.75 * 28);
});
dogs.forEach((dog, i, arr) => {
  const curFoodKG = dog.curFood / 1000;
});
// console.log(dogs);

const sarahDog = dogs.find(dog => dog.owners.includes(`Sarah`));
// console.log(sarahDog);
// console.log(
//   `sarah dog is eating too ${
//     sarahDog.curFood > sarahDog.recomendedFood ? `much` : `little`
//   }`
// );
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recomendedFood)
  .flatMap(dog => dog.owners);
// console.log(ownersEaჼtTooMuch);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recomendedFood)
  .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);
// console.log(`${ownersEatTooMuch.join(` and `)}'s dogs eat too much `);
// console.log(`${ownersEatTooLittle.join(` and `)}'s dogs eat too little `);

//? 5 //
// console.log(dogs.some(dog => dog.curFood === dog.recomendedFood));

//? 6 //
// console.log(
//   dogs.find(
//     dog =>
//       dog.curFood > dog.recomendedFood * 0.9 &&
//       dog.curFood < dog.recomendedFood * 1.1
//   )
// );
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recomendedFood - b.recomendedFood);
console.log(dogsSorted);
