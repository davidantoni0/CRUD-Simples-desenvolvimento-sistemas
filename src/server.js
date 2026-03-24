import express from 'express'
import rotasUsuario from "./routes/usuarios.routes.js"
import rotasLivro from "./routes/livros.routes.js"

const PORT = 3000
const api = express()

api.use( express.json() )
api.use( rotasUsuario )
api.use( rotasLivro )
api.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`)
})
