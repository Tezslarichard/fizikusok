/**
 * 
 * @param {Array} tablazat1
 * csinálok egy függvényt ami a tablazat1 tömb elemein végigmegy és létrehoz egy th elemet
 * a th elem tartalmát a tablazat1 tömb elemeivel tölti fel
 */
function fejlecgeneralas(tablazat1){
    const th_row = document.createElement('tr') // létrehozunk egy sort
    headder.appendChild(th_row) // a sort hozzáadjuk a theadhez

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
    
    tbody1.innerHTML= '' // a tbody tartalmát töröljük
    for(let futo of tablazat){ // végigmegyünk a tablazat tömb elemein
        const tr_row = document.createElement('tr') // létrehozunk egy sort
        tbody1.appendChild(tr_row) // a sort hozzáadjuk a tbodyhoz
    
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
    const form1 = document.createElement('form') // létrehozunk egy formot
    form1.id = 'form' // a formnak beállítjuk az id-t
    document.body.appendChild(form1) // a formot hozzáadjuk a bodyhoz

/**
 * 
 * @param {HTMLElement} formok 
 * /**
 * ez a függvény generál egy formot ami eddig a htmlbe volt megadom mindegyiknek az id ját stbjét
 */
 
function generateform(formok){
    for(const futogep of formok){
        const div = document.createElement('div') // létrehozunk egy divet
        div.classList.add('field') // a divnek hozzáadjuk a field osztályt
        form1.appendChild(div) // a divet hozzáadjuk a formhoz

        const label = document.createElement('label') // létrehozunk egy labelt
        label.innerHTML = futogep.labelText // a labelnek beállítjuk a tartalmát
        label.htmlFor = futogep.htmlFor // a labelnek beállítjuk a htmlFor értékét
        div.appendChild(label) // a labelt hozzáadjuk a divhez

        const input = document.createElement('input') // létrehozunk egy inputot
        input.id = futogep.htmlFor // az inputnak beállítjuk az id-t
        input.type = futogep.inputType // az inputnak beállítjuk a típusát
        div.appendChild(input) // az inputot hozzáadjuk a divhez

        const div_error = document.createElement('span') // létrehozunk egy divet
        div_error.classList.add('error') // a divnek hozzáadjuk az error osztályt
        div.appendChild(div_error) // a divet hozzáadjuk a divhez

    }
    const button = document.createElement('button') // létrehozunk egy buttont
    button.type = 'submit' // a buttonnak beállítjuk a típusát
    button.innerHTML = 'Hozzáadás' // a buttonnak beállítjuk a tartalmát
    form1.appendChild(button) // a buttont hozzáadjuk a formhoz
    
}

//css azt csak is én csináltam nem gpt volt