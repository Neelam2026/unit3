

import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar_container");
navbar_div.innerHTML = navbar();
// navbar done

import { getdata } from "./scripts/show_data.js";


async function main() {
  let url = `https://www.themealdb.com/api/json/v1/1/random.php`;

  let data = await getdata(url);
  console.log(data);
  
    get(data);
 
  
}



main();

function get(data) {
  console.log(data.meals[0]);
  var h1 = document.querySelector("h1");
  h1.innerHTML = `${data.meals[0].strMeal},${data.meals[0].strArea}`;

  var image = document.createElement("img");
  image.setAttribute("id", "poster");
  image.src = data.meals[0].strMealThumb;

  var Receipe = document.createElement("p");
  Receipe.setAttribute("id", "Receipe");
  Receipe.innerHTML = `Receipe::--${data.meals[0].strInstructions}`;

  document.querySelector("#detailsbox").append(image, Receipe);

  for (let key in data.meals[0]) {
    if (key.includes("strIngredient")) {
      if (data.meals[0][key] != "") {
        var ing = document.createElement("p");
        ing.setAttribute("id", "ing");
        ing.innerHTML = data.meals[0][key].trim();

        document.querySelector("#div1").append(ing);
      }
    }
  }
  for (let key in data.meals[0]) {
    if (key.includes("strMeasure")) {
      if (data.meals[0] != "") {
        var mea = document.createElement("p");
        mea.setAttribute("id", "mea");
        mea.innerHTML = data.meals[0][key].trim();

        document.querySelector("#div2").append(mea);
      }
    }
  }
}



