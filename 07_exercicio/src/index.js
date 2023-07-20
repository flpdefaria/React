import React from "react";
import ReactDom from "react-dom";

//Componente
class Componente extends React.Component{
    
    //Construtor
    constructor(props){
        super(props);

        this.state = {texto: this.props.textoInicial};
    }

    //Função
    minhaFuncao = (elemento) => {
        this.setState({texto: elemento.target.value});
    }

    //Render
    render(){
        return(
            <div>
                <h1>{this.state.texto}</h1>
                <input type="text" onChange={this.minhaFuncao} value={this.state.texto}/>
            </div>
        );
    }
}

//Render
ReactDom.render(<Componente textoInicial='Digite algo...'/>, document.getElementById('root'));