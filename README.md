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


FORMAT: 1A
HOST: http://localhost:3000/api/tools

## Sample da API

VUTTR - Very Usefull Tools to Remember

Aplicação para gerenciar ferramentas importantes para o desenvolvimento em javascript.

## Listar 

### Ferramentas [/tools]

### Listar ferramentas [GET]

+ Request Listar ferramentas

    + Headers
        Accept: 
        Content-Type: application/json

+ Response 200 (application/json)


## Filtrar 

### Ferramentas [http://localhost:3000/api?tag=node]

    + Parameters 
        + tag: (string, required) - tag name

### Filtrar ferramentas com busca por tag [GET]

+ Request Filtrar ferramentas

    + Headers
        Accept: 
        Content-Type: application/json

+ Response 200 (application/json)


## Cadastrar 

### Ferramentas [/tools]

    + Parameters 
        + tool: (json, required) - json object
        + example:
        
        {
            "title": "BossaBox",
            "link": "https://bossabox.com",
            "description": "A BossaBox é a primeira startup na América Latina a se propor a resolver o problema de        desenvolvimento de produtos digitais.",
            "tags":["desenvolvedores", "prolancer", "backend", "dev", "javascript", "remoto"]
        }
        

### Cadastro de uma nova ferramenta [POST]

+ Request Cadastrar ferramenta

    + Headers
        Accept: application/json
        Content-Type: application/json

+ Response 200 (application/json)


## Deletar 

### Ferramentas [/tools/id]

    + Parameters 
        + id: (hash, required) - _id

### Deletar uma ferramenta [DELETE]

+ Request Deletar ferramentas

    + Headers
        Accept: 
        Content-Type: application/json

+ Response 204 (application/json)
    




