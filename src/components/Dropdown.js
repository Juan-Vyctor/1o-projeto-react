import './css/Dropdown.css';

function Ordem(lista) {
    let retorno = [];

    for (let i = 0; i<lista.length; i++) {
        retorno.push(<a>{lista[i]}</a>)
    }
    

    return(
        <>
            {retorno}
        </>
    );
}

function Estrutura(titulo, lista) {
    return(
        <li className="dropdown">
            <a href="#">
                <div className="dropbtn">
                    {titulo}
                    <div className='dropdown-content'>{Ordem(lista)}</div>
                </div>
            </a>
        </li>
    )
}

export default function Dropdown (props) {
    return (
        <div>
            {props.lista}
            {Ordem(props.lista)}
            <ul>
                <li className="dropdown">
                    <a href="#">
                        <div className="dropbtn">
                            {props.titulo}
                            <div className='dropdown-content'>{Ordem(props.lista)}</div>
                        </div>
                    </a>
                </li>
               
            </ul>
        </div>
    )
}