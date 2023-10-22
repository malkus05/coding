//*var index = 0;

/*while(index<1001){
    console.log(index);
    index++;
}
*/
/*
let arreglo = [1,2,3,4,5,6,7,8,9,10,"Gaby"]

let userInput;
while(!(userInput=="")){
    userInput = prompt("agregar algo al arreglo")
    arreglo.push(userInput);
} 
console.log(arreglo);
*/

/*Ejemplo While*/

/*var contador = 57;
for (var index= 1; index<= 10; index++){
    if (index % 2 ==0){
        contador = contador + 1;
        console.log("{index} es multiplo de 2");
    }
}
*/

for(var indice = 1; indice <= 10; index++){
    if(indice % 2 ==0){
        contador++;
        console.log(indice + "es multiplo de 2");
    }
}
console.log("de 1 a 10 existen en "+contador+"pares")