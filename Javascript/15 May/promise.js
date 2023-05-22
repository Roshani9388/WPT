let p = new Promise((resolve,reject)=>{
                                           
    setTimeout(()=>{ 
        console.log("the asynchronous operation complete")
        resolve("Success")
    },6000)
})

console.log("the promise ",p)
p.then((res)=>{console.log(res,"Hurray!")}) 