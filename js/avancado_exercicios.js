// Exercicio 1

const compras = [];
compras.push("ovos","leite","farinha","pipoca","suco");
compras.shift();
console.log(compras)

// Exercicio 2

const num = [3,7,14,21,29,36,42];
const numero = (num.find((num) => num%7==0 && num>10));
console.log(numero)