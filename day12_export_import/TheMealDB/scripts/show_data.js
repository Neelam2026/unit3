 let getdata=async (url)=> {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (err) {
    console.log("error", err);
  }
}

 let append_data=(data, parent)=> {
  document.getElementById("container").innerHTML = "";
  data.meals.forEach((el) => {
    let div = document.createElement("div");
    div.id = "cont_div";
    let p = document.createElement("p");
    let img = document.createElement("img");
    p.innerText = el.strMeal;
    img.src = el.strMealThumb;
    img.id = "cont_img";
    let hr1 = document.createElement("hr");
    div.append(img, hr1, p);
    parent.append(div);

    div.addEventListener("click", function () {
      search_data(el);
    });
  });
}

var arr=[]
let search_data=(data)=> {
  arr.push(data)
  localStorage.setItem("dishdata",JSON.stringify(arr))
  window.location.href = "details.html";
 }

export { getdata, append_data };
