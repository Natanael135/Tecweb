
const mensagens = [
  "Revisar conteúdo de Matemática!",
  "Aula de reforço às 14h.",
  "Projeto até sexta-feira!",
];
let indexMensagem = 0;

function trocarMensagem() {
  indexMensagem = (indexMensagem + 1) % mensagens.length;
  document.getElementById("mensagem").textContent = mensagens[indexMensagem];
}

const imagens = ["./image1.png", "./image2.png"];
let indexImagem = 0;

function trocarImagem() {
  indexImagem = (indexImagem + 1) % imagens.length;
  document.getElementById("imagem").src = imagens[indexImagem];
}


function alternarParagrafo() {
  const p = document.getElementById("paragrafoToggle");
  p.style.display = p.style.display === "none" ? "block" : "none";
}

function alterarTextoBotao() {
  const botao = document.getElementById("botaoTexto");
  botao.textContent =
    botao.textContent === "Clique para mudar o texto"
      ? "Texto Alterado!"
      : "Clique para mudar o texto";
}
