const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead') // létrehozunk egy theadetet
const tbody = document.createElement('tbody') // létrehozok egy tbodyt
document.body.appendChild(table) // a tablet hozzáadom a htmlhez
table.appendChild(thead) // a theadet hozzáadom a tablehez
table.appendChild(tbody) // a tbodyt hozzáadom a tablehez


const tablazat1 = [  {
    th1_ertek :'Fizika területe', // megadjuk a th1nek az értékét
    th2_ertek :'Időszak', // megadjuk a th2nek az értékét
    th3_ertek :'Képviselők'} // megadjuk a th3nak az értékét 
    ]



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

//fejléc létrehozása

const th_row = document.createElement('tr') // létrehozunk egy sort
thead.appendChild(th_row) // a sort hozzáadjuk a theadhez

const th1 = document.createElement('th') // létrehozunk egy th elemet
th1.innerHTML= tablazat1[0].th1_ertek // megadjuk a thnak a tartalmát
th_row.appendChild(th1) // a th1-et hozzáadjuk a sorhoz

const th2 = document.createElement('th') // létrehozunk egy th elemet
th2.innerHTML= tablazat1[0].th2_ertek // megadjuk a thnak a tartalmát
th_row.appendChild(th2) // a th2-t hozzáadjuk a sorhoz

const th3 = document.createElement('th') // létrehozunk egy th elemet
th3.innerHTML= tablazat1[0].th3_ertek // megadjuk a thnak a tartalmát
th3.colSpan= 2// a th2-nek beállítjuk a rowspan értékét 2-re
th_row.appendChild(th3) // a th3-t hozzáadjuk a sorhoz



function rendertable(){
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
rendertable()//meghuvjuk a függvényt



const form = document.getElementById('form') // a formot elmentjük egy változóba


form.addEventListener('submit', function(e){// a formra hozzáadunk egy eseményfigyelőt

    e.preventDefault() //megakadályozzuk az alapértelmezett eseményt


    const fizika_terulet = document.getElementById('fizika')// a fizika területet elmentjük egy változóba id alapján
    const idoszak = document.getElementById('ido')// az időszakot elmentjük egy változóba id alapján
    const tudosok1 = document.getElementById('tudos1')// a tudos1-et elmentjük egy változóba id alapján
    const tudosok2 = document.getElementById('tudos2')//a tudos2-t elmentjük egy változóba id alapján



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
    rendertable() // meghívjuk a függvényt
}) 

