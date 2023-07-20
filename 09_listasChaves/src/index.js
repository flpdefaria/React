import React from "react";
import ReactDom from "react-dom";

//Componente
class Componente extends React.Component{

    //Render
    render(){

        //Vetor
        let cores = ['Azul', 'Amarelo', 'Vermelho'];

        //Listar
        let listar = cores.map((cor, index) => {
            return <li key={index}>{index} - {cor}</li>
        });

        //Retorno
        return(
            <ul>
                {listar}
            </ul>
        );

    }

}

//Render
ReactDom.render(<Componente/>, document.getElementById('root'));