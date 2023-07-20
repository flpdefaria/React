import React from "react";

//Importar Form
import Form from "./Form";

//Importar Table
import Table from "./Table";

//Componente
class Principal extends React.Component{

    //constructo
    constructor(props){
        super(props);

        this.state = {
            nome: '',
            idade: '',
            vetor: []
        };
    }

    //Função ao digitar (onChange)
    aoDigitar = (campo) => {
        this.setState({[campo.target.name] : campo.target.value});
    }

    //Função Clique (onSubmit)
    aoClicar = (botao) => {
        botao.preventDefault();
        
        var copiaVetor = [...this.state.vetor];

        copiaVetor.push({
            'nome' : this.state.nome,
            'idade' : this.state.idade
        });

        this.setState({vetor : copiaVetor});

        this.setState({
            nome : '',
            idade : ''
        });
    }

    //Render
    render(){
        return(
            <div>
                <Form campoNome={this.state.nome}  campoIdade={this.state.idade} funcaoBotao={this.aoClicar} funcaoCampo={this.aoDigitar}/>
                <Table dados={this.state.vetor}/>
            </div>
        );
    }

}

//Exportar Componente
export default Principal;