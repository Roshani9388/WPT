// Write a route productrouter mapped to path /product 
// create an array of products
// Method =POST url=/add pass a request body { 
// "productId" :1
// "productName" : "AAA",
//  "costPerUnit": 30
//  "units": 2
// }
// Add this product Info the products array
// a)
// b) Method = GET url=/getInfo pass the product Id as query parameter
// Client will receive the entire product object for that ID
//  c) Method = GET url=/all show all array
//  d) method= PUT url=/changecost accept product Id and cost from user as path 
// parameters and change the cost for that product Id 
//  e) method= DELETE url=/remove accept a product Id as path parameter and remove it from array


import express, { Router, json } from "express";
let productrouter = Router()
export default productrouter
let product = [{
    "productId": 1,
    "productName": "AAA",
    "costPerUnit": 30,
    "units": 2
}]
productrouter.use(express.json())


productrouter.post('/addproduct', (request, response) => {

    let newProduct = request.body
    // product.push(`[{productId:${productId},productName:${productName},costPerUnit:${costPerUnit},units:${units}}]`)
    product.push(newProduct)
   // response.send("added")
    response.send(newProduct)
});


productrouter.get('/all', (request, response) => {
    response.json(product)
});


productrouter.get('/getInfo', (request, response) => {
    let productId = request.query.productId
    let product1 = product.find(p =>p.productId == productId); 
    if(product1!=undefined)
    response.json(product1)
    else
    response.send("product not found")
})

productrouter.delete('/remove/:productId', (request, response) => {
    let productId = request.params.productId
    let index = product.findIndex(p =>p.productId == productId);
    if(index!==-1)
    {product.splice(index,1)
    response.send("Deleted successfully")}
    else
    response.send("product not  exists.....")
    
  })

  productrouter.post('/changecost/:productId/:cost', (request, response) => {
    let productId=request.params.productId
    let cost=request.params.cost
    let product1 = product.find(p =>p.productId == productId);
    if(productId=>0 && productId<product.length)
    {
      product1.costPerUnit=cost
      return response.json(product1)
    
    }
})
