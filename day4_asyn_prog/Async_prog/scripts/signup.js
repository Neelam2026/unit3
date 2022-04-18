

document.querySelector("form").addEventListener("submit", formSubmit);
var userInfo = JSON.parse(localStorage.getItem("userDb"))||[];
function formSubmit(event){
     event.preventDefault();
     var name= document.querySelector("#name").value;
     var num = document.querySelector("#number").value;
     var email = document.querySelector("#email").value;
     var pass = document.querySelector("#psd").value;

     var userStack = {
         name:name,
         number:num,
         emailId : email,
         pswd : pass,
     };
    
     userInfo.push(userStack);
    
     localStorage.setItem("userDb",JSON.stringify(userInfo));
     
     alert("Signup Successful!")
     window.location.href = "login.html";
}