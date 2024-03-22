// página principal aqui que roda tudo

// precisa sair importando tudo que for usar
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';
import Nav from './components/Nav.js';
import Dropdown from './components/Dropdown.js';
import reportWebVitals from './reportWebVitals';
import homura from './homura.gif'

const titulo = ['a', 'b', 'c', 'd', 'e'];
const nomes = ['menu 1', 'menu 2', 'menu 3'];

// essa const que faz rodar de verdade tipo root mesmo pa
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	{/* <Gallery /> */}
	<Nav>
		<Dropdown titulo={titulo} lista={nomes}/>
	</Nav>
	<App nome="patrocinado por L'Oreal Paris" personagem={homura} sla='https://64.media.tumblr.com/b2c5e2a38641735f31b4106b0b363139/49040cb68629585b-91/s1280x1920/bca05f8dda44af8b3735eebf5350756d2c5726eb.gifv'/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
