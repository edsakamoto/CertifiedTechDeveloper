
/*
Jogo de pedra, papel ou tesoura

equipe 2
Áderson C. Costa
Eduardo Sakamoto
Guilherme Mello
Lucas Bernardo

*/
 
const mensagem = ['Empatou','Robô ganhou','Você ganhou!'];
                   /*0     ,    1        ,      2*/
let pontosUsuario = 0;
let pontosBot = 0;
let semVencedor = true;
let vencedor = ''

do {
    let escolhaUsuario = parseInt(prompt('Digite um número: \n [1] - Pedra \n [2] - Papel \n [3] - Tesoura'));

    let escolhaBot = parseInt(Math.random()*3+1);

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
                } 
                break;
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
                    }
                break;
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
                    } 
                break;
            }
        } else { alert('jogue um valor válido')};
    
   if(pontosBot == 2 || pontosUsuario == 2){
       semVencedor = false;
       if(pontosBot == 2){
           vencedor = 'Robo ganhou 2x';
       } else{ vencedor = 'Jogador ganhou 2x'};
   }
} while (semVencedor);

alert(vencedor);
