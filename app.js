const postButton = document.querySelector("#post-button")
const author = document.querySelector("#author")
const title = document.querySelector("#title")
const body = document.querySelector("#body")
const postResponse = document.querySelector("#post-response")

postButton.addEventListener("click", function () {
    
    var url = 'http://localhost:3000/posts';
    var data = {title: title.value, body: body.value, author: author.value};

    fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .then(response => postResponse.innerText = JSON.stringify(response))
    .catch(error => console.error('Error:', error));

})

// fetch('http://localhost:3000/posts')
// .then(function(response) {
//     return response.json();
// })
// .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
// });