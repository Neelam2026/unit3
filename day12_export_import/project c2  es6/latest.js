import navbar from "./components/navbar.js";

import {getfood,showdata} from "./scripts/showdata.js";


let nav=document.querySelector("#navbar");

nav.innerHTML=navbar();

navbar();
    
    dishdata()
    
    async function dishdata(){
        // let dishdata = async () =>{
        var z = document.querySelector("#search").value;
                 console.log(z)
         let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${z}`
        
    
    let data = await getfood(url);
    console.log(data)

         let parent = document.querySelector("#box")
       parent.innerHTML=""
     showdata(data,parent)

    
    }
    
    let btn  = document.getElementById("btn")
    btn.addEventListener("click",()=>{
        dishdata();
        
    })


    let e = document.getElementById('search')

    e.oninput = debounce;

    let timerId;
    var debounce = () =>{
        // function debounce(){
    
    if(timerId){
        clearTimeout(timerId);
    }
    
    timerId=setTimeout(function(){
    
        dishdata();
    },1000);
    
    }

 
    let arr=[]
   function lsd(data){
    // let lsd = (data) =>{
    
        arr.push(data)
    localStorage.setItem("dishdata",JSON.stringify(arr))
    
     window.location.href='details.html';
    }