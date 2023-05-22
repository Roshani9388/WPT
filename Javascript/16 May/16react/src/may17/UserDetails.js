import React, { useState } from "react";
import GraduateComponent from "./GraduateComponent";
import PGComponent  from "./PGComponent";
import UGComponent from "./UGComponent";

export default function UserDetails()
{
    let [choice,setchoice] = useState("")

    return <div>
       Usename: <input type="text" name="uname"/>
       <br></br>  <br></br>
        Email:<input type="text" name="email"/>
        <br></br>
        <br></br>
        <select onChange={(e)=>{setchoice(e.target.value)}}>
            <option value="Graduate" >Graduate</option>
            <option value="PG" >Post Graduate</option>
            <option value="UG" >Under Graduate</option>
        </select>

    {choice==="Graduate"?<GraduateComponent></GraduateComponent>:""}
    {choice==="PG"?<PGComponent></PGComponent>:""}
    {choice==="UG" && <UGComponent></UGComponent>}


</div>
}