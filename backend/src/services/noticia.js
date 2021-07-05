import connection from '../database/connection'

async function getTodasNoticias() {
  const noticias = await connection('noticia')
    .select('*')
    .orderBy('created_at', 'desc')
  return noticias
}

async function getUmaNoticia(noticiaId) {
  const [noticia] = await connection('noticia')
    .select('*')
    .where('id', noticiaId)
  return noticia
}

export default {
  getTodasNoticias,
  getUmaNoticia,
}
