async function main(url){
    try{
        let res=await fetch(url);
        let data=await res.json();
         return data;
    
    }
    catch(e){
        console.log(e)
     }
}


function append_data(data,parent)
{
console.log(data)
data.map(function(el){
    let div1=document.createElement("div");
    div1.id="div1"
    let div2=document.createElement("div");
    div2.id="div2"
    let img1=document.createElement("img");
    img1.src=el.urls.small;
    img1.id="img1"
    div2.append(img1);
    let div3=document.createElement("div")
    div3.textContent=el.user.name
    div1.append(div2,div3)
    parent.append(div1)

})
}
export {main,append_data}