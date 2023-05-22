import axios from "axios"
import {useState} from "react"
export default function Ajaxwithreact()
{
    let [arr,setarr]=useState([])

    function handler()
    {
            let promise=axios.get("https://reqres.in/api/users")
            promise.then((res)=>{
               // console.log(res)
                setarr(res.data.data)
            })
    }

    function rows()
    {
            return arr.map((emp)=>{
                return(<tr><td>{emp.first_name.concat(" ",emp.last_name)}</td><td>{emp.email}</td><td><img src={emp.avatar}></img></td></tr>
            )})
    }

    return <div>
    <input type="button" value="getdata" onClick={handler}/>
    <table border={2}>
    <thead><tr><td>Name</td><td>Email</td><td>Photo</td></tr></thead>
    <tbody>{rows()}</tbody>
    </table>
     </div>
}