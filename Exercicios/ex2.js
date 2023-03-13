const read= require('readline-sync')

let raio = read.question('Digite o raio do circulo: ')

function circunferencia(raio) {
    return 2*3.14*raio
}

function area(raio) {
    return 3.14*raio*raio
}

console.log(`A area do circulo é ${area(raio)} e a circunferencia é ${circunferencia(raio)}`)