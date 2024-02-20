# Projeto de Gerenciamento de Anúncios de Emprego

Este projeto é uma API desenvolvida para gerenciar anúncios de emprego, implementando os casos de uso especificados na avaliação técnica para desenvolvedores de back-end. A API permite a criação, listagem, edição, exclusão e publicação de anúncios de emprego, além de listar empresas existentes e servir um feed de empregos publicados.

## Tecnologias e Ferramentas Utilizadas

- Node.js (versão 20): Ambiente de execução para JavaScript no servidor.
- Sequelize: ORM (Object-Relational Mapping) para Node.js
- Express.js: Framework para aplicativos web Node.js.
- Yarn: Gerenciador de pacotes para o JavaScript.
- Nodemon: Utilizado durante o desenvolvimento para reiniciar automaticamente o servidor quando arquivos são alterados.
- PostgreSQL: Banco de dados relacional para armazenar dados de empresas e empregos.
- Docker: Para rodar uma instância local do PostgreSQL em um contêiner.
- Insomnia/Postman: Ferramentas recomendadas para testar os endpoints da API.

### Configuração do Ambiente

1. Certifique-se de ter o Node.js (versão 20) e o Yarn instalados.
2. Clone este repositório para sua máquina local.

## Banco de Dados

Utilizei um contêiner Docker chamado testebackend-postgres para o PostgreSQL. Para recriar este ambiente, execute:
(docker run --name testebackend-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=testebackend -p 5432:5432 -d postgres)


## Iniciando o Projeto

1. Na raiz do projeto, execute yarn install para instalar as dependências.
2. Inicie o projeto com yarn dev. Nodemon será utilizado para reiniciar o servidor automaticamente a cada mudança.

## Testando a Aplicação

Recomenda-se utilizar Insomnia ou Postman para testar os endpoints da API:

- GET /companies: Listar empresas existentes.
- GET /companies/:company_id: Buscar uma empresa específica por ID.
- POST /job: Criar um rascunho de anúncio de emprego.
- Etc.

 A aplicação estará disponível em http://localhost:3000/.

## Nota Sobre a Simulação das Funcionalidades AWS
Durante o desenvolvimento deste projeto de API para o gerenciamento de anúncios de emprego, encontrei um desafio significativo relacionado à integração com os serviços da AWS, incluindo AWS Lambda, AWS SQS e AWS S3. Este desafio surgiu devido à política de cadastro da AWS, que exige um cartão de crédito para a criação de uma conta. Infelizmente, meu cartão de débito não foi aceito no processo de inscrição, e no momento, não disponho de um cartão de crédito para completar a inscrição na plataforma AWS.Com o objetivo de contornar a restrição de acesso aos serviços da AWS e ainda assim cumprir os requisitos do projeto, adotei uma abordagem para simular localmente as funcionalidades que seriam proporcionadas pelo AWS Lambda, AWS SQS e S3. Esta simulação inclui a implementação de um sistema de gerenciamento de filas para o processo de publicação dos anúncios de emprego e a criação de um mecanismo de cache para o feed de empregos, refletindo a lógica que seria utilizada em um ambiente de produção na AWS.

## Respostas às Perguntas Bônus
Para detalhes sobre as soluções propostas para as perguntas bônus, veja BONUS_ANSWERS.md.

## Nota Sobre o Uso de Ferramentas de IA

Durante o desenvolvimento deste projeto, utilizei o ChatGPT como uma ferramenta de suporte para esclarecer dúvidas de programação e explorar diferentes abordagens de resolução de problemas. 
A utilização do ChatGPT foi feita com o intuito de aprimorar meu entendimento em áreas específicas e acelerar o desenvolvimento sem comprometer a originalidade e a qualidade do trabalho entregue. Cada interação com a ferramenta foi cuidadosamente considerada e integrada ao projeto, garantindo que a essência e a execução final refletissem minhas habilidades e abordagem pessoal.
