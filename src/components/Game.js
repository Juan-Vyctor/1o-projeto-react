export function getImageUrl(imageId, size = 's') {
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    );
}

export default function Game(props) {
    return (
        <section>
            <h2>{props.nome}</h2>
            <img
                className="avatar"
                src={getImageUrl(props.url)}
                alt={props.nome}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Platform: </b> 
                    {props.plataforma}
                </li>
                <li>
                    <b>Release Year: </b>
                    {props.lancamento}
                </li>
            </ul>
        </section>
    )
}