import { livros } from "../data/livros.js"
import { usuarios } from "../data/usuarios.js"

export function listarUsuarios(req, res) {
	res.json(usuarios)
}

export function criarUsuario(req, res) {

	const { usuario } = req.body

	if (!usuario) {
		return res.json({ error: "O campo 'usuario' é obrigatório." })
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
	res.json(novoUsuario)

}

export function BuscarUsuarioPorId(req, res) {
	const { id } = req.params
	const usuarioEncontrado = usuarios.find(usuario => usuario.id === parseInt(id))
	if (!usuarioEncontrado) {
		return res.json({ error: "Usuário não encontrado." })
	}
	res.json(usuarioEncontrado)
}

export function deletarUsuarioPorId(req, res) {
	const { id } = req.params
	const usuarioIndex = usuarios.findIndex(usuario => usuario.id === parseInt(id))
	if (usuarioIndex === -1) {
		return res.json({ error: "Usuário não encontrado." })
	}
	usuarios.splice(usuarioIndex, 1)
	res.json({ message: "Usuário deletado com sucesso." })
}

export function atualizarUsuarioPorId(req, res) {
	const { id } = req.params
	const { usuario, ativo } = req.body
	const usuarioEncontrado = usuarios.find(usuario => usuario.id === parseInt(id))
	if (!usuarioEncontrado) {
		return res.json({ error: "Usuário não encontrado." })
	}

	usuarioEncontrado.usuario = usuario
	
	if (ativo !== undefined) {
		usuarioEncontrado.ativo = ativo
	}
	res.json(usuarioEncontrado)
}

export function vincularLivro(req, res) {
  const { idUsuario, idLivro } = req.params;
  const usuario = usuarios.find(usuarios => usuarios.id == idUsuario);
  const livro = livros.find(livros => livros.id == idLivro);

  if (!usuario) return res.send("Usuário não encontrado");
  if (!livro) return res.send("Livro não encontrado");
  if (livro.usuarioId) return res.send("Livro já está com outro usuário");

  livro.usuarioId = usuario.id;
  res.json(livro);
}