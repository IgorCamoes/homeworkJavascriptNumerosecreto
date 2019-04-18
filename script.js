let nmrSecreto = mathFloor(mathRandom( * 51));
let nmrTentativa;
let i;

alert("Olá, bem vindo ao PLACEHOLDERNAME.");
alert("Tente adivinhar o número secreto de 0 a 50.");

for(i=10; i < 1; i--;){
	
nmrTentativa = prompt("Você tem " + i + " tentativas. ");

if(nmrTentativa == nmrSecreto){
	alert("Parabéns você acertou! O número secreto era " + nmrSecreto + " .");
}

else if(nmrTentativa > nmrSecreto){
	alert("O número colocado é maior que o número secreto, tente novamente.");
}

else{
	alert("O número colocado é menor que o número secreto, tente novamente.");
 }
}

if(i = 0){
	alert("Que pena, você não conseguiu, reinicie a página se quiser tentar novamente.");
}