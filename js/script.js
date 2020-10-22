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

    // condizione per prezzo scontato o meno
    if (etaInput < 18) {
      var prezzoFinale = prezzoIntero - ((20 * prezzoIntero) / 100).toFixed(2);
      var prezzo20 = document.getElementById("offerta").innerHTML = "Prezzo scontato del 20%";
    } else if (etaInput > 65) {
      var prezzoFinale = prezzoIntero - ((40 * prezzoIntero) / 100).toFixed(2);
      var prezzo40 = document.getElementById("offerta").innerHTML = "Prezzo scontato del 40%";
    } else {
      var prezzoFinale = prezzoIntero;
      var prezzoSenzaSconto = document.getElementById("offerta").innerHTML = "Prezzo Intero";
    }

    // selezione output prezzo
    var prezzoOutput = document.getElementById('prezzo-output');
    prezzoOutput.innerHTML = prezzoFinale + "€";
    console.log("prezzo gia scontato" + prezzoFinale);

    // selezione su variabile output per codici
    var codiceCarrozzaOutput = document.getElementById('codice-carrozza');
    var codiceCabinaOutput = document.getElementById('codice-cabina');

    // generare numeri random per carrozza e codice
    codiceCarrozzaRandom = Math.floor(Math.random() * 10);
    codiceCarrozzaOutput.innerHTML = codiceCarrozzaRandom;

    codiceCabinaRandom = Math.floor(Math.random() * 10000);
    codiceCabinaOutput.innerHTML = codiceCabinaRandom;

  }
);



// condizioni
// if () {
// }

// numero di chilometri che vuole percorrere
// var kmInput = document.getElementById('km-input');

// l’età del passeggero.
// var etaInput = document.getElementById('età-input');
