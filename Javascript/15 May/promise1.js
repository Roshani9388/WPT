let p = new Promise((res,rej)=>{
        rej("something went wrong!")
})

console.log("the promise",p)

p.catch((rej)=>{console.log(rej)})