

var imgarr=JSON.parse(localStorage.getItem("slideimg"));
var mvdata=JSON.parse(localStorage.getItem("data"));



var store=document.getElementById("pic");
var i=0;
setInterval(function(){

    if(i==imgarr.length){
        i=0;
    }
    store.src=imgarr[i];
    i++;

},1000)

//map data
display(mvdata)
  function display(mvdata){
    document.querySelector("#movies").innerHTML=""
   mvdata.map(function(data){

        var div= document.createElement("div");
        div.setAttribute("id","flex");

        var div2= document.createElement("div");
        div2.setAttribute("id","div2");

        var image=document.createElement("img");
        image.setAttribute("src",data.imgurl);
        image.setAttribute("id","imgmv");
        div2.append(image);

        var div1=document.createElement("div");
        div1.setAttribute("id","div1");

        var name=document.createElement("p");
        name.textContent=data.name;
        name.setAttribute("id","name");

        var p1=document.createElement("p");
        p1.textContent=`date:  ${data.date} (releasing)`;

        var p2=document.createElement("p");
        p2.textContent=`rating : ${data.rating} ⭐`;
        div1.append(name,p1,p2);

        div.append(div2,div1);

        document.querySelector("#movies").append(div);
   
 })
}

//rating sort
    function ratingsort(){
        var selected=document.getElementById("ratingsort").value;
        if(selected=="sort-hl")
        {
            mvdata.sort(function(a,b){
                return b.rating-a.rating;
            })

        }
        if(selected=="sort-lh")
        {
            mvdata.sort(function(a,b){
                return a.rating-b.rating;
            })

        }
        display(mvdata)
    
    }

