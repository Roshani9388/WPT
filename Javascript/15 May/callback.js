let interval_id=setInterval(()=>{console.log("hello")} , 1000)

setTimeout(()=>{clearInterval(interval_id)},7000)
//clearInterval(interval_id) //stops the interval repetition
