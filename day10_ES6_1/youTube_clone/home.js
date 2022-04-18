document.getElementById("Material").addEventListener("click", function (event) {
  event.preventDefault();
  main();
});

// time setting for 2sec
var timerId_settimeOut;
function debounce_input(func_main, delay) {
  if (timerId_settimeOut) {
    clearTimeout(timerId_settimeOut);
  }
  timerId_settimeOut = setTimeout(function () {
    func_main();
  }, delay);
}

// main function
//let Api_key = "AIzaSyDJVWbSRk_S-qvxJbAsUJXu80KMdUCQ6Do";
//let res= await fetch(`https://www.googleapis.com/youtube/v3/search?key=${Api_key}&q=${user_input}&type=video&maxResults=25`)
//let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=15&q=${x}&type=video&key=${Api_key}`)
async function main() {
  try {
    var x = document.querySelector("input").value
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${x}&type=video&key=AIzaSyDJVWbSRk_S-qvxJbAsUJXu80KMdUCQ6Do`)
   
    let data = await res.json();
    console.log(data);
    console.log(data.items);
    append_search_data(data.items);
  } catch (err) {
    console.log(err);
  }
}

//popular content
popular_content();
async function popular_content() {
  try {
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyDJVWbSRk_S-qvxJbAsUJXu80KMdUCQ6Do`)
    let data = await res.json();

    append_popular_data(data.items);
  } catch (err) {
    console.log(err);
  }
}

//append search data
let append_search_data = (data) => {
  document.querySelector(".content").innerHTML = "";
  data.map((ele) => {
    var div = document.createElement("div");
    div.id = "div1";
    var img = document.createElement("img");
    var dot = ele.id.videoId;
    div.addEventListener("click", function () {
      newpage(dot);
    });
    img.src=`https://img.youtube.com/vi/${dot}/0.jpg`
    div.append(img);
    document.querySelector(".content").append(div);
  });
};

//append popular data
let append_popular_data = (data) => {
  document.querySelector(".content").innerHTML = "";
  data.map((ele) => {
    var div = document.createElement("div");
    div.id = "div1";
    var img = document.createElement("img");
    var dot = ele.id;
    div.addEventListener("click", function () {
      newpage(dot);
    });
    img.src=`https://img.youtube.com/vi/${dot}/0.jpg`
    div.append(img);
    document.querySelector(".content").append(div);
  });
};

let newpage = (dot) => {
  var iframe = document.createElement("iframe");
  iframe.src=`https://www.youtube.com/embed/${dot}`
  window.open(`https://www.youtube.com/embed/${dot}`, '_blank').focus();
}