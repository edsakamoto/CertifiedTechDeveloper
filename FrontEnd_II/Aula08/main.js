let resultadoContaReference = document.querySelector('#resultadoConta');
let botaoSomaReference      = document.querySelector('#soma');
let botaoSubtrairReference  = document.querySelector('#subtrair');
let botaoDividirReference   = document.querySelector('#dividir');
let botaoMultiplicarReference = document.querySelector('#multiplicar');
let primeiroNumeroReference   = document.querySelector('#primeiroNumero');
let segundoNumeroReference    = document.querySelector('#segundoNumero');

botaoSomaReference.addEventListener('click',function(x){
    x.preventDefault();

    let primeiroNumero = parseInt(primeiroNumeroReference.value)
    let segundoNumero = parseInt(segundoNumeroReference.value)

    let soma = primeiroNumero + segundoNumero;

    resultadoContaReference.innerHTML +=`
        <h3>Conta realizada: ${primeiroNumero} + ${segundoNumero} = ${soma}</h3>
    
    `
})

botaoSubtrairReference.addEventListener('click',function(x){
    x.preventDefault();

    let primeiroNumero = parseInt(primeiroNumeroReference.value)
    let segundoNumero = parseInt(segundoNumeroReference.value)

    let subtrair = primeiroNumero - segundoNumero;

    resultadoContaReference.innerHTML +=`
        <h3>Conta realizada: ${primeiroNumero} - ${segundoNumero} = ${subtrair}</h3>
    
    `
})

botaoDividirReference.addEventListener('click',function(x){
    x.preventDefault();

    let primeiroNumero = parseInt(primeiroNumeroReference.value)
    let segundoNumero = parseInt(segundoNumeroReference.value)

    let divisao = primeiroNumero / segundoNumero;

    resultadoContaReference.innerHTML +=`
        <h3>Conta realizada: ${primeiroNumero} / ${segundoNumero} = ${divisao}</h3>
    
    `
})

botaoMultiplicarReference.addEventListener('click',function(x){
    x.preventDefault();

    let primeiroNumero = parseInt(primeiroNumeroReference.value)
    let segundoNumero = parseInt(segundoNumeroReference.value)

    let multiplicacao = primeiroNumero * segundoNumero;

    resultadoContaReference.innerHTML +=`
        <h3>Conta realizada: ${primeiroNumero} * ${segundoNumero} = ${multiplicacao}</h3>
    
    `
})