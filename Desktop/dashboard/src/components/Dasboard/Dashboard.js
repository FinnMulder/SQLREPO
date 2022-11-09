import React from "react"
import Leftpane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/RightPane";
import Popup from "../Popup/Popup";
import chooseImage from "../../helpers/chooseImage";
import productsObject from "../../data/products";
import navigationItemsObject from "../../data/navigationItems";
import "./Dashboard.css";
class Dashboard extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {productCards: [], open: true};
    }

    
    componentDidMount(){
        
        
        this.setState({productCards: productsObject.products});
    
    }

    onButtonClicked = () => {
        this.setState({open: !this.state.open})
    }
    
    
    addButtonClicked = (inputFromPopup) => {
       let imageFromHelper = chooseImage (inputFromPopup);
        let toBeAdded = [
            {
                id: this.state.productCards.length + 1,
                name: inputFromPopup,
                img: imageFromHelper
            }
        ]

        let mergedArrays = this.state.productCards.concat(toBeAdded);
        this.setState({
            productCards: mergedArrays,
            open: !this.state.open,
        })
    }

    onCardClicked = () =>{
        this.setState({open: !this.state.open})
    }


    render(){
         
        if(this.state.open === true){
            return(
                <article className="dashboard">
                    <Leftpane navigationListItems={navigationItemsObject.navigationitems}>buttonText = "Go Premium"</Leftpane>
                    <RightPane onCardClicked={this.onCardClicked} onButtonClicked={this.onButtonClicked} productCards={this.state.productCards} headerText="Mijn Producten" buttonSymbol="+" buttonText="Voeg een Product toe"></RightPane>
                    <div></div>
                </article>
            );
        }
        return(
            <Popup addButtonClicked={this.addButtonClicked}/>
        )
        
    }
    
}

export default Dashboard;
