import { useEffect, useState } from "react"

const tarefas = [
    { id: '1', title: 'minha primeira tarefa' },
    { id: '2', title: 'minha segunda tarefa' },
    { id: '3', title: 'minha terceira tarefa' },
    { id: '4', title: 'minha quarta tarefa' },
]

export default function DadosFetch() {

    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        async function buscarDados() {
            const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
            const resultadoFinal = await resultado.json()
            return resultadoFinal
        }

        buscarDados().then(res => setTarefas(res))

    }, [])

    return (
        <div>
            <h1>08. Dados com Fetch</h1>
            <ol>
                {tarefas.map((tarefa) => {
                    return (
                        <div>
                            <li key={tarefa.id}>{tarefa.title}</li>
                            {tarefa.completed ? <span>Tarefa Concluida</span> : null}
                        </div>
                    )
                })}
            </ol>
        </div>
    )
}