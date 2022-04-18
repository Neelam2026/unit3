let queue=["pablo","raju","shyam","babu bhaiya"]

function register()
{
    let name=document.getElementById("name").value;
    queue.push(name);
    let msg=`${name} ur registration is successful cheers!`;
    alert(msg);

    let promise= new Promise(function(resolve,reject){
        var x=setInterval(function(){
            if(queue[0]===name)
            {
                resolve(`${name} its ur turn now`)
            }
     
        },1000)
     })

     promise.then(function(res){
         console.log(res)
     })
   
}



function vaccination_inprogress(){
    if(queue.length===0)
    {
        clearInterval(id)
    }
    console.log("queue:",queue)
    queue.shift()
 
    
}

let id=setInterval( vaccination_inprogress,2000)