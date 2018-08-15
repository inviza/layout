const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

  function filtermass (arr) {
    const source = document.querySelector('#menu').innerHTML.trim();
    const template = Handlebars.compile(source);
    const markup = arr.reduce((acc, item) => acc + template(item), '');
    const container = document.querySelector('.content-placeholder');
    container.innerHTML = markup;
  }
  
  filtermass(laptops);
  

  const SubmitBtn = document.querySelector("#submit");
  SubmitBtn.addEventListener('click', function (event){
    event.preventDefault();
      const filter = {};
      
      function summcheck (attribute) {
          const element = document.querySelectorAll(`[name=${attribute}]`);
          const mass = Array.from(element);
          const masscheck = [];
          for (let item of mass) {
              if (item.checked) {
                masscheck.push(item.value);
              }
          }
          return masscheck;
      }
      filter.size = summcheck('size');
      filter.color = summcheck('color');
      filter.release_date = summcheck('release_date');
    
      const result = [];
      for (let colProp of filter.color) {
        let resultArr = laptops.filter((el) => el.color == colProp);
        result.push(resultArr)
      }
      for (let sizeProp of filter.size) {
        let resultArrSize = laptops.filter((el) => el.size == sizeProp);
        result.push(resultArrSize);
      }
      for (let dateProp of filter.release_date) {
        let resultArrDate = laptops.filter((el) => el.release_date == dateProp);
        result.push(resultArrDate);
      }
      console.log(result);
      
      const reduseArr = result.reduce((acc, item) => acc.concat(item));
      const uniqueArr = Array.from(new Set(reduseArr));
      filtermass(uniqueArr);
  })

  const resetBtn = document.querySelector("#reset");
  resetBtn.addEventListener('click', function (e){
    e.preventDefault();
    filtermass(laptops);
  })




