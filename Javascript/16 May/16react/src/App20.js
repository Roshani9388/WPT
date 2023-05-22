import {Routes, Route} from "react-router-dom"
import RoutesEx from "./May20/RoutesEx";
import ShoppingEx from "./May19/ShoppingEx"
import UserDetails from "./may17/UserDetails";
import CurrencyConverter from "./May20/CurrencyConverter"
import Fruits from "./May20/Fruits";

export default function App20() {
      
   return <Routes>
    <Route path="/" element={<RoutesEx></RoutesEx>}>
    <Route path="/shopping" element={<ShoppingEx></ShoppingEx>}></Route>
    <Route path="/user" element={<UserDetails></UserDetails>}></Route>
    <Route path="/user" element={<UserDetails></UserDetails>}></Route>
    <Route path="/convertor" element={<CurrencyConverter></CurrencyConverter>}></Route>
    <Route path="/fruits" element={<Fruits></Fruits>}></Route>
    </Route>
   </Routes>
}

