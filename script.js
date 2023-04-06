// animação de escrita.
const phrase = document.querySelector('.headline');

function typeWrite(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach(function (letter, i) {
        setTimeout(function () {
            element.innerHTML += letter;
        }, 100 * i);
    });
}

window.onload = function() {
  typeWrite(phrase);
};
// scroll de movimento de section para section.
// seleciona os links
const inicio = document.querySelector('#inicio');
const sobre = document.querySelector('#sobre');
const projetos = document.querySelector('#projetos');

// seleciona as seções
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

// função para rolar para a seção correspondente após um atraso
function scrollToSection(section) {
  setTimeout(() => {
    window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
  }, 500); // atraso de 500 milissegundos (meio segundo)
};

// adiciona o evento de clique ao link "inicio"
inicio.addEventListener('click', (event) => {
  event.preventDefault(); // evita o comportamento padrão do link
  scrollToSection(section1);
});

// adiciona o evento de clique ao link "sobre"
sobre.addEventListener('click', (event) => {
  event.preventDefault(); // evita o comportamento padrão do link
  scrollToSection(section2);
});

// adiciona o evento de clique ao link "projetos"
projetos.addEventListener('click', (event) => {
  event.preventDefault(); // evita o comportamento padrão do link
  scrollToSection(section3);
});





