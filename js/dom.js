// DOM - Document Object Model

// Selecionar elementos

const elemento = document.querySelector("#meuId");

elemento.textContent = "Olá, novo mundo!";

console.log(elemento);

// const elemento = document.getElementById("meuId"); Forma antiga

const link = document.querySelector("a");

// modificar atributos

link.setAttribute("href","https://youtube.com");

// confirmar existência de um atributo

console.log(link.hasAttribute("target"));

// deletar atributo

link.removeAttribute("");

// remove uma classe
elemento.classList.remove("modoNeutro");

function mudarClass(){
    const elemento = document.querySelector("#meuId");
    // Adciona uma classe existente
    elemento.classList.add("modoNeutro");
}

// alterna o estado, caso exista uma class ele removo. Se não o contrário.
elemento.classList.toggle("modoNeutro");

// Alterando o CSS

function alterarCss(){
    const elemento = document.querySelector("#meuId");
    elemento.style.backgroundColor = "red";
}

// Achar o elemento pai de uma tag

function elementoPai(){
    const elemento = document.querySelector("#meuId");
    const pai = elemento.parentNode;
    console.log(pai);
}

function primeiroElementoFilho(){
    const elemento = document.querySelector("#meuId");
    const primeiroFilho = elemento.firstChild;
    console.log(primeiroFilho);
}

function ultimoElementoFilho(){
    const elemento = document.querySelector("#meuId");
    const ultimoFilho = elemento.lastChild;
    console.log(ultimoFilho);
}

// Manipulçao DOM

function criarElemento(){
    const elemento = document.createElement("div");
    
    elemento.textContent = "Criado via JavaScript";

    document.body.appendChild(elemento);
    // document.body.insertBefore(elemento,tagSubstituida); Substituir html pelo elemento
    // document.body.removeChild(elemento); remove um elemento html
}

criarElemento();