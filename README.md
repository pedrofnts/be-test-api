
# BE TEST API

Esse é o repositório para o back-end da aplicação Be Test. Foi criado um middleware para listagem de usuários, produtos e cálculo de orçamento, utilizando Node.js (Express)+ TypeScript.

## Documentação da API

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/21642696-1bcbfd72-1b31-4c84-8922-ceffa6d49a2c?action=collection%2Ffork&collection-url=entityId%3D21642696-1bcbfd72-1b31-4c84-8922-ceffa6d49a2c%26entityType%3Dcollection%26workspaceId%3D7845280a-058d-45eb-be58-c1bc0cd9c854)

## Tecnologias utilizadas

* TypeScript
* Node.js
* Express




## Estrutura do projeto
A estrutura de pastas do projeto é explicada a seguir:

| Nome | Descrição |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **src**                 | Contém o código fonte da aplicação, através do src/app.ts e dos respectivos domínios modularizados.
| **src/app.ts**         | Entrada da aplicação. Contém as rotas, a inicialização do Express e a do servidor                                                    |
| **src/users**               | Contém todo o domínio de Users, com seus respectivos services, controllers, repositories, e factories
| **src/products**      | Contém todo o domínio de Products, com seus respectivos services, controllers, repositories, e factories
| **src/quotes**  | Contém todo o domínio de Quotes, com seus respectivos services, controllers, e factories
| **src/*/services** | Contém os services dos domínios, com seus respectivos métodos, além de arquivo de testes
| **src/*/controllers**           | Contém os controllers dos domínios, com seus respectivos métodos, além de arquivo de testes            
| **src/*/repositories**           | Contém as classes responsáveis por obter e retornar os dados da API do servidor, além de arquivo de interface e arquivo de testes de repository. Não se aplica ao domínio Quotes
| **src/*/factories**      | Contém as funções responsáveis por instanciar services, controllers e repositories de cada domínio, através de uma injeção de dependências|
| **src/*/routes**         | Contém as rotas de cada domínio |
| **src/*/_\_mocks__**               | Contém os mocks de cada domínio, para realização de testes unitários
| **node_modules**      | Contém todas as dependências NPM|
| **package.json**         | Contém todas as dependências instaladas, assim como os scripts da aplicação   |
| **babel.config.js**         | Contém os presets do Babel para geração de testes no Jest com TypeScript




## Instalação

Para rodar este projeto, é necessário que o [Node.js](https://nodejs.org/) esteja instalado no seu computador.

### Instalação

Clone o repositório:
```
git clone https://github.com/pedrofnts/be-test-api.git
```
Acesse o diretório do repositório:
```
cd be-test-api
```
Instale as dependências:
```
npm i
```
Inicie o servidor local:
```
npm run start
```

### Testes

Para executar os testes, utilize  o script:
```
npm test
```
Para visualizar a cobertura de testes da aplicação, utilize o script:
```
npm run coverage
```

### Quantidade de testes realizados e cobertura da aplicação:
![E2iF52f](https://i.imgur.com/FOKlQ4n.png)


