Um crud Full Stack de consulta de clientes. 

Linguagens/tecnologias utilizadas:
- Javascript/Typescript
- Node.js
- React.js
- Mysql
- Express
- TypeORM


Como acessar cada parte do projeto(no terminal):
Acesso ao frontend: cd front-end
Acesso ao backend: cd back-end
Em ambos os casos, o comando "npm install" instala a pasta node_modules.

Para rodar o app:
Comando "npm start" (front ou back)



O banco de dados está hospedado em https://www.heroku.com,
e a API já está configurada com as variáveis de conexão.


Bugs relatados:
- A página não atualiza automaticamente ao adicionar o deletar um item do formulário;
- O form não possui validações visuais.




URLs locais:
React:       "http://localhost:3000"
Node.js API: "http://localhost:8080"

Rotas:
Clientes:
Get: ("/client"
Post: ("/client"
Put: ("/client/:id"
Delete: "/client/:id"

Endereços:
Get: ("/enderecos"
Post: ("/enderecos"
Put: ("/enderecos/:id"
Delete: "/enderecos/:id"

Endereços:
Get: ("/telefones"
Post: ("/telefones"
Put: ("/telefones/:id"
Delete: "/telefones/:id"
