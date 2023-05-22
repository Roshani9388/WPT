// . Write a class Product with properties prodectName, productCost and 
// prodDesc and showProdDetails function
// a. Use "class" syntax . Create objects and call showProdDetails
// b. In another file create same class using function constructor syntax
// create objects and call showProdDetails
//  c. In another file create a JSON object with above properites and function
// Call the showProdDetails


    function Product(pName,pcost,pd)
    {
        this.pName=pName;
        this.pcost=pcost;
        this.pdesc=pd;
    

     

    this.showProdDetails=function()
    {
        console.log("Product Name:",obj.pName);
        console.log("Product cost:",obj.pcost);
        console.log("Product Description:",obj.pdesc);
        
    }
}

var obj=new Product("Pen",20,"object")



obj.showProdDetails()