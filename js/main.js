//Desafío Complementario
//Crear un algoritmo utilizando un ciclo

/* Elaborar un algoritmo que obtenga el promedio de estatura para un grupo determinado de personas, dicho número de individuos es
desconocido.
El ciclo debe realizarse siempre y cuando se registre una estatura, es decir el número de estaturas debe ser mayor a 0 (cero)*/


let estatura = parseInt(prompt("Ingrese la estatura:"));
let cantidadPersonas = 0; //Variable de cantidad de personas
let sumaEstatura = 0; //Variable de estaturas de las personas
let resultado;

while (estatura > 0) {
    estatura = parseInt(prompt("Ingrese la estatura:"));
    cantidadPersonas = cantidadPersonas + 1;
    sumaEstatura = sumaEstatura + estatura;
    resultado = (sumaEstatura/cantidadPersonas);
}

if (cantidadPersonas === 0) {
    console.log("No se ingresaron estaturas.");
}else{
    console.log("El promedio de estaturas de las " + cantidadPersonas + " personas es de: " + resultado +
    " centrimetros.");
}


/* Un programa para conocer en sueldo total de un trabajador, de acuerdo a su área, tomando en consideración los descuentos de renta,
jubilacion e seguro.
Antes de realizar los calculos, el sistema debe permitir un número que se asocie al área en la que labora. Las áreas son Ingenieros,
Docentes, Gerentes, Otras profesiones */


let sueldoIngeniero = 1200;
let sueldoDocente = 800;
let sueldoGerente = 900;
let otrasProfesiones = 400;

let renta = 0.1; //(10%) 10/100
let jubilacion= 0.0725; //(7.25%) 7.25/100
let seguro = 0.0625; //(6.25%) 6.25/100

let numero = parseInt(prompt("Ingrese un número del 1 al 4" + 
"\n 1 para Ingeniero" + 
"\n 2 para Docente" + 
"\n 3 para Gerente" + 
"\n 4 para Otras profesiones"));

if (numero == 1){
    let nrenta = sueldoIngeniero * renta;
    let njubilacion = sueldoIngeniero * jubilacion;
    let nseguro = sueldoIngeniero * seguro;
    let totalpagar = sueldoIngeniero - nrenta - njubilacion - nseguro;
    console.log("El sueldo total del Ingeniero es: " + totalpagar + " colones CRC");

}else if(numero == 2){

    let nrenta = sueldoDocente * renta;
    let njubilacion = sueldoDocente * jubilacion;
    let nseguro = sueldoDocente * seguro;
    let totalpagar = sueldoDocente - nrenta - njubilacion - nseguro;
    console.log("El sueldo total del Docente es: " + totalpagar + " colones CRC");

}else if(numero == 3){

    let nrenta = sueldoGerente * renta;
    let njubilacion = sueldoGerente * jubilacion;
    let nseguro = sueldoGerente * seguro;
    let totalpagar = sueldoGerente - nrenta - njubilacion - nseguro;
    console.log("El sueldo total del Gerente es: " + totalpagar + " colones CRC");
    
}else if(numero == 4){

    let nrenta = otrasProfesiones * renta;
    let njubilacion = otrasProfesiones * jubilacion;
    let nseguro = otrasProfesiones * seguro;
    let totalpagar = otrasProfesiones - nrenta - njubilacion - nseguro;
    console.log("El sueldo total de OStras profesiones es: " + totalpagar + " colones CRC");

}else{
    console.log("No se ha ingresado un número válido. ¡Vuelve a intentarlo!");
}