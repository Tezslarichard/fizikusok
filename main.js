const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead') // létrehozunk egy theadetet
const tbody = document.createElement('tbody') // létrehozok egy tbodyt
document.body.appendChild(table) // a tablet hozzáadom a htmlhez
table.appendChild(thead) // a theadet hozzáadom a tablehez
table.appendChild(tbody) // a tbodyt hozzáadom a tablehez



//fejléc létrehozása

const th_elemei={
 th1_ertek :'Fizika területe', // megadjuk a th1nek az értékét
 th2_ertek :'Időszak', // megadjuk a th2nek az értékét
 th3_ertek :'Képviselők'} // megadjuk a th3nak az értékét

const th_row = document.createElement('tr') // létrehozunk egy sort
thead.appendChild(th_row) // a sort hozzáadjuk a theadhez

const th1 = document.createElement('th') // létrehozunk egy th elemet
th1.innerHTML= th_elemei.th1_ertek // megadjuk a thnak a tartalmát
th_row.appendChild(th1) // a th1-et hozzáadjuk a sorhoz

const th2 = document.createElement('th') // létrehozunk egy th elemet
th2.innerHTML= th_elemei.th2_ertek // megadjuk a thnak a tartalmát
th_row.appendChild(th2) // a th2-t hozzáadjuk a sorhoz

const th3 = document.createElement('th') // létrehozunk egy th elemet
th3.innerHTML= th_elemei.th3_ertek // megadjuk a thnak a tartalmát
th3.colSpan= 2// a th2-nek beállítjuk a rowspan értékét 2-re
th_row.appendChild(th3) // a th3-t hozzáadjuk a sorhoz


//táblázat létrehozása, változok bevezetése
const tb_row1 = document.createElement('tr') // létrehozunk egy sort
tbody.appendChild(tb_row1) // a sort hozzáadjuk a tbodyhoz
const tablazat ={
 td1_ertek :'Optika', // megadjuk a td1nek az értékét
 td2_ertek :'XI.század', // megadjuk a td2nek az értékét
 td3_ertek :'Alhazen'} // megadjuk a td3nak az értékét


const td1 = document.createElement('td') // létrehozunk egy td elemet
td1.innerHTML= tablazat.td1_ertek //megadjuk a tdnek a tartalmat
tb_row1.appendChild(td1) // a td1-et hozzáadjuk a sorhoz

const td2 = document.createElement('td') // létrehozunk egy td elemet
td2.innerHTML= tablazat.td2_ertek //megadjuk a tdnek a tartalmat
tb_row1.appendChild(td2) // a td2-t hozzáadjuk a sorhoz

const td3 = document.createElement('td') // létrehozunk egy td elemet
td3.innerHTML= tablazat.td3_ertek //megadjuk a tdnek a tartalmat
td3.colSpan =2  // a td3-nak beállítjuk a rowspan értékét 2-re
tb_row1.appendChild(td3) // a td3-t hozzáadjuk a sorhoz

const tablazat1 ={
 td4_ertek :'Asztronómia', // megadjuk a td4nek az értékét
 td5_ertek :'reneszánsz', // megadjuk a td5nek az értékét
 td6_ertek :'Galilei', // megadjuk a td6nak az értékét
 td7_ertek :'Kepler'} // megadjuk a td7nek az értékét



const tb_row2 = document.createElement('tr') // létrehozunk egy sort
tbody.appendChild(tb_row2) // a sort hozzáadjuk a tbodyhoz

const td4 = document.createElement('td') // létrehozunk egy td elemet
td4.innerHTML= tablazat1.td4_ertek //megadjuk a tdnek a tartalmat
tb_row2.appendChild(td4) // a td4-et hozzáadjuk a sorhoz

const td5 = document.createElement('td') // létrehozunk egy td elemet
td5.innerHTML= tablazat1.td5_ertek //megadjuk a tdnek a tartalmat
tb_row2.appendChild(td5) // a td5-t hozzáadjuk a sorhoz

const td6 = document.createElement('td') // létrehozunk egy td elemet
td6.innerHTML=  tablazat1.td7_ertek //megadjuk a tdnek a tartalmat
tb_row2.appendChild(td6) // a td6-t hozzáadjuk a sorhoz

const td7 = document.createElement('td') // létrehozunk egy td elemet
td7.innerHTML= tablazat1.td6_ertek //megadjuk a tdnek a tartalmat
tb_row2.appendChild(td7) // a td6-t hozzáadjuk a sorhoz

const tablazat2 ={
 td8_ertek : 'Kvantumfizika', // megadjuk a td8nak az értékét
 td9_ertek :  'XIX-XX. század' ,// megadjuk a td9nek az értékét
 td10_ertek : 'Max Planck', // megadjuk a td10nek az értékét
 td11_ertek : 'Albert Einstein'} // megadjuk a td11nek az értékét

const tb_row3 = document.createElement('tr') // létrehozunk egy sort
tbody.appendChild(tb_row3) // a sort hozzáadjuk a tbodyhoz

const td8 = document.createElement('td') // létrehozunk egy td elemet
td8.innerHTML= tablazat2.td8_ertek //megadjuk a tdnek a tartalmat
tb_row3.appendChild(td8) // a td8-et hozzáadjuk a sorhoz

const td9 = document.createElement('td') // létrehozunk egy td elemet
td9.innerHTML= tablazat2.td9_ertek //megadjuk a tdnek a tartalmat
tb_row3.appendChild(td9) // a td9-t hozzáadjuk a sorhoz

const td10 = document.createElement('td') // létrehozunk egy td elemet
td10.innerHTML= tablazat2.td10_ertek //megadjuk a tdnek a tartalmat
tb_row3.appendChild(td10) // a td10-et hozzáadjuk a sorhoz

const td11 = document.createElement('td') // létrehozunk egy td elemet
td11.innerHTML= tablazat2.td11_ertek //megadjuk a tdnek a tartalmat
tb_row3.appendChild(td11) // a td11-et hozzáadjuk a sorhoz

const tablazat3 ={
 td12_ertek : 'Modern fizika', // megadjuk a td12nek az értékét
 td13_ertek : 'XX-XXI. század' ,// megadjuk a td13nak az értékét
 td14_ertek : 'Richard Feynman', // megadjuk a td14nek az értékét
 td15_ertek : 'Stephen Hawking'} // megadjuk a td15nek az értékét


const tb_row4 = document.createElement('tr') // létrehozunk egy sort
tbody.appendChild(tb_row4) // a sort hozzáadjuk a tbodyhoz

const td12 = document.createElement('td') // létrehozunk egy td elemet 
td12.innerHTML= tablazat3.td12_ertek //megadjuk a tdnek a tartalmat
tb_row4.appendChild(td12) // a td12-et hozzáadjuk a sorhoz

const td13 = document.createElement('td') // létrehozunk egy td elemet
td13.innerHTML= tablazat3.td13_ertek //megadjuk a tdnek a tartalmat
tb_row4.appendChild(td13) // a td13-t hozzáadjuk a sorhoz

const td14 = document.createElement('td') // létrehozunk egy td elemet
td14.innerHTML= tablazat3.td14_ertek //megadjuk a tdnek a tartalmat
tb_row4.appendChild(td14) // a td14-et hozzáadjuk a sorhoz

const td15 = document.createElement('td') // létrehozunk egy td elemet
td15.innerHTML= tablazat3.td15_ertek //megadjuk a tdnek a tartalmat
tb_row4.appendChild(td15) // a td15-et hozzáadjuk a sorhoz