function pesquisar() {
      // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-filmes");
  
      // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
      // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa){
        section.innerHTML = "<p>Campo Pesquisa Está Vazio</p"
        return
    }
    // Converte o campo de pesquisa para minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let sinopse = "";
    let genero = "";
    let tags = "";
  
    // Itera sobre cada filme na lista de filmes
    for (let filme of filmes) {
          // Converte título, sinopse, gênero e tags para minúsculas
        titulo = filme.titulo.toLowerCase();
        sinopse = filme.sinopse.toLowerCase();
        genero = filme.genero.toLowerCase();
        tags = filme.tags.map(tag => tag.toLowerCase()).join(", ");
          // Verifica se o campo de pesquisa está presente no título, sinopse, gênero ou tags
        if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || genero.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
              // Adiciona o resultado à string de resultados
            resultados += `
              <div class="item-resultado">
                  <h2>${filme.titulo}</h2>
                  <p><strong>Gênero:</strong> ${filme.genero}</p>
                  <p class="descricao-meta">${filme.sinopse}</p>
                  <p><strong>Ano de Lançamento:</strong> ${filme.anoLancamento}</p>
                  <p><strong>Diretor:</strong> ${filme.diretor}</p>
                  <p><strong>Onde Assistir:</strong> ${filme.ondeAssistir}</p>

              </div>
              `;
          }
      }
  
      // Verifica se nenhum resultado foi encontrado
    if (!resultados) {
          resultados = "<p>Nada foi Encontrado</p>";
    }
  
      // Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;
}
  