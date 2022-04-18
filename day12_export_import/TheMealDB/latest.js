import navbar from "./components/navbar.js";
let navbar_div=document.getElementById("navbar_container")
navbar_div.innerHTML=navbar();
// navbar done


import {getdata,append_data } from "./scripts/show_data.js";

let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=`;
let response= await getdata(url)
console.log(response)


let parent=document.getElementById("container");

append_data(response,parent)


