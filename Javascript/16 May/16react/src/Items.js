import axios from "axios"
import {useEffect,useState} from "react"

export default function Items(){
  let quantity = 0;
  let _id='11A';

  let temp = [];
  let [basket,setbasket] = useState([]);
  let [cart,setcart] = useState([]);
  let [total,settotal] = useState(0);
  let [finalcart,setfinalcart] = useState([]);
  let [dis,setDis] = useState('');


  useEffect(()=>{
    console.log("Component is rendered")

    axios.get("./shopstock.json").then((res)=>{
      temp = res.data;
      let arr = temp.map((e,index)=>{return <option key={index} value={e.id}>{e.item_name}</option>})
      setbasket([...arr])
      setcart([...temp])
    });
  },[]);


  function addToclick(){
    let templl = finalcart;
    for(let i=0;i<cart.length;i++){
      if(_id==cart[i].id){
        let current_total = (cart[i].unit_cost)*quantity;
        settotal(current_total);

        templl.push({id: `${cart[i].id}`,item_name: `${cart[i].item_name}`, unit_cost: `${cart[i].unit_cost}`, total: `${current_total}`})
      }
    }
    console.log(finalcart)
      setDis(finalcart.map((e,index)=>{return <tr key={index}><td>{e.id}</td><td>{e.item_name}</td><td>{e.unit_cost}</td><td>{e.total}</td></tr>}))
  setfinalcart([...templl])
}

  return <div>
  <select onChange={(e)=>{_id=e.target.value}}>{basket}</select>
  <input type="number" placeholder="Enter Quantity" onBlur={(e)=>quantity=e.target.value}/>
  <button onClick={addToclick}>ADD TO CART</button>
  <br />
  <p>{total}</p>
  <center><table>
  <tbody>
  {dis}
  </tbody>
  </table></center>
  </div>
}
