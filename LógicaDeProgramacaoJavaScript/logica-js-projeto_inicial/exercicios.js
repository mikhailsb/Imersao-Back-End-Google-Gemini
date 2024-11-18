// Iniciando em JavaScript:
//Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert("Boas vindas ao nosso site!");

//Declare uma variável chamada nome e atribua a ela o valor "Lua".
let nome = "Lua";

//Crie uma variável chamada idade e atribua a ela o valor 25.
let idade = 25;

//Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numerosDeVendas = 50;

//Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

//Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert("Erro! Preencha todos os campos");

//Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

//Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let nome1 = prompt("Qual seu nome?");

//Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idade3 = prompt("Informe sua idade?");

//Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if(idade3 > 17){
    alert("Pode tirar a habilitação!");
}

//Condicionais e Concatenação:

//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaDaSemana = "Sábado";
let diaRecebido = prompt("Qual dia da semana é hoje?");
if (diaDaSemana == diaRecebido) {
    alert("Bom fim de semana!");
}
else{
    alert("Boa semana!");
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numeroRecebido = prompt("Digite um número: ");

if (numeroRecebido < 0) {
    alert("Número digitado é negativo!");
}else{
    alert("Numero digitado é positivo!");
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pntuacao = 99;

if (pntuacao >= 100) {
    alert("Parabéns, você venceu!");
}else{
    alert("Tente novamente para ganhar.");
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 100.50;
alert(`Seu saldo é de R$ ${saldo}`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome2 = prompt("Informe seu nome");
alert(`Seja bem vindo ${nome2}`);

//Loops e tentativas:

//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 0;

while(contador <= 10){
    alert(`Loop ${contador}`);
    contador++;
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador1 = 10;

while(contador1 >= 0){
    alert(`Loop ${contador1}`);
    contador1--;
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let contadorRegressivo = prompt("Informe um número");
while(contadorRegressivo >= 0){
    console.log(contadorRegressivo);
    contadorRegressivo--;
}

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let contadorProgressivo = 0;
let numeroDoUsuario = prompt("Informe um número");
while(contadorProgressivo <= numeroDoUsuario){
    console.log(contadorProgressivo);
    contadorProgressivo++;
}

// Boa Praticas de Programação

//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log(parseInt(Math.random() * 3) + 1);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome3 = prompt("Informe seu nome");
console.log(`Olá, ${nome3}!`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome4 = "Mikhail";
alert(`Olá, ${nome3}!`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`Linguágem: ${linguagem}`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
//  Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 1;
let valor2 = 1;
let resultado = valor1 + valor2;
console.log(`A soma de [${valor1} e ${valor2} é igual a ${resultado}.`)

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.
// Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
// Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor3 = 1;
let valor4 = 1;
let resultado1 = valor1 - valor2;
console.log(`A diferença entre [${valor1} e ${valor2} é igual a ${resultado}.`)

//Peça ao usuário para inserir sua idade com prompt.
// Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade2 = prompt("Informe sua idade");
if (idade2 > 17) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero.
// Use if-else para imprimir a respectiva mensagem.
let numero2 = prompt("Informe um valor.");
if (numero2 == 0) {
    console.log("O valor é zero.");
} else if (numero2 < 0) {
    console.log("O valor é negativo.");
} else {
    console.log("O valor é positivo.");
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let contador2 = 1;
while(contador2 <= 10){
    console.log(contador2);
    contador++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela.
// Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 6;
let aprovadoReprovado = note > 6 ? "Aprovado" : "Reprovado";
console.log(`Você foi ${aprovadoReprovado}`);

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log(Math.random() * 100);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
console.log(Math.random() * 10);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
console.log(parseInt(Math.random() * 1000) + 1);