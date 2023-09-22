// Array or List
const frutas = ["Maça","Abacate"];
// Add atribute final and start list
frutas.push("Banana");
frutas.unshift("Uva")
// Delete atribute final and start list
frutas.pop()
frutas.shift()
//Mostrar resultado
console.log(frutas);

// Tratamento de erro
// const resposta = "nop";
// if (resposta !== "sim" && resposta !== "não") {
//     throw new Error("Resposta inválida!");
// }

try{
    const resposta = "nop";
    if (resposta !== "sim" && resposta !== "não") {
        throw new Error("Resposta inválida!");
    }
}catch(error){
    console.log(error.message)
}

// settimeout => executa algo depois de um tempo

function mostrarMensagem3s(){
    setTimeout(() => {
        console.log("Essa mensagem será exibida em 3 segundos.")
    }, 3000);
}

// promises
function promessaDoida(){
    const promessa = new Promise((resolve,reject)=>{
        const condicao = false;

        if(condicao){
            resolve("A condição é verdadeira!")
        }else{
            reject("A condição é falsa!")
        }
    });
}


// promessa.then((mensagem) => {
//     console.log(mensagem);
// }).catch((erro) => {console.log(erro);});


// Bibliotecas

const promessa1 = Promise.resolve(3);
const promessa2 = new Promise((resolve,reject) => {
    setTimeout(resolve,2500,"testando")
})

// Promise.all([promessa1,promessa2]).then((valores) => {console.log(valores)});

// Async Await

async function obterValor() {

    const promessa4 = new Promise((resolve,reject) => {
        resolve("Está tudo bem ...");

    });

    console.log(await promessa4);
}

async function ObterValorErro() {
    try{
        const promessa4 = new Promise((resolve,reject) => {

            const verf = true;

            if(verf){
                setTimeout(() => resolve("Continua tudo bem ...",2000));
            }else{
                setTimeout(() => reject("A vida ela ...",2000));
            }
        });

        console.log(await promessa4);
    }catch(error){
        console.log(error);
    }
}

//JSON (JavaScript Object Notation)

const objeto = {nome:"pedro",idade:30};
const jasonString = JSON.stringify(objeto);

console.log(jasonString);
console.log(typeof(jasonString));

const json = '{"nome":"pedro","idade":30}';
const objeto2 = JSON.parse(json);

console.log(json);
console.log(typeof(json));