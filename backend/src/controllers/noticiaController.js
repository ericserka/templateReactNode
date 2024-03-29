import connection from '../database/connection'
import helloWorld from '../utils/someUtil'
import noticiaService from '../services/noticia'

export default {
  async index(request, response) {
    const { id } = request.params

    if (id) {
      const noticia = await noticiaService.getUmaNoticia(id)
      return response.json(noticia)
    } else {
      const noticias = await noticiaService.getTodasNoticias()

      console.log(helloWorld())
      return response.json(noticias)
    }
  },

  async create(request, response) {
    const { link } = request.body

    const [id] = await connection('noticia')
      .insert({
        link,
      })
      .returning('id')

    return response.json({ id })
  },

  async update(request, response) {
    const { id } = request.params
    const { link, updated_at } = request.body

    await connection('noticia').where({ id }).update({ link, updated_at })

    return response.json({ id })
  },

  async delete(request, response) {
    const { id } = request.params

    await connection('noticia').where('id', id).delete()

    return response.status(204).send() //status code no content
  },
}
