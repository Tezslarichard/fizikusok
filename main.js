const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead') // létrehozunk egy theadetet
const tbody = document.createElement('tbody') // létrehozok egy tbodyt
document.body.appendChild(table) // a tablet hozzáadom a htmlhez
table.appendChild(thead) // a theadet hozzáadom a tablehez
table.appendChild(tbody) // a tbodyt hozzáadom a tablehez

const tablazat =[
    {
        th1_ertek :'Fizika területe', // megadjuk a th1nek az értékét
        th2_ertek :'Időszak', // megadjuk a th2nek az értékét
        th3_ertek :'Képviselők'} // megadjuk a th3nak az értékét 
        ,
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
th1.innerHTML= tablazat[0].th1_ertek // megadjuk a thnak a tartalmát
th_row.appendChild(th1) // a th1-et hozzáadjuk a sorhoz

const th2 = document.createElement('th') // létrehozunk egy th elemet
th2.innerHTML= tablazat[0].th2_ertek // megadjuk a thnak a tartalmát
th_row.appendChild(th2) // a th2-t hozzáadjuk a sorhoz

const th3 = document.createElement('th') // létrehozunk egy th elemet
th3.innerHTML= tablazat[0].th3_ertek // megadjuk a thnak a tartalmát
th3.colSpan= 2// a th2-nek beállítjuk a rowspan értékét 2-re
th_row.appendChild(th3) // a th3-t hozzáadjuk a sorhoz




//táblázat létrehozása
for(let i = 1 ; i < tablazat.length;i++ ){
    const tr_row = document.createElement('tr') // létrehozunk egy sort
    tbody.appendChild(tr_row) // a sort hozzáadjuk a tbodyhoz

    const td1 = document.createElement('td') // létrehozunk egy td elemet
    td1.innerHTML= tablazat[i].fizika // megadjuk a td1-nek a tartalmát
    tr_row.appendChild(td1) // a td1-et hozzáadjuk a sorhoz

    const td2 = document.createElement('td') // létrehozunk egy td elemet
    td2.innerHTML= tablazat[i].ido // megadjuk a td2-nek a tartalmát
    tr_row.appendChild(td2) // a td2-t hozzáadjuk a sorhoz

    const td3 = document.createElement('td') // létrehozunk egy td elemet
    td3.innerHTML= tablazat[i].tudos1 // megadjuk a td3-nak a tartalmát
    tr_row.appendChild(td3) // a td3-t hozzáadjuk a sorhoz


    

    if(tablazat[i].tudos2){ // ha van tudos2
        const td4 = document.createElement('td') // létrehozunk egy td elemet
        td4.innerHTML= tablazat[i].tudos2 // megadjuk a td4-nek a tartalmát
        tr_row.appendChild(td4) // a td4-t hozzáadjuk a sorhoz
    }
    else{ //ha nincs akkor 
        td3.colSpan= 2 // a td3-nak beállítjuk a colspan értékét 2-re
    }


   

}