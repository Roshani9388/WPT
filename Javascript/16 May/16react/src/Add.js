import React from "react"

export default function Add(props)
{
    let a=props.num1
    let b=props.num2

    let sum=a+b
    let sub=a-b
    let mul=a*b
    let div=a/b

    return <div>
        <p>Sum of {a} + {b}={sum}</p>
        <p>Subtraction of {a} - {b}={sub}</p>
        <p>Sum of {a} * {b}={mul}</p>
        <p>Subtraction of {a} / {b}={div}</p>

    </div>
}