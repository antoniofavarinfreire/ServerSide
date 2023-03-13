const read= require('readline-sync')

let numero = read.question('Digite o numero com mais de 1 char pfvr: ')

function inverte(numero) {
    let invertido = ""
    for (let i = numero.length - 1; i != -1; i--) {
        invertido += numero[i]
    }
    return invertido
}

console.log(inverte(numero))