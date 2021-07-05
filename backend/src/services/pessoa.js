import connection from '../database/connection'

async function getTodasPessoas() {
  const pessoas = await connection('pessoa')
    .select('*')
    .orderBy('created_at', 'desc')
  return pessoas
}

async function getUmaPessoa(pessoaId) {
  const [pessoa] = await connection('pessoa').select('*').where('id', pessoaId)
  return pessoa
}

export default {
  getTodasPessoas,
  getUmaPessoa,
}
