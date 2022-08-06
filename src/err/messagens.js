
function usuarioNaoEncontrado () {
  return 'Usuário não encontrado no github. Verifique se você digitou o nome corretamente.'
}

function campoVazio () {
  return 'informe um nome de usuário válido do github'
}

function limiteRequisicao () {
  return 'o limite de requisição para essa api foi atingido , aguarde e tente novamente mais tarde'
}

export default { usuarioNaoEncontrado, campoVazio, limiteRequisicao }
