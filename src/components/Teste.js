import './css/Teste.css';

// esse props é um objeto grandão que guarda todos os dado que passa na hora que chama a função
export default function Teste(props) {
	return (
		<div className="Teste">
			{/* aqui usa o props bem pica */}
			<h1>{props.nome}</h1>
			<h1>{props.nomee}</h1>
			<h1>{props.nomeee}</h1>
			<h1>{props.nomeeee}</h1>
		</div>
	);
}