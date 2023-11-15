import { useEffect, useState } from "react"

const minhaLista = [
    { id: '1', value: 'Frutas' },
    { id: '2', value: 'Legumes' },
    { id: '3', value: 'Verduras' },
]

export default function EfeitosColaterais() {
    const[produtos, setProdutos] = useState(minhaLista)
    const[pesquisa, setPesquisa] = useState('')

    useEffect(
        () => {
            if (pesquisa) {
                const novalista = minhaLista.filter((item) => {
                    return item.value.toLowerCase().includes(pesquisa.toLowerCase())
                })
                    setProdutos(novalista)
                } else {
                    setProdutos(minhaLista)
                }
            }, [pesquisa]
        )

    return (
        <div>
            <h1>07. Efeitos colaterais</h1>
            <input 
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            placeholder="pesquise aqui" type="text" />
            {produtos.map((item) => {
                return (
                    <div key={item.id}>
                        <h4>{item.value}</h4>
                    </div>
                )
              })}
        </div>
    )
}

