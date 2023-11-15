import { useState } from "react"

export default function MeuContador() {

    const [contador, setContador] = useState(0)

    function aumentarContador() {
        setContador(contador + 1)
        // console.log("renderizou")
    }

    function diminuirContador() {
        setContador(contador - 1)
        // console.log("renderizou")
    }

    if(contador > 15){

        return(

        <div>
            <h2>contador maior que 15</h2>
            <button onClick={aumentarContador}>aumentar</button>   
            <button onClick={diminuirContador}>diminuir</button>  
        </div>
        )
    }

    return(
        <div>
            <h2>Meu Contador: {contador}</h2>
            { contador > 9 ? <h3>Valor muito grande!</h3> : null}
            { contador < 5 ? <h3>Valor menor que 5!</h3> : null}
            { contador == 8 ? <h3>Valor igual a 8!</h3> : null}
            { contador == 15 ? <button>Clique aqui!</button> : null}
            <button onClick={aumentarContador}>aumentar</button>   
            <button onClick={diminuirContador}>diminuir</button> 
        </div>
    )
}