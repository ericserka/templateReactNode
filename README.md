# TEMPLATE REACT JS, NODE JS, POSTGRESQL, KNEX, AXIOS, MATERIAL-UI

## Pré-requisitos

### Ter o node instalado
  - Instalando a versão LTS (junto com npm) usando nvm
    - Copiar o comando curl da página do github (https://github.com/nvm-sh/nvm) e executá-lo
    - ```source ~/.bashrc```
    - ```nvm install --lts```
    - Para checar se deu certo: ```node -v``` e ```npm -v```

### Ter o PostgreSQL instalado
  - ```sudo apt update```
  - ```sudo apt install postgresql postgresql-contrib```
  - Observação: O ```-contrib``` não é obrigatório, ele apenas possui alguns serviços e funcionalidade adicionais.

### Ter o pgAdmin instalado (opcional)
  - O pgAdmin é um software gráfico para administração do SGBD PostgreSQL. SGBD é uma abreviação para Sistema de Gerenciamento de Banco de Dados, do inglês Data Base Management System - DBMS. A partir dele fica muito mais fácil criar servidores, banco de dados, tabelas, schemas, executar queries, etc.
  1. Atualizar o sistema
    - ```sudo apt-get update```
  2. Instalar pacotes necessários
    - ```sudo apt-get install build-essential libssl-dev libffi-dev libgmp3-dev```
    - ```sudo apt-get install python3-virtualenv libpq-dev python3-dev```
  3. Criar um virtual environment num diretório desejado
    - ```virtualenv pgAdmin4```
  4. Ativar o virtual environment
    - ```cd pgAdmin4```
    - ```source bin/activate```
  5. Baixar o pgAdmin4
    - Pesquisar a versão mais recente no link: https://ftp.postgresql.org/pub/pgadmin/pgadmin4/
    - ```wget https://ftp.postgresql.org/pub/pgadmin/pgadmin4/<versao_mais_recente>/pip/<versao_mais_recente>.whl```
  6. Instalar o pgAdmin4
    - ```pip install <versao_mais_recente>.whl```
  7. Configurar e executar o pgAdmin4
    - Checar a versão mais recente do python entrando na pasta lib do diretório pgAdmin4: ```cd lib```
    - Descoberta a versão mais recente do python, voltar para o diretório raiz (/pgAdmin4): ```cd ..```
    - Criar o arquivo config_local.py usando nano: ```nano lib/<versao_mais_recente_python>/site-packages/pgadmin4/config_local.py```
    - Colar o seguinte conteúdo no arquivo config_local.py:
      ```
      import os
      DATA_DIR = os.path.realpath(os.path.expanduser(u'~/.pgadmin/'))
      LOG_FILE = os.path.join(DATA_DIR, 'pgadmin4.log')
      SQLITE_PATH = os.path.join(DATA_DIR, 'pgadmin4.db')
      SESSION_DB_PATH = os.path.join(DATA_DIR, 'sessions')
      STORAGE_DIR = os.path.join(DATA_DIR, 'storage')
      SERVER_MODE = False
      ```
    - Executando o pgAdmin4: ```python lib/<versao_mais_recente_python>/site-packages/pgadmin4/pgAdmin4.py```
    - Observação: se algum "module error" aparecer de flask-htmlmin, instalar o módulo e depois tentar executar novamente:
      ```
      pip install flask-htmlmin
      python lib/<versao_mais_recente_python>/site-packages/pgadmin4/pgAdmin4.py
      ```
  8. Corrigindo fatal error password authentication failed for user "postgres" na hora de criar o servidor pelo pgAdmin4
    - Localizar o arquivo ```pg_hba.conf```. Geralmente fica em ```/etc/postgresql/12/main```. Caso não ache, checar link: https://askubuntu.com/questions/256534/how-do-i-find-the-path-to-pg-hba-conf-from-the-shell
    - Abrir ```pg_hba.conf``` com sudo: ```sudo nano pg_hba.conf```
    - Na linha ```host all postgres 127.0.0.1/32```, trocar o METHOD de md5 para trust e salvar o arquivo.
    - Reiniciar o serviço PostgreSQL: ```sudo service postgresql restart```
    - Alterar a senha do usuário postgres para alguma desejada: ```sudo -u postgres psql -c "ALTER USER postgres PASSWORD '<new-password>';"```
    - Abra o pg_hba.conf novamente e volte o METHOD para md5 (tirando o trust).
    - Reiniciar o serviço PostgreSQL novamente.
    - Pronto, agora o servidor pode ser criado sem problemas.

## Algumas Observações
  - Após clonar esse repositório, rode ```git remote set-url origin git@github.com:username/repositoryname.git``` no repositório do projeto ao invés do clássico ```remote add origin```.
  - Lembrar de apagar o ```.git``` da pasta frontend para não ter problema na hora de subir tudo pro github.
  - ```npm run format``` formata os arquivos do diretório de acordo com as regras presentes no arquivo ```.prettierrc.json```. Tem que fazer no backend e no frontend.
  - Comando para atualizar todas as dependências presentes no package.json: ```npx npm-check-updates -u```
### Backend
  - Para fazer a configuração do knex usando postgres, foram usadas variáveis de ambiente. Copie o arquivo ```.env.example``` num arquivo ```.env``` e preencha os dados solicitados.
  - Babel é um transpilador (transpiler), que transforma código escrito em ES6 em algo que o Node.js consiga entender (CommonJS).
  - Os comandos ```npx knex``` devem ser executados no diretório do ```knexfile.js```.
  - ```npx knex migrate:make <NOME_DA_MIGRATION>``` cria uma migration (entidade).
  - Após a configuração de todas as migrations, rodar ```npx knex migrate:latest```.
  - ```npx knex``` mostra todos os comandos possíveis de se fazer usando o knex.
  - Os mais importantes são: ```npx knex migrate:latest```, ```npx knex migrate:rollback``` e ```npx knex migrate:status```.
  - ```npx knex migrate:rollback``` desfaz a última migration executada (através do comando ```npx knex migrate:make <NOME_DA_MIGRATION>```).
  - ```npx knex migrate:status``` lista as migrations executadas e fala se tem alguma pendente.
  - Para resetar o banco de dados e atualizar as migrations:
    - Atualizar as migrations existentes fazendo as alterações necessárias
    - Deletar/dropar o banco de dados a partir do pgAdmin4
    - ```npx knex migrate:latest```
    - Feito isso, as migrations atualizadas já estarão no banco de dados.
  - No caso de apenas adicionar uma migration nova, não é necessário dropar o banco de dados. Basta apenas fazer o básico:
    - ```npx knex migrate:make <NOME_DA_MIGRATION>```
    - ```npx knex migrate:latest```
  - No ```index.js``` da pasta src do backend, quando for publicar o projeto, substituir o ```app.use(cors())``` por ```app.use(cors({origin: 'https://enderecoondeositeestahospedado.com.br'}))```. Essa URL definida no cors seria a URL que pode acessar a aplicação.
  
### Frontend
  - site que gera favicon a partir de uma imagem: https://realfavicongenerator.net/ (apenas o favicon.ico é relevante, resto é inútil).
  - Utilizar breakpoints do Material-UI para responsividade
  - Evitando warnings na compilação:
    - Lembrar do atributo ```alt``` nas tags ```img```.
    - Lembrar do atributo ```ref="noreferrer"``` quando usar ```target="\_blank"``` em um link.
    - Se o ```useEffect``` tiver warning por conta do array de dependencias, colar o seguinte comentário: ```// eslint-disable-next-line react-hooks/exhaustive-deps```.
    - Tag ```iframe``` precisa do atributo ```title```.
