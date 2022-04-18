// function append(s){
//     let script=document.createElement("script")
//     script.src=s;
//     document.head.append(script)

//     //hello()  //dependend
//    // console.log(document)


//    setTimeout(function(){
//        hello()
//    },3000)
// }

// append("myscript.js")



/////////////////////////////////////////////
// function append(s){
//     let script=document.createElement("script")
//     script.src=s;
//     document.head.append(script)

//     //hello()  //dependend
//    // console.log(document)


//    setTimeout(function(){
//        hello()
//    },12)
// }

// append("myscript.js")


////////////////////////////////////
// var mypromise= new Promise(function(resolve, reject){
//    //resolve("success_nnmmmmmmm")
//   reject('err comming caue of some spelling mistake tata bye you worry not')
// })
// console.log(mypromise)

//****************************************** */
//proper function by using promise with .then .catch

function append(s){
   return new Promise(function(resolve, reject){

let scripttt=document.createElement("script")
scripttt.src=s;
document.head.append(scripttt)


scripttt.onload=function(){
    resolve("script loading done")
}
scripttt.onerror=function(){
    resolve("script loading is not done")
}
})
}

// append("myscript.js")
// .then(function(res){
//     hello();

//      append("myscript2.js").then(function(res){
//         hello2();
        
//     })

// })

// .catch(function(e){
// console.log(e)
// })


//use of await async

async function handlevalue(){

    res=await append("myscript.js") 
    hello()
       res=await append("myscript2.js") 
       hello2()
}

handlevalue()