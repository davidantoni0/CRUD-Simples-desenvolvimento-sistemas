import { Router } from "express"
import { 
    listarLivros,
    criarLivro,
    buscarLivroPorId,
    deletarLivroPorId,
    atualizarLivroPorId,
    liberarLivro} from "../controllers/livros.controller.js"
const router = Router()

router.get("/livros", listarLivros )
router.post("/livros", criarLivro )
router.get("/livros/:id", buscarLivroPorId )
router.delete("/livros/:id", deletarLivroPorId )
router.put("/livros/:id", atualizarLivroPorId )
router.patch("/livros/:idLivro/liberar", liberarLivro )

export default router