const nome = "Bom dia André";
document.querySelector("h1").innerHTML = nome;
document.querySelector("h1").style.color= "#797979";
let elementoH2 = document.createElement("h2");
elementoH2.textContent = nome;
document.body.appendChild(elementoH2);
document.querySelector("h2").style.color = "#e3e23f";

// const texto = "1234";
// const num = conversaoTipos(texto);
// console.log(typeof num);


// const texto = "Javascript é incrivel!";
// contagemPalavras(texto);

const nomes = ["pedro","joao","thiago","felipe","paulo"];
for(chave in nomes){
    console.log(nomes[chave])
}

function conversaoTipos(numeroTexto){
    const numeroConvertido = parseInt(numeroTexto);
    return numeroConvertido;
}

function contagemPalavras(fraseTexto){
    const palavrasTexto = fraseTexto.split(" ");
    console.log(palavrasTexto.length);
}
