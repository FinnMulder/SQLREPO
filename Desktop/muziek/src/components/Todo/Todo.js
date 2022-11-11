import React from "react"
import "./Todo.css"
import Item from "../Item/Item"
import Artiest from "../Artiest/Artiest"
import Input from "../Input/Input"
import songsObject from "../../data/songs"


class Todo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            songs: [],
        }
    }


    inputPressedEnter = (inputFromInputComponent) => {
        
        let toBeAdded = [{
            name: inputFromInputComponent,
            done: false,
            id: 100,
        }]

       let mergedSongArray = this.state.songs.concat(toBeAdded);
        this.setState({
            songs: mergedSongArray,
        })
    }


    
render(){
    let items = this.state.songs.map(task => {
        return <Item done={task.done} name={task.name} key={task.id}></Item>
    });

   

    

    return(

        <>
        <article  className="todo">
            <header className="todo__header">
                <h1 className="todo__heading">{this.props.title}</h1>
            </header>
            <ul className="todo__list">
               
                {items}
                {}
            </ul>
            <Input inputPressedEnter={this.inputPressedEnter} title="Nummer" inputValue={this.state.inputValue} />
            {}
        </article>
        </>
    )}
}

export default Todo