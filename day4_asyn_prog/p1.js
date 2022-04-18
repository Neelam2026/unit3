// function counter1()
// {
//     setInterval(function(){
//       console.log("I am running")
//     },1000)
  
// }
// counter1()


                    //use of clearInterval
// function counter()
// {
//    id= setInterval(function(){
//       console.log("you are running")
//     },1000)
//     clearInterval(id)
// }
// counter()

//append to html
var h2=document.getElementById("count")
function counter()
{
     let i=0;
    var x=setInterval(function(){
        i++
    console.log("i:",i)
    h2.innerText=i

    if(i==20){
    clearInterval(x) 
    }
   
    
    },100)
   
}


counter()

//decresing counter

// var h2=document.getElementById("count")
// function counter()
// {
//      let i=20;
//     var x=setInterval(function(){
//         i--
//     console.log("i:",i)
//     h2.innerText=i

//     if(i==0){
//     clearInterval(x) 
//     }
   
    
//     },100)
   
// }


// counter()



