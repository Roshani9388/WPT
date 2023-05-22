//write a function to accept 2 numbers from user and show their sum 
//Do it for - * / % square of n1


function add(n1,n2)
{
    console.log((n1+n2));
}

function sub(n1,n2)
{
    console.log((n1-n2));
}

function mul(n1,n2)
{
    console.log((n1*n2));
}

function div(n1,n2)
{
    console.log((n1/n2));
}

console.log("Enter 2 numbers:");
    let n1 = parseInt(document.getElementById("num1").value)
    let n2 = document.getElementById("num2").value
    add(n1,n2)
    sub(n1,n2)
    add(n1,n2)
    sub(n1,n2)