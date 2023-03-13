let numeros = [1,2,3,4,5]

function mostraDados(resultado) {
    console.log(`O resultado da multiplicação é: ${resultado}`);
}

function multiplica(numeros) {
    let resultado = 1;
  
    for (let i = 0; i < numeros.length - 1; i++) {
        resultado *= numeros[i] * numeros[i + 1];
    }
  
    resultado *= numeros[numeros.length - 1];
  
    return resultado;
}

let resultado = multiplica(numeros)
mostraDados(resultado)