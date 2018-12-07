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
            if(validate(true).isValid)
                modificarPersonaje();
            else swal('Error',validate(true).message,'error');            
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
        //creo la row
        row = '<tr onclick = "onclickrow('+ heroe.id +')">';
        row += '<td>'+ heroe.id +'</td>';
        row += '<td>'+ heroe.nombre +'</td>';
        row += '<td>'+ heroe.apellido +'</td>';
        row += '<td>'+ heroe.alias +'</td>';
        row += '<td>'+ heroe.edad +'</td>';
        row += '<td>'+ lado +'</td>';
        row += '<td>'+ heroe.editorial +'</td>';
        row += '</tr>';
        //inserto la row
        $("#mainTable-body").append(row);
    });
}

function filterColumns(){   
    
    let params = [];
    params.push({ colName: "Id", checked: $("#cbId").is(':checked') });
    params.push({ colName: "Nombre", checked: $("#cbNombre").is(':checked') });
    params.push({ colName: "Apellido", checked: $("#cbApellido").is(':checked') });
    params.push({ colName: "Alias", checked: $("#cbAlias").is(':checked') });
    params.push({ colName: "Edad", checked: $("#cbEdad").is(':checked') });
    params.push({ colName: "Lado", checked: $("#cbLado").is(':checked') });
    params.push({ colName: "Editorial", checked: $("#cbEditorial").is(':checked') });
   
    $("#mainTable-head").html('');
    let head = "<tr>";
    params.forEach(x => {
        if(x.checked){
            head += "<th>"+x.colName+"</th>";
        } 
    });
    head += "</tr>";
    $("#mainTable-head").html(head);

    $("#mainTable-body").html('');
    let row = '';
    let lado = '';
    lista.forEach(heroe => {
        lado = heroe.lado == 1 ? 'Heroe' : 'Villano';
        row = '<tr onclick = "onclickrow('+ heroe.id +')">';
        if(params[0].checked)
            row += '<td>'+ heroe.id +'</td>';
        if(params[1].checked)
            row += '<td>'+ heroe.nombre +'</td>';
        if(params[2].checked)
            row += '<td>'+ heroe.apellido +'</td>';
        if(params[3].checked)
            row += '<td>'+ heroe.alias +'</td>';
        if(params[4].checked)
            row += '<td>'+ heroe.edad +'</td>';
        if(params[5].checked)
            row += '<td>'+ lado +'</td>';
        if(params[6].checked)
            row += '<td>'+ heroe.editorial +'</td>';

        row += '</tr>';
        $("#mainTable-body").append(row);
    });
}

