import connection from '../database/connection'
import helloWorld from '../utils/someUtil2'
import pessoaService from '../services/pessoa'

export default {
  async index(request, response) {
    const { id } = request.params

    if (id) {
      const pessoa = await pessoaService.getUmaPessoa(id)
      return response.json(pessoa)
    } else {
      const pessoas = await pessoaService.getTodasPessoas()

      console.log(helloWorld())
      return response.json(pessoas)
    }
  },

  async create(request, response) {
    const { nome } = request.body

    const [id] = await connection('pessoa')
      .insert({
        nome,
      })
      .returning('id')

    return response.json({ id })
  },

  async update(request, response) {
    const { id } = request.params
    const { nome, updated_at } = request.body

    await connection('pessoa').where({ id }).update({ nome, updated_at })

    return response.json({ id })
  },

  async delete(request, response) {
    const { id } = request.params

    await connection('pessoa').where('id', id).delete()

    return response.status(204).send() //status code no content
  },
}
