const table = document.createElement('table') // létrehozunk egy table elemet
const thead = document.createElement('thead') // létrehozunk egy theadetet
const tbody = document.createElement('tbody') // létrehozok egy tbodyt
document.body.appendChild(table) // a tablet hozzáadom a htmlhez
table.appendChild(thead) // a theadet hozzáadom a tablehez
table.appendChild(tbody) // a tbodyt hozzáadom a tablehez



//fejléc létrehozása

const th_row = document.createElement('tr') // létrehozunk egy sort
thead.appendChild(th_row) // a sort hozzáadjuk a theadhez

const th1 = document.createElement('th') // létrehozunk egy th elemet
th1.innerHTML= 'Fizika területe' // megadjuk a thnak a tartalmát
th_row.appendChild(th1) // a th1-et hozzáadjuk a sorhoz

const th2 = document.createElement('th') // létrehozunk egy th elemet
th2.innerHTML= 'Időszak' // megadjuk a thnak a tartalmát
 
th_row.appendChild(th2) // a th2-t hozzáadjuk a sorhoz

const th3 = document.createElement('th') // létrehozunk egy th elemet
th3.innerHTML= 'Képviselők' // megadjuk a thnak a tartalmát
th3.colSpan= 2// a th2-nek beállítjuk a rowspan értékét 2-re
th_row.appendChild(th3) // a th3-t hozzáadjuk a sorhoz


//táblázat létrehozása
const tb_row1 = document.createElement('tr') // létrehozunk egy sort
tbody.appendChild(tb_row1) // a sort hozzáadjuk a tbodyhoz

const td1 = document.createElement('td') // létrehozunk egy td elemet
td1.innerHTML= 'Optika' //megadjuk a tdnek a tartalmat
tb_row1.appendChild(td1) // a td1-et hozzáadjuk a sorhoz

const td2 = document.createElement('td') // létrehozunk egy td elemet
td2.innerHTML= 'XI.század' //megadjuk a tdnek a tartalmat
tb_row1.appendChild(td2) // a td2-t hozzáadjuk a sorhoz

const td3 = document.createElement('td') // létrehozunk egy td elemet
td3.innerHTML= 'Alhazen'//megadjuk a tdnek a tartalmat
td3.colSpan =2  // a td3-nak beállítjuk a rowspan értékét 2-re
tb_row1.appendChild(td3) // a td3-t hozzáadjuk a sorhoz

const tb_row2 = document.createElement('tr') // létrehozunk egy sort
tbody.appendChild(tb_row2) // a sort hozzáadjuk a tbodyhoz

const td4 = document.createElement('td') // létrehozunk egy td elemet
td4.innerHTML= 'Asztronómia' //megadjuk a tdnek a tartalmat
tb_row2.appendChild(td4) // a td4-et hozzáadjuk a sorhoz

const td5 = document.createElement('td') // létrehozunk egy td elemet
td5.innerHTML= 'reneszánsz' //megadjuk a tdnek a tartalmat
tb_row2.appendChild(td5) // a td5-t hozzáadjuk a sorhoz

const td6 = document.createElement('td') // létrehozunk egy td elemet
td6.innerHTML= 'Kepler' //megadjuk a tdnek a tartalmat
tb_row2.appendChild(td6) // a td6-t hozzáadjuk a sorhoz

const td7 = document.createElement('td') // létrehozunk egy td elemet
td7.innerHTML= 'Galilei' //megadjuk a tdnek a tartalmat
tb_row2.appendChild(td7) // a td6-t hozzáadjuk a sorhoz

const tb_row3 = document.createElement('tr') // létrehozunk egy sort
tbody.appendChild(tb_row3) // a sort hozzáadjuk a tbodyhoz

const td8 = document.createElement('td') // létrehozunk egy td elemet
td8.innerHTML= 'Kvantumfizika' //megadjuk a tdnek a tartalmat
tb_row3.appendChild(td8) // a td8-et hozzáadjuk a sorhoz

const td9 = document.createElement('td') // létrehozunk egy td elemet
td9.innerHTML= 'XIX-XX. század' //megadjuk a tdnek a tartalmat
tb_row3.appendChild(td9) // a td9-t hozzáadjuk a sorhoz

const td10 = document.createElement('td') // létrehozunk egy td elemet
td10.innerHTML= 'Max Planck' //megadjuk a tdnek a tartalmat
tb_row3.appendChild(td10) // a td10-et hozzáadjuk a sorhoz

const td11 = document.createElement('td') // létrehozunk egy td elemet
td11.innerHTML= 'Albert Einstein' //megadjuk a tdnek a tartalmat
tb_row3.appendChild(td11) // a td11-et hozzáadjuk a sorhoz

const tb_row4 = document.createElement('tr') // létrehozunk egy sort
tbody.appendChild(tb_row4) // a sort hozzáadjuk a tbodyhoz

const td12 = document.createElement('td') // létrehozunk egy td elemet 
td12.innerHTML= 'Modern fizika' //megadjuk a tdnek a tartalmat
tb_row4.appendChild(td12) // a td12-et hozzáadjuk a sorhoz

const td13 = document.createElement('td') // létrehozunk egy td elemet
td13.innerHTML= 'XIX-XX. század' //megadjuk a tdnek a tartalmat
tb_row4.appendChild(td13) // a td13-t hozzáadjuk a sorhoz

const td14 = document.createElement('td') // létrehozunk egy td elemet
td14.innerHTML= 'Richard Feynman' //megadjuk a tdnek a tartalmat
tb_row4.appendChild(td14) // a td14-et hozzáadjuk a sorhoz

const td15 = document.createElement('td') // létrehozunk egy td elemet
td15.innerHTML= 'Stephen Hawking' //megadjuk a tdnek a tartalmat
tb_row4.appendChild(td15) // a td15-et hozzáadjuk a sorhoz