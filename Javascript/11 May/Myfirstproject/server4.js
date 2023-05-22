import express from 'express';
let app = express()
import path from 'path'

app.get("/hello",(req,res)=>{
   res.sendFile("C:\\Users\\IET\\Desktop\\HTML\\11 May\\Myfirstproject\\test.html")
})

app.set('views','./views')
app.set("view engine","hbs")

app.get("/verify",(req,res)=>{
    let user=req.query.uname
    let pwd=req.query.password
    if(user == "iet" && pwd == "123")
    res.render("welcome",{username:user})
    else
    res.sendFile("C:\\Users\\IET\\Desktop\\HTML\\11 May\\Myfirstproject\\test.html")
    
})
app.get("/calculator",(req,res)=>{
    res.render("calc")
 })
 import bodyparser from 'body-parser'
app.use(bodyparser.urlencoded({extended:true}))

 app.post("/docalculation",(req,res)=>{
    let n1=req.body.num1
    let n2=req.body.num2

    let sum=parseInt(n1) + parseInt(n2)
    console.log(sum)
    res.render("calc",{result:sum})


})

app.get("/maths",(req,res)=>{
    res.render("mathstable")
})

app.post("/generate-table",(req,res)=>{
      let n1 = req.body.num1
      let arr=[]
      for(var i=1;i<=10;i++)
      {
        arr[i] = `${n1}*${i}=${n1*i}`
      }
      res.render("mathstable",{rowdata:arr})
})

app.listen(5000, () => {
    console.log('App is listening on port 5000');
  });