document.getElementById("register_btn").addEventListener("click",function(){
    Register()
  })

import navbar from "../components/navbar.js"
   let navbar_div=document.getElementById("navbar");
   navbar_div.innerHTML=navbar();
    
  let Register= async ()=>{
   
   try{
     let register_data={
       
       name: document.getElementById("name").value,
       email: document.getElementById("email").value,
       password: document.getElementById("password").value,
       username: document.getElementById("username").value,
       mobile: document.getElementById("mobile").value,
       description:  document.getElementById("description").value,
     };
     register_data=JSON.stringify(register_data)
     
       let res=await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
        method:"POST" ,
        body:register_data,
        headers:{
         "Content-type":"application/json",
        },
       });
       let data=await res.json();
       console.log("data",data)

        if(data.message=="Registration Success")
        {
            alert("Registration Successful");
            window.location.href="login.html"
        }
        else{
            alert("Please fill valid details")
        }
   }
   catch(err){
    console.log("error",err);
   }
};