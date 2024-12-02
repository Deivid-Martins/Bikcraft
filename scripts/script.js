// Deixar o link atual destacado dos demais
const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
    const url = location.href;
    const href = link.href;
    if(url.includes(href)) {
        link.classList.add("ativo");
    }
});

// Enviar produto pre-selecionado para o formulario

const params = new URLSearchParams(location.search);

function ativarProduto(param) {
    const element = document.getElementById(param);
    if(element) {
        element.checked = true;
    }
}

params.forEach(ativarProduto);


// Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function handlePerguntaClick(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  pergunta.setAtribute("aria-expanded", resposta.classList.contains("ativa"));
}

perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", handlePerguntaClick);
});

// Mudança de imagens de acordo com a foto escolhida
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function changeImage(event) {
    const minSize = matchMedia("(min-width: 920px)").matches
    if(minSize) {
        const img = event.currentTarget;
        galeriaContainer.prepend(img);
    }
}

galeria.forEach((item) => {
    item.addEventListener("click", changeImage);
})

// Animação

if(window.SimpleAnime) {
    new SimpleAnime();
}