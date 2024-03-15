import './css/App.css';
import Button from './SiteButton'

function App() {
	return (
		<div className="App">
			<header className="App-header ">
				<div className="dropdown">
					<button className="dropbtn">Ver botões</button>
					<div className="dropdown-content">
						<Button tipo="button" alerta="indo pra" site="Amazon" link="https://www.amazon.com.br/"/>
						<Button tipo="button" alerta="indo pro" site="Youtube" link="https://www.youtube.com/"/>
						<Button tipo="button" alerta="indo pra" site="Wikipedia" link="https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal"/>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
