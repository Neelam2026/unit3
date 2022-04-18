var imgarr=JSON.parse(localStorage.getItem("Slideimg"));

var store=document.getElementById("pic");
var i=0;
setInterval(function(){

    if(i==imgarr.length){
        i=0;
    }
    store.src=imgarr[i];
    i++;

},1000)

var foodarr=JSON.parse(localStorage.getItem("food"));

var a= document.getElementById("pic1");
async function order(){
   //let status="open" ;
   try{
   let cb1=document.querySelector("#c1");
   let cb2=document.querySelector("#c2");
   let cb3=document.querySelector("#c3");
   let cb4=document.querySelector("#c4");
   let cb5=document.querySelector("#c5");
   let cb6=document.querySelector("#c6");

   let food_promise=new Promise(function(resolve,reject){
   setTimeout(function(){

    document.getElementById("pic1").innerHTML=""
    
    if (cb1.checked == true){
        i1=document.createElement("img")
        i1.setAttribute("id","pic2")
        i1.setAttribute("src","https://media.farandwide.com/ec/db/ecdb5e26bab947daaf67cbf9c8a928f8.jpg");
        a.append(i1)
        resolve(`Order no. ${Math.round(Math.random()*100)} Please collect Your Order `)
    } 
    if (cb2.checked == true){
        i1=document.createElement("img")
        i1.setAttribute("id","pic2")
        i1.setAttribute("src","https://www.mcdonalds.com/content/dam/usa/nfl/nutrition/items/regular/desktop/t-mcdonalds-Coca-Cola-Classic-Small.jpg");
        a.append(i1)
        resolve(`Order no. ${Math.round(Math.random()*100)} Please collect Your Order `)
    }
    if (cb3.checked == true){
        i1=document.createElement("img")
        i1.setAttribute("id","pic2")
        i1.setAttribute("src","https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/q/x/p49-1493902576590b24f0cacb9.jpg?tr=tr:n-large");
        a.append(i1)
        resolve(`Order no. ${Math.round(Math.random()*100)} Please collect Your Order `)
    } 
    if (cb4.checked == true){
        i1=document.createElement("img")
        i1.setAttribute("id","pic2")
        i1.setAttribute("src","https://acclaimmag.com/wp-content/uploads/2014/07/FriesCova.jpg");
        a.append(i1)
        resolve(`Order no. ${Math.round(Math.random()*100)} Please collect Your Order `)
    }
    if (cb5.checked == true){
        i1=document.createElement("img")
        i1.setAttribute("id","pic2")
        i1.setAttribute("src","https://img.etimg.com/thumb/msid-84939728,width-1200,height-900,imgsize-381352,resizemode-8,quality-100/magazines/panache/from-the-us-russia-to-india-an-ice-cream-bowl-has-a-long-political-history.jpg");
        a.append(i1)
        resolve(`Order no. ${Math.round(Math.random()*100)} Please collect Your Order `)
    } 
    if (cb6.checked == true){
        i1=document.createElement("img")
        i1.setAttribute("id","pic2")
        i1.setAttribute("src","https://bakingmischief.com/wp-content/uploads/2022/03/coffee-milkshake-square.jpg");
        a.append(i1)
        resolve(`Order no. ${Math.round(Math.random()*100)} Please collect Your Order `)
    }
    else if(cb1.checked == false && cb2.checked == false && cb3.checked == false && cb4.checked == false && cb5.checked == false && cb6.checked == false ){
        reject(`Please select order`)
    }
    
    },1000)
   })

   let res= await food_promise;
   alert(res)
   
   }
catch(err){
alert(err)
}

   
}