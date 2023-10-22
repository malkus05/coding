/*crea un contedo de 1 en uno hasta 10*/

/*for (let i = 0; i<10; i++){
    console.log(i)
}
*/
/*crea un arreglo y obtiene el lugar 4 del arreglo*/

let frutas = ["manzana","pera","naranja","uva","limon"]
console.log(frutas[4])

/*medir el tamaño del arreglo*/

console.log(frutas.length) 

/*nombra cada uno de los elementos del arreglo)*/

/*for(let i=frutas.length; i>=0; i--){
    console.log(frutas[i])
}
*/
let calificaciones = [10,7,9,85,95,100,50,20];
let total = 0;

for (let i = 0; i < calificaciones.length; i++){
    total = total + calificaciones [i];
    total += calificaciones[i];
}
    console.log(total);
    console.log(calificaciones.length)
    console.log(752 / 8)
    console.log(total / calificaciones.length)

/*preguntar si un numero es par*/
for(let i = 0; i<=100; i++){
    if(i % 2 == 1){
        console.log(i + " es impar")
    }else{
        console.log(i + " es par")    
    }
}

