import React from "react";
import ReactDom from "react-dom";

//Componente
class Componente extends React.Component{

    //Função
    minhaFuncao = (elemento) => {
        elemento.preventDefault();
        alert('Testando evento Submit');
    }

    //Render
    render(){
        return(
            <form onSubmit={this.minhaFuncao} action="http://globo.com">
                <input type="submit" />
            </form>
        );
    }

}

//Render
ReactDom.render(<Componente/>, document.getElementById('root'));