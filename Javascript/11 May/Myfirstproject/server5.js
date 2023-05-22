import  express from "express";
let app=express()

import path from "path";

 app.set("views","./views")
 app.set("view engine","hbs")

app.get("/new",(req,res)=>{
    res.sendFile("C:\\Users\\IET\\Desktop\\HTML\\11 May\\Myfirstproject\\new.html")

})

app.get("/cals",(req,res)=>{

    res.render("calculations")

})
import bodyparser from 'body-parser'
app.use(bodyparser.urlencoded({extended:true}))

 app.post("/docalculation",(req,res)=>{

    let n1=req.body.num1
    let n2=req.body.num2

    let res1=parseInt(n1)+parseInt(n2)
     let res2=n1-n2
    let res3=n1*n2
    let res4=n1/n2
let d = {result1:res1} + "  " + {result2:res2}
    res.render("calculations",{result1:d})
    res.render("calculations",{result2:res2})
    res.render("calculations",{result3:res3})
    res.render("calculations",{result4:res4})

})



app.listen(2000, ()=>{
    console.log("server is listening on port no 2000")
})

