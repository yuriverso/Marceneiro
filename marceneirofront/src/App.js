import logo from './logo.svg';
import './App.css';
import { Modal } from 'react-overlays';
import { useEffect, useState } from 'react';
import ModalContent from './ModalContent';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  // Prototype
  var movel = {
    "nome": "",
    "material": "",
    "largura": 0,
    "comprimento": 0,
    "preco": 0
  }

  // Form
  const[mensagem, setMensagem]  = useState("")
  const[cor, setCor] = useState({'color': 'black'})
  const[entrando, setEntrando] = useState(movel)
  const digitando = (e) => {
    setEntrando({...entrando, [e.target.name]:e.target.value})
  }
  function limparFormulario(){
    setEntrando(movel)
  }

  // Table
  const[entradas, setEntradas] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/api")
    .then(response => response.json())
    .then(jason => setEntradas(jason))
  }, [])
  const selecionar = (idx) => {
    setEntrando(entradas[idx])
    setVisible(true)
  }

  // Modal
  const[visible, setVisible] = useState(false)
  const renderBackdrop = (props) => <div className='backdrop' {...props} />

  // Funções CRUD
  const cadastrar = () =>{
    fetch("http://localhost:8080/api", {
      method: 'post',
      body: JSON.stringify(entrando),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(jason => {
      if(jason.message !== undefined){
        setCor({'color': 'red'})
        setMensagem(jason.message)
      }else{
        setEntradas([...entradas, jason])
        setCor({'color': 'green'})
        setMensagem("Cadastrado!")
        limparFormulario()
      }
    })
  }

  const alterar = () => {
    fetch("http://localhost:8080/api/"+ entrando.id, {
      method: 'put',
      body: JSON.stringify(entrando),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(jason => {
      if(jason.message !== undefined){
        setCor({'color': 'red'})
        setMensagem(jason.message)
      }else{
        setCor({'color': 'green'})
        setMensagem("Alterado!")

        let vetorTemp = [...entradas]
        let idx = vetorTemp.findIndex((p) => {return p.id === entrando.id})
        vetorTemp[idx] = entrando
        setEntradas(vetorTemp)
        setVisible(false)
        limparFormulario()
      }
    })
  }

  const remover = () => {
    fetch("http://localhost:8080/api/"+entrando.id, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(function(response){
      if(!response.ok){
        setCor({'color': 'red'})
        return response.json()
      }else{
        setCor({'color': 'green'})
        return response.json()
      }
    })
    .then(jason => {
      setMensagem(jason.message)
      let vetorTemp = [...entradas]
      let idx = vetorTemp.findIndex((p) => {return p.id === entrando.id})
      vetorTemp.splice(idx, 1)
      setEntradas(vetorTemp)
      limparFormulario()
      setVisible(false)
    })
  }


  // App
  return (
    <div>
      <header>
        <h1>Marceneiro</h1>
        <button id="header-button" disabled>Buscar</button>
        <input type="text" placeholder="Busca" id="header-input"/>
      </header>
        <section>
          <div id="images">
              <img src={require("./res/mesa1.jpg")} alt="mesa" width="300"/>
              <img src={require("./res/cama1.jpg")} alt="cama" width="300"/>
              <img src={require("./res/cabinet1.jpg")} alt="cabinet" width="300"/>
              <img src={require("./res/mesa2.jpg")} alt="mesa2" width="300"/>
          </div>
        </section>
      <main>
        <div class="content">
              <h2>novo cadastro</h2>
              <Formulario digitando={digitando} entrando={entrando} cor={cor} mensagem={mensagem} cadastrar={cadastrar}/>
        </div>
        <div class="content">
              <h2>gerenciar móveis cadastrados</h2>
              <Tabela vetor={entradas} selecionar={selecionar}/>
        </div>

        <Modal className='modal' show={visible} renderBackdrop={renderBackdrop}>
          <ModalContent hide={() => setVisible(false)} entrando={entrando} digitando={digitando} alterar={alterar} remover={remover}/>
        </Modal>
      </main>
      <footer>
          <ul>
              <li>contato</li>
              <li>sobre</li>
              <li>ações</li>
              <li>ecologia</li>
          </ul>
      </footer>
    </div>
      
  );
}

export default App;
