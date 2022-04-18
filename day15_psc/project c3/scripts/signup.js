
let Register = async () => {
     try{
        
       let register_data={
           name:document.getElementById("name").value,
           email:document.getElementById("email").value,
           password:document.getElementById("password").value,
           username:document.getElementById("username").value,
           mobile:document.getElementById("mobile").value,
           description:document.getElementById("description").value
       };

       register_data = JSON.stringify(register_data);

       let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{

           method:'POST',
           body:register_data,
           
           headers : {

               "Content-Type":'application/json'
           }
       });
       data = await res.json();
       
    //    console.log(data.message);
    if(data.message=="Registration Success"){
        alert("Registration successful")

        window.location.href="login.html"
    }
    else{
        alert("Please fill valid details")

    }
     }
     catch(err){
         console.log(err);
     }
 };

 //
 
 


 