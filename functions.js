/**
 * 
 * @param {Array} tablazat1
 * csinálok egy függvényt ami a tablazat1 tömb elemein végigmegy és létrehoz egy th elemet
 * a th elem tartalmát a tablazat1 tömb elemeivel tölti fel
 */
function fejlecgeneralas(tablazat1){


    for (const fejlec of tablazat1){ // végigmegyünk a tablazat1 tömb elemein
        const th1 = document.createElement('th') // létrehozunk egy th elemet
        th1.innerHTML= fejlec // megadjuk a th1-nek a tartalmát
        th_row.appendChild(th1) // a th1-et hozzáadjuk a sorhoz
    if(fejlec === 'Képviselők'){ // ha a fejlec értéke 'Képviselők'
        th1.colSpan= 2 // a th1-nek beállítjuk a colspan értékét 2-re

    }
}
}


