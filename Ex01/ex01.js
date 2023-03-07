/*Obtenha dados da altura e o sexo (M OU F) de 15 pessoas e apresente os seguintes resultados
- A maior e menor altura do grupo;
- A média de altura dos homens;
- O número de mulheres.*/



var q;
var altura;
var sexo;
var maioralt = 0;
var menoralt = 0;
var mulher = 0;
var homem = 0;
var mediaAlturaHomem = 0;
var contamulher = 0;
var contahomem = 0;

            for(q = 1 ;q <= 15; q++) { //quantidade de vezes a ser perguntado//
 
                sexo = prompt("Qual o seu sexo, Feminino (F) ou Masculino (M)?");                
                altura = parseFloat(prompt("Qual a sua altura["+q+"]:"));



                if(q == 0) {//maior e menor altura//
                    menoralt = altura;
                } if(altura > maioralt) { 
                    maioralt = altura;
                } if(altura < menoralt) { 
                    menoralt = altura;
                } if(sexo == 'F') {//contagem de Mulheres//
                    mulher += altura;
                    contamulher++;
                } else if(sexo == 'M') {//contegem de Homens//
                    homem += altura;
                    contahomem++;
                }
            }
            mediaAlturaHomem = homem/contahomem;//media de homems//
           
            //valores pedidos//
            alert("A maior altura é:" + maioralt); 
            alert("A menor altura é:" + menoralt);
            alert("A média das Homens é:" + mediahomem);
            alert("O número de Mulheres é:" + contamulher);
