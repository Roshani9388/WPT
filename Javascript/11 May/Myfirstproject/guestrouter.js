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

import express,{ Router } from "express";
let guestrouter=Router()
export default guestrouter
let host="roshani"

let guests=["roshani","anuja",'prachi']
let arr=[]
let count=0

guestrouter.get('/', (request, response) => {
     response.send(`This is server side ${host} guest`)
  });


   guestrouter.get('/all', (request, response) => {
    for(var i=0;i<guests.length;i++) 
    {
       arr=guests.map((e,i)=>{ return i+" . "+e})
    }
    return response.send(arr)
   });

   guestrouter.post('/addguest', (request, response) => {
    let name=request.query.uname
    guests.push(name)
    
    
     return response.send("Added successfully........")
   });

   guestrouter.get('/guestcount', (request, response) => {
    for(var i=0;i<guests.length;i++) 
    {
      count=count+1
    }
    return response.send(`Total guest count is  ${count}`)
   });

   
   guestrouter.delete('/removeguest/:index', (request, response) => {
    let index=request.params.index
    guests.splice(index,1)
    return response.send("Deleted successfully")
  })


  guestrouter.put('/changeguestname/:index/:cname', (request, response) => {
    let index=request.params.index
    let cname=request.params.cname
    if(index=>0 && index<guests.length)
    {
      guests[index]=cname
      return response.send(`"${index}" : "${cname}"`)
    
    }
})
