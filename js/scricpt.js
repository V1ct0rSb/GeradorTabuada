// Seleção de elementos
const tabuadaForm = document.querySelector("#tabuadaForm");
const numeroInput = document.querySelector("#numero");
const tabelaExibicao = document.querySelector("#output");

// Funções
const criarTabela = (numero) => {
  tabelaExibicao.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;

    const template = `<div id="output">
            <div class="operation">${numero} x ${i} = ${resultado}</div>
        </div>`;

    const parser = new DOMParser(); //
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const output = htmlTemplate.querySelector("#output");

    tabelaExibicao.appendChild(output);
  }
};

// Eventos
tabuadaForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorNumeroInput = +numeroInput.value;

  if (!valorNumeroInput) return;

  criarTabela(valorNumeroInput);
});
