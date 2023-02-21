function Tabela({vetor, modal, selecionar}){
    return(
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Material</th>
                    <th>Largura</th>
                    <th>Comprimento</th>
                    <th>Preço</th>
                    <th>Data</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj, idx) => (
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.material}</td>
                            <td>{obj.largura}</td>
                            <td>{obj.comprimento}</td>
                            <td>{obj.preco}</td>
                            <td>{obj.data}</td>
                            <td><button onClick={() => selecionar(idx)}>Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela;