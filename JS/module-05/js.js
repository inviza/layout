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
  function SocialBook (users = [], posts = {}) { 
    this.users = users;
    this.posts = posts;

    this.getAllUsers = function () {
        return this.users
    }

    this.getUserByLogin = function (login) {
         return this.users.find(item => item.login === login);
    }

    // this.isUserActive = function (userId) {
    //   return (this.users.find(function (item) {
    //         if(item.id === userId) {
    //           console.log("hello");
    //             return item.isActive
    //         }
    //         else {
    //           return 0
    //             console.log("User with the same id does not exist");
    //         }
    //     }))   
    // }

    // this.isUserActive = function (userId){
    //   return this.users.find(item => item.id === userId)
    // }

    this.getActiveUsers = function () {
      // возвращает массив тех пользователей, значение поля isActive которых true
      this.users.filter (function(item){
        if(item.isActive === true){
          return item
        }} )
    };

    this.updateUserById(userId, obj){
      return this.users.map
      // це як????
    };

    this.addUser(user){
      // принимает объект user с полями email и password и добавляет ему 
      // поля id (используя функцию getId) и isActive (false). Затем добавляет пользователя 
      // в свойство users самого объекта.
    }

    this.removeUserById(userId){
      // удаляет пользователя из поля users по полю id
    }

    this.getUsersCount(){
      // возвращает общее количество пользователей
    }
  };
  let usr1 = new SocialBook(initialUsers, initialPosts);
  console.log(usr1.getAllUsers());
  console.log(usr1.getUserByLogin("ajax2k@change.ua"));
  // console.log(usr1.isUserActive("-e51cpd4di"));
  console.log(usr1.getActiveUsers);