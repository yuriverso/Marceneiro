function Tabela({vetor, modal, selecionar}){
    return(
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>nome</th>
                    <th>material</th>
                    <th>largura(cm)</th>
                    <th>comprimento(cm)</th>
                    <th>preço(R$)</th>
                    <th>data</th>
                    <th>selecionar</th>
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
                            <td><button onClick={() => selecionar(idx)} className='btn btn-selecionar'>Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela;