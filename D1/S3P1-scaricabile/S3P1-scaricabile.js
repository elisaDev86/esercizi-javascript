/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a,b){
    if(a === b){
         return (a + b) * 3;
    }else{
        return a + b;
    }
}

console.log(crazySum(2,2));



/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n){
    if(n >=20 && n <=101 || n === 400){
        return true;
    }else{
        return false;
    }
}
 console.log(boundary(400));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString (frase){
   /*let fraseSplit = frase.split('');
    console.log(fraseSplit);
   let fraseReverse = fraseSplit.reverse();
    console.log(fraseReverse);
   let fraseJoin = fraseReverse.join('');
    console.log(fraseJoin);
    return fraseJoin;*/
    return frase.split('').reverse().join('');
}
console.log(reverseString ('EPICODE'));

let reverseString2 = (frase)=>frase.split('').reverse().join('');
console.log(reverseString2('ciao'));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(sentence) {
    let words = sentence.split(' '); 
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
    }
    return words.join(' '); 
}

console.log(upperFirst('hello world!'));  

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n){
    let randomArray = [];
    for (let i = 0; i < n; i++) {
     randomArray.push(Math.floor(Math.random() *11));
     return randomArray;
}   
}
console.log(giveMeRandom(10));
//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(base, altezza){
    return base * altezza;
}
const areaRettangolo = area(11, 12);
console.log("L'area calcolata è:" + " " + areaRettangolo);
/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(){
     let numero = 100;
     let differenza = Math.abs(numero - 19);
     if (differenza > 19){
        return differenza * 3;
     }else{
        return differenza;
     }
}
console.log(crazyDiff());
/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify(parolaStrng) {
   
    if (parolaStrng.startsWith("code")) {
        return parolaStrng; 
    } else {
        return "code" + parolaStrng; 
    }
}
console.log(codify("ciao")); 

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(numero){
   if(numero % 3 === 0 || numero % 7 === 0){
    return true;
   }else{
    return false;
   }
}
console.log(check3and7(15));
/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(parola){
  if(parola.length > 1){
    return parola.slice(1, -1);
  }else{
    return "";
  }

}
console.log(cutString('ciao'));