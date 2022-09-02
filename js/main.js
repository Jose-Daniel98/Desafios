//Desafío Complementario
//Desafío: Incorporar Arrays

// 1- Solicitar al usuario 6 (seis) números y muestre el valor mayor y menor.
// 2- Usando el ejercicio #1 (uno) | Igual que el ejercicio anterior pero que solicite números hasta que el usuario indique "fin".


// 1- Solicitar al usuario 6 (seis) números y muestre el valor mayor y menor.
// window.onload = function () {
    // console.log("Hola");
    let mayor = 0;
    let menor = 99999;
    let numeros = [];
    //For para capturar los datos e ingresar al array
    for (let index = 0; index < 6; index++) {
        numeros[index] = parseInt(prompt("Ingrese un número y te digo cual es el mayor y el menor de los seis"));
    }
    //Se recorre el array y se comprueba cual es el número mayor y el número menor dentro del array
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > mayor) {
            mayor = numeros[index];
        }
        if(numeros[index] < menor){
            menor = numeros[index];
        }
    }
    console.log("La comprobación ha finalizado.");
    console.log("El número mayor es " + mayor);
    console.log("El número menor es " + menor);
// }


// 2- Usando el ejercicio #1 (uno) | Igual que el ejercicio anterior pero que solicite números hasta que el usuario indique "fin".

let mayor1 = 0;
    let menor1 = 99999;
    let numeros1 = [];
    let usuario = "";
    do {
        usuario = prompt("Ingresa un número o escribe 'fin' para terminar");
        if(usuario != "fin"){
            usuario = parseInt(usuario);
            numeros1.push(usuario);
        }
    } while (usuario != "fin");

    //Se recorre el array y se comprueba cual es el número mayor y el número menor dentro del array
    for (let index = 0; index < numeros1.length; index++) {
        if (numeros1[index] > mayor1) {
            mayor1 = numeros1[index];
        }
        if(numeros1[index] < menor1){
            menor1 = numeros1[index];
        }
    }
    if(numeros1.length > 2){
        console.log("La comprobación ha finalizado.");
        console.log("El número mayor es " + mayor1);
        console.log("El número menor es " + menor1);
    }else{
        console.log("Números insuficientes para realizar la comprobación de números mayores y menores.");
    }