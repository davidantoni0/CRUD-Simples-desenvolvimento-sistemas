# 1- Conceitos novos

## 1.1- Export
Sempre que tiver um export antes da palavra function ou da palavra const e let é porque você está preparando aquela variável ou função para ser exportada e usada em outro arquivo.
Se o export aparecer sozinho, quando for usar no outro arquivo o que está sendo exportado, deverá ser usado com o mesmo nome. Se tiver o default depois do export é porque você pode apelidar o que tá sendo importando (igual quando apelidamos o express quando importamos ele)
## 1.2- Import
Usamos para puxar algo de outro arquivo para o arquivo atual onde esse import está sendo usado. Igual fazemos com o express que puxamos ele da biblioteca e trazemos pro nosso arquivo.
Conseguimos fazer a mesma coisa para variáveis e funções que nós criamos e colocamos export na frente delas na criação que vai estar em outro arquivo.
## 1.3- Router
É uma outra função dentro da biblioteca express que nos permite montar rotas e passar essas rotas de vez para ser usadas em outro arquivo. Serve para organizar rotas em arquivos separados.
Como ela funciona: 
	Precisamos importar a função Router da biblioteca com a linha
		import { Router } from "express"
	Precisamos inicializar esse Router com a linha
		const router = Router()
	Criar as rotas que irão existir usando a variável router criada anteriormente
		router.get(“/pessoas”, ….
		router.get(“/pessoas/:id”, ….
## 1.4- Pasta Controllers
É a pasta onde vai ficar as funções que cada rota precisa executar. Onde fica toda a lógica da nossa API.
Cada arquivo aqui dentro é específico para um grupo de rotas. Por exemplo, se tivéssemos um banco de dados com 2 tabelas, pessoas e endereços, teríamos as rotas de listar e cadastrar pessoas (/pessoas) e teríamos as rotas de listar e cadastrar de enderecos (/enderecos), portanto neste caso teríamos 2 arquivos, um pessoas.controller.js e um enderecos.controller.js.
## 1.5- Pasta Routes
É a pasta onde iremos criar cada tipo de rota de um grupo de rotas específico. E lembrem que na criação da rota precisamos dizer qual função vai ser executada depois da rota? Aqui iremos apenas puxar a função de um arquivo da pasta anterior (controllers) e chamar a função aqui. Não terá código de lógica dentro dos arquivos aqui.
Cada arquivo aqui dentro é específico para um grupo de rotas. Por exemplo, se tivéssemos um banco de dados com 2 tabelas, pessoas e endereços, teríamos as rotas de listar e cadastrar pessoas (/pessoas) e teríamos as rotas de listar e cadastrar de enderecos (/enderecos), portanto neste caso teríamos 2 arquivos, um pessoas.routes.js e um enderecos.routes.js.

## 1.6- Pasta Data
É um lugar de arquivos de dados. Arquivos que simulam os bancos de dados. Nossas famosas listas.


# 2- Passo a Passo da Construção
Criar a pasta do novo projeto no computador
Abrir essa pasta no VSCode
Criar apenas o arquivo de configuração de projeto javascript pelo terminal (olhar o material do classroom de início de projeto)
npm init -y
Configurar o arquivo de configuração (instalar as bibliotecas)
Mudar o type para module
npm install express @types/express
Criar uma pasta dentro do projeto chamado “src” (dentro desta pasta vai estar todos os arquivos que não são de configuração)
Dentro de src criar as seguintes pastas
routes
(vai estar todas as rotas de um grupo e cada grupo em seu próprio arquivo)
controllers
(onde vai estar todas as funções de cada rota, toda a lógica)
data
(cada arquivo é a simulação de uma tabela do banco de dados. No momento usamos uma lista)
Crie o arquivo principal da API dentro da pasta src
Dentro do arquivo principal configure o seguinte:
(seguir o passo 10 do material “Iniciando Projeto” de dentro do classroom)
importe a biblioteca express
import express from “express”
cria uma variável que recebe a inicialização do express
const api = express()
diga a api que ela pode usar o reconhecimento do json
api.use( express.json() )
faça a api ficar escutando por novas requisições
api.listen …
Dentro da pasta data crie o arquivo usuarios.js

export let usuarios = [
	{id: 1, usuario: "admin", ativo: true},
	{id: 2, usuario: "carlos", ativo: true}
]

// export usuarios

Dentro da pasta controller crie o arquivo usuarios.controller.js

import { usuarios } from "../data/usuarios.js"

export function listarUsuarios(req, res) {
	res.json(usuarios)
}

Dentro da pasta routes crie o arquivo usuarios.routes.js

import { Router } from "express"
import { listarUsuarios } from "../controllers/usuarios.controller.js"

const router = Router()

router.get("/usuarios", listarUsuarios )

export default router

Modifique o arquivo principal para usar as rotas criadas no arquivo anterior

import express from “express”
import rotasUsuario from "./routes/usuarios.routes.js"

const api = express()

api.use( express.json() )
api.use( rotasUsuario )

api.listen(3000, () => {
	console.log("Servidor rodando em http://localhost:3000")
})


Rode o projeto
node src/server.js
Crie uma pasta de testes dentro da pasta src
Crie o arquivo usuarios.teste.http
(lembre de verificar se a extensão do vscode REST Client está instalada)

GET http://localhost:3000/usuarios

# 3- Atividades
Criar a rota de criar usuário
Dentro da pasta controller e do arquivo referente aos usuários adicionar a função de criar um usuário. Passos da função:
recuperar o body da requisição
verificar se os dados realmente existem
Se sim adicionar um novo elemento na lista
(lembrando que para ter acesso essa lista de usuários precisa importar ela para cá que vem lá da pasta de data)
Dentro da pasta routes e do arquivo referente aos usuários adicionar a rota nova para criar usuário
criar o nome da rota
chamar a função que vem do outro arquivo
(lembre de importar a nova função também)
No arquivo principal não precisa mudar pois ele já está usando o arquivo de rotas de usuários que já havíamos passado
Criar o teste no arquivo usuarios.teste.http para testar a rota POST de criação de usuários
Criar uma rota para buscar usuários por ID
Criar o teste para essa rota de buscar usuários por id
Criar uma rota para deletar um usuário por ID
Criar o teste para essa rota de deletar usuários por id
Criar uma rota para atualizar um usuário por ID
Criar o teste para essa rota de atualizar um usuário

Criar um CRUD agora para livros representando uma banco de dados livraria que tem usuários e livros e o livro pode estar com um usuário
Criar uma lista que simula a tabela de livros. Os dados são id, titulo e usuarioId que por enquanto vai receber vazio (null)
Criar a rota de listagem de livros
Criar a rota de criação de livros
Criar a rota de atualizar um livro
Criar a rota de deletar um livro

## 4- Desafio extra
Criar uma rota de usuário que vai servir para vincular um usuário a um determinado livro.
(Seria essa rota que um sistema chamaria quando alguém quisesse pegar um livro)


Criar uma rota de livro que vai servir para liberar o livro de alguém.
(Seria essa rota que um sistema chamaria quando alguém quisesse pegar um livro)