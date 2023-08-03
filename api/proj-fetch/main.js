const url = "http://localhost:5500/api";

function getUsers() {
  fetch(url) // bate na url
    .then(response => response.json()) // se funcionar, entra aqui
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error)) // se apresentar erro, entra aqui
}

function getUser(id) {
  fetch(`${url}/${id}`)
   .then(response => response.json())
   .then(data => {
    userName.textContent = data.name;
    userCity.textContent = data.city;
    userAvatar.src = data.avatar
   }) 
   .catch(error => console.error(error))
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type" : "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => alertApi.textContent = data)
  .catch(error => console.error(error))
}

function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-type" : "application/json; charset=UTF-8"
    }

  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type" : "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => alertApi.textContent = data)
  .catch(error => console.error(error))
}

const newUser = {
  name : "Mateus Milane",
  avatar : "https://avatars.githubusercontent.com/u/110862395?v=4",
  city : "São Paulo"
}
//addUser(newUser);

const updatedUser = {
  name : "Livia Oliveira",
  avatar : "https://picsum.photos/200/300",
  city : "Rio de Janeiro"
}
//updateUser(updatedUser, 3);

deleteUser(3);

getUsers();
getUser(3);