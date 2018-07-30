'use strict'
let NAME = document.querySelector('.self-inform-name'),
ID = document.querySelector('.self-inform-id'),
AGE = document.querySelector('.self-inform-age');
let buttonFindId = document.querySelector('.button-find-id');
let buttonCreate = document.querySelector('.button-create');
let buttonRemoveId = document.querySelector('.button-remove-id');
let buttonUpdateUser = document.querySelector('.button-updateUser');
let idInput = '';
let nameInput;
let ageInput;

function getAllUsers() {
    fetch('https://test-users-api.herokuapp.com/users/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

function getUserById(id) {
    fetch(`https://test-users-api.herokuapp.com/users/${idInput}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

function addUser(name, age){
    let newPost = {
        name: name,
        age: age,
    }
    fetch('https://test-users-api.herokuapp.com/users', {
  method: 'POST',
  body: JSON.stringify(newPost),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('ERROR' + error));

}

function removeUser(id){
    fetch(`https://test-users-api.herokuapp.com/users/${idInput}`, {
  method: 'DELETE'
    }).then(() => console.log('success'))
    .catch(error => console.log('ERROR' + error));
}

function updateUser(id, user){
    fetch(`https://test-users-api.herokuapp.com/users/${idInput}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('ERROR' + error));
}

const FindId = () => {
    idInput = ID.value;
    getUserById(idInput);
  };

  const Create = () => {
    nameInput = NAME.value;
    ageInput = AGE.value;
    addUser(nameInput, ageInput);
  };

  const RemoveId = () => {
    idInput = ID.value;
    removeUser(idInput);
  };

  const UpdateUser = () => {
    idInput = ID.value;
    let newPost = {
        name: NAME.value,
        age: AGE.value,
    }
    updateUser(idInput, newPost)
  };

  getAllUsers();
  buttonFindId.addEventListener('click', FindId)
  buttonCreate.addEventListener('click', Create)
  buttonRemoveId.addEventListener('click', RemoveId)
  buttonUpdateUser.addEventListener('click', UpdateUser)