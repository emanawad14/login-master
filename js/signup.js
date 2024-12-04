var inputName= document.getElementById("inputName");
var inputEmail= document.getElementById("inputEmail");
var inputPassword= document.getElementById("inputPassword");
var signUp=document.querySelector(".btn");
var alertDiv = document.querySelector(".alert")
var errorMsg = document.querySelector(".errorMsg");
var successMsg = document.querySelector(".successMsg");
var warningMsg = document.querySelector(".warningMsg");



var userList;

if(localStorage.getItem("user")==null){
    userList=[];
}else{
    userList=JSON.parse(localStorage.getItem("user"))
}


function addUser(){

    

    if(inputName.classList.contains("is-valid")&&inputEmail.classList.contains("is-valid")&&inputPassword.classList.contains("is-valid")){
       var user ={
        name : inputName.value,
        email : inputEmail.value,
        password : inputPassword.value
    }
   userList.push(user);
   localStorage.setItem("user",JSON.stringify(userList));
   
   clear();

   successMsg.classList.remove("d-none");

   setTimeout(function(){
    window.location.href = 'index.html';
   },2000);

    }
    else{
        errorMsg.classList.remove("d-none");
    }
    
}

function userValidation(element){
    var regex={
        inputName : /^[a-z]{3,12}.{0,1}[a-z]{0,10}$/ig ,
        inputEmail : /^[a-z]{3,10}[0-9]{0,5}@(gmail\.com|yahoo\.net)$/ig,
        inputPassword : /^[0-9]{8,20}[^a-zA-Z0-9]{1}$/
    }

   
    
    if(regex[element.id].test(element.value)){

        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        element.nextElementSibling.classList.add("d-none")
        warningMsg.classList.add("d-none");

    }else{
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
        element.nextElementSibling.classList.remove("d-none")
    }
    for(var i=0;i<userList.length;i++){
        if(userList[i].email==inputEmail.value){
             warningMsg.classList.remove("d-none");
             inputEmail.classList.add("is-invalid");
             inputEmail.classList.remove("is-valid");
        }
    }

    if(element.value==""){
        element.nextElementSibling.classList.add("d-none")
        element.classList.remove("is-invalid")
    }

}

inputName.addEventListener("input",function(){
    userValidation(this); 
    errorMsg.classList.add("d-none");
    successMsg.classList.add("d-none")  
})
inputEmail.addEventListener("input",function(){
    userValidation(this);
    errorMsg.classList.add("d-none"); 
    successMsg.classList.add("d-none")     
})
inputPassword.addEventListener("input",function(){
    userValidation(this);
    errorMsg.classList.add("d-none"); 
    successMsg.classList.add("d-none") 
})

signUp.addEventListener("click",function(){
    addUser();
})

function clear(){

    inputName.value=null;
    inputEmail.value=null;
    inputPassword.value=null;

    inputName.classList.remove("is-valid");
    inputEmail.classList.remove("is-valid");
    inputPassword.classList.remove("is-valid");

}
