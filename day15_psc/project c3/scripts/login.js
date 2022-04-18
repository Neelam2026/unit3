
  let Login = async () => {

    try{
        let login_data= {

             username:document.getElementById('login-username').value,
             password:document.getElementById('login-password').value,
};

        let login_data_json = JSON.stringify(login_data);


        let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{

            method:"POST",
            body:login_data_json,

            headers:{
                "Content-Type":"application/json",
            },


        });

        let data = await res.json();
        // console.log(data);

        getUser(login_data.username,data.token);

    }
    catch(err){
        console.log(err)
    }
  };

  let getUser = async (username,token) => {
  try{
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{

headers:{


    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`,
},

    });


    let data = await res.json();
    // console.log(data.username);

    if(data.username==username){

      alert("Login successful")

      localStorage.setItem("login",JSON.stringify(data))
      window.location.href="index.html"


    }
    else{
      alert("invalid username or password")
    }
}
catch(err){

    console.log(err);
}



  };
