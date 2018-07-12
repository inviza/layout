// class Hamburger {
//     /**
//      * @constructor
//      * @param {String} size - Размер
//      * @param {String} stuffing - Начинка
//      */
//     constructor(size, stuffing) {}
  
//     /**
//      * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
//      * @param {String} topping - Тип добавки
//      */
//     addTopping(topping) {}
  
//     /**
//      * Убрать topping, при условии, что она ранее была добавлена
//      * @param {String} topping - Тип добавки
//      */
//     removeTopping(topping) {}
  
//     /**
//      * Получить список toppings
//      * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
//      */
//     getToppings() {}
  
//     /**
//      * Узнать размер гамбургера
//      * @returns {String} - размер гамбургера
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
//      */
//     getSize() {}
  
//     /**
//      * Узнать начинку гамбургера
//      * @returns {String} - начинка гамбургера
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
//      */
//     getStuffing() {}
  
//     /**
//      * Узнать цену гамбургера
//      * @returns {Number} - Цена в деньгах
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
//      */
//     calculatePrice() {}
  
//     /**
//      * Узнать калорийность
//      * @returns {Number} - Калорийность в калориях
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
//      */
//     calculateCalories() {}
//   }


class Hamburger {

    constructor(size, stuffing){
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
      if(this.toppings.includes(topping)){
        console.log("You already has this type of topping")
      } else {
        this.toppings.push(topping)
      }
    }

    removeTopping(topping) {
      if(this.toppings.includes(topping)){
        this.toppings.splice(this.toppings.indexOf(topping),1)
      } else {
        console.log("This type of topping are not exist in your humburger")
      }
    }

    get getToppings() {
      return this.toppings
    }

    get getSize() {
      return this.size
    }

    get getStuffing() {
      return this.stuffing
    }

    get calculatePrice() {
      return Hamburger.SIZES[this.size].price + Hamburger.STUFFINGS[this.stuffing].price + this.toppings.reduce((acc, item) => acc + Hamburger.TOPPINGS[item].price, 0)
    }

    get calculateCalories() {
      return Hamburger.SIZES[this.size].calories + Hamburger.STUFFINGS[this.stuffing].calories + this.toppings.reduce((acc, item) => acc + Hamburger.TOPPINGS[item].price, 0)
    }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  },
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  },
};
					
Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  },
};

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories);

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice);

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит? 
console.log("Price with sauce: ", hamburger.calculatePrice);

// Проверить, большой ли гамбургер? 
console.log("Is hamburger large: ", hamburger.getSize === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
						     
// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings.length); // 1