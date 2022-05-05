import React from "react";

export const Child = props =>{
    console.log('Child has rendered')
    return(
        <h1>Hello from the Child! my Parent's count is {props.count}</h1>
    )
}