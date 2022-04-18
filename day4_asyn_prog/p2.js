function storeimg(){
   let imgurl=document.getElementById("url").value;

   //array of object
   let picarr=localStorage.getItem("photos")
    console.log(picarr)

    if(picarr===null){
        picarr=[]
    }
    else{
        picarr=JSON.parse(localStorage.getItem("photos"))
    }
    picarr.push(imgurl)

    localStorage.setItem("photos",JSON.stringify(picarr))
  }
