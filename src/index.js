
document.addEventListener("DOMContentLoaded", function () {
  let productsGet = document.querySelector("#produtos-pegar");
  async function fetchProduct(url) {
    let data = await fetch(url);
    let response = await data.json();

    for (let i = 0; i < response.length; i++) {
      productsGet.innerHTML += `
            <div class="overlay-nuvem active carregou">
            <div class="modal-buybutton-nuvem">
                <div class="produto-imagem">
                    <img loading="lazy" data-componente="imagem" src="${response[i].image_url} alt="">
                </div>
            <div class="produto-desc" produto-id="${response[i].id}">
                <div>
                    <h1 class="produto-titulo" data-componente="titulo">${response[i].title}</h1>
                </div>
                <div class="produto-precos">
                    <p data-componente="comparado" class="produto-preco-comparado">${response[i].price}</p>
                </div>
                
                <div class="produto-opts">
                    <div class="produtos-variantes">
                       
                        <div class="produto-select">
                            <span>Cor:</span>
                            <select><option value="${response[i].options.Cor}">${response[i].options.Cor}</option></select>
                            <span>Tamanho:</span>
                            <select><option value="${response[i].options.Tamanho}">${response[i].options.Tamanho}</option></select>
                        </div>
                    </div>
                </div>
                <div class="produto-compra">
                    <button class="btn-comprar btn"><div class="text-btn">Comprar</div></button>
                </div>
            </div>
        </div>
        </div>
        `;
    }
 
  }
  fetchProduct(
    "https://app.landingpage.com.br/Ajax/buscarDetalhesProdutoNuvemshop/LPL2gc/180064575"
  );
  fetchProduct(
    "https://app.landingpage.com.br/Ajax/buscarDetalhesProdutoNuvemshop/LPL2gc/180064631"
  );
});

// Preencher o campo nome do prudoto, imagem e preço
// Preencher os campos de seleção das variantes (cor, voltagem, etc). É importante você prever que um produto pode ter de zero a 3 variantes
// Quando o cliente escolher uma variante, indicar se o produto tem ou não estoque. (Para mostrar a resposta, fique livre para escolher a forma de exibição, você pode usar um alert(), ou utilizar qualquer forma mais bonita para isso)
// Enviar os dados de compra para o checkout

// nome do produto = title
// imagem = image_url
// preço = price
