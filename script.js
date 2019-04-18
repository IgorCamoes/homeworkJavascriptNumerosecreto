function gerarNumero(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min));
  }

let nmrSecreto = gerarNumero(0,50);
let nmrTentativa;
let i;

alert("Olá, bem vindo ao PLACEHOLDERNAME.");
alert("Tente adivinhar o número secreto de 0 a 50.");


for(i=10; i > 1; i--){
	
	nmrTentativa = prompt("Último número ")

	if(nmrTentativa == nmrSecreto){
	alert("Parabéns você acertou! O número secreto era " + nmrSecreto + " .");
	break
	}

	else if(nmrTentativa > nmrSecreto){
	alert("O número colocado (" + nmrTentativa + ") é MAIOR que o número secreto, tente novamente.");
	}

	else if(nmrTentativa < nmrSecreto){
	alert("O número colocado(" + nmrTentativa + ") é MENOR que o número secreto, tente novamente.");
	 }

}

if(i = 0){
	alert("Que pena, você não conseguiu, reinicie a página se quiser tentar novamente.");

	}