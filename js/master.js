//Mine Generate dal computer
const MINEGENERATE = 16;

//Chiede all'utente il grado di difficolta
do {
var difficolta = parseInt(prompt("seleziona il grado di difficolta"));
}
while (difficolta < 0 || difficolta > 4 || isNaN(difficolta));

//Seleziona il grado in base all'input dell'utente
switch (difficolta) {
    case 0:
        var x = 0;
        grado = 100;
        alert("Hai scelto grado di difficolà " + x);
        break;
    case 1:
        var x = 1;
        grado = 80;
        alert("Hai scelto grado di difficolà " + x);
        break;
    case 2:
        var x = 2;
        grado = 50;
        alert("Hai scelto grado di difficolà " + x);
        break;
    case 3:
        var x = 3;
        grado = 35;
        alert("Hai scelto grado di difficolà " + x);
        break;
    case 4:
        var x = 4;
        grado = 25;
        alert("Hai scelto grado di difficolà " + x);
}


//Array che contiene mine generate
var lista_mine_generate = []
//Funzione per generare mine e aggiungerle all'array
generaMina(MINEGENERATE);

//Ordina Array crescente
lista_mine_generate = ordina(lista_mine_generate);
console.log(lista_mine_generate);

//Chiede all'utente di inserire i numeri
var lista_numeri_utente = [];

//Conteggio punti
var punti = 0;

//Se condizione vera l'utente vince se falsa perde
if (scommessa_utente()) {
    document.getElementById("verdetto").innerHTML = "Hai Vinto totalizzando " + punti + " punti";
    document.getElementById("verdetto").style.color = "green";
}
else {
    document.getElementById("verdetto").innerHTML = "Hai Perso e hai totalizzato " + punti + " punti";
    document.getElementById("verdetto").style.color = "red";
}

//Ordina array numeri inseriti utente
lista_numeri_utente = ordina(lista_numeri_utente);


















//Ritorna verdetto scommessa utente
function scommessa_utente() {
    for (var i = grado - MINEGENERATE; i > 0; i--) {
        do {
            var numero_inserito = parseInt(prompt("Inserisci un numero: " + i + " rimanenti"));
            console.log(numero_inserito);
            if (lista_mine_generate.includes(numero_inserito)) {
                return false;
            }
            else if (lista_numeri_utente.includes(numero_inserito)) {
                alert("Hai già inserito questo numero.");
            }
        }
        while (numero_inserito < 1 || numero_inserito > grado || isNaN(numero_inserito) || lista_numeri_utente.includes(numero_inserito));
        //Popola array con numeri inseriti dall'utente
        lista_numeri_utente.push(numero_inserito);
        punti += 50;
    }
    return true;
}




//Ricorsiva per generare mine
function generaMina(MINEGENERATE) {
    if (MINEGENERATE == 0) {
        return;
    }
    MINEGENERATE--;
    generaMina(MINEGENERATE);
    do {
        var mina = Math.floor(Math.random() * grado + 1);
    }
    while (lista_mine_generate.includes(mina));
    lista_mine_generate.push(mina);
}


//Ordina array
function ordina(lista_mine_generate) {
    for (var i = 0; i < lista_mine_generate.length; i++) {
        var min = lista_mine_generate[i];
        for ( var j = 0 + i; j < lista_mine_generate.length; j++) {
            if (min > lista_mine_generate[j]) {
                tmp = min;
                min = lista_mine_generate[j];
                lista_mine_generate[j] = tmp;
            }
        }
        lista_mine_generate[i] = min;
    }
    return lista_mine_generate;
}