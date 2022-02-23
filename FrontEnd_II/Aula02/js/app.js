
/*
Jogo de pedra, papel ou tesoura

equipe 2
Áderson C. Costa
Eduardo Sakamoto
Guilherme Mello
Lucas Bernardo

*/

// function getRandomIntInclusive(min,max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// let escolhaBot = getRandomIntInclusive(1,3);
let escolhaBot = parseInt(Math.random()*3+1);

const mensagem = ['Empatou','Robô ganhou','Você ganhou!'];

let pontosUsuario = 0;
let pontosBot = 0;

do {
let escolhaUsuario = parseInt(prompt('Digite um número: \n [1] - Pedra \n [2] - Papel \n [3] - Tesoura'));

if(escolhaUsuario > 0 && escolhaUsuario < 4){
    switch(escolhaUsuario){    
        case 1:
            switch(escolhaBot){
                case 1:                    
                    alert(mensagem[0]);
                    break;
                case 2:
                    alert(mensagem[1]);
                    pontosBot ++;
                    break;
                case 3:
                    alert(mensagem[2]);
                    pontosUsuario ++;
                    break;
            } break;
        case 2:
            switch(escolhaBot){                            
                case 1:
                    alert(mensagem[2]);
                    pontosUsuario ++;
                    break;
                case 2:
                    alert(mensagem[0]);
                    break;
                case 3:
                    alert(mensagem[1]);
                    pontosBot ++;
                    break;
            } break;
        case 3:
            switch(escolhaBot){
                case 1:
                    alert(mensagem[1]);
                    pontosBot ++;
                    break;
                case 2:
                    alert(mensagem[2]);
                    pontosUsuario ++;
                    break;
                case 3:
                    alert(mensagem[0]);
                    break;
            } break;
        }
    }
}
while (pontosUsuario < 3 || pontosBot < 3);
console.log(pontosUsuario, pontosBot);
/* for of */
// const options = [1,2,3]

// console.log(options);

// for(let option of options){

//     console.log(option);
    
// };

/* for in */

// const options = {
//     opcao: [1,2,3],
//     descricao: ['PE','PA','TE']
// }

// // console.log(options.opcao[0]);

// for(let choosedOption in options){
//     console.log(options[choosedOption]);
// }