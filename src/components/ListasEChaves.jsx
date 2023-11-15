const listinha = [
    { id: '1', value: 'Frutas' },
    { id: '2', value: 'Legumes' },
    { id: '3', value: 'Verduras' },
]

export default function ListasEChaves() {
    return (
        <div>
            <h1>06. Listas no React</h1>
            <MinhaLista />
            <Listinha1 />
        </div>
    )
}

function MinhaLista() {

    const minhaLista = [
        <h4 key="1">Item 1</h4>,
        <h4 key="2">Item 2</h4>,
        <h4 key="3">Item 3</h4>,
        <h4 key="4">Item 4</h4>,
        <h4 key="5">Item 5</h4>
        // A key é um atributo especial que precisa ser passado para cada elemento de uma lista
    ]
    return minhaLista
}

function Listinha1() {
    return listinha.map((item) => {
        return (
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })
}