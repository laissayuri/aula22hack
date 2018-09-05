import React from 'react';
import AppStyle from "./appStyle";
import Botao from './components/botao/Botao';
// guarda a imagem na variavel logo
// tudo que tem source tem que importar no react

class App extends React.Component { //App instanciado pelo ReactDOM no index.js

  contar = () => {
    if(this.state.valor === 0){
      clearInterval(this.interval);
    } else {
      this.setState({
        valor: this.state.valor - 1
      });
    }
    console.log(this.state);
  }

  constructor(props){
    super(props);
    this.state = {
      valor: 10,
      contando: false
    };
    this.interval = null;
  }

  contar = () => {
    if(this.state.valor === 0){
      this.parar();
    } else {
      this.setState({
        //valor: (Number(this.state.valor - 0.1).toPrecision(2))
        valor: this.state.valor - 1
      });
    }
  }

  iniciar = () => {
    this.interval =  setInterval(this.contar, 1000);
    this.setState({
      contando: true
    });
  }

  parar = () => {
    clearInterval(this.interval);
    this.setState({
      contando: false
    });
  }

  reset = () => {
    clearInterval(this.interval);
    this.setState({
      valor: 10,
      contando: false
    });
  }

  mais = () => {
    if(!this.state.contando){
      this.setState({
        valor: this.state.valor + 1
      });
    }
  }

  menos = () => {
    if(!this.state.contando && this.state.valor !==0){
      this.setState({
        valor: this.state.valor - 1
      });
    }
  }

  render() { //é um metodo que retorna o que deve ser jogado na pagina com html; so roda uma vez

    return (
      <div style={AppStyle.divContainer}>
        <div style={AppStyle.divDentro}>
          <h1 style={AppStyle.titulo}> Timer </h1>
          <div style={AppStyle.timer}> {this.state.valor} </div>
          <div>
            <Botao clique={this.state.contando ? this.parar : this.iniciar} texto={this.state.contando ? "⏸":"▶️"} tamanho = "grande"/>
            <div>
              <Botao pressionar={this.menos} texto="🔽"/>
              <Botao pressionar={this.mais} texto="🔼"/>
            </div>
            <Botao clique={this.reset} texto="⏹" tamanho = "grande"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
