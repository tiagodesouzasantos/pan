# Githubpan
Aplicação com autenticação com github.

[Pré - requisitos]
- Git ([Dowload](https://git-scm.com/downloads))
- NodeJs([Download](https://nodejs.org/en/download/))
- Após o NodeJs instalado é necessário instalar o angular cli([Download e instalação](https://cli.angular.io/))
- Baixar o [repositório](https://github.com/tiagodesouzasantos/pan) utilizando o seguinte comando:
```bash
$ git clone https://github.com/tiagodesouzasantos/pan.git
```
Para rodar localmente é necessário ter acesso a internet.
Após baixar o repositório acesse o diretório e rode o seguinte comando:
```bash
$ npm install
```
Após fazer isso ele baixará todas as dependencias do projeto.
E já está pronto para rodar localmente.

## Rodando o projeto
Dentro do repositório rode o seguinte comando para rodar a aplicação:
```bash
$ ng serve
```
**Gerando build de produção** basta rodar o seguinte comando:
```bash
$ ng build --prod githubpan
```
## CORS
Para contornar o problema de cors com a api do github desenvolvi uma [api](https://github.com/tiagodesouzasantos/pangitauth) em NodeJs que faz a autenticação com o github e devolve os dados de autenticação.

## Produção
A aplicação está publicada no git pages no seguinte [link](https://tiagodesouzasantos.github.io/pan/).