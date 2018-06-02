"use strict"

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    pork: 80,
    cheese: 60,
    tea: 20,
    candy: 25
  };

const BREAD = products.bread;
const MILK = products.milk;
const APPLES = products.apples;
const CHICKEN = products.chicken;
const PORK = products.pork;
const CHEESE = products.cheese;
const TEA = products.tea;
const CANDY = products.candy;

  function Cashier (name, ...products) {
      this.name = name;
      this.products = products;
      this.totalPrice = 0;
      this.customerMoney = 0;
      this.changeAmount = 0;

   this.countTotalPrice = function (order) {
    //метод, получает список покупок, считает общую сумму исходя из поля products
    for(let fill of this.products) {
      this.totalPrice += fill;
    }
    console.log(`Total sum of products: ${this.totalPrice}`)
    return this.totalPrice;
  };

  this.getCustomerMoney = function () {
    // метод, при вызове показывает prompt, в котором указана общая сумма покупок из поля totalPrice. 
    //     Ожидает ввода пользователя и записывает результат ввода в поле customerMoney. Проверить что результат ввода 
    //     пользователя не меньше чем значения поля totalPrice. Просит покупателя ввести сумму до тех пор, пока не будет 
    //     введена корректная сумма - равная или больше чем totalPrice. Если пользователь нажмет Cancel, 
    //     то функция возвращает null.
    this.customerMoney=prompt(`Total sum of products: ${this.totalPrice}. And now u money!`);
     if(this.customerMoney === null){
      return null;
    } else if(this.customerMoney < this.totalPrice){
      this.getCustomerMoney ();
    } else {
      return this.customerMoney;
    }
  };
  this.countChange = function () {
    // метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
    this.changeAmount = this.customerMoney - this.totalPrice;
    return this.changeAmount;
  };

  this.reset = function () {
    // метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0
    this.customerMoney = 0;
    this.changeAmount = 0;
    this.totalPrice = 0;
  };

  this.serve = function (order) {
    // метод, вызывается при обслуживании пользователя. Получает order - список покупок пользователя, 
    // вызывает метод countTotalPrice для подсчета общей суммы, getCustomerMoney для запроса денег покупателя, 
    // countChange для подсчета сдачи при успешном вводе пользователя. При успешном обслуживании возвращает 
    // строку `Спасибо за покупку, ваша сдача ${сдача}`, при неудачном 'Очень жаль, что-то пошло не так, приходите еще'.
    // Вызывает метод reset при любом исходе обслуживания
    this.countTotalPrice (order);
    let lol= this.getCustomerMoney ();
    this.countChange ();
    if(lol===null){
      alert('Очень жаль, что-то пошло не так, приходите еще');
    } else{
      alert(`Спасибо за покупку, ваша сдача ${this.countChange()}`);
    }
    this.reset ();
  };
  }

let cashier1 = new Cashier('Mango',BREAD,PORK,CANDY);
console.log(cashier1); 
cashier1.serve(this.products);
// cashier1.countTotalPrice(this.products);
// cashier1.getCustomerMoney(); 
// cashier1.countChange();
// cashier1.reset();