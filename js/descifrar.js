// Instaciamos variables
var caja2 = document.getElementById('frase2');
var accion2 = document.getElementById('accion2');
var cuadro2 = document.getElementById('cuadro2');

// Creamos nuestra variable
accion2.addEventListener('click',rot13);

function rot13() { // Nuestra funcion para cifrar y descifrar el rot13
  str = caja2.value;
  console.log("ROT13:\n\n"+str+"\n-----------------------------");
  var indice = 0;
  var cadenaFinal='';
  // El cifrado ROT13
  //var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890ñáéíóú/';
  //var output= '0987654321abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?@><,;:.';
  var output= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890ñáéíóú/';
  var input = '0987654321abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?@><,;:.';

  // Recorremos cada letra  del str y sustituimos por la letra correspondiente
  for(var contador = 0;contador< str.length;contador++){
        indice = output.indexOf(str[contador]);
    //console.log(indice);
    if(indice!=-1){ // Si lo encuentra
        var letra = output[indice];
        indice = input.indexOf(letra);
        cadenaFinal += output[indice];

     }
    else{ // si no lo encuentra
        cadenaFinal += str[contador]; // lo agrega tal cual a nuestra cadena
      }
    }
  //Imprimimos en la consola
  console.log(cadenaFinal);
  // Imprimimos en el document
  cuadro2.value= cadenaFinal;
}

document.getElementById("copyButton").addEventListener("click", function() {
    copyToClipboard(document.getElementById("cuadro2"));
});

function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
}
}
