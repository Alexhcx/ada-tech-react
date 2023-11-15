import { useState } from "react"
import styles from '../css/button.module.css'

export default function MeuContadorCSS() {

    const [contador, setContador] = useState(0)

    function aumentarContador() {
        setContador(contador + 1)
    }

    return(
        <div className="container">
            <h1>Estilização com classes e CSS modules</h1>
            <h2>Meu Contador: {contador}</h2>
            <button className={styles.myButton} onClick={aumentarContador}>aumentar</button>   
        </div>
    )
}