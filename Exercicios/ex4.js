const read= require('readline-sync')

let palavra = read.question('Digite a palavra: ')

switch(ehPalindromo(palavra)){
    case true:
        console.log('É um palindromo!')
        break;
    default:
        console.log('Não é um palindromo')
}

function ehPalindromo(palavra) {
    if(palavra == inverte(palavra))
        return true
    else
        return false
}

function inverte(numero) {
    let invertido = ""
    for (let i = numero.length - 1; i != -1; i--) {
        invertido += numero[i]
    }
    return invertido
}