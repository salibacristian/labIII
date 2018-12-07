var lista = [];
const server_url = "http://localhost:3000/";
var xhr;
var onclickrow;

window.onload = asignarEventos;

function asignarEventos() {

    $("#agesPanel").slideToggle(1);

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

   onclickrow = function(e){
        traerIdHeroe(e);
   }

   $("#btnMod").click(function () {
    ejecutarTransaccion("Modificacion");
    });

    $("#btnEliminar").click(function () {
        ejecutarTransaccion("Baja");
        });

    $("#selectedType").change(function () {
        calculateAges($("#selectedType").val());
    });
    

    ejecutarTransaccion("actualizarLista");

}

function Personaje(id, nombre, apellido, alias, edad, lado, editorial) {
    //contructor de objeto Personaje
    let newHeroe = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        alias: alias,
        edad: edad,
        lado: lado,
        editorial: editorial
    };
    return newHeroe;
}

function traerIdHeroe(id) {

    var heroe = lista.find(x => x.id == id);
    if(heroe)
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
    let editorial = $("#inputEditorial").val();
    let nuevoPersonaje = Personaje(id, nombre, apellido, alias, edad, lado, editorial);
    ejecutarTransaccion("Insertar", nuevoPersonaje);
    cerrarFormulario();
}


function eliminarPersonaje() {
    var id = $('#inputId').val();
    var heroe = lista.find(x => x.id == id);
    ejecutarTransaccion("Eliminar", heroe);
    cerrarFormulario();
}

function modificarPersonaje() {
    let id = $('#inputId').val();
    let nombre = $('#inputName').val();
    let apellido = $('#inputLastname').val();
    let alias = $('#inputAs').val();
    let edad = $('#inputAge').val();
    let lado = $("#inputVillano").is(':checked') ? 2 : 1;
    let editorial = $("#inputEditorial").val();
    var personajeModificado = new Personaje(id, nombre, apellido, alias, edad, lado, editorial);
    ejecutarTransaccion("Modificar", personajeModificado);
    cerrarFormulario();


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
    //LOCAL STORAGE

    var index = lista.indexOf(heroe);
    lista.splice(index,1);
    localStorage.setItem('mainList',JSON.stringify(lista));
    ejecutarTransaccion("actualizarLista");
}

function modificarHeroe(heroe) {

      // Acá va el código de la peticion ajax para insertar el nuevo heroe (POST)
      var data = {
        "collection":"heroes",
        "heroe": heroe
    }
    //AGREGAR CODIGO PARA MODIFICAR EL HEROE

    //LOCAL STORAGE
    var heroeOld = lista.find(x => x.id == heroe.id);
    var index = lista.indexOf(heroeOld);
    lista[index] = heroe;
    localStorage.setItem('mainList',JSON.stringify(lista));
    ejecutarTransaccion("actualizarLista");
}

function mostrarFormulario(heroe){
    let form = $("#edit-form");  
   
    if(heroe){
        let isHero = heroe.lado == 1;
        $('#inputId').val(heroe.id);
        $('#inputId').prop("disabled", "disabled");
        $('#inputName').val(heroe.nombre);
        $('#inputLastname').val(heroe.apellido);
        $('#inputAs').val(heroe.alias);
        $('#inputAge').val(heroe.edad);
        $("#inputHeroe").prop("checked", isHero);  
        $("#inputVillano").prop("checked", !isHero);  
        $('#inputEditorial').val(heroe.editorial);
        $('#btnInsertar').hide();
        $('#btnMod').show();
        $('#btnEliminar').show();
    }


   
    form.animate({ right: '30%', padding: '10px' }, "200");  
    form.show('slow');    
    form.animate({ right: '25%', padding: '50px' }, "200");        
    
}

function cerrarFormulario(){
    $('#btnInsertar').show();
    $('#btnMod').hide();
    $('#btnEliminar').hide();
    let form = $("#edit-form");  
    form.animate({ right: '30%', padding: '10px' }, "200");        
    form.hide('slow');  
    $('#inputId').val('');
    $('#inputId').prop("disabled", "");
    $('#inputName').val('');
    $('#inputLastname').val('');
    $('#inputAs').val('');
    $('#inputAge').val('');
    $('#inputEditorial').val('');
    
}

function validate(isEdit = false){
    var rv = {isValid: true, message: ''};

    var id = $('#inputId').val();
    var age = $('#inputAge').val();
    if(!isEdit){
        if(id == '')
        {
            rv.isValid = false;
            rv.message += "Ingrese ID. "; 
        }
        if(lista.find(x => x.id == id)){
            rv.isValid = false;
            rv.message += "El id ingresado ya existe. ";
        }  
    }  
    if($('#inputName').val() == ''){
        rv.isValid = false;
        rv.message += "Ingrese un nombre. ";
    }
    if($('#inputLastname').val() == ''){
        rv.isValid = false;
        rv.message += "Ingrese un apellido. ";
    }
    if(age < 1) {//parseint?
        rv.isValid = false;
        rv.message += "La edad debe ser mayor a 0. ";
    }
    
    return rv;

}

function slideAgesPanel(){
    $("#agesPanel").slideToggle(500);
    $("#iconSlide").toggleClass("fa fa-arrow-down");
    $("#iconSlide").toggleClass("fa fa-arrow-up");
    
}

function calculateAges(filter){
    $("#agesAvg").val('');
    $("#olderName").val('');

    if(lista.length < 1)
        return;

    let filteredList = lista;

    if(filter != 0)
        filteredList = filteredList.filter(x => x.lado == filter);

    if(filteredList.length < 1)
        return;

    let ageSum = filteredList.reduce(function(sum,x){
        return sum + parseInt(x.edad);
    },0); 
    
    let avg = ageSum / filteredList.length;

    let older = filteredList.reduce(function(older, x){
        return x.edad > older.edad ? x : older;
     },{edad:0});     

     $("#agesAvg").val(avg);
     $("#olderName").val(older.apellido + ' ' + older.nombre);
}
