import './css/SiteButton.css';

export default function Button(props) {
    return (
        <div>
            <button className="button-6" type={props.tipo}>
                <a rel="noopener noreferrer" target="_blank" href={props.link}>{props.conteudo}</a>
            </button>
        </div>
    )
}