// Destructuring 

const nome = {pessoa:"arthur",idade:18};
const {pessoa , idade} = nome;

console.log(pessoa);

const num = [1,2,3,4,5];
const [primeiro,segundo,terceiro] = num;

console.log(primeiro);


// Spread operator => espalhamento

const array = [1,2,3];
const arrayS = [...array,4,5,6];

console.log(arrayS);

const soma  = (...args) => args.reduce((total,numeros)=> total + numeros ,0);

console.log(soma(1,2,3,4,5,6,7));

// dafult parameter 

function saudacao(nome="visitante"){
    console.log(`olá ${nome}`)
}

saudacao();
saudacao("Roberto");

// object 

const nomeNovo="Luan";
const idadeNova= 23;

const pessoaNova = {nome:nomeNovo , idade: idadeNova};

console.log(pessoaNova);

const saudacaoObject = {
    acenar(){
        console.log("Acenou");
    }
}

saudacaoObject.acenar();

// Classes

class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        console.log(`Olá pessoal, meu nome é ${nome} e tenho ${idade} anos.`);
    }
}

const joao = new Pessoa("João",34);

console.log(joao);

joao.falar();

// Relação

class Funcionario extends Pessoa{
    constructor(nome, idade,salario){
        super(nome,idade);
        this.salario = salario
    }

    funcionarioFalar() {
        super.falar()
        console.log(`Eu ganho R$ ${this.salario}`)
    }
}

const Mario = new Funcionario("Mario Flavio",18,1900);

console.log(Mario);

Mario.funcionarioFalar();