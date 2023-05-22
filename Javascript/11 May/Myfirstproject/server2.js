// 1. Create a route for guestrouter mapped to /atithi as discussed in class
//  add following APIs
// a) Method=GET url="/" show the name of the host as discussed in class
// b) Method = GET url ="/all" show all the names in the list with index 
//  ---- create a new array using arr.map ( (e,index)=>{ return index+"."+e}
// c) Method =POST url ="/addguest" pass a query parameter "guestname" add 
// it to a guest array on server side
// d) Method = GET url="/guestcount show the total count of guests added 
// already
// e) Method = PUT url="/changeguestname" pass two path parameters the first 
// one is the index of the name already in the list and second one is the 
// changedname . Change the name on the specified index
//  f) method = DELETE url="removeguest" accept a path parameter that is the 
// index to be remove . Remove the entry from the guest array

import express from 'express';
import guestrouter from "./guestrouter.js";
let app = express()
app.use("/",guestrouter)
app.use("/atithi",guestrouter)

//app.use("/all",guestrouter)

app.listen(5000, () => {
    console.log('App is listening on port 5000');
  });

  