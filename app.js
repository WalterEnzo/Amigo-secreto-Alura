// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if(amigo!= ''){
        nombreAmigos.push(amigo);
    }else{
        alert('Ingrese un nombre por favor');
    }
    
    limpiarCaja();
    console.log(nombreAmigos);
    
};


function limpiarCaja() {
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
}