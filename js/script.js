/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: Nome do tema escolhido
Aluno 1: Enrico Pimentel Gotti Encarnação - RA: 250779
Aluno 2: João Vitor Vieira Skierzynski  - RA: 250964
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/
const btnTema = document.querySelector('#btnTema');

btnTema.addEventListener('click', function() {
    document.body.classList.toggle('tema-escuro');
});

const botoes = document.querySelectorAll(".filtros .btn");
const cards = document.querySelectorAll(".row article");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    let categoria = botao.textContent.toLowerCase();

    // Remove acentos
    categoria = categoria.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Remove plural (s no final)
    if (categoria.endsWith("s")) {
      categoria = categoria.slice(0, -1);
    }

    cards.forEach(card => {
      if (botao.textContent.toLowerCase() === "todos") {
        // Mostra todos os cards
        card.style.display = "block";
      } else if (card.classList.contains(`categoria-${categoria}`)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
