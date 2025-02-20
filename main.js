const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead') // létrehozunk egy theadetet
const tbody = document.createElement('tbody') // létrehozok egy tbodyt
document.body.appendChild(table) // a tablet hozzáadom a htmlhez
table.appendChild(thead) // a theadet hozzáadom a tablehez
table.appendChild(tbody) // a tbodyt hozzáadom a tablehez





const tablazat =[
        {
        fizika :'Optika', // megadjuk a td1nek az értékét
        ido :'XI.század', // megadjuk a td2nek az értékét
        tudos1 :'Alhazen'} // megadjuk a td3nak az értékét
       ,
       {
        fizika :'Asztronómia', // megadjuk a td4nek az értékét
        ido :'reneszánsz', // megadjuk a td5nek az értékét
        tudos1 :'Galilei', // megadjuk a td6nak az értékét
        tudos2 :'Kepler'} // megadjuk a td7nek az értékét
        ,       

        {
        fizika : 'Kvantumfizika', // megadjuk a td8nak az értékét
        ido :  'XIX-XX. század' ,// megadjuk a td9nek az értékét
        tudos1 : 'Max Planck', // megadjuk a td10nek az értékét
        tudos2 : 'Albert Einstein'} // megadjuk a td11nek az értékét
        ,
        {
        fizika : 'Modern fizika', // megadjuk a td12nek az értékét
        ido : 'XX-XXI. század' ,// megadjuk a td13nak az értékét
        tudos1 : 'Richard Feynman', // megadjuk a td14nek az értékét
        tudos2 : 'Stephen Hawking'} // megadjuk a td15nek az értékét
           

        ]
const tablazat1 = [  
    'Fizika területe', // megadjuk a th1nek az értékét
    'Időszak', // megadjuk a th2nek az értékét
    'Képviselők' // megadjuk a th3nak az értékét 
    ]
//fejléc létrehozása

const th_row = document.createElement('tr') // létrehozunk egy sort
thead.appendChild(th_row) // a sort hozzáadjuk a theadhez

rendertable(tablazat)//meghuvjuk a függvényt




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
generateform() // meghívjuk a függvényt
fejlecgeneralas(tablazat1) // meghívjuk a függvényt

const form = document.getElementById('form') // a formot elmentjük egy változóba


form.addEventListener('submit', function(e){// a formra hozzáadunk egy eseményfigyelőt

    e.preventDefault() //megakadályozzuk az alapértelmezett eseményt


    const fizika_terulet = document.getElementById('fizika')// a fizika területet elmentjük egy változóba id alapján
    const idoszak = document.getElementById('ido')// az időszakot elmentjük egy változóba id alapján
    const tudosok1 = document.getElementById('tudos1')// a tudos1-et elmentjük egy változóba id alapján
    const tudosok2 = document.getElementById('tudos2')//a tudos2-t elmentjük egy változóba id alapján


    const forma = e.currentTarget // a formot elmentjük egy változóba
    const hiba = forma.querySelectorAll('.hiba') // a hibát elmentjük egy változóba
    for(const errorhiba of hiba){
        errorhiba.innerHTML = '' // a hiba tartalmát töröljük
    }

   if(egyszeruvalidate(fizika_terulet, idoszak, tudosok1)){ // meghívjuk a függvényt

    const fizika_terulet_value = fizika_terulet.value // a fizika terület értékét elmentjük egy változóba
    const idoszak_value = idoszak.value // az időszak értékét elmentjük egy változóba
    const tudosok1_value = tudosok1.value       // a tudos1 értékét elmentjük egy változóba
    const tudosok2_value = tudosok2.value    // a tudos2 értékét elmentjük egy változóba

    
    const uj_tablazat = { // létrehozunk egy objektumot
        fizika : fizika_terulet_value, // a fizika terület értékét elmentjük egy változóba
        ido : idoszak_value, // az időszak értékét elmentjük egy változóba
        tudos1 : tudosok1_value, // a tudos1 értékét elmentjük egy változóba
        tudos2 : tudosok2_value // a tudos2 értékét elmentjük egy változóba
    }
    tablazat.push(uj_tablazat) // az uj_tablazatot hozzáadjuk a tablazathoz
    rendertable(tablazat) // meghívjuk a függvényt
    forma.reset() // a formot reseteljük
}
}) 