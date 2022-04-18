var img=[ {imagelink:"https://www.filmibeat.com/imgm/416x335x100/2021/03/retaliation_16159195581.jpg"},
{imagelink:"https://www.filmibeat.com/imgm/416x335x100/2019/05/fast-amp-furious-presents-hobbs-amp-shaw_1559208117250.jpg"},
{imagelink:"https://www.filmibeat.com/imgm/416x335x100/2019/03/the-curse-of-la-llorona_155316627520.jpg"},
{imagelink:"https://www.filmibeat.com/imgm/416x335x100/2019/03/hellboy_1553165961100.jpg"},
{imagelink:"https://www.filmibeat.com/imgm/416x335x100/2018/07/isn-t-it-romantic_153180790490.jpg"},

]
localStorage.setItem("imgdata",JSON.stringify(img));

var image=JSON.parse(localStorage.getItem("imgdata"))
var i=0;
setInterval(function(){

  if(i==image.length){
      i=0;
  }
  var store=document.getElementById("picture");
  store.src=img[i].imagelink;
   i++;

},1200)

var mov = [{name:"Bhoothakaalam",
           release_date:"21 Jan 2022",
           type:"Drama",
           poster:"https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/bhoothakaalam-20220121145931-20715.jpg",
           IMDb:"5",

},        {name:"Badhaai Do",
           release_date:"04 Feb 2022",
           type:"Drama",
           poster:"https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/badhaaido-20220124152114-19236.jpg",
           IMDb:"4.4",

},        {name:"Putham Pudhu Kaalai",
           release_date:"14 Jan 2022",
           type:"Drama",
           poster:"https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/puthampudhukaalaividiyaadhaa-20220104132112-20664.jpg",
           IMDb:"3.8",

},        {name:"Rowdy Boys",
           release_date:"14 Jan 2022",
           type:"Action,Romance",
           poster:"https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/rowdyboys-20210824105902-20321.jpg",
           IMDb:"4",

},        {name:"Valimai",
           release_date:"24 Feb 2022",
           type:"Action,Thriller",
           poster:"https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/valimai-20210711202749-17919.jpg",
           IMDb:"5",

},        {name:"The 355",
           release_date:"2022 (India)",
           type:"Action,Spy",
           poster:"https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/the355-20220106194456-20671.jpg",
           IMDb:"4.3",

},        {name:"The Batman",
           release_date:"2022(India)",
           type:"Action",
           poster:"https://www.filmibeat.com/fanimg/movie/20632/the-batman-photos-images-77316.jpg",
           IMDb:"4.9",

},        {name:"The King's Man",
           release_date:"Period,Spy",
           type:"Action,Spy",
           poster:"https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/thekingsman-20200623132712-19374.jpg",
           IMDb:"4.8",

},        {name:"Spider-Man: No Way Home",
           release_date:"16 Dec 2021 (India)",
           type:"Superhero Movie",
           poster:"https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/spider-mannowayhome-20211129124706-20499.jpg",
           IMDb:"5",

},

]
  
localStorage.setItem("movies",JSON.stringify(mov));

var moviedata=JSON.parse(localStorage.getItem("movies"))
display(moviedata)

function display(moviedata){
document.querySelector("#movies").innerHTML="";
  
moviedata.map(function(data){
    var div=document.createElement("div");
    div.setAttribute("id","flex");

    var div1=document.createElement("div");
    div1.setAttribute("id","div1");

    var image=document.createElement("img");
    image.setAttribute("src",data.poster);
    image.setAttribute("id","poster");
    div1.append(image);

    var div2=document.createElement("div");
    div2.setAttribute("id","div2");

    var name=document.createElement("p");
    name.textContent=data.name;
   name.setAttribute("id","namer");

   var type=document.createElement("p");
    type.textContent=data.type;
   type.setAttribute("id","type");
 
   var rlsdate=document.createElement("p");
   rlsdate.textContent=`date:  ${data.release_date} (releasing)`;
   rlsdate.setAttribute("id","rlsdate");

   var imdb=document.createElement("p");
  imdb.textContent=`rating : ${data.IMDb} ⭐`;
  imdb.setAttribute("id","imdb");

  div2.append(name,type,rlsdate,imdb);
  div.append(div1,div2)
  document.querySelector("#movies").append(div);

});
}

function rating(){

var selected=document.getElementById("rate").value;

if(selected=="sort-hl")
  {
      moviedata.sort(function(a,b){
          return Number(b.IMDb)-Number(a.IMDb);
      })

  }
  else if(selected=="sort-lh")
  {
      moviedata.sort(function(a,b){
          return Number(a.IMDb)-Number(b.IMDb);
      })

  }

  
  display(moviedata);

}

var logged= JSON.parse(localStorage.getItem("login"))

if(logged.username!=""){
let q=document.getElementById('logged')
    q.innerHTML=`welcome ${logged.username}`
}

console.log(logged)