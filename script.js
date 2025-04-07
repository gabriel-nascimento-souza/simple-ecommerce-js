let carrinhoContador = document.getElementById('carrinho-contador');
let contador = parseInt(localStorage.getItem('contador')) || 0;

if (carrinhoContador) {
  carrinhoContador.innerText = contador;
}

document.querySelectorAll('.adicionar-carrinho').forEach(botao => {
  botao.addEventListener('click', () => {
    contador++;
    if (carrinhoContador) {
      carrinhoContador.innerText = contador;
    }
    localStorage.setItem('contador', contador);

    const produto = botao.closest('.produto');
    const nome = produto.querySelector('h3').innerText;
    const descricao = produto.querySelector('p').innerText;
    const preco = produto.querySelector('.preco').innerText;
    const img = produto.querySelector('img').src;

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho.push({ nome, descricao, preco, img });

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  });
});