// ---Prova Aula 03 JavaScript---
var estudantes = Number(prompt("Insira o numero total de estudantes:"))
   var contador = 0
   var soma = 0
   var media = 0
   var maiornota = 0
   var menornota = 10
   while(contador >= 0){
       if(contador == estudantes){
         console.log("Encerramos a média")
         break
       }
       var nota = Number(prompt("Digite a Nota:"))
       if (nota > maiornota){
        maiornota = nota
       }
       if (nota < menornota){
        menornota = nota
       }
       contador++
       soma = soma + nota
       media = (soma/contador)   
    }
    console.log(`Média ${media}`)
    console.log(`Maior nota igual ${maiornota}`)
    console.log(`Menor nota igual ${menornota}`)

   