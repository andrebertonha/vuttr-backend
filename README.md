# vuttr-backend
usefull tools repo

### Instruções

+ npm install
    + Executar o comando npm install para instalar as dependências de desenvolvimento.
+ npm run dev
    + Executar o comando npm run dev para definir script personalizado.

Observações: Com a ferramenta insomnia instalada, a compreensão do request e response são mais fáceis.

+ Insomnia
    + Definir método, body e url


HOST: http://localhost:3000/api/tools

## Sample da API

VUTTR - Very Usefull Tools to Remember

Aplicação para gerenciar ferramentas importantes para o desenvolvimento em javascript.


### Listar ferramentas [GET]  [/tools]

+ Request Listar ferramentas
    + Headers
        Accept: 
        Content-Type: application/json

+ Response 200 (application/json)


### Filtrar ferramenta [GET]

<p> url de exemplo: [http://localhost:3000/api?tag=node] </p>

+ Parameters 
    + tag: (string, required) - tag name

+ Request Filtrar ferramentas
    + Headers
        Accept: 
        Content-Type: application/json

+ Response 200 (application/json)

### Cadastrar Ferramenta [POST] [/tools]

+ Parameters 
    + tool: (json, required) - json object
    + example:

    ```javascript
    {
        "title": "Vue",
        "link": "https://vuejs.org/",
        "description": "Progressive JavaScript Framework",
        "tags":["approachable", "versatile", "frontend", "dev", "javascript", "performant"]
    }
    ```

+ Request Cadastrar ferramenta
    + Headers
        Accept: application/json
        Content-Type: application/json

+ Response 200 (application/json)


### Deletar ferramenta [DELETE] [/tools/:id]

+ Parameters 
    + id: (hash, required) - _id

+ Request Deletar ferramenta
+ Response 204 (application/json)
