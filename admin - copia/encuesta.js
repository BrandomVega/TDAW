document.getElementById("reload").addEventListener("click",function(){
    document.getElementById("reload").textContent = "Volver a cargar";
    $.ajax({
        url:"../php/queryEncuesta.php",
        data:$("#dropdown").serialize(),
        cache:false,
        success: function(respAX) {
            let data = JSON.parse(respAX);
            var table = document.getElementById('dataSurvey');
            data.forEach(function(object) {

                if(object.encuesta=='1'){
                    resetEncuesta = '<td> <button type="button" id="restablecer" class="waves-effect waves-teal btn-flat" >Restablecer</button> </td>';
                    generarPDF = '<td> <button type="button" id="restablecer" class="waves-effect waves-teal btn-flat" >Descargar</button> </td>';
                    encuestaHecha = '<td><i class="fa-solid fa-square-check"></i></td>';        
                }else{
                    resetEncuesta='<td>  <button type="button" id="restablecer" class="waves-effect waves-teal btn-flat disabled" >Restablecer</button> </td>';
                    generarPDF = '<td> <button type="button" id="restablecer" class="waves-effect waves-teal btn-flat disabled" >Descargar</button> </td>';
                    encuestaHecha = '<td> <i class="fa-sharp fa-regular fa-circle-xmark"></i> </td>';  
                }

                
                

                var tr = document.createElement('tr');
                tr.innerHTML = '<td>' + object.nombre + '</td>' +
                    '<td>' + object.depto + '</td>' +encuestaHecha+resetEncuesta+generarPDF
                    
                table.appendChild(tr);
            });
        },
        error: function() {
            alert('Error retrieving data.');
        }
      }); // ajax/
});