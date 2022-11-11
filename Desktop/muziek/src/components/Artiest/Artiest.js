import React from "react"
import "./Artiest.css";


class Artiest extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
    return(
        <>
        <section className="Artiest">
            <p >Artiest</p>
            <li>{this.props.name}</li>
            </section>
        </>
        )
    }

}

export default Artiest;