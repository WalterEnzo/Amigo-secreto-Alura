// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if(amigo!= ''){
        if(!nombreAmigos.includes(amigo)){
            nombreAmigos.push(amigo);
            actualizarListaAmigos();
        }else{
            alert('Ya ingreso ese nombre');
        }
        
    }else{
        alert('Ingrese un nombre por favor');
    }
    
    limpiarCaja();
    console.log(nombreAmigos);
    
    
};

function limpiarCaja() {
   document.getElementById('amigo').value = '';
}

function actualizarListaAmigos() {
    let nuevoAmigo;
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (const amigo of nombreAmigos) {
        nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo;
        listaAmigos.appendChild(nuevoAmigo);
    }
};

function sortearAmigo(){

};