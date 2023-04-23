function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagenEncriptado = document.getElementById("imagenEncriptado");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encripdato con éxito";
        parrafo.textContent = "";
        imagenEncriptado.src = "./img/encriptado.jpg";
    } else {
        imagenEncriptado.src = "./img/cerrojo.png";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        alert("Debes ingresar algún texto");
    }
}