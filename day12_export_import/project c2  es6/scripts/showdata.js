// import {lsd} from "../index.js"

async function getfood(url){

// let getfood = async (url) =>{


    try {
        
        let res=await fetch(url);

        let data = await res.json();

        return data;

        
        
    } catch (error) {
        console.log(error)
    }
}



function showdata(data,parent){
    // let showdata = (data,parent) =>{

    console.log(data.meals)
data.meals.map(function(data){



    let div1=document.createElement('div');
    div1.setAttribute("id","div1");

    let poster=document.createElement('img');
    poster.setAttribute("id","poster");
    poster.src=data.strMealThumb

    let name=document.createElement('p');
    name.setAttribute("id","dishname");
    name.innerHTML=`Dish - ${data.strMeal}`
     
    let area=document.createElement('p');
    area.setAttribute("id","disharea");
    area.innerHTML=`Country - ${data.strArea}`

    div1.append(poster,name,area)

    div1.addEventListener("click",function(){
   lsd(data)
// console.log(lsd())
 })
    parent.append(div1)


})

}
var arr=[]
    function lsd(data){
// let lsd = (data) =>{
    
        arr.push(data)
    localStorage.setItem("dishdata",JSON.stringify(arr))
    
    window.location.href='details.html';
   }
export {getfood,showdata};