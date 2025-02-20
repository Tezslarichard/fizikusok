/**
 * 
 * @param {Array} tablazat1
 * csinálok egy függvényt ami a tablazat1 tömb elemein végigmegy és létrehoz egy th elemet
 * a th elem tartalmát a tablazat1 tömb elemeivel tölti fel
 */
function fejlecgeneralas(tablazat1){
    const th_row = document.createElement('tr') // létrehozunk egy sort
    thead.appendChild(th_row) // a sort hozzáadjuk a theadhez

    for (const fejlec of tablazat1){ // végigmegyünk a tablazat1 tömb elemein
        const th1 = document.createElement('th') // létrehozunk egy th elemet
        th1.innerHTML= fejlec // megadjuk a th1-nek a tartalmát
        th_row.appendChild(th1) // a th1-et hozzáadjuk a sorhoz
    if(fejlec === 'Képviselők'){ // ha a fejlec értéke 'Képviselők'
        th1.colSpan= 2 // a th1-nek beállítjuk a colspan értékét 2-re

    }
}
}


/**
 * 
 * @param {Array} tablazat1
 * csinálok egy függvényt ami a tablazat1 tömb elemein végigmegy és létrehoz egy th elemet
 * a th elem tartalmát a tablazat1 tömb elemeivel tölti fel
 */
function rendertable(tablazat){
    //táblázat létrehozása
    
    tbody.innerHTML= '' // a tbody tartalmát töröljük
    for(let futo of tablazat){ // végigmegyünk a tablazat tömb elemein
        const tr_row = document.createElement('tr') // létrehozunk egy sort
        tbody.appendChild(tr_row) // a sort hozzáadjuk a tbodyhoz
    
        const td1 = document.createElement('td') // létrehozunk egy td elemet
        td1.innerHTML= futo.fizika // megadjuk a td1-nek a tartalmát
        tr_row.appendChild(td1) // a td1-et hozzáadjuk a sorhoz
    
        const td2 = document.createElement('td') // létrehozunk egy td elemet
        td2.innerHTML= futo.ido // megadjuk a td2-nek a tartalmát
        tr_row.appendChild(td2) // a td2-t hozzáadjuk a sorhoz
    
        const td3 = document.createElement('td') // létrehozunk egy td elemet
        td3.innerHTML= futo.tudos1 // megadjuk a td3-nak a tartalmát
        tr_row.appendChild(td3) // a td3-t hozzáadjuk a sorhoz
    
    
        
    
        if(futo.tudos2){ // ha van tudos2
            const td4 = document.createElement('td') // létrehozunk egy td elemet
            td4.innerHTML= futo.tudos2 // megadjuk a td4-nek a tartalmát
            tr_row.appendChild(td4) // a td4-t hozzáadjuk a sorhoz
        }
        else{ //ha nincs akkor 
            td3.colSpan= 2 // a td3-nak beállítjuk a colspan értékét 2-re
        }
    }
    }


    /**
 * 
 * @param {HTMLElement} fizika_teruletinput 
 * @param {HTMLElement} idoszakinput 
 * @param {HTMLElement} tudosok1input 
 * @returns {boolean}
 * 
 * egy függvényt csinálok ami ellenőrzi hogy a fizika_teruletinput, idoszakinput, tudosok1input mezők üresek-e
 * ha üres valamelyik mező akkor a hiba üzenetet kiírja a megfelelő mező alá
 * ha nem üres egyik mező sem akkor igaz értékkel tér vissza
 */
function egyszeruvalidate(fizika_teruletinput, idoszakinput, tudosok1input){ // függvény létrehozása
    let valid = true // egy változóba elmentjük az igaz értéket
    if (!validateForm(fizika_teruletinput, 'Fizika terület megadása kötelező')) // meghívjuk a függvényt
    { 
        valid = false  // a valid változót hamisra állítjuk
}
    if(!validateForm(idoszakinput, 'Időszak megadása kötelező') )// meghívjuk a függvényt
    { 
        valid = false// a valid változót hamisra állítjuk
     } 

    if(!validateForm(tudosok1input, 'Tudós megadása kötelező')) // meghívjuk a függvényt
    {
         valid = false // a valid változót hamisra állítjuk
    } 

    return valid // a valid változót visszaadju
}

/**
 * 
 * @param {HTMLElement} inputhtmlElement 
 * @param {string} error 
 * @returns {boolean}
 * 
 * egy függvényt csinálok ami ellenőrzi hogy az inputhtmlElement értéke üres-e
 * ha üres akkor a hiba üzenetet kiírja a megfelelő mező alá
 */
function validateForm(inputhtmlElement, error){ // függvény létrehozása
    let valid = true
    if(inputhtmlElement.value === ''){ // ha az inputhtmlElement értéke üres
        const parentElement = inputhtmlElement.parentElement //eltaroljuk a teruletet egy valtozoba
        const error1 = parentElement.querySelector('.error') //eltaroljuk az error idval ellatot elemet egy valtozoba
        if(error1 != undefined){// ha talalunk ilyet mezot ami nem undefined
            error1.innerHTML = error// az error tartalmát beállítjuk
        }
        valid = false // a valid változót hamisra állítjuk
    
    }
    return valid // a valid változót visszaadjuk
    }

    /**
 * ez a függvény generál egy formot ami eddig a htmlbe volt megadom mindegyiknek az id ját stbjét
 */
function generateform(){
    const form = document.createElement('form') // létrehozunk egy formot
    form.id = 'form' // a formnak beállítjuk az id-t
    document.body.appendChild(form) // a formot hozzáadjuk a bodyhoz

    const div1 = document.createElement('div') // létrehozunk egy divet
    form.appendChild(div1) // a divet hozzáadjuk a formhoz

    const label1 = document.createElement('label') // létrehozunk egy labelt
    label1.innerHTML = 'Terület megnevezése' // a label tartalmát beállítjuk
    label1.for = 'fizika' // a labelnak beállítjuk az id-t
    div1.appendChild(label1) // a labelt hozzáadjuk a divhez

    const input1 = document.createElement('input') // létrehozunk egy inputot
    input1.type = 'text' // az inputnak beállítjuk a típusát
    input1.id = 'fizika' // az inputnak beállítjuk az id-t
    input1.name = 'fizika' // az inputnak beállítjuk a nevét
    div1.appendChild(input1) // az inputot hozzáadjuk a divhez


    const span1 = document.createElement('span') // létrehozunk egy spant
    span1.className = 'error' // a spannak beállítjuk a class-t
    div1.appendChild(span1) // a spant hozzáadjuk a divhez


    const div2 = document.createElement('div') // létrehozunk egy divet
    form.appendChild(div2) // a divet hozzáadjuk a formhoz

    const label2 = document.createElement('label') // létrehozunk egy labelt
    label2.innerHTML = 'Időszak:' // a label tartalmát beállítjuk
    label2.for = 'ido' // a labelnak beállítjuk az id-t 
    div2.appendChild(label2) // a labelt hozzáadjuk a divhez

    const input2 = document.createElement('input') // létrehozunk egy inputot
    input2.type = 'text' // az inputnak beállítjuk a típusát
    input2.id = 'ido' // az inputnak beállítjuk az id-t
    input2.name = 'ido' // az inputnak beállítjuk a nevét
    div2.appendChild(input2) // az inputot hozzáadjuk a divhez

    const span2 = document.createElement('span') // létrehozunk egy spant
    span2.className = 'error' // a spannak beállítjuk a class-t
    div2.appendChild(span2) // a spant hozzáadjuk a divhez



    const div3 = document.createElement('div') // létrehozunk egy divet
    form.appendChild(div3) // a divet hozzáadjuk a formhoz

    const label3 = document.createElement('label') // létrehozunk egy labelt
    label3.innerHTML = 'Első tudós:' // a label tartalmát beállítjuk
    label3.for = 'tudos1' // a labelnak beállítjuk az id-t
    div3.appendChild(label3) // a labelt hozzáadjuk a divhez

    const input3 = document.createElement('input') // létrehozunk egy inputot
    input3.type = 'text' // az inputnak beállítjuk a típusát
    input3.id = 'tudos1' // az inputnak beállítjuk az id-t
    input3.name = 'tudos1' // az inputnak beállítjuk a nevét
    div3.appendChild(input3) // az inputot hozzáadjuk a divhez


    const span3 = document.createElement('span') // létrehozunk egy spant
    span3.className = 'error' // a spannak beállítjuk a class-t
    div3.appendChild(span3) // a spant hozzáadjuk a divhez

    const div4 = document.createElement('div') // létrehozunk egy divet
    form.appendChild(div4) // a divet hozzáadjuk a formhoz

    const label4 = document.createElement('label') // létrehozunk egy labelt
    label4.innerHTML = 'Második tudós:' // a label tartalmát beállítjuk
    label4.for = 'tudos2' // a labelnak beállítjuk az id-t
    div4.appendChild(label4) // a labelt hozzáadjuk a divhez

    const input4 = document.createElement('input') // létrehozunk egy inputot
    input4.type = 'text' // az inputnak beállítjuk a típusát
    input4.id = 'tudos2' // az inputnak beállítjuk az id-t
    input4.name = 'tudos2' // az inputnak beállítjuk a nevét
    div4.appendChild(input4) // az inputot hozzáadjuk a divhez

    const button = document.createElement('button') // létrehozunk egy buttont
    button.type = 'submit' // a buttonnak beállítjuk a típusát
    button.innerHTML = 'Hozzáadás' // a buttonnak beállítjuk a tartalmát


    form.appendChild(div1) // a div4-et hozzáadjuk a formhoz
    form.appendChild(div2) // a div3-at hozzáadjuk a formhoz
    form.appendChild(div3) // a div2-t hozzáadjuk a formhoz
    form.appendChild(div4) // a div1-et hozzáadjuk a formhoz
    form.appendChild(button) // a buttont hozzáadjuk a formhoz


}

//css azt csak is én csináltam nem gpt volt