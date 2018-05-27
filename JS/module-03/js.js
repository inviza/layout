"use strict"

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

let login = prompt("Введите логин пожалуйста");

let checkLoginValidity = function (login) {
    if (login.length > 4 && login.length < 16) {
        return true;
    } else {
        return false;
    }
}

let checkIfLoginExists = function (logins, login) {
    if (logins.includes(login)) {
        return true
    } else {
        return false
    }
}
let addLogin = function (logins, login) {
    if (checkLoginValidity(login) === true) {
       
        if (checkIfLoginExists(logins, login) === true) {
            alert('Такой логин уже используется!');
        } else {
            logins.push(login);
            alert('Логин успешно добавлен!');
        }
    } else {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
        return;
    }
}

addLogin(logins, login);