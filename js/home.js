var userName = document.querySelector("h1");




var username=JSON.parse(localStorage.getItem("username"));

console.log(username);

userName.innerHTML="Welcome " + username;


