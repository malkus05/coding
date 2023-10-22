//declarar una funcion//
function obtenerMarcador() {
    var partido1 = 3;
    var partido2 = 3;

function agregar( ) {
    var nombre = "Juanito";
    return nombre + "Anoto" + (partido1 + partido2) + "goles"
} 
return agregar()
}
obtenerMarcador()

//declarar funcion 2//
function saludar(){
    console.log("hola mundo");
}
saludar()
// fin del apunte//

//funcion return//

function saludar(){
    return"hola mundo";
}
const saludo = saludar();
console.log(saludar);

//funcion argumentos_1//

function saludar (nombre){
    return "Hola" +" " + nombre
}
const resultado =saludar ("Maycol")
console.log(resultado)

//funcion matematica//
function sumar (x,y){
let resultado = (x + y) / x;
console.log(resultado);
return resultado;
}

sumar(10,5)

//funcion scope//

function scopeLocal() {
    const x=100;
    console.log(x)

}
scopeLocal()

//funcin scope parametros//
function sumar2 (x,y){
     console.log(x + y);
    }
    
    let x = 10;
    sumar2(x, 1)

console.log(1);

setTimeout(function());{
    console.log(2)
},5000;

console.log(3)
