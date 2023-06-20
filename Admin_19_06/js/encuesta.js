document.getElementById("reload").addEventListener("click",recargarEncuesta);

function recargarEncuesta(){
    var tbody = document.getElementById("datosEncuesta"); //Borrar la encuesta solamente antes de recargar
    if(tbody){  
        tbody.innerHTML = "";
    }else{  //Volver a crear la esctructura al recargar
        var table = document.getElementById('dataSurvey');
        var tbody = document.createElement('tbody');
        tbody.id = "datosEncuesta"
        table.appendChild(tbody)
    }
    $.ajax({
        url:"../php/queryEncuesta.php",
        cache:false,
        success: function(respAX) {
            let data = JSON.parse(respAX);


            data.forEach(function(object) {

                if(object.encuesta=='1'){
                    resetEncuesta = '<td> <button type="button" id="reset_'+object.id+'" name ="" onclick="reset(\''+object.id+'\')" class="waves-effect waves-teal btn-flat"><i class="fa-sharp fa-solid fa-rotate-right"></i></button> </td>';
                    generarPDF = '<td> <button type="button" id="restablecer" class="waves-effect waves-teal btn-flat" ><i class="fa-regular fa-circle-down"></i></button> </td>';
                    encuestaHecha = '<td><i class="fa-solid fa-check"></i></td>';        
                }else{
                    resetEncuesta='<td>  <button type="button" id="reset_denied" class="waves-effect waves-teal btn-flat disabled" ><i class="fa-sharp fa-solid fa-rotate-right"></i></button> </td>';
                    generarPDF = '<td> <button type="button" id="restablecer" class="waves-effect waves-teal btn-flat disabled" ><i class="fa-regular fa-circle-down"></i></button> </td>';
                    encuestaHecha = '<td> <i class="fa-sharp fa-regular fa-circle-xmark"></i> </td>';  
                }

            
                var tr = document.createElement('tr');
                tr.innerHTML = '<td>' + object.nombre + '</td>' +
                    '<td>' + object.depto + '</td>' +encuestaHecha+resetEncuesta+generarPDF
                
                
                tbody.appendChild(tr)
                document.getElementById("reload").textContent = "Volver a cargar";
            });
        
        },
        error: function() {
            alert('Error retrieving data.');
        }
      }); // ajax/
}