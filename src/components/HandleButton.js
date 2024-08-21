import Button from './SiteButton.js';

export default function Botao(props) {
    return (
        <div>
            <HandleClick tipo={props.tipo} alerta={props.alerta} conteudo={props.conteudo} link={props.link} />
        </div>
    );
}

function HandleClick(props) {
    return (
        <div>
            <Button onClick={() => alert('a mensagem foi: ' + props.alerta)}
            tipo={props.tipo} conteudo={props.conteudo} link={props.link}/>
        </div>
    );
}