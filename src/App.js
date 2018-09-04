import React from 'react';
import AppStyle from "./appStyle";
// guarda a imagem na variavel logo
// tudo que tem source tem que importar no react

class App extends React.Component { //App instanciado pelo ReactDOM no index.js
  render() { //é um metodo que retorna o que deve ser jogado na pagina com html
    return (
      <div style={AppStyle.divContainer}>
        <div style={AppStyle.divDentro}>
          <h1 style={AppStyle.titulo}> Timer </h1>
          <div style={AppStyle.timer}> 00:00 </div>
          <div>
            <button style={AppStyle.botoesMaiores}> Start/Stop </button>
            <div>
              <button style={AppStyle.botoesMenores}> + </button>
              <button style={AppStyle.botoesMenores}> - </button>
            </div>
            <button style={AppStyle.botoesMaiores}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
