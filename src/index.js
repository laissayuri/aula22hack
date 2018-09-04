import React from 'react';
//mesma coisa que const React = require("react");

import ReactDOM from 'react-dom';
// unico responsável por criar HTML.

import './index.css';

import App from './App';
//importa a classe App do app.js

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//cria a pagina
//document.getElementById('root') mesma coisa que document.querySelector("#root")

registerServiceWorker();
