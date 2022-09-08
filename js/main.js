//Interactuar con el HTML

const h2 = document.getElementById("h2");
const parrafo = document.getElementsByTagName("p");
const parrafoClases = document.getElementsByClassName("parrafo");
const contenedor= document.getElementById('contenedor');
const input= document.getElementById('ingreso');
const ul = document.getElementById('lista');
const texto = document.createElement('p');

//innerText
parrafo[0].innerText="Estoy estudiando Javascript"
parrafo[1].innerText="Debo interactuar con el HTML"
parrafo[2].innerText="Para cumplir con el desafio"

h2.innerText= "Desafío: Interactuar con HTML"
texto.innerText = "Lista de los productos";

//style
texto.style.color = "blue";


contenedor.append(texto);

const servicios = [
  { id: 1, nombre: "Lirio", precio: 1200},
  { id: 2, nombre: "Rosa", precio: 1800},
  { id: 3, nombre: "Tulipan", precio: 2800},
  { id: 4, nombre: "Begonia", precio: 1500},
  { id: 5, nombre: "Hortensia", precio: 1200},
  { id: 6, nombre: "Orquidea", precio: 1900},
];

for (const servicio of servicios) {

  let li = document.createElement('li')

  li.innerHTML=`
  <h3>${servicio.nombre}</h3>
  <p>${servicio.precio}</p>
  <br />
  </div>
 `
  ul.append(li)
}

solicitarNombre();
solicitarInformación();

// Ingresar datos por pantalla
function solicitarNombre() {
  let nombre = prompt("Ingrese su nombre");
  while(nombre === "")
  nombre = prompt("Ingrese su nombre");
  let apellido = prompt("ingrese su apellido");
  while(apellido === "")
  apellido = prompt("Ingrese su apellido");
  document.write("Hola " + nombre + " " + apellido + "!");
}

function solicitarInformación() {
  let informacion = prompt("Ingrese lo que guste escribir: ")
  while(informacion === "")
  informacion = prompt("Ingrese lo que guste escribir:");
  console.log("Lo que escribió fue: " + informacion);
  document.write("Ingrese un mensaje para mostar en el html: " + informacion);
}