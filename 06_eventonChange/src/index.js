import React from "react";
import ReactDOM from "react-dom";

//Componente
class Componente extends React.Component{
    
    //Função
    mensagem(nome){
        alert('Ola ' + nome);
        console.log(this);
    }

    modeloArrowFunction = (curso) => {
        alert('Curso de ' + curso);
        console.log(this);
    }

    teclado = (obj) => {
        console.log(obj.target.value);
    }

    //Render
    render(){
        return(
            <div>
                <button onClick={this.mensagem.bind(this, 'Felipe')}>Clique aqui</button>
                <button onClick={() => this.modeloArrowFunction('ReactJS')}>Arrow Function</button>
                <hr/>
                <input type="text" onChange={this.teclado}/>
            </div>
        );
    }
    
}

//Render
ReactDOM.render(<Componente/>, document.getElementById('root'));