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

