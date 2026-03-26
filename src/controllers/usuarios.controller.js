import { livros } from "../data/livros.js"
import { usuarios } from "../data/usuarios.js"


export function listarUsuarios(req, res) {
	if(usuarios.length === 0){
		return res.status(200).json({ mensagem: "A lista está vazia."})
	}
	res.status(200).json(usuarios)
}

export function criarUsuario(req, res) {

	const { usuario } = req.body

	if (!usuario) {
		return res.status(400).json({ error: "O campo 'usuario' é obrigatório." })
	}

	const novoId = usuarios.length > 0
    ? usuarios[usuarios.length - 1].id + 1
    : 1

	const novoUsuario = {
		id: novoId,
		usuario,
		ativo: true
	}
	usuarios.push(novoUsuario)
	res.status(201).json(novoUsuario)

}

export function buscarUsuarioPorId(req, res) {
	const { id } = req.params
	const usuarioEncontrado = usuarios.find(usuario => usuario.id === parseInt(id))
	if (!usuarioEncontrado) {
		return res.status(404).json({ error: "Usuário não encontrado." })
	}
	res.status(200).json(usuarioEncontrado)
}

export function deletarUsuarioPorId(req, res) {
	const { id } = req.params
	const usuarioIndex = usuarios.findIndex(usuario => usuario.id === parseInt(id))
	if (usuarioIndex === -1) {
		return res.status(404).json({ error: "Usuário não encontrado." })
	}
	usuarios.splice(usuarioIndex, 1)
	res.status(200).json({ message: "Usuário deletado com sucesso." })
}

export function atualizarUsuarioPorId(req, res) {
	const { id } = req.params
	const { usuario, ativo } = req.body
	const usuarioEncontrado = usuarios.find(usuario => usuario.id === parseInt(id))
	if (!usuarioEncontrado) {
		return res.status(404).json({ error: "Usuário não encontrado." })
	}

	usuarioEncontrado.usuario = usuario
	
	if (ativo !== undefined) {
		usuarioEncontrado.ativo = ativo
	}
	res.status(200).json(usuarioEncontrado)
}

export function vincularLivro(req, res) {
  const { idUsuario, idLivro } = req.params;
  const usuario = usuarios.find(usuarios => usuarios.id == idUsuario);
  const livro = livros.find(livros => livros.id == idLivro);

  if (!usuario) return res.send("Usuário não encontrado");
  if (!livro) return res.send("Livro não encontrado");
  if (livro.usuarioId) return res.send("Livro já está com outro usuário");

  livro.usuarioId = usuario.id;
  res.status(404).json(livro);
}