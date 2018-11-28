var lista;
const server_url = "http://localhost:3000/";
var xhr;

window.onload = asignarEventos;

function asignarEventos() {

    btnAlta.onclick = function () {
        ejecutarTransaccion("Mostrar");
    }

    ejecutarTransaccion("actualizarLista");

}

function Personaje(id, nombre, apellido, alias, edad, lado) {
    //contructor de objeto Personaje

}

function traerIdHeroe(e) {

    //Este manejador de evento se ejecutra cuando se hace click en la grilla dinamica.
    //Propuesta: 1)Busco en el DOM el id del personaje a eliminar

    //2)Me traigo el heroe de la lista, haciendo una funcion de buscar, como por ejemplo:
    //var heroe = lista[buscarHeroe(lista, id)];
    //3)llamo a ejecutarTransaccion
    ejecutarTransaccion("MostrarHeroe", heroe);

}

function altaPersonaje() {
//genero un nuevo "Personaje", y lo inserto

    ejecutarTransaccion("Insertar", nuevoPersonaje);
}


function eliminarPersonaje() {
    //Propuesta: 1)Busco en el DOM el id del personaje a eliminar

    //2)Me traigo el heroe de la lista, haciendo una funcion de buscar, como por ejemplo:
    //var heroe = lista[buscarHeroe(lista, id)];
    //3)llamo a ejecutarTransaccion
    ejecutarTransaccion("Eliminar", heroe);

    //Aca va alguna animacion para cerrar el formulario

}

function modificarPersonaje() {
    //agregar codigo que crea necesario

    var personajeModificado = new Personaje(id, nombre, apellido, alias, edad, lado);
    ejecutarTransaccion("Modificar", personajeModificado);
    //animacion para cerrar formulario

}

function traerListaHeroes(callback) {
    //ESTA FUNCION RECIBE COMO PARAMETRO UN CALLBACK, POR SI SE QUIERE USAR 
    //PARA REFRESCAR LA TABLA A LA VUELTA DE LA PETICION AL SERVIDOR
    //VER EN CONTROLADOR.JS LA FUNCION ejecutarTransaccion PARA case "actualizarLista"

}

function insertarHeroe(heroe) {

    // Acá va el código de la peticion ajax para insertar el nuevo heroe (POST)
    var data = {
        "collection":"heroes",
        "heroe": heroe
    }
    //AGREGAR CODIGO PARA INSERTAR EL HEROE
}

function eliminarHeroe(heroe) {
    var data = {
        "collection":"heroes",
        "id": heroe.id
    }
    //AGREGAR CODIGO PARA ELIMINAR EL HEROE
}

function modificarHeroe(heroe) {

      // Acá va el código de la peticion ajax para insertar el nuevo heroe (POST)
      var data = {
        "collection":"heroes",
        "heroe": heroe
    }
    //AGREGAR CODIGO PARA MODIFICAR EL HEROE
}