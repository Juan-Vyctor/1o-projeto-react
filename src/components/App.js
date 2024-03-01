import logo from '../logo.svg';
import './css/App.css';
import Teste from './Teste.js';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Teste />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Teste />
				{/* dá pra puxar outras página dentro de uma página e vai encadeando */}
			</header>
		</div>
	);
}

export default App;