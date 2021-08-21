validaCpf = cpf => {
  let validaCpf = normalizar(cpf)
  return valida(validaCpf)
}

normalizar = cpf => {
  return cpf.trim().replace('.', '').replace('.', '').replace('-', '')
}

valida = cpf => {
  if (cpf.length == 11 && cpf.match(/^[0-9]*$/)) {
    // o tamanho do meu CPF e se é numérico
    if (calculo(cpf)) {
      // Já retorna true ou false, logo contempla o IF
      return true
    }
  }

  return false
}

calculo = cpf => {
  var numeros = cpf.substring(0, 9)
  var digitos = cpf.substring(9)

  var soma = 0
  for (var i = 10; i > 1; i--) {
    soma += numeros.charAt(10 - i) * i
  }

  var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)

  if (resultado == digitos.charAt(0)) {
    return true
  }

  return false
}

console.log(validaCpf('44446392883')) // true
console.log(validaCpf('44446392873')) // false dígito inválido
console.log(validaCpf('444.463.928-83')) // true
console.log(validaCpf('444.4a3.928-83')) // false caractere != de número
console.log(validaCpf('37292695850')) // true
console.log(validaCpf('444.463.928-8')) // false falta um número
