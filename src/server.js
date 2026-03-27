import express from 'express'
import rotasUsuario from "./routes/usuarios.routes.js"
import rotasLivro from "./routes/livros.routes.js"
import {db} from "./database/db.js"

const PORT = 3000
const api = express()

api.use( express.json() )
api.use( rotasUsuario )
api.use( rotasLivro )

api.get("/usuarios2", async function(req,res){
	const resultado = await db.query("SELECT * from usuarios;")

	res.status(200).json(resultado.rows)
})

api.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`)
})
