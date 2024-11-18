
alert("Bem vindo ao jogo do número secreto!");
let multiplicadorNoRandom = 100;
let numeroSecreto = parseInt(Math.random() * multiplicadorNoRandom + 1);
console.log(numeroSecreto);

let chute;

let tentativa = 1;
// Enquanto
while(chute != numeroSecreto){

    chute = prompt(`Escolha um número de 1 a ${multiplicadorNoRandom}`);
    if (numeroSecreto == chute){
        break;
    }else{
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativa++;
    }
}

let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";

alert(`Isso aí! Você acertou o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}.`);
