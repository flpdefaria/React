import React from "react";
import ReactDOM from "react-dom";

// Componente
class Componente extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.informacoes.nome}</p>
                <p>{this.props.informacoes.idade}</p>
            </div>
        );
    }
}

// JSON
var dados = {nome:'Felipe', idade:33};

// Render
ReactDOM.render(<Componente informacoes={dados}/>, document.getElementById('root'));