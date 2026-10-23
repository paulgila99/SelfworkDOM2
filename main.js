// STEP 1: recuperiamo gli elementi dal DOM tramite il loro id
let titoloInput = document.querySelector('#titoloInput');
let paragrafoInput = document.querySelector('#paragrafoInput');
let btnCrea = document.querySelector('#btnCrea');
let contenitoreArticoli = document.querySelector('#contenitoreArticoli');

// STEP 2: ascoltiamo il click sul bottone
btnCrea.addEventListener('click', () => {

    // STEP 3: leggiamo i valori scritti dall'utente
    let titolo = titoloInput.value;
    let paragrafo = paragrafoInput.value;

    // EXTRA 1: se uno dei due campi è vuoto, avvisiamo e usciamo dalla funzione
    if (titolo === "" || paragrafo === "") {
        alert("Attenzione: compila sia il titolo che il paragrafo!");
        return; // interrompe la funzione: l'articolo NON viene creato
    }

    // STEP 4: creiamo gli elementi HTML (ancora "staccati" dalla pagina)
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');

    // STEP 5: inseriamo il testo negli elementi
    h2.innerText = titolo;
    p.innerText = paragrafo;

    // STEP 6: costruiamo la struttura: h2 e p dentro article
    article.appendChild(h2);
    article.appendChild(p);

    // STEP 7: aggiungiamo l'article alla pagina
    contenitoreArticoli.appendChild(article);

    // EXTRA 2: puliamo gli input
    titoloInput.value = "";
    paragrafoInput.value = "";
});