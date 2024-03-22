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

export default function Dropdown (props) {
    return (
        <div>
            <ul>
                <li className="dropdown">
                    <a href="">
                        <div className="dropdown-menu">
                            {props.titulo[0]}
                            {Ordem(props.lista)}
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}