function encriptar() {
  // Obtiene el valor del texto ingresado por el usuario
  let texto = document.getElementById("texto").value;

  // Obtiene referencias a elementos HTML
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let imagenEncriptado = document.getElementById("imagenEncriptado");

  // Encripta el texto reemplazando vocales seguidas de "g" o "i" con cadenas específicas
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  // Verifica si el texto ingresado no está vacío
  if (texto.length != 0) {
    // Actualiza el valor del elemento de entrada de texto con el texto encriptado
    document.getElementById("texto").value = textoCifrado;

    // Establece el texto del elemento "titulo-mensaje" como "Texto encriptado con éxito"
    tituloMensaje.textContent = "Texto encriptado con éxito";

    // Borra el contenido del elemento "parrafo"
    parrafo.textContent = "";

    // Establece la ruta de la imagen en "imagenEncriptado" como "./img/encriptado.jpg"
    imagenEncriptado.src = "./img/encriptado.jpg";
  } else {
    // Si el texto está vacío, muestra un mensaje de error
    imagenEncriptado.src = "./img/cerrojo.png";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  // Obtiene el valor del texto ingresado por el usuario
  let texto = document.getElementById("texto").value;

  // Obtiene referencias a elementos HTML
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let imagenEncriptado = document.getElementById("imagenEncriptado");

  // Desencripta el texto reemplazando las cadenas encriptadas por las vocales correspondientes
  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  // Verifica si el texto ingresado no está vacío
  if (texto.length != 0) {
    // Actualiza el valor del elemento de entrada de texto con el texto desencriptado
    document.getElementById("texto").value = textoCifrado;

    // Establece el texto del elemento "titulo-mensaje" como "Texto desencriptado con éxito"
    tituloMensaje.textContent = "Texto desencriptado con éxito";

    // Borra el contenido del elemento "parrafo"
    parrafo.textContent = "";

    // Establece la ruta de la imagen en "imagenEncriptado" como "./img/desencriptado.jpg"
    imagenEncriptado.src = "./img/desencriptado.jpg";
  } else {
        imagenEncriptado.src = "./img/cerrojo.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
  }