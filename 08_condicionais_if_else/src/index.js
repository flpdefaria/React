import React from "react";
import ReactDom from "react-dom";

class Componente extends React.Component{

    //Constructor
    constructor(props){
        super(props);

        this.state = {exibir : false};
    }

    //Função
    alterarState = () => {

        let converter = !this.state.exibir;
        this.setState({exibir : converter});

    }

    //Render
    render(){

        //Condicional
        let meuTexto = '';

        if(this.state.exibir == true){
            meuTexto = <h1>Ola!!! Utilizando condicionais</h1>
        }else{
            meuTexto = ''
        }

        //Retorno
        return(
            <div>
                {meuTexto} 
                <button onClick={this.alterarState}>Clique Aqui</button>
            </div>
        );
    }
}

//Render
ReactDom.render(<Componente/>, document.getElementById('root'));