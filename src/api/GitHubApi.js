import axios from 'axios'

const baseUrl = 'https://api.github.com/users/'

async function PegueUmUsuarioPeloNome (nome) {
  try {
    const resultado = await axios.get(baseUrl + nome)

    return resultado
  } catch (err) {
    console.log(err)
    return { message: 'algo deu errado', erro: err }
  }
}

async function PegueRepositoriosPeloNomeDeUsuario (nome) {
  try {
    const resultado = await axios.get(baseUrl + nome + '/repos')

    return resultado
  } catch (err) {
    console.log(err)
    return { message: 'algo deu errado', erro: err }
  }
}

export default { PegueUmUsuarioPeloNome, PegueRepositoriosPeloNomeDeUsuario }
