import React from "react";
import ReactDOM from "react-dom";

class Componente extends React.Component{

    //Construto
    constructor(props){
        super(props);

        this.state = {nome:'Felipe'};
    }

    //Render
    render(){
        return <h1>{this.state.nome}</h1>;
    }
    
}

//Render
ReactDOM.render(<Componente/>, document.getElementById('root'));