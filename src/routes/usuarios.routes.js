import { Router } from "express"
import { listarUsuarios } from "../controllers/usuarios.controller.js"
import { criarUsuario } from "../controllers/usuarios.controller.js"
import { buscarUsuarioPorId } from "../controllers/usuarios.controller.js"
import { deletarUsuarioPorId } from "../controllers/usuarios.controller.js"
import { atualizarUsuarioPorId } from "../controllers/usuarios.controller.js"
import { vincularLivro } from "../controllers/usuarios.controller.js"
const router = Router()

router.get("/usuarios", listarUsuarios )
router.post("/usuarios", criarUsuario )
router.get("/usuarios/:id", buscarUsuarioPorId )
router.delete("/usuarios/:id", deletarUsuarioPorId )
router.put("/usuarios/:id", atualizarUsuarioPorId )
router.patch("/usuarios/:idUsuario/livros/:idLivro/vincular", vincularLivro )
export default router