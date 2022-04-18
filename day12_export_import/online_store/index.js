import navbar from "./components/navbar.js"

let navbar_div=document.getElementById("navbar-container")
navbar_div.innerHTML= navbar();//navbar_div is a object,,,,,for that we are using proprties...thats why innerhtml


//console.log(navbar)
import {getdata,append_data} from "./scripts/showdata.js"  //logcal comp

let url = "https://fakestoreapi.com/products";
let response= await getdata(url)   //async not written but await work?? becoz of module
console.log("res",response)

let parent=document.getElementById("data");
append_data(response, parent);

