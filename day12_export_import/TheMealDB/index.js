import navbar from "./components/navbar.js";
let navbar_div=document.getElementById("navbar_container")
navbar_div.innerHTML=navbar();
// navbar done
import { getdata,append_data} from "./scripts/show_data.js";

//main
main()
async function main(){
    
var dish_name=document.getElementById("inp2").value;
    
    let data= await getdata(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish_name}`)
    console.log(data)
    if(data===undefined)
    {
        return false
    }
    let parent=document.getElementById("container");
    parent.innerHTML=""
    append_data(data,parent)
    
}
 
let btn=document.getElementById("search")
btn.addEventListener("click" ,()=>{
    main()
})

let e=document.getElementById("inp2");
e.oninput=debounce;

let timerid;
// var debounce =()=>{
    function debounce(){
    if(timerid){
        clearTimeout(timerid)
    }
    timerid=setTimeout(function(){
       main()
    },1000);
}



