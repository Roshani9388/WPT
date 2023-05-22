// Use function component - Accept a string from user in a textfield , accept 
// the checkbox value for uppercase , lowercase, titlecase 
// 3.
// Depending on which checkbox is checked show the input string in upper, 
// lower or title case 
// EVENT - onBlur of textfield = collect the data 
// Event - onchange on each check box = show different output in different 
// <p> tags

import { useState } from "react"

export default function Stringop()
{
    let [u,cal1]=useState("")
     let [l,cal2]=useState("")
     let [t,cal3]=useState("")

    let text1=""
    function textreceiver(e)
    {
         text1=e.target.value
       // console.log(text1)
    }

        function handler1()
        {
        let uc=text1.toUpperCase()
             console.log(u)
             cal1(uc)
        }

        function lowercase(){
             let lc=text1.toLowerCase()
             console.log(l)
             cal2(lc)
        }

        function titlecase()
        {
                let f=text1.charAt(0)
                let str=text1.substring(1)
              let   tc=f.concat(str)
              console.log(tc)
                cal3(tc)
        }
           
     

    return <div>
        <input type="text"  onBlur={textreceiver} />
        <h4> String Operations</h4>
              <ul><li> UPPERCASE:<input type="checkbox" onChange={handler1}/></li></ul>
               <ul><li> lowercase:<input type="checkbox" onChange={lowercase}/></li></ul>
              <ul><li> Titlecase:<input type="checkbox" onChange={titlecase}/></li></ul> 
             
         
		
         <p>String in UPPERCASE: {u}</p> 
         <p>String in lowercase: {l}</p>
         <p>String in Titlecase: {t}</p>  
    </div>
}

