import './css/App.css';
import Botao from './HandleButton.js'

// isso aqui é 'desestruturação' resumindo eu passo cada atributo que eu quero e não ficar usando sempre props. toda hora
function App({personagem, sla, nome}) {
	return (
		<div className="App">
			<header className="App-header">
				<img src={personagem} alt="aaaaa" />
				<img src={sla} alt="aaaaa" />
				<p>
					{nome}
				</p>
				
				<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Botao tipo='button' alerta='teste' conteudo='teste2' link='https://www.youtube.com/?app=desktop&hl=pt' />
				{/* dá pra puxar outras página dentro de uma página e vai encadeando */}
			</header>
		</div>
	);
}

export default App;
