import './css/SiteButton.css';

export default function Button(props) {
    return (
        <div>
            <button className="button-6" type="button" onClick={() => alert("Você está sendo redirecionado(a) pr" + props.site)}>
                <a rel="noopener noreferrer" target="_blank" href={props.link}>Clique aqui pra entrar n{props.site}</a>
            </button>
        </div>
    )
}