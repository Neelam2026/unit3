import navbar from "../components/navbar.js";
  let navbar_div = document.getElementById("navbar");
  navbar_div.innerHTML = navbar();

  //e0bd4a62c57d290c876c083e915f73c0
  //let url1=`https://api.themoviedb.org/3/movie/550?api_key=e0bd4a62c57d290c876c083e915f73c0&language=en-US&append_to_response=images&include_image_language=en,null`
  let url =
    "https://api.themoviedb.org/3/movie/popular/?api_key=e0bd4a62c57d290c876c083e915f73c0&append_to_response=images";

  async function getpopular_movies() {
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      append_data(data);
    } catch (err) {
      console.log(err);
    }
  }

  getpopular_movies();
  let show_data = document.getElementById("show_data");
  function append_data(data) {
    data.results.map(function (data) {
      console.log(data);
      let div1 = document.createElement("div");
      div1.id = "div1";
      let img1_treding = document.createElement("img");
      img1_treding.id = "img1_treding";
      img1_treding.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
      let div2 = document.createElement("div");
      div2.id = "div2";
      div2.textContent = data.title;
      let div3 = document.createElement("div");
      div3.id = "div3";
      div3.textContent = data.release_date;
      let div4 = document.createElement("div");
      div4.id = "div4";
      div4.textContent = `Rating: ${data.vote_average}⭐⭐⭐⭐⭐`;
      let div5 = document.createElement("div");
      div5.id = "div5";
      div5.append(div2, div3, div4);
      div1.append(img1_treding, div5);
      show_data.append(div1);

      div1.addEventListener("click", function () {
        show_movie_result(data);
      });
    });
  }

  function show_movie_result(data) {
    document.getElementById("movie_result").innerHTML = "";
    let div6 = document.createElement("div");
    div6.id = "div6";
    let img2_treding = document.createElement("img");
    img2_treding.id = "img2_treding";
    img2_treding.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    let div7 = document.createElement("div");
    div7.id = "div7";
    div7.textContent = `Title: ${data.title}`;
    let div8 = document.createElement("div");
    div8.id = "div8";
    div8.textContent = `Release_date: ${data.release_date}`;
    let div9 = document.createElement("div");
    div9.id = "div9";
    div9.textContent = `Rating: ${data.vote_average}⭐⭐⭐⭐⭐`;
    let div11 = document.createElement("div");
    div11.id = "div11";
    div11.textContent = `Over View: ${data.overview}`;
    let div12 = document.createElement("div");
    div12.id = "div12";
    div12.textContent = `Popularity: ${data.popularity}`;
    let div10 = document.createElement("div");
    div10.id = "div10";
    div10.append(div7, div8, div9, div12, div11);
    let div13 = document.createElement("div");
    div13.append(img2_treding);
    div6.append(div13, div10);
    document.getElementById("movie_result").append(div6);
  }

  var logged = JSON.parse(localStorage.getItem("login"));

  if (logged.username != "") {
    let q = document.getElementById("show_name");
    q.innerHTML = `Welcome!  ${logged.name}`;
  }

  console.log(logged);

  ///

  let input = document.getElementById("searchbar");
  input.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      getMovies();
    }
  });

  async function getMovies() {
    try {
      let names = document.getElementById("searchbar").value;

      let url = `https://www.omdbapi.com/?apikey=484879df&s=${names}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log("ddd", data);
      //returning the result which will searched
      search_movie_result(data.Search[0]);
    } catch (err) {
      console.log("error:", err);
    }
  }

  function search_movie_result(data) {
    document.getElementById("movie_result").innerHTML = "";
    let div6 = document.createElement("div");
    div6.id = "div6";
    let img2_treding = document.createElement("img");
    img2_treding.id = "img2_treding";
    img2_treding.src = data.Poster;
    let div7 = document.createElement("div");
    div7.id = "div7";
    div7.textContent = `Title: ${data.Title}`;
    let div8 = document.createElement("div");
    div8.id = "div8";
    div8.textContent = `Release_Year: ${data.Year}`;
    let div9 = document.createElement("div");
    div9.id = "div9";
    div9.textContent = `Rating: ${Math.floor(Math.random() * 5) + 5}⭐⭐⭐⭐⭐`;
    let div11 = document.createElement("div");
    div11.id = "div11";
    div11.textContent = `Type: ${data.Type}`;
    let div12 = document.createElement("div");
    div12.id = "div12";
    div12.textContent = `IMDB ID : ${data.imdbID}`;
    let div10 = document.createElement("div");
    div10.id = "div10";
    div10.append(div7, div8, div9, div12, div11);
    let div13 = document.createElement("div");
    div13.append(img2_treding);
    div6.append(div13, div10);
    document.getElementById("movie_result").append(div6);
  }