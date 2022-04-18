
var x;

function start(){
  let imgarr=JSON.parse(localStorage.getItem("photos"))
  console.log(imgarr.length)
  let showimg=document.getElementById("pic");
  let i=0;
  x = setInterval(function(){
      if(i==imgarr.length)
      {
          i=0;
      }
   showimg.src=imgarr[i]
   i++;

   
  },1000)

}



function stop(){
clearInterval(x)
}