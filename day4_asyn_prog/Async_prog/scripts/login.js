

document.querySelector("form").addEventListener("submit", login);

var userReg = JSON.parse(localStorage.getItem("userDb"));
function login(event){
   event.preventDefault();
   var emailid = document.querySelector("#email").value;
   var pass = document.querySelector("#psd").value;
   for(var i = 0; i<userReg.length; i++){
       if(userReg[i].emailId == emailid && userReg[i].pswd == pass){
           alert("Login Successful!")
           window.location.href = "index.html";
           break;
       }
       else if( i==userReg.length-1)
       {
        alert("Invalid Credentials")
       }
   }
}