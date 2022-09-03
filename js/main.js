function solicitarDatos() {
    alert("Bienvenido a Floristería Turrialba. ¡Es un gusto atenderle!")
    let nombre = prompt("Ingrese su nombre");
    while(nombre === "")
    nombre = prompt("Ingrese su nombre");
    let apellido = prompt("ingrese su apellido");
    while(apellido === "")
    apellido = prompt("ingrese su apellido");
    alert("Hola " + nombre + " " + apellido + "!");
}

solicitarDatos();

function flores (nombre, precio) {
    this.name = nombre;
    this.price = precio;
    this.agregarPedido = () => {
        Pedido.push(this.name);
        total = this.price + total;
    }
}

const flor1 = new flores ("Lirio", 6500)
const flor2 = new flores ("Rosa", 7500)
const flor3 = new flores ("Tulipan", 15000)
const flor4 = new flores ("Begonia", 4000)
const flor5 = new flores ("Hortensia", 4500)
const flor6 = new flores ("Orquidea", 20000)

let total = 0;
const Pedido = []
let reservar = true;

while (reservar) {
    let producto = prompt("¿Qué flor desea llevar?\nLirio\nRosa\nTulipan\nBegonia\nHortensia\nOrquidea\nPara cerrar su pedido escriba'Finalizar pedido'.")
    
    if (producto === "Lirio") {
            flor1.agregarPedido();
            console.log(Pedido);
        }

            else if (producto === "Rosa") {
                flor2.agregarPedido();
                console.log(Pedido);
                }

            else if (producto === "Tulipan") {
                flor3.agregarPedido();
                console.log(Pedido);
                }

            else if (producto === "Begonia") {
                flor4.agregarPedido();
                console.log(Pedido);
                }
        
            else if (producto === "Hortensia") {
                flor5.agregarPedido();
                console.log(Pedido);
                }

            else if (producto === "Orquidea") {
                flor6.agregarPedido();
                console.log(Pedido);
                }

            else if (producto === "Finalizar pedido") {
                reservar = false;
                console.log("Las flores seleccionadas en su pedido son:\n"+Pedido.join("\n")+".\nEl precio total de su pedido es ₡"+total);
            }

            else {
                alert("No seleccionaste ninguna flor");
            }
        }

flores();

flores= [];
flores.push(flor1,flor2,flor3,flor4,flor5,flor6)

let encontrado= flores.find(el=>{
    return el.name === "Rosa";
})

console.log(encontrado);

let precioMayor= flores.filter(el=>{
    return el.price > 10000;
})

console.log(precioMayor)




console.log("--------Ejercicio Extra--------");
console.log("--------Agrupa a los alumnos en las diferentes secciones--------");
// Ejercicio Extra 
// Agrupa a los alumnos en las diferentes secciones
const alumnos = [
    {
        nombre: "José",
        apellido: "Parra",
        edad: 19,
        seccion: "A"
    },
    {
        nombre: "Daniel",
        apellido: "Zúñiga",
        edad: 19,
        seccion: "B"
    },
    {
        nombre: "Johan",
        apellido: "Riverol",
        edad: 20,
        seccion: "A"
    },
    {
        nombre: "Jonathan",
        apellido: "Vives",
        edad: 21,
        seccion: "C"
    },
    {
        nombre: "Martin",
        apellido: "Centurión",
        edad: 18,
        seccion: "C"
    },
    {
        nombre: "Diego",
        apellido: "Lopez",
        edad: 20,
        seccion: "F"
    },
    {
        nombre: "Alfredo",
        apellido: "Venegas",
        edad: 21,
        seccion: "B"
    },
    {
        nombre: "Alfonso",
        apellido: "Romero",
        edad: 18,
        seccion: "A"
    },
    {
        nombre: "Antonio",
        apellido: "Torres",
        edad: 23,
        seccion: "C"
    },
    {
        nombre: "Dwayne",
        apellido: "Johnson",
        edad: 21,
        seccion: "A"
    },
]

let grupos = {};
alumnos.forEach(alumno => {
    const nombreGrupo = alumno.seccion;
    if(!grupos[nombreGrupo]) grupos[nombreGrupo] = [];
    grupos[nombreGrupo].push(alumno);
});
console.log("Grupos", grupos);