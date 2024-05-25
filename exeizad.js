const readlineSync = require('readline-sync');

//COMPARADORES:
// Fácil
// Escreva uma condição que verifica se um número é maior que 10. Se for, exiba "O número é maior que 10" no console; caso contrário, exiba "O número é menor ou igual a 10".

function compfacil() {
    const num = 8
    if (num > 10) {
        console.log("O numero é maior que 10")
    } else {
        console.log("O numero é menor ou igual a 10")
    }
}

// Difícil
// Escreva uma função chamada ordenarNumeros que recebe três números como parâmetros e os retorna em ordem crescente.
function ordenarNumeros(paramet) {

}
//COMPARADORES LÓGICOS: 
// Fácil
// Cria uma condição que verifica se um número é positivo e menor que 100. Se for, tem que imprimir "O número é positivo e menor que 100" no console; caso contrário, imprime "O número não atendeu as condições".
function complogic() {
    const num = 103
    if (num < 100 && num > 0) {
        console.log("O numero é positivo e menor que 100")
    } {
        console.log("O numero não se encaixa nas condições")
    }
}

// Difícil:
// Cria uma função chamada verificarIdade que receba a idade de uma pessoa como parâmetro. A função tem que verificar se a pessoa tem entre 18 e 65 anos, imprimir verdadeiro se estiver dentro dessa faixa etária e falso caso contrário.
function varificarIdade(idade) {
    if (idade > 18 && idade < 65) {
        console.log(true)
    } {
        console.log(false)
    }
}
// CONDICIONAIS:
// Um pouco menos fácil
// Cria uma função chamada verificarIdade que recebe a idade como parâmetro e retorna "Maior de idade" se a idade for maior ou igual a 18, e "Menor de idade" caso contrário.
function Idadeverifica(idade) {
    if (idade >= 18) {
        console.log("Maior de idade")
    } {
        console.log("Menor de idade")
    }
}

// Fácil 
// Cria uma função chamada verificarParOuImpar que possa receber um número como parâmetro. A função deve verificar se o número é par ou ímpar e exibir uma mensagem informando isso.
function varificarparouimpar(num) {
    const resultado = num % 2
    if (resultado = 0) {
        console.log("O numero é par")
    } {
        console.log("O numero é ímpar")
    }
}
//CORDAS:
//Fácil
// Cria uma função chamada contarVogais que receba uma string como parâmetro e retorna a quantidade de vogais nessa string.
function contarVogais(string) {
    const tirarnvogais = string.split()
}
// Difícil:
// Cria uma função chamada inverterPalavra que receba uma palavra como parâmetro e retorna essa palavra invertida. Tipo, se a palavra for "banana", a função tem que retornar "ananab".
function inverterPalavra(params) {
    const separar = params.split("")
    const inverter = separar.reverse()
    const juntar = inverter.join("")
    console.log(juntar)
}
//FUNÇÕES:
// Fácil:
// Cria uma função chamada somar que receba dois números como parâmetros e imprima a soma deles no console.
function somar(numero1, numero2) {
    console.log(numero1 + numero2)
}
//Difícil
// Cria uma função chamada dobro que recebe um número como parâmetro e imprima o dobro desse número.
function dobro(numero) {
    console.log(numero * 2)
}
//MATRIZES:
//Fácil:
//Cria uma matriz (array de arrays) composta por 3 linhas e 3 colunas. Aí tu preenche com números da tua escolha e imprime no console.
function matriz() {
    const array = [
        [3, 0, 4]
        [92, 12, 1]
        [0, 42, 19]
    ]
    console.log(array)
}
//Complicadinho:
///Cria uma função chamada somaMatriz que tem que receber uma matriz como parâmetro e que retorne a soma de todos os elementos da matriz.
function somaMatriz() {
    const array = [
        [3, 0, 4],
        [92, 12, 1],
        [0, 42, 19]
    ]
    const newarray = array.join(array[0],array[1],array[2])
    console.log(newarray[0]+newarray[1]+newarray[2]+newarray[3]+newarray[4]+newarray[5]+newarray[6]+newarray[7]+newarray[8])
}
//OBJETOS:
// Fácil:
// Cria um objeto chamado carro contendo marca, modelo e ano. Em seguida, imprime essas propriedades no console.
function dadoscarro() {
    const carro = {
        marca: "Fiat",
        modelo: "Uno",
        ano: 2002,
    }
    console.log(carro)
}

// Um pouco difícil:
// Cria um objeto chamado contaBancaria com propriedades como saldo e titular. Em seguida, tu cria métodos para depositar e sacar dinheiro dessa conta, atualizando o saldo correspondente.
function Banco() {
    const contaBancaria = {
        saldo: 12000,
        titular: "Daniel Alvez"
    }
    const alteração = readlineSync.question("Você dejesa depositar(1) na conta ou retirar(2)?")
    if (alteração === "1") {
        const quantidade = readlineSync.question("Quanto deseja depositar? ")
        let contaalterada = {
        ...contaBancaria,
        saldo: contaBancaria.saldo + Number(quantidade)
        }
        console.log(contaalterada)
    } else if (alteração === "2") {
        const quantidade = readlineSync.question("Quanto deseja retirar? ")
        let contaalterada = {
            ...contaBancaria,
            saldo: contaBancaria.saldo - Number(quantidade)
        }
        console.log(contaalterada)
    } else {
        console.log("pedido não identificado")
    }
}
//ROTAÇÕES: // Não consegui entender o que foi pedido nesse parte de rotações, alem de que não era um tema pedido
//Fácil:
//Cria uma função chamada rotacionarPDireita que receba um array de e retorne o mesmo array com todos os elementos para a direita.

//Meio fácil:
//Cria uma função chamada rotacionarPEsquerda que recebe um array e retorna o mesmo array com todos os elementos para a esquerda.

//VARIÁVEIS:
//Fácil:
//Declara uma variável chamada nome e dê a ela o teu próprio nome. Em seguida, imprime essa variável em uma mensagem "cumprimentando" no console.
function variavelnome() {
    const nome = "Gustavo Henrique de Oliveira"
    console.log("Cumplimentando ",nome)
}
// Meio Fácil:
// Declara duas variáveis, precoProduto1 e precoProduto2, e dê a elas os preços de dois produtos. Em seguida, calcula o total da compra desses dois produtos imprimindo o resultado no console.
function produtoseprecos() {
    const precoProduto1 = 12.25
    const precoProduto2 = 23.95
    console.log(precoProduto1 + precoProduto2)
}