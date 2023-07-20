import React from "react";
import ReactDom from "react-dom";

//Importar CSS
import './estilos.css';

//Componente
class Componente extends React.Component{

    render(){

        const estilo = {
            color : 'blue',
            borderBottom : 'solid 5px green'
        }

        return(
            <div>
                <h1 style={{color:'red', backgroundColor:'yellow'}}>CSS Interno (inline)</h1>
                <h1 style={estilo}>CSS através de variáveis e constantes</h1>
                <h1 className="minhaClasse">CSS através de classes</h1>
            </div>
        );
    }

}

//Render
ReactDom.render(<Componente/>, document.getElementById('root'));