import React from "react";
import ReactDOM from "react-dom";

//Componente
class Componente extends React.Component{
    
    //Constructor
    constructor(props){
        super(props);

        this.state = {
            nome: '',
            idade: null
        };
    }

    //Função - Nome
   /* 
    funcaoNome = (campo) => {
        this.setState({nome : campo.target.value});
    }

    //Função - Idade
    funcaoIdade = (campo) => {
        this.setState({idade : campo.target.value});
    }
    */

    //Função para enviar os dados para os states
    enviarParaState = (campo) => {
        this.setState({[campo.target.name] : campo.target.value});
    }

    //Render
    render(){
        return(
            <form>
                <input type="text" placeholder="Nome" name="nome" onChange={this.enviarParaState} />
                <input type="number" placeholder="Idade" name="idade" onChange={this.enviarParaState} />
                <p>{this.state.nome}</p>
                <p>{this.state.idade}</p>
            </form>
        );
    }
    
}

//Render
ReactDOM.render(<Componente/>, document.getElementById('root'));