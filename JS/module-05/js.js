"use strict"
  const initialUsers = [
    { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
    { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
    { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false }
  ];
  const initialPosts = {
    "-s19a6hqce": [
      { id: "-5sgljaskg", text: "post #1", likes: 3 },
      { id: "-199hb6igr", text: "post #2", likes: 5 },
      { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
    ],
    "-qkpzenjxe": [
      { id: "-5tu69g5rf", text: "post #1", likes: 8 },
      { id: "-bje766393", text: "post #2", likes: 15 }
    ],
    "-e51cpd4di": [
      { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
      { id: "-i03pbhy3s", text: "post #2", likes: 45 }
    ],
  };
  const getId = () => "-" + Math.random().toString(36).substr(2, 9);

  function SocialBook (users = [], posts = {}) { 
    this.users = users;
    this.posts = posts;

    this.getAllUsers = function () {
        return this.users
    }

    this.getUserByLogin = function (login) {
         return this.users.find(item => item.login === login);
    }


    this.isUserActive = function (userId){
      return this.users.find(item => item.id === userId)
    }
    this.getActiveUsers = function () {
      // возвращает массив тех пользователей, значение поля isActive которых true
      return this.users.filter (function(item){
        if(item.isActive === true){
          return item
        }} )
    };

    this.updateUserById = function (userId, obj){
      return this.users.find(function(item) { 
        if(item.id === userId){
          let a = Object.assign(item, obj);
          return a;
        }
      });
    };
    this.addUser = function(user){
      // принимает объект user с полями email и password и добавляет ему 
      // поля id (используя функцию getId) и isActive (false). Затем добавляет пользователя 
      // в свойство users самого объекта.
      let newItem = Object.assign(user, {id: getId(), isActive: (false)})
      return initialUsers.push(newItem);
    }

    this.removeUserById = function(userId){
      // удаляет пользователя из поля users по полю id
      let i = 0;
      return this.users.find(function(item) { 
        if(item.id === userId){
          let deleteitem = initialUsers.splice(i, 1);
          return deleteitem;
    }
    i++});
  }

    this.getUsersCount = function (){
      // возвращает общее количество пользователей
      let i = 0;
      return this.users.map(element => {
        i++;
        return i;
      });
    }
  };
  let usr1 = new SocialBook(initialUsers, initialPosts);
  // console.log(usr1.getAllUsers());
  // console.log(usr1.getUserByLogin("ajax2k@change.ua"));
  // console.log(usr1.isUserActive("-e51cpd4di"));
  console.log(usr1.getActiveUsers());
  // console.log(usr1.updateUserById("-qkpzenjxe", {id : getId()}))
console.log(usr1.getUsersCount())
// console.log(usr1.removeUserById("-qkpzenjxe"))
usr1.addUser({login: "ajax2k@change.ua", password: "ert234qw"})
console.log(initialUsers)