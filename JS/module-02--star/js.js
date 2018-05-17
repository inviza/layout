"use strict";

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let n = 2;
let userInput;

for (let i = 0; i < 3; i++) {
  if (userInput !== null) {
    userInput = prompt("необходимо ввести свой пароль");
    console.log(userInput);
    if (passwords.includes(userInput) === true) {
      alert("Добро пожаловать!");
      break;
    } else if(userInput===null){
        break;
    }
    else {
        if(n>0){
      alert(`Неверный пароль, у вас осталось ${n} попыток`);
      n--;
        }
        else{
          alert('У вас закончились попытки, аккаунт заблокирован!');
        }
    }
  }
}