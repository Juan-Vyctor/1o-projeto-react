function Ordem(lista) {
    let retorno = [];
    for (let i = 0; i<lista.lenght; i++) {
        {retorno.push(<a>{lista[i]}</a>)}
    }

    return(
        <>
            {retorno}
        </>
    )
}

function Estrutura(titulo, lista) {
    return(
        <li className="dropdown">
            <a href="#">
                <div className="dropdown-menu">
                    {titulo}
                    {Ordem(lista)}
                </div>
            </a>
        </li>
    )
}

export default function Dropdown (props) {
    return (
        <div>
            <ul>
                <li className="dropdown">
                    <a href="#">
                        <div className="dropdown-menu">
                            {props.titulo[0]}
                            {Ordem(props.lista)}
                        </div>
                    </a>
                </li>
                {Estrutura(props.titulo[1], props.lista)}
                {Estrutura(props.titulo[2], props.lista)}
                {Estrutura(props.titulo[3], props.lista)}
                {Estrutura(props.titulo[4], props.lista)}
            </ul>
        </div>
    )
}