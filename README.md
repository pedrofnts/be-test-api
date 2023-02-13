
# BE TEST API 
Esse é o repositório para da aplicação Be Test. Foi criado um middleware para listagem de usuários, produtos e cálculo de orçamento, utilizando Node.js (Express) + TypeScript.

## Documentação da API

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/21642696-1bcbfd72-1b31-4c84-8922-ceffa6d49a2c?action=collection%2Ffork&collection-url=entityId%3D21642696-1bcbfd72-1b31-4c84-8922-ceffa6d49a2c%26entityType%3Dcollection%26workspaceId%3D7845280a-058d-45eb-be58-c1bc0cd9c854)

## Tecnologias utilizadas

* TypeScript
* Node.js
* Express


## Instalação

É necessário que o [Node.js](https://nodejs.org/) esteja instalado no seu computador.


Instale as dependências:
```
npm i
```
Inicie o servidor local:
```
npm run start
```

### Testes

Executando os testes unitários e de integração:
```
npm test
```
Executando os testes de carga:
```
npm run load-test
```
Visualizando a cobertura de testes da aplicação:
```
npm run coverage
```



### Cobertura da Aplicação
![E2iF52f](https://i.imgur.com/BySiaQ5.png)


### Testes de Carga
```
[INFO] default - The average latency is 0.05 ms.

[INFO] default - The average requests per second is 16576.41 rps.

[INFO] default - The total number of errors is 0
```

## Estrutura do Projeto
Este projeto utiliza princípios SOLID.  A estrutura de pastas segue arquitetura modular, com cada módulo separado em camadas, e é explicada a seguir:

| Nome | Descrição |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **src**                 | Contém o código fonte da aplicação, através do src/app.ts e dos respectivos domínios modularizados.
| **src/app.ts**         | Entrada da aplicação. Contém as rotas, a inicialização do Express e a do servidor        
| **src/e2e**         | Contém testes end to end (carga de integração)
| **src/e2e/_\_load-tests__**         | Contém testes de carga e log dos mesmos                                                     |
| **src/e2e/_\_tests__**         | Contém testes de integração da API                                                    |
| **src/error-handler**         | Contém tratamento de erros da aplicação
| **src/utils**         | Contém utilitário log4js, para log dos testes de carga                                                      |
| **src/users**               | Contém todo o módulo de Users, com seus respectivos models, services, controllers, repositories, e factories
| **src/products**      | Contém todo o módulo de Products, com seus respectivos models, services, controllers, repositories, e factories
| **src/quotes**  | Contém todo o módulo de Quotes, com seus respectivos models, services, controllers, e factories 
| **src/*/models**  | Contém a interface dos objetos de cada módulo.
| **src/*/services** | Contém na raíz a a interface (abstração) do componente de serviço
| **src/*/services/details** | Contém a implementação (detalhes) do componente de serviço
| **src/*/services/_\_tests__** | Contém arquivos de teste
| **src/*/controllers**           | Contém na raíz a interface (abstração) do componente controlador     
| **src/*/controllers/details**           | Contém a implementação (detalhes) do componente controlador
| **src/*/controllers/_\_tests__**           | Contém arquivos de teste
| **src/*/repositories**           | Contém na raíz a interface (abstração) do componente de repositório 
| **src/*/repositories/details**           | Contém a implementação (detalhes) do componente de repositório
| **src/*/repositories/_\_tests__**           | Contém  arquivos de teste
| **src/*/factories**      | Contém as funções responsáveis por instanciar services, controllers e repositories de cada domínio, através de uma injeção de dependências|
| **src/*/routes**         | Contém as rotas de cada módulo |
| **src/*/_\_mocks__**               | Contém os mocks de cada módulo, para realização de testes unitários
| **src/*/_\_mocks__**               | Contém os mocks de cada módulo, para realização de testes unitários
| **node_modules**      | Contém todas as dependências NPM|
| **package.json**         | Contém todas as dependências instaladas, assim como os scripts da aplicação   |
| **babel.config.js**         | Contém os presets do Babel para geração de testes no Jest com TypeScript

