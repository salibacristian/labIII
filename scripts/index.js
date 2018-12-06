var lista = [];
const server_url = "http://localhost:3000/";
var xhr;

window.onload = asignarEventos;

function asignarEventos() {

    $("#btnAlta").click(function () {
        ejecutarTransaccion("Mostrar");
    });

    $("#btnInsertar").click(function () {
        ejecutarTransaccion("Alta");
    });

    $("#inputHeroe").change(function() {
        if(this.checked) 
            $("#inputVillano").prop("checked", false);        
    });

    $("#inputVillano").change(function() {
        if(this.checked) 
            $("#inputHeroe").prop("checked", false);        
    });

    ejecutarTransaccion("actualizarLista");

}

function Personaje(id, nombre, apellido, alias, edad, lado) {
    //contructor de objeto Personaje
    let newHeroe = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        alias: alias,
        edad: edad,
        lado: lado
    };
    return newHeroe;
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
    let id = $('#inputId').val();
    let nombre = $('#inputName').val();
    let apellido = $('#inputLastname').val();
    let alias = $('#inputAs').val();
    let edad = $('#inputAge').val();
    let lado = $("#inputVillano").is(':checked') ? 2 : 1;
    let nuevoPersonaje = Personaje(id,nombre,apellido,alias,edad,lado);
    ejecutarTransaccion("Insertar", nuevoPersonaje);
    cerrarFormulario();
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

// function traerListaHeroes(callback) {

//     toggleSpinner();
//     $.ajax({
//         type: "get",
//         url: server_url + "traer?collection=heroes"         
//    })
//    .then(function(response){  
//         toggleSpinner();
//         callback(response.data);
//    },function(error){
//         toggleSpinner();
//         console.log(error);
//     //    swal({
//     //     title: "Error",
//     //     text: "Hubo un error al cargar el listado",
//     //     type: "error",
//     //     showCancelButton: false,
//     //     cancelButtonClass: "btn-info",
//     //     cancelButtonText: "cerrar"
//     //     });
//    });

// }

function traerListaHeroes(callback) {
    if (localStorage.getItem("mainList") !== null) {
        let list = JSON.parse(localStorage.getItem("mainList"));
        callback(list);    
    }
}

function toggleSpinner(){
    $('#spinner').toggle(3000);
    $('#mainTable-body').toggle(3000);
}

function insertarHeroe(heroe) {

    // Acá va el código de la peticion ajax para insertar el nuevo heroe (POST)
    // var data = {
    //     "collection":"heroes",
    //     "heroe": heroe
    // }

    
    lista.push(heroe);
    localStorage.setItem('mainList',JSON.stringify(lista));
    ejecutarTransaccion("actualizarLista");
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

function mostrarFormulario(){
    let form = $("#edit-form");  
    form.animate({ right: '30%', padding: '10px' }, "200");  
    form.show('slow');    
    form.animate({ right: '25%', padding: '50px' }, "200");        
    
}

function cerrarFormulario(){
    let form = $("#edit-form");  
    form.animate({ right: '30%', padding: '10px' }, "200");        
    form.hide('slow');  
    $('#inputId').val('');
    $('#inputName').val('');
    $('#inputLastname').val('');
    $('#inputAs').val('');
    $('#inputAge').val('');
    
}

