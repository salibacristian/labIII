function ejecutarTransaccion(transaccion, heroe) {

    switch (transaccion) {

        case "Mostrar":

            mostrarFormulario();            
            break;

        case "MostrarHeroe":

            mostrarFormulario(heroe);
            break;

        case "Alta":
            if(validate().isValid)
                altaPersonaje();
            else swal('Error',validate().message,'error');
            break;

        case "Baja":

            eliminarPersonaje();
            break;

        case "Modificacion":

            modificarPersonaje();
            break;

        case "Insertar":

            insertarHeroe(heroe);
            break;

        case "Eliminar":

            eliminarHeroe(heroe);
            break;

        case "Modificar":

            modificarHeroe(heroe);
            break;

        case "actualizarLista":

            traerListaHeroes(manejarActualizarLista);
            break;
    }

}

function manejarActualizarLista(l){
    if(l != null)
        lista = l;
    actualizarTabla(lista);
}

function actualizarTabla(lista){
    $("#mainTable-body").html('');
    let row = '';
    let lado = '';
    lista.forEach(heroe => {
        lado = heroe.lado == 1 ? 'Heroe' : 'Villano';
        row = '<tr onclick = "onclickrow('+ heroe.id +')">';
        row += '<td>'+ heroe.id +'</td>';
        row += '<td>'+ heroe.nombre +'</td>';
        row += '<td>'+ heroe.apellido +'</td>';
        row += '<td>'+ heroe.alias +'</td>';
        row += '<td>'+ heroe.edad +'</td>';
        row += '<td>'+ lado +'</td>';
        row += '<td>'+ heroe.editorial +'</td>';
        row += '</tr>';
        $("#mainTable-body").append(row);
    });
}


