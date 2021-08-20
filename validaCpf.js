function validacaoCpf(cpf) {
  if (cpf.length != 11) {
    console.log('CPF inválido, digite novamente')
  } else {
    !cpf.match(/^\d+$/.$)

    let numero = cpf.substring(0, 9)
    numero.replace('.').replace('-')

    let digito = cpf.substring(9)
    digito.replace(/\D/g, '')
    //numero.replace(/\D/g, "")

    console.log(`O número do seu CPF é ${numero} e o dígito é ${digito}`)

    return cpf
  }
}

validacaoCpf('12345678910')
