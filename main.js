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



fejlecgeneralas(tablazat1) // meghívjuk a függvényt
rendertable(tablazat)//meghuvjuk a függvényt


generateform() // meghívjuk a függvényt
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
