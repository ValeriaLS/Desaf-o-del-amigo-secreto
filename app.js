//1.Lista para guardar los nombres
let listaAmigos = [];

//2.Funcion asignar texto a un elemento 
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//3.Funcion para agregar amigos
function agregarAmigo() {
    let agregarAmigo = document.getElementById('amigo').value;
    if (agregarAmigo.trim() === '') {
        alert('Por favor, inserte un nombre');
        return;
    }
    
    listaAmigos.push(agregarAmigo);
    document.getElementById('amigo').value = '';
    actualizarListaAmigos();
}
function actualizarListaAmigos() {
    let listaElemento = document.getElementById('listaAmigos');
    listaElemento.innerHTML = ''; 
    for (const nombre of listaAmigos) {
        let li = document.createElement('li');
        li.textContent = nombre;
        listaElemento.appendChild(li);
    }
}


//5.Funcion para sortear amigos
function sortearAmigo () {
    
}
