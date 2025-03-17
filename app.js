// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];
let listaAmigos = document.getElementById('listaAmigos');

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    amigo = amigo.trim();
    amigo = amigo.toUpperCase();

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
//vacia la caja de texto
function limpiarCaja() {
   document.getElementById('amigo').value = '';
   document.getElementById('amigo').focus();
}

//Agrega los amigos a la lista para sortear
function actualizarListaAmigos() {
    let nuevoAmigo;
    listaAmigos.innerHTML = '';

    for (const amigo of nombreAmigos) {
        nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo;
        listaAmigos.appendChild(nuevoAmigo);
    }
};

//Elegir un amigo al azar de la lista
function sortearAmigo(){
    let indiceAmigo = Math.floor(Math.random()* nombreAmigos.length);
    console.log(indiceAmigo);
    listaAmigos.innerHTML = `El amigo sorteado es: ${nombreAmigos[indiceAmigo]}`;
};