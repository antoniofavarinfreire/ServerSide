function gerarNumeros() {
  const numeros = []

  for (let i = 0; i < 10; i++) {
    const numeroaleatorio = Math.floor(Math.random() * 100) + 1
    numeros.push(numeroaleatorio)
  }

  return numeros
}

const numeros = gerarNumeros()
console.log(numeros)