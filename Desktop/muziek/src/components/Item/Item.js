import { render } from "@testing-library/react";
import React from "react"
import "./Item.css";

class Item extends React.Component{

constructor(props){
    super(props)
    this.className = "";
    this.state = {done: this.props.done}
}

    
    
    render(){
        
    return(
        <>
            <li  className="todo__item">{this.props.name}</li>
        </>
    )
}
}

export default Item