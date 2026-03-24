import { Router } from "express"
import { listarLivros } from "../controllers/livros.controller.js"
import { criarLivro } from "../controllers/livros.controller.js"
import { BuscarLivroPorId } from "../controllers/livros.controller.js"
import { deletarLivroPorId } from "../controllers/livros.controller.js"
import { atualizarLivroPorId } from "../controllers/livros.controller.js"
import { liberarLivro} from "../controllers/livros.controller.js"
const router = Router()

router.get("/livros", listarLivros )
router.post("/livros", criarLivro )
router.get("/livros/:id", BuscarLivroPorId )
router.delete("/livros/:id", deletarLivroPorId )
router.put("/livros/:id", atualizarLivroPorId )
router.patch("/livros/:idLivro/liberar", liberarLivro )

export default router