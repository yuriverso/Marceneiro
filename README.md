pt-br
<p align='center'>
  <img src="https://user-images.githubusercontent.com/96660042/221160287-3b69f027-bb04-4bed-9507-831d4e004eda.png" alt="logo">
</p>
<p align='center'>Catálogo de móveis CRUD com Spring Boot e React</p>

## Sobre
O projeto em questão é um sistema web criado para uma loja fictícia de móveis. Nele, o usuário poderá utilizar das funções CRUD (consultar, cadastrar, alterar e remover) para gerenciar os registros dos produtos catalogados.

### Cadastrando novo produto
<img src="https://user-images.githubusercontent.com/96660042/221160167-9c0cf838-fa81-4467-b8d5-523794453d03.png" alt="logo" width=700>

### Modificando cadastro
<img src="https://user-images.githubusercontent.com/96660042/221160225-05c8a079-c38b-4076-827a-27d1983d3004.png" alt="logo" width=700>

## Requisitos
- Node.js instalado
- JDK instalado

## Como inicializar
  Primeiramente é necessário criar uma base de dados que armazenará os registros. O projeto utiliza como padrão um banco de dados MySQL e uma base de dados chamada "marceneiro". É possível modificar tais informações no arquivo [application.properties](https://github.com/yuriverso/Marceneiro/blob/main/Marceneiro/src/main/resources/application.properties), assim como o usuário e a senha de acesso.

  Tendo configurado a base de dados, é hora de inicializar a aplicação Spring. Abrir o projeto [Marceneiro](https://github.com/yuriverso/Marceneiro/tree/main/Marceneiro) e rodar a classe [MarceneiroApplication.java](https://github.com/yuriverso/Marceneiro/blob/main/Marceneiro/src/main/java/marceneiro/Marceneiro/MarceneiroApplication.java). Esta criará um servidor local para a API no endereço "http://localhost:8080/".

O próximo passo é inicializar a aplicação React. Para tal, acessar o diretório [marceneirofront](https://github.com/yuriverso/Marceneiro/tree/main/marceneirofront) no prompt de comando e inserir o comando "npm start". Será criada uma rota para a aplicação web no endereço "http://localhost:3000/", a qual estará pronta para uso.

