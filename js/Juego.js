

// Array de palabras
var palabras = [
                ["atlantico", "Un océano"], 
                ["ordenador", "Una máquina"], 
                ["laurel", "Un árbol"], 
                ["plaza", "Espacio público"], 
                ["rueda", "Gran invento"], 
                ["cereza", "Una fruta"], 
                ["petanca", "Un juego"], 
                ["higuera", "Un árbol"], 
                ["everest", "Un monte"], 
                ["relampago", "Antecede al trueno"], 
                ["jirafa", "Un animal"], 
                ["luxemburgo", "Un país"], 
                ["uruguay", "Un país"], 
                ["ilustracion", "Representación gráfica"], 
                ["excursion", "Actividad en la naturaleza"], 
                ["empanadilla", "De la panadería"], 
                ["pastel", "De la pastelería"], 
                ["colegio", "Lugar para estudiar"], 
                ["carrera", "Competición"], 
                ["mermelada", "Confitura"]
            ];

// Palabra a averiguar
var palabra = "";
// Nº aleatorio
var rand;
// Palabra oculta
var oculta = [];
// Elemento html de la palabra
var hueco = document.getElementById("lblPalabraMostrando");
// Contador de intentos
var cont = 6;

var contadorIntentos = 6;
var intentos = 6;



// Escoger palabra al azar
function generaPalabra() {
  rand = (Math.random() * 19).toFixed(0);
  palabra = palabras[rand][0].toUpperCase();
  console.log(palabra);
}

// Funcion para pintar los guiones de la palabra
function pintarGuiones(num) {
  for (var i = 0; i < num; i++) {
    oculta[i] = "_ ";
  }
  hueco.innerHTML = oculta.join("");
}

// Obtener pista
function pista() {
    Swal.fire(
        'Pista!!',
        palabras[rand][1],
        'warning'
    );
}


function reiniciarJuego(){
    Swal.fire(
              'Reiniciando!',
              'Espere un momento por favor!!',
              'warning'
    );

    setTimeout(() => { 
            Swal.fire(
              '',
              'Empecemos a jugar!!',
              'warning'
            );
            
           iniciarJuego();
    }, 3000);
}


function verificarLetra(){

    var letra = document.getElementById("txtLetra").value;
    
    if (letra=="") {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Rellene el campo !!',
            showConfirmButton: false,
            timer: 1000
        });  
        return;
    } 

    if (letra.length>1) {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: ' Debe ingresar solo una letra ',
            showConfirmButton: false,
            timer: 1000
        });  
        return;
    } 

    if(palabra.indexOf(letra) != -1) {

        for(var i=0; i<palabra.length; i++) {
            if(palabra[i]==letra) oculta[i] = letra;
        }

        hueco.innerHTML = oculta.join("");
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Acierto correcto :)',
            showConfirmButton: false,
            timer: 1000
        });   
        
    }else{
        
        cont--;
        document.getElementById("lblIntento").innerHTML = cont;
        Swal.fire({
            position: 'top-center',
            icon: 'warning',
            title: 'Error :(',
            showConfirmButton: false,
            timer: 1000
        });

        perdio();

       
    }

    document.getElementById("txtLetra").value = "";
    document.getElementById("txtLetra").focus;
}

function ganoJuego(){

    if(oculta.indexOf("_") == -1) {
        Swal.fire({
            position: 'top-center',
            icon: 'warning',
            title: 'Gano el juego :-) ',
            showConfirmButton: false,
            timer: 1000
        });
    }
}
function perdio(){
    if(cont<=0){
            Swal.fire({
                position: 'top-center',
                icon: 'warning',
                title: 'Perdio el juego :(',
                showConfirmButton: false,
                timer: 1000
            });

            var txtInput = document.getElementById('txtLetra');
            txtInput.disabled = true;
    }
}



function mostrarIntentos(){
    document.getElementById("lblIntento").innerHTML = intentos;
}

function habilitarCaja(){
    var txtInput = document.getElementById('txtLetra');
    txtInput.disabled = false;
    var btnIniciar = document.getElementById('btnIngresar');
    btnIniciar.disabled=false;
}

function iniciarJuego(){

    Swal.fire(
              '*Jugar*',
              'Empecemos a jugar!!',
              'warning'
    );

    generaPalabra();
    pintarGuiones(palabra.length);
    mostrarIntentos();
    habilitarCaja();
}

//###########################################################################################################