// Copy the shopstock.json in public folder
// Show all the IDs to the user in a dropdown --
// Once the user selects an ID show the itemname and the unit cost
// Ask the user to enter a quantity
// Show the user Total cost
// Ask the user to click a button ADD TO CART
// Show the cart
// Item name unitcost qty subtotal
// Add the qty in a textfield so that user may change it
// At each row show a button = on click of the button remove that
// purchase from the cart
// total cost ===========>


import axios from "axios";
import { Component } from "react";

export default class PopulateData extends Component
{
    constructor()
    {  super()
        this.state={optionarr:[]}
    }
    componentDidMount()
    {
        
        axios.get("./shopstock.json").then((resp)=>{
        
            let arr=resp.data
            console.log(arr)
            let temp = arr.map((e,index)=>{return <option key={index} value={e.id}>{e.item_name}</option>})
            this.setState({optionarr:temp})

        })
    }


    render()
    {
        return(
        <div>
            <select>{this.state.optionarr}</select>
        </div>)
    }
}