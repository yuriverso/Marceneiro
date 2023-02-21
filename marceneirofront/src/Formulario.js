function Formulario({digitando, entrando, mensagem, cor, cadastrar}){
    return (
        <form>
            <input type="text" placeholder="Nome" name="nome" onChange={digitando} value={entrando.nome}></input>
            <input type="text" placeholder="Material" name="material" onChange={digitando} value={entrando.material}></input>
            <input type="text" placeholder="Largura" name="largura" onChange={digitando} value={entrando.largura}></input>
            <input type="text" placeholder="Comprimento" name="comprimento" onChange={digitando} value={entrando.comprimento}></input>
            <input type="text" placeholder="Preço" name="preco" onChange={digitando} value={entrando.preco}></input>

            <input type="button" value="Cadastrar" onClick={cadastrar}></input>
            <h4 style={cor}>{mensagem}</h4>
        </form>
    )
}

export default Formulario;