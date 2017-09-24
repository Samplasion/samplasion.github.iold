addEventListener('load', function(e) {
 var deg = Math.PI / 180
 function getRndInteger(min, max) {
     return Math.floor(Math.random() * (max - min + 1) ) + min;
 }
 
 function random() {
   var evenodd = '<font color="#090">odd</font>.'
   let lol = getRndInteger(1, 1000)
   if (lol%2==0) {
     evenodd = '<font color="#00f">even</font>.'
   }
   var ll = document.getElementById('random')
   ll.innerHTML = 'Your random number is <font color="#af5000">' + lol + '</font> and is ' + evenodd
 }

 function hex() {
   var nrs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
   var rand = nrs[Math.floor(Math.random() * nrs.length)];
     var rand2 = nrs[Math.floor(Math.random() * nrs.length)];
     var rand3 = nrs[Math.floor(Math.random() * nrs.length)];
     var rand4 = nrs[Math.floor(Math.random() * nrs.length)];
     var rand5 = nrs[Math.floor(Math.random() * nrs.length)];
     var rand6 = nrs[Math.floor(Math.random() * nrs.length)];
   document.getElementById("randex").innerHTML = '<font color="#'+rand+rand2+rand3+rand4+rand5+rand6+'">#'+rand+rand2+rand3+rand4+rand5+rand6+' is the color</font>'
 }

 function sum() {
   var n1 = prompt("1")
   n1 = parseInt(n1)
   var n2 = prompt("2")
   n2 = parseInt(n2)
   var sum = n1 + n2
   let nr = document.getElementById('nr')
   nr.innerHTML = "{"+sum+"}"
   if (sum == "NaN") {
     sum = "You should only input numbers"
   }
 }
 
 function sub() {
   var n1 = prompt("1")
   n1 = parseInt(n1)
   var n2 = prompt("2")
   n2 = parseInt(n2)
   var sum = n1 - n2
   let nr = document.getElementById('nr')
   nr.innerHTML = "{"+sum+"}"
 }
 
 function mult() {
   var n1 = prompt("1")
   var n2 = prompt("2")
   let nr = document.getElementById('nr')
   nr.innerHTML = "{"+n1 * n2+"}"
 }
 
 function div() {
   var n1 = prompt("1")
   n1 = parseInt(n1)
   var n2 = prompt("2")
   n2 = parseInt(n2)
   var sum = n1 / n2
   let nr = document.getElementById('nr')
   nr.innerHTML = "{"+sum+"}"
 }
 
 function bytwo() {
   var n1 = prompt("1")
   n1 = parseInt(n1)
   var n2 = prompt("2")
   n2 = parseInt(n2)
   var by2 = Math.pow(n1, n2)
   let nr = document.getElementById('nr')
   nr.innerHTML = "{"+by2+"}"
 }
 
 function sqrt() {
   var n1 = prompt("1")
   n1 = parseInt(n1)
   var by2 = Math.sqrt(n1)
   let nr = document.getElementById('nr')
   nr.innerHTML = "{"+by2+"}"
 }
 
 function cleare() {
   let nr = document.getElementById(`nr`);
   nr.innerHTML = "{-}"
 }
});