const read= require('readline-sync')

function contar(string, letra) {
    let count = 0

    for (let i = 0; i < string.length; i++) {
        if (string[i] === letra) {
            count++
        }
    }

    return count
}

let string = read.question('Digite uma string: ')

let letra = read.question('Digite a letra para procurar na string: ')

const result = contar(string, letra)

console.log(result)