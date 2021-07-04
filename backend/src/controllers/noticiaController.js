import connection from '../database/connection'

export default {
    async index(request, response) {
        const { id } = request.params

        if (id) {
            const [noticia] = await connection('noticia').select('*').where('id_noticia', '=', id)
            return response.json(noticia)
        }
        else {
            const noticia = await connection('noticia').select('*');
            return response.json(noticia);
        }

    },

    async create(request, response) {
        const {
            id_noticia,
            titulo,
            nome_imagem,
            link, } = request.body;

        const [id] = await connection('noticia').insert({
            id_noticia,
            titulo,
            nome_imagem,
            link,
        });

        return response.json({ id });
    },

    async update(request, response) {
        const { id_noticia } = request.params;
        const { link } = request.body;

        const id = await connection('noticia').where({ id_noticia }).update('link', link);

        return response.json({ id });
    },

    async delete(request, response) {
        const { id_noticia } = request.params;

        await connection('noticia').where('id_noticia', id_noticia).delete();

        return response.status(204).send(); //status code no content
    }
};