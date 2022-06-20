discos = [{nombre:"Tiritando",grupo:'Fernando Costa',img:''}, 
        {nombre:"Caja Negra",grupo:'Natos y Waor',img:''},
        {nombre:"Caja Roja",grupo:'El Fari',img:''},
        {nombre:"Hammunation",grupo:'Space Hammurabi',img:''}
        ];

var maqueta = '';
var buscados = [];
var listaHTML = $('#lista');

/* var url = 'https://github.com/MelchorCM/EXAMEN_JUNIO/blob/main/data.json';

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        objeto = JSON.parse(this.responseText);
        console.log(objeto);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  } */


function buscar() {
  let element = $('#buscador').val();
  buscados = discos.filter(disco => disco.nombre.includes(element));
  $('#lista').empty();
  maquetarDiscos(buscados);
}

function maquetarDiscos(discos){

  for (let index = 0; index < discos.length; index++) {
    $(`<div class='disco' id='${index}'>   
      <p>Nombre: ${discos[index].nombre}, Grupo: ${discos[index].grupo}</p>
    </div>`).appendTo($('#lista'));
  }   

}

$(document).ready(function(){

  maquetarDiscos(discos);
  $("#enviar").click(buscar);


})






/*   $('#buscador').keypress(function(e){
    var key = e.which
    if(key == 13)
        buscados = buscar();
    }) */



