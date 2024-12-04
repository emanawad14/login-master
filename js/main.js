
var inputLoginEmail=document.getElementById("inputLoginEmail");
var inputLoginPassword=document.getElementById("inputLoginPassword");
var loginBtn= document.querySelector(".login-btn");
var errorMsg=document.querySelector(".errorMsg");
var errorMsg2=document.querySelector(".errorMsg2");


var userLogin=[];

function signIn(){

  
    var loginEmails=JSON.parse(localStorage.getItem("user"));

    for(var i=0;i<loginEmails.length;i++){
        if(loginEmails[i].email.includes(inputLoginEmail.value)&&inputLoginEmail.value!=""&&loginEmails[i].password.includes(inputLoginPassword.value)&&inputLoginPassword.value!=""){
            errorMsg.classList.add("d-none");
            window.location.href = 'home.html';
            localStorage.setItem("username",JSON.stringify(loginEmails[i].name));
            
            
        }else if(inputLoginPassword.value=="" || inputLoginEmail.value==""){
            errorMsg2.classList.remove("d-none");
            errorMsg.classList.add("d-none");
            
            
        }
        else{
            errorMsg.classList.remove("d-none")
        }   
        

    }
    
    
    
    
  
}

loginBtn.addEventListener("click",function(){
    signIn()
})