//import React from "react";

import React,{ useState } from "react"

export default function Convertor()
{
  let s1=document.getElementById("i1").value
  let s2=document.getElementById("i2").value
  
  let [n1,setres]=useState(0)
  let num=0
    function textreceiver(e)
    {
         num=e.target.value
        console.log(num)
    }

    function handler1(e)
    {
        if(s1=="Rupees" && s2=="Rupees")
        {

          let res=num
          setres(res)
          console.log(res)
        }
    }



    return <div>
        <br></br>
        <br></br>
       <hr></hr>
        <h1><b><i><u>******** Currency Convertor ************</u></i> </b></h1>
        Enter Value: <input type="text" onBlur={textreceiver} /> 
        <select id="i1">
      <option  value="Rupees">Rupees</option>
      <option value="Dollars">Dollars</option>
      <option  value="Euros">Euros</option>
    </select>

    <select id="i2">
      <option  value="Rupees">Rupees</option>
      <option value="Dollars">Dollars</option>
      <option  value="Euros">Euros</option>
    </select>
    <input type="submit" value="Convert" onClick={handler1}/>
        <p> Converted Value:{n1}</p>
        

    </div>
}