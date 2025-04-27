//Bucle for
const miLista = ["velma", "exploradora", "jane", "john", "harry"];
for (nombre in miLista) {
	console.log(miLista[nombre]);
}

//Bucle while
let i = 0;
while (i < miLista.length) {
	console.log(miLista[i]);
	i++;
}

//Función flecha
const funcion = () => console.log("Hola mundo");
funcion();
