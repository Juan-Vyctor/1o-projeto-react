import './css/Teste.css';

// função que dá pra chamar por fora
export function Texto() {
	return (
		<div>
			<h1>Isaura eh bonita</h1>
		</div>
	)
}

// a principal que vai voltar se chamar seco
function Teste() {
	return (
		<div className="Teste">
			<h1>aaaaaaa</h1>
			<h1>Isaura eh feia</h1>
		</div>
	);
}

export default Teste;