import React from "react";
import ReactDom from "react-dom";

//Componente
class Componente extends React.Component{

    //Constructor
    constructor(props){
        super(props);

        this.state = {cor : 'vermelho'};
    }

    // Depois de realizar o render
    componentDidMount(){
        setTimeout(() => {
            this.setState({cor : 'azul'});
        }, 2000);
    }


    render(){
        return(
            <h1>Minha cor preferida é {this.state.cor}</h1>        
        );
    }

}

//Render
ReactDom.render(<Componente/>, document.getElementById('root'));