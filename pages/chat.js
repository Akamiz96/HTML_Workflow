function sendChat(){
  var nombre = document.getElementById("name").value;
  var texto = document.getElementById("text").value;
  if((nombre.length > 0)&&(texto.length > 0)){
    if(texto.length <= 300){
      var tagNombre = document.createElement("p");
      var textNombre = document.createTextNode("Nombre: " + nombre);

      var tagTexto = document.createElement("p");
      var textTexto = document.createTextNode("Texto: " + texto);

      tagNombre.appendChild(textNombre);
      tagTexto.appendChild(textTexto);

      tagNombre.classList.add("nombre");
      tagTexto.classList.add("texto");

      var entrada = document.createElement("div");
      entrada.classList.add("entrada");
      entrada.appendChild(tagNombre);
      entrada.appendChild(tagTexto);

      var chat = document.getElementById("chat");
      chat.appendChild(entrada);

      limpiar();
    }else{
      window.alert("El campo de texto no puede superar 300 caracteres.");
    }
  }else{
    window.alert("Todos los campos son obligatorios.");
  }

}

function limpiar(){
  document.getElementById("form_chat").reset();
}
