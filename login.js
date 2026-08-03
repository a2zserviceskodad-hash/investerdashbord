const form = document.getElementById("adminForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

if(email==="admin@gmail.com" && password==="12345"){

alert("Login Successful");

window.location.href="admin-dashboard.html";

}

else{

alert("Invalid Email or Password");

}

});

}