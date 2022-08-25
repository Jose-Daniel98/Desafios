//Desafío #2
//Simulador Interactivo

/* Dar por pantalla un menú que tenga las siguientes opciones: 1. Calcular el factorial de un número. 2. El promedio de una
calificación. 3. Conversor de grados: Celsuis a Farenheit. 4. Lista de números pares e impares.*/

//1- FACTORIAL DE UN NUMERO
function factorial(numero){
    let numeroFactorial = 1;
    for (let i = 1; i <= numero; i++) {
        numeroFactorial = numeroFactorial * i;
    }
    return numeroFactorial;
}

//PROMEDIO DE CALIFICACIONES
function calcularPromedio() {
    let total = 0;
    let calificacionFinal = 0;

    for (let i = 1; i <= 4; i++){
        let calificacionMateria = prompt("Ingrese la calificación de la materia: " + i);
        let nuevaCalificacion = parseInt(calificacionMateria);
        total = total + parseInt(nuevaCalificacion);
    }

    calificacionFinal = parseInt(total)/4;
    alert("La suma de las calificaciones es: " + total +"."+ " Calificación final: " + calificacionFinal);
    if (calificacionFinal >= 9) {
        nota = "Excelente";
    }else if(calificacionFinal >= 8){
        nota = "Muy bien";
    }else if(calificacionFinal >= 7){
        nota = "Bien";
    }else if(calificacionFinal >= 6){
        nota = "Regular";
    }else{
        nota = "Reprobado";
    }
    return(calificacionFinal);
}

//CONVERSOR DE GRADOS: CELSIUS A FARENHEIT
function conversorGradFaren(tipo, gradosFarenheitCelsius){
    let grados = 0;
    if(tipo == "Celsius"){
        grados = (gradosFarenheitCelsius - 32)/1.8;
    }else{
        grados = gradosFarenheitCelsius * 1.8 + 32;
    }
    return grados;
}

//NUMEROS PARES E IMPARES
function impares(numero, tipo){
    let i = 1;
    let par = numero/2;
    if (tipo == 1){
        alert("Ingrese al 1- Impares");
        while (i <= numero) {
            let impar = i % 2;
            if(impar != 0){
                alert("Número impar: " + i);
            }
            i++;
        }
    }else{
        alert("Ingrese al 0- Pares");
        while (i <= par) {
            let numeroPar = i*2;
            alert(`Número par:  ${numeroPar}`);
            i++;
        }
    }
    return;
}

//PROGRAMA CON MENU
let opcion = 0;
let nota = " ";
while (opcion != 5) {
    opcion = prompt("Menú Principal:\n1- Calcular el factorial de un número.\n2- El promedio de una calificación\n3- Conversor de grados: Celsuis a Farenheit\n4- Lista de números pares e impares.\n5- Salir.\nIngrese una opción: ");
    if (opcion == 1) {
        numero = prompt("Ingrese un número, para poder calcular el factorial: ");
        numeroFactorial = factorial(numero);
        alert(`El factorial del número ingresado es: ${numeroFactorial}`);
    }else if (opcion == 2) {
        calificacionFinal = calcularPromedio();
        alert(`El promedio final es: ${calificacionFinal} + corresponde a: ${nota}`);
    }else if(opcion == 3) {
        let tipo = prompt("Desea convertir a: F. Farenheit / C. Celsius.");
        let gradosFarenheitCelsius = prompt("Ingrese los grados: ");
        let grados = conversorGradFaren(tipo, gradosFarenheitCelsius);
        alert(`La conversión a grados es: + ${gradosFarenheitCelsius} ${tipo} + es:  + ${grados}`);
    }else if(opcion == 4) {
        let tipo = prompt("Desea imprimir los números: 0. Pares / 1. Impares.");
        let numero = prompt("Cuantos números de ingresar?: ");
        impares(numero, tipo);
    }else if(opcion == 5){
        alert("¡Gracias por su tiempo! ¡Vuelva pronto!");
    }else{
        alert("Opción inválida, verifique e intente de nuevo.");
    }
}