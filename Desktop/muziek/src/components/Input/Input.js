import "./Input.css"
import React from "react"

class Input extends React.Component {
    

        constructor(props){
            super(props);
            this.state = {inputValue: ""}
        }

        update = (event) => {
            this.setState({inputValue: event.target.value}
        )}

        enter = (event) => {
           if( event.keyCode === 13){
            console.log(event)
            console.log(this.props)
            if(this.props.title == "Nummer"){
                this.props.inputPressedEnter(this.state.inputValue)
            }
            else if(this.props.title == "Artiest"){
                this.props.inputPressedEnterArtist(this.state.inputValue)
            }
        }
        }

        click = () => {
            if(this.props.title == "Nummer"){
                this.props.inputPressedEnter(this.state.inputValue)
            }
            else if(this.props.title == "Artiest"){
                this.props.inputPressedEnterArtist(this.state.inputValue)
            }
        }
        
        render(){


        return(
            <>
            <input onKeyUp={this.enter} value={this.props.inputValue}  onChange={this.update} className="input" type="text" placeholder={this.props.title}/>
            <button className="click" onClick={this.click}>Klik</button>
            </>
        );
    }
}

export default Input