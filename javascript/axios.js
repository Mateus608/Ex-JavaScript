import axios from "axios";
axios.get('https://api.github.com/users/Mateus608')
  .then(res => {
    console.log(res.data);
  }).catch(error => console.log(error));

  // Axios all

  Promise.all([
    axios.get('https://api.github.com/users/Mateus608'),
    axios.get('https://api.github.com/users/Mateus608/repos')
  ]).then(responses => {
    console.log(responses[0].data.login);
    console.log(responses[1].data.length);
  }).catch(err => console.log(err.message));