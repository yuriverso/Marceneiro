function ModalContent({hide, entrando, digitando, alterar, remover}){
    return (
        <div id="modal">
            <h1>MODAL</h1>
            <input type="text" placeholder="Nome" name="nome" value={entrando.nome} onChange={digitando}></input>
            <input type="text" placeholder="Material" name="material" value={entrando.material} onChange={digitando}></input>
            <input type="text" placeholder="Largura" name="largura" value={entrando.largura} onChange={digitando}></input>
            <input type="text" placeholder="Comprimento" name="comprimento" value={entrando.comprimento} onChange={digitando}></input>
            <input type="text" placeholder="Preço" name="preco" value={entrando.preco} onChange={digitando}></input>
            <br/>
            <button onClick={alterar}>Alterar</button>
            <button onClick={remover}>Remover</button>
            <button onClick={hide}>Cancelar</button>
        </div>
    )
}

export default ModalContent;