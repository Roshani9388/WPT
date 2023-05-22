/*use switch case on a string 
If the string is + show sum of 2 nums
- , * ., / ,% = show respective results*/
var s="%"
var a=47
const b=5
switch(s)
{
    case "+":
        console.log("The addition is ",(a+b))
        break;

        case "-":
        console.log("The subtraction is ",(a-b))
        break;

        case "*":
        console.log("The multiplication is ",(a*b))
        break;

        case "/":
        console.log("The division is ",(a/b))
        break;

        case "%":
        console.log("The mod is ",(a%b))
        break;

        default:
        console.log("Invalid Option")


}