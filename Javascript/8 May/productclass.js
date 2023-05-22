// . Write a class Product with properties prodectName, productCost and 
// prodDesc and showProdDetails function
// a. Use "class" syntax . Create objects and call showProdDetails
// b. In another file create same class using function constructor syntax
// create objects and call showProdDetails
//  c. In another file create a JSON object with above properites and function
// Call the showProdDetails

class Product
{
    constructor(pName,pcost,pdesc)
    {
        this.pName=pName;
        this.pcost=pcost;
        this.prodDesc=pdesc;
    }

    

    showProdDetails()
    {
        console.log("Product Name:",this.pName);
        console.log("Product cost:",this.pcost);
        console.log("Product Description:",this.prodDesc);
        
    }

}
var obj=new Product("Pen",20,"object")


//obj.prodDesc()
obj.showProdDetails()