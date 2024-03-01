import logo from '../logo.svg';
import './css/App.css';

// faz o import do coiso default do component
import Teste from './Teste.js';

// quando tem {} o import e de uma função sem ser a default
import {Texto} from './Teste.js';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* dá pra puxar outras página dentro de uma página e vai encadeando */}
				<Teste />
				<img src={logo} className="App-logo" alt="logo" />
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
				<Texto />
			</header>
		</div>
	);
}

export default App;
