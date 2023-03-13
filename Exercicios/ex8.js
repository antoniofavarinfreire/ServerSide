function param2x(param) {
  return function() {
    return 2 * param
  };
}

const funcao = param2x(10)
const result = funcao() // result será igual a 20

console.log(result)
  