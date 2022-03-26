let botaoEnvioReferencia = document.querySelector('#botaoEnvio');
let botaoResetReferencia = document.querySelector('#botaoReset');
let inputReferencia = document.querySelector('#input');
let textoReferencia = document.querySelector('#texto');
let countReferencia = document.querySelector('#count');

botaoEnvioReferencia.addEventListener('click',function(event){
    event.preventDefault();
    alert('Terminou de carregar o envio');
    

})

botaoResetReferencia.addEventListener('click',function(event){
    event.preventDefault();
    alert('Terminou de carregar o reset');
})


// Escutando o evento MouseOver
botaoEnvioReferencia.addEventListener('mouseover', function(event){
    event.target.style.color = "orange";
})

botaoEnvioReferencia.addEventListener('mouseout', function(event){
    event.target.style.color = "black";
})

botaoResetReferencia.addEventListener('mouseover', function(event){
    event.target.style.color = "orange";
})

botaoResetReferencia.addEventListener('mouseout', function(event){
    event.target.style.color = "black";
})


// textReferencia.addEventListener('keydown',function(event){
//     //textReferencia.innerHTML += `{textReferencia.key}`
//    textReferencia.textContent += `${event.code}`
// })

inputReferencia.addEventListener('keydown',logkey) ;
let contador = 0
function logkey(event){
    event.preventDefault();    
    textoReferencia.textContent += `${event.key}`
    // if(event.key){
    //     contador++;
    //     countReferencia.innerHTML =+ `${contador}`;
    // }
    
    //console.count(event.key)
}

inputReferencia.addEventListener('keyup',conta) ;
function conta(){
    countReferencia.innerHTML =`Quantidade de vezes que qualquer tecla foi pressionada: ${++contador}` 
}
    

//countReferencia