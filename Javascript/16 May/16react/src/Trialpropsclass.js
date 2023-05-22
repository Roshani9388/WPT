import React from "react"
export default class Trialpropsclass extends React.Component
{
    render()
    {
        return <div>
           
            <p>{this.props.num1} {this.props.str} {this.props.arr}</p>
            </div>
    }
}