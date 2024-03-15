import './css/SiteButton.css';

export default function Button(props) {
    return (
        <div>
            <button className="button-6" type={props.tipo} onClick={() => alert(props.alerta + " " + props.site)}>
                <a rel="noopener noreferrer" target="_blank" href={props.link}>{props.site}</a>
            </button>
        </div>
    )
}