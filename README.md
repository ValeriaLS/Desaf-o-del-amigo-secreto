# Desafío del amigo secreto
Primer challenge elaborado para el grupo G9 por la comunidad de **AluraLatam** **y** **Oracle**. 
Este proyecto se basa en un pequeño juego en JavaScript que permite agregar nombres de amigos, almacenarlos en un array y seleccionar uno al azar como tu "Amigo Secreto".
* ## Descripción del proyecto:
El proyecto esta diseñado para practicar:
- Validación de entradas de usuario.
- Manipulación de arrays en JavaScript.
- Uso de funciones nativas como `.push()`, `Math.random()` y `Math.floor()`.
* ## Funciones del juego:
  ### 1. **`asignarTextoElemento(elemento, texto)`**
**¿Qué hace?**
- Es una función auxiliar que nos permite asignar texto a un elemento.
  
  ### 2. **`agregarAmigo()`**
**¿Qué hace?**
- Obtiene el nombre escrito por el usuario en el campo de texto.
- Valida que no este vacío.
-  Si es válido, lo agrega al arreglo `listaAmigos` usando `.push()`.
- Limpia el campo de entrada para seguir agregando.
  
   ### 3. **`actualizarListaAmigos()`**
**¿Qué hace?**
- Selecciona el elemento HTML (por ejemplo `<ul id="listaAmigos">`) donde se muestran los participantes.
- Limpia su contenido con `innerHTML = ''` para evitar que se acumulen duplicados.
- Recorre el array `listaAmigos` y, por cada nombre, crea un `<li>` usando `document.createElement('li')` y `textContent`.
- Inserta cada `<li>` en el `<ul>` con `appendChild`.
  
   ### 4. **`sortearAmigo()`**
**¿Qué hace?**
- Comprueba que el arreglo `listaAmigos` no esté vacío.
- Genera un índice aleatorio con:
  ```javascript
  let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
- Obtiene el nombre correspondiente a ese índice y muestra el resultado en pantalla usando inner.HTML

* ## Cómo Jugar
Primero, tienes que escribir el nombre de un amigo en la cajita de texto. Después, darle clic al botón **Añadir** para ponerlo en la lista.
Puedes repetirlo cuantas veces quieras hasta que tengas a todos tus amigos ahí y cuando ya tengas la lista completa, dale clic al botón **Sortear Amigo** y listo, el juego va a escoger un nombre al azar y te lo va a mostrar en pantalla.

* ## Posibles Áreas de Mejora
- Evitar que se repitan nombres en la lista.
- Botón para eliminar amigos de la lista.
- Botón para iniciar un nuevo juego.
