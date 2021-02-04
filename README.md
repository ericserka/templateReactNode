# TEMPLATE REACT JS, NODE JS, SQLITE3, KNEX, AXIOS
* Após clonar esse repositório, rode git remote set-url origin git@github.com:<username>/<repositoryname>.git no repositório do projeto ao invés do clássico remote add origin.
* Lembrar de apagar o .git da pasta frontend pra não ter problema na hora de subir tudo pro github.
* Backend
   * npx knex migrate:make <nome da migration> cria uma migration.
   * Uma migration deve ser criada para cada entidade do projeto.
   * Entidade é aquilo que guarda os dados, por exemplo, uma pessoa pode ser uma entidade e dentro da sua tabela teria peso, altura, idade, nome, etc.
   * Carro seria outra entidade pois teria uma tabela diferente: motor, pneu, volante, etc.
   * Após a configuração de todas as migrations, rodar npx knex migrate:latest para criar o arquivo .sqlite de fato.
   * npx knex mostra todos os comandos possíveis de se fazer usando o knex.
   * Os mais importantes são: migrate:latest, migrate:rollback e migrate:status.
   * npx knex migrate:rollback desfaz a última migration executada (através do comando npx knex migrate:make <nome da migration>).
   * npx knex migrate:status lista as migrations executadas e fala se tem alguma pendente.
   * No index.js da pasta src do backend, quando for publicar o projeto, fazer:
      * app.use(cors({origin: 'https://enderecoondeositeestahospedado.com.br'}))
   * Essa URL definida no cors seria a URL que pode acessar a aplicação.
* Frontend
   * nunca usar o mesmo nome para classes CSS em páginas ou components diferentes, vai dar merda.
