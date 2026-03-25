import { Router } from "express"
import { 
    listarUsuarios,
    criarUsuario,
    buscarUsuarioPorId,
    deletarUsuarioPorId,
    atualizarUsuarioPorId,
    vincularLivro } from "../controllers/usuarios.controller.js"
    
const router = Router()

router.get("/usuarios", listarUsuarios )
router.post("/usuarios", criarUsuario )
router.get("/usuarios/:id", buscarUsuarioPorId )
router.delete("/usuarios/:id", deletarUsuarioPorId )
router.put("/usuarios/:id", atualizarUsuarioPorId )
router.patch("/usuarios/:idUsuario/livros/:idLivro/vincular", vincularLivro )
export default router