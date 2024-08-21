import { useState } from "react";

export default function Hook() {
    function cadastrarUsuario(e) {
        // o preventDefault() faz que ignore que faz normalmente
        e.preventDefault();
        alert(`o nome passado foi ${name}`)
    }

    // isso aqui é o Hook, o useState() é uma memória pro front e vai ficar salva mesmo sem ir pro back
    const [name,setName] = useState();

    return (
        <div>
            {/* to definindo que invés de usar a função normal de submit, usa a cadastrarUsuario() */}
            <form onSubmit={cadastrarUsuario}>
                <label htmlFor="name">
                    <input
                    id="name"
                    name="name"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    // onChange faz com que quando qualquer coisa aconteça já altera na hora
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}