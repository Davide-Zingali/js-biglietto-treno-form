// variabile bottone
var bottoneGenera = document.getElementById('bottone');

bottoneGenera.addEventListener("click",
  function() {
    var nomeInput = document.getElementById('nome-input').value;
    var nomeOutput = document.getElementById("nome-output");
    nomeOutput.innerHTML = nomeInput;

    // funzione input per km
    var kmInput = document.getElementById('km-input').value;
    var etaInput = document.getElementById('età-input').value;
    console.log(nomeInput, kmInput, etaInput);

    // variabile prezzo intero
    var prezzoIntero = parseInt(0.21 * kmInput);
    console.log(prezzoIntero);

    // condizione
    if (etaInput < 18) {
      var prezzoOutput = prezzoIntero - ((20 * prezzoIntero) / 100).toFixed(2);
    } else if (etaInput > 65) {
      var prezzoOutput = prezzoIntero - ((40 * prezzoIntero) / 100).toFixed(2);
    } else {
      var prezzoOutput = prezzoIntero;
    }
    console.log(prezzoOutput);
  }
);



// condizioni
// if () {
// }

// numero di chilometri che vuole percorrere
// var kmInput = document.getElementById('km-input');

// l’età del passeggero.
// var etaInput = document.getElementById('età-input');
