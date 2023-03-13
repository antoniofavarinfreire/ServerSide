const read= require('readline-sync')

const degree = read.question('Digite uma temperatura: ')

const escolha = read.question('Fahrenheit para celsius (f), Celsius para Fahrenheit (c): ')

switch(escolha.toUpperCase()){
    case 'F':
        console.log(fartocel(degree))
        break
    case 'C':
        console.log(celtofar(degree))
        break
    default:
        console.log('Operação invalida')
        break
}

function fartocel(degree) {
    return (degree - 32) * 5/9
}

function celtofar(degree){
    return degree * 1.8 + 32
}