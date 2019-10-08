// nome = "henrique"
/* var nome = "";
var numero 0;
alert (nome);
nome = 5;
alert (nome);
numero = 3; Int
numero = 3.2; double/float */

//Operadores 
 /*Aritimeticos :  +,-,*./

 comparação:  >,>=,<,<=, ==,!=

 logicos: e (end), ou (or),nao (not) --> python
 e (&&), ou (||), nao (!) --> javascript

 //Estruturas

 var n1 = 2;
 var n2 = 5;
 if (expressao logica ){
     comandos;
 }
 // exemplo:
 var n1 = 2;
 var n2 = 5;
 if (n1 < n2){
     alert ("Verdadeiro");
 }
 else if(n1 >n2){
     alert ("verdadeiro 2");
    
 }
 else{
     alert ("false");
 } */



//estruturas de repetição

/*var cont =0;
while (cont<=5){
    alert (cont);
    cont = cont +1;
}
*/

//for x in range (10): --> python
/*for (var x=0; x<=10, x++){
    alert (x);
}
var x=0;
for (var x; x<=10; x++){
    alert (x + "Henrique" + "Lopes");
}*/

//funçao para somar
/*function somar (){
        alert(2+3);
}
somar (); // chamando a funçao. 

function subtrair (n1,n2){
    alert (n1-n2);
}

subtrair (9,3)*/

// funçao com return
/*function  somar (){
    return (2+3);
}
alert (somar());

function subtrair (n1,n2){
    return (n1-n2);
}
alert (subtrair(9,3)); */

/*function escrever_numero(){
        var n = 0;
        while (n<=10){
            document.write (n + "<br/>");
            n++
        }
}
escrever_numero();

Criar uma funçao que a escreva a tabuada do numero 5 na tela no seguinte formato:
5 x0 =5 
5x1 = 5
5x2 = 10
*/


// com estrutura while
function tabuada (){
    var cont = 0;
    document.write("usando while <br/>");
    while (cont <=10){
        document.writeln("5 x" + cont + "=" + 5 * cont + "<br/>");
    }
}
tabuada ();

// com estrutura for 
 function tab (){
     for ( var i=0; i<=10; i++){
        document.writeln("5 x" + i + "=" + 5 * i + "<br/>");
     }
 }
tab ();
