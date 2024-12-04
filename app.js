//Exercise: 1 Applying Array.prototype.map()
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const numsArray = nums.map((currentElement) => {
    return currentElement * 2;
});
console.log(numsArray);



//Exercise: 2 Array destructuring
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping);


//Exercise 3: Destructuring objects
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car2 = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
  const {make, model} = car;

    console.log(make); // 'Audi'
    console.log(model); // 'q5'


    //Exercise 4: Applying the spread operator on arrays
    // Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const PizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...PizzaToppings];

console.log(controversialPizzaToppings);


//Exercise 5: Applying the spread operator on objects
// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
const myCar = { ...car, model: 'q7' };

console.log(car);
console.log(myCar);
  