"use strict";

let userInput;
const numbers = [];
let total = 0;

while (userInput !== null) {
    userInput = prompt("Введите число пожалуйста");
  if (isNaN(userInput)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(userInput);
  }
}

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    total += +numbers[i];
}

alert(`Общая сумма чисел равна ${total}`);
