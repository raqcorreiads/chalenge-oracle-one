function decodificar() {
  var textoCodificado = document.getElementById("texto-codificado").value;
  var deslocamento = parseInt(document.getElementById("deslocamento").value);
  var textoDecodificado = "";

  for (var i = 0; i < textoCodificado.length; i++) {
    var charCodificado = textoCodificado[i];

    if (charCodificado.match(/[a-z]/i)) {
      var charDecodificado = String.fromCharCode(charCodificado.charCodeAt(0) - deslocamento);

      if (charDecodificado.charCodeAt(0) < 97) {
        charDecodificado = String.fromCharCode(charDecodificado.charCodeAt(0) + 26);
      }

      textoDecodificado += charDecodificado
