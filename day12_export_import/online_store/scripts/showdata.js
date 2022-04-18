
//here we will write dynamic code ...cant pass url here
async function getdata(url)
{
   try{
        let res=await fetch(url);
        let data=await res.json()
        return data;
   }
   catch(err)
   {
       console.log(err)
   }

}


function append_data(data,parent){

    data.forEach((el)=>{
        let div=document.createElement("div")
        let p=document.createElement("p")
        let img=document.createElement("img")
        p.innerText=el.title;
        img.src=el.image;
        div.append(img,p)
        parent.append(div)

    })

}

export {getdata,append_data}