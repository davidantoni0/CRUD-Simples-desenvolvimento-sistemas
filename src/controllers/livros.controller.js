import { livros } from "../data/livros.js"

export function listarLivros(req, res) {
    if(livros.length === 0){
            return res.status(200).json({ mensagem: "A lista está vazia."})
        }
    res.status(200).json(livros)
}

export function criarLivro(req, res) {

    const { titulo } = req.body

    if (!titulo) {
        return res.status(400).json({ error: "O campo 'titulo' é obrigatório." })
    }

    const novoId = livros.length > 0
    ? livros[livros.length - 1].id + 1
    : 1

    const novoLivro = {
        id: novoId,
        titulo,
        usuarioId: null
    }
    livros.push(novoLivro)
    res.status(201).json(novoLivro)

}

export function buscarLivroPorId(req, res) {
    const { id } = req.params
    const livroEncontrado = livros.find(livro => livro.id === parseInt(id))
    if (!livroEncontrado) {
        return res.status(404).json({ error: "Livro não encontrado." })
    }
    res.status(200).json(livroEncontrado)
}

export function deletarLivroPorId(req, res) {
    const { id } = req.params
    const livroIndex = livros.findIndex(livro => livro.id === parseInt(id))
    if (livroIndex === -1) {
        return res.status(404).json({ error: "Livro não encontrado." })
    }
    livros.splice(livroIndex, 1)
    res.status(200).json({ message: "Livro deletado com sucesso." })
}

export function atualizarLivroPorId(req, res) {
    const { id } = req.params
    const { titulo } = req.body
    const livroEncontrado = livros.find(livro => livro.id === parseInt(id))
    
    if (!livroEncontrado) {
        return res.status(404).json({ error: "Livro não encontrado." })
    }
    
    livroEncontrado.titulo = titulo

    res.status(200).json(livroEncontrado)
}

export function liberarLivro(req, res) {
  const { idLivro } = req.params;
  const livro = livros.find(l => l.id == idLivro);

  if (!livro) return res.status(404).json({error: "Livro não encontrado"});
  if (!livro.usuarioId) return res.status(400).send("Livro não está com nenhum usuário");

  livro.usuarioId = null;
  res.status(200).json(livro);
}