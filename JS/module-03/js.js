"use strict"

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

let login = prompt("Введите пароль пожалуйста");


let addLogin = function (logins, login){
  let checkLoginValidity= function(login){
        if(login.length>4&&login.length<16){
            return true;
        }
        else{
            return false;
        }
        }
    if(сheckLoginValidity(login)===true){
        let checkIfLoginExists=function(logins, login){
            for(let i=0;i<logins.length;i++){
                if(logins[i]===login){
                    return true;
                } else{
                    return false;
                }
            }
        }
        if(сheckIfLoginExists(logins, login)===true){
            alert('Такой логин уже используется!');
        }
        else{
            logins.push(login);
            alert('Логин успешно добавлен!');
        }
    }
    else{
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
        break;
    }
}

addLogin(logins,login);