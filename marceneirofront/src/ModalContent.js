function ModalContent({hide, entrando, digitando, alterar, remover}){
    return (
        <div id="modal">
            <h1>gerenciar registro</h1>
            <div className="formated-form">
                <div className="form-headers">
                    <h4>nome:</h4>
                    <h4>material:</h4>
                    <h4>largura:</h4>
                    <h4>comprimento:</h4>
                    <h4>preço:</h4>
                </div>
                <div className="form-inputs">
                    <input type="text" placeholder="Nome" name="nome" value={entrando.nome} onChange={digitando}></input>
                    <input type="text" placeholder="Material" name="material" value={entrando.material} onChange={digitando}></input>
                    <input type="text" placeholder="Largura" name="largura" value={entrando.largura} onChange={digitando}></input>
                    <input type="text" placeholder="Comprimento" name="comprimento" value={entrando.comprimento} onChange={digitando}></input>
                    <input type="text" placeholder="Preço" name="preco" value={entrando.preco} onChange={digitando}></input>
                </div>
            </div>
            <br/>
            <button onClick={alterar} className="btn btn-alterar">Alterar</button>
            <button onClick={remover} className="btn btn-remover">Remover</button>
            <button onClick={hide} className="btn btn-cancelar">Cancelar</button>
        </div>
    )
}

export default ModalContent;