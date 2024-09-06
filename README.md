# CineMania

CineMania é um site desenvolvido para a imersão da alura com o GOOGLE Gemini, que permite aos usuários pesquisar e descobrir informações sobre filmes. A aplicação oferece uma interface simples para pesquisa por título, gênero, ou ator, exibindo resultados relevantes com base na pesquisa realizada.

## Funcionalidades

- **Pesquisa de Filmes:** Os usuários podem buscar filmes por título, gênero ou ator.
- **Exibição de Resultados:** Os resultados da pesquisa são exibidos com detalhes como título, gênero, sinopse, ano de lançamento, diretor e onde assistir.
- **Mensagens de Erro:** Caso o campo de pesquisa esteja vazio ou nenhum resultado seja encontrado, mensagens apropriadas são exibidas.

## Estrutura do Projeto

O projeto é composto por três principais arquivos:

- **`index.html`**: O arquivo HTML que define a estrutura do site.
- **`styles.css`**: O arquivo CSS que contém o estilo visual da aplicação.
- **`app.js`**: O arquivo JavaScript que gerencia a lógica de pesquisa e exibição dos resultados.

## Tecnologias Utilizadas

- **HTML5**: Para a estruturação do conteúdo da página.
- **CSS3**: Para o estilo e layout da página.
- **JavaScript**: Para a lógica de busca e manipulação do DOM.

## Como Usar

1. Digite um título, gênero ou ator no campo de pesquisa.
2. Clique no botão "Pesquisar".
3. Veja os resultados da pesquisa exibidos na seção abaixo do campo de pesquisa.

## Estrutura dos Arquivos

### `index.html`
Define a estrutura básica da página, incluindo cabeçalho, corpo e rodapé. Também inclui um campo de pesquisa e uma seção para exibir os resultados.

### `styles.css`
Contém o estilo visual do site. Certifique-se de que este arquivo está no mesmo diretório que o `index.html` para que o estilo seja aplicado corretamente.

### `app.js`
Contém a lógica de pesquisa. O script usa uma lista de filmes (que deve estar definida em um arquivo `dados.js` separado) e filtra os resultados com base na entrada do usuário.
