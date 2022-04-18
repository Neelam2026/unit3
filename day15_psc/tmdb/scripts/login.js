import navbar from "../components/navbar.js";
let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()

document.getElementById("login_btn").addEventListener("click",function()
{
  Login()
})
let Login = async ()=>{
     try{
         let login_data={
        username: document.getElementById("login-username").value,
        password: document.getElementById("login-password").value,
      };
      let login_data_json=JSON.stringify(login_data);

      let res= await fetch("https://masai-api-mocker.herokuapp.com/auth/login" ,{
          method:"POST",
          body:login_data_json ,
            //server does not understand objects;;;;only stringyfy

            headers:{
                "Content-type":"application/json",  
            },

      });
      let data=await res.json();
      console.log("data",data)
       getUser(login_data.username,data.token)
    }
    catch(err){
        console.log("error",err)
    }
  }

  //

  var getUser = async(username,token)=>{
    try{
        let res=await fetch(` https://masai-api-mocker.herokuapp.com/user/${username}`, {
            headers:{
              "Content-type":"application/json",
              Authorization: `Bearer ${token}` ,   
            },
        });
      let data=await res.json()
      console.log("datagetuser",data)
      if(data){
          alert("Login successful")
          localStorage.setItem("login",JSON.stringify(data))
         
          window.location.href="index.html"
         
      }
      else{
      alert("invalid username or password")
    }

    }
    catch(err){
        console.log(err)
    }
}