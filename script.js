var deg = Math.PI / 180
function Data() {
  var d = new Date;
  var day = d.getDay();
  var dd = d.getDay();
  dd += 1
  if (day==0) {
    day="Sunday"
  } else if (day==1) {
    day='Monday'
  } else if (day==2) {
    day='Tuesday'
  } else if (day==3) {
    day='Wednesday'
  } else if (day==4) {
    day='Thursday'
  } else if (day==5) {
    day='Friday'
  } else {
    day='Saturday'
  };
  var mday = d.getDate();
  var month = d.getMonth();
  month += 1;
  var year = d.getYear();
  year += 1900;
  var yr = d.getYear();
  yr -= 100
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  if (secs < 10) {
    secs = '0'+secs
  }
  if (mins < 10) {
    mins = '0'+mins
  }
  if (hours < 10) {
    hours = '0'+hours
  }
  if (month < 10) {
    month = '0'+month
  };
document.getElementById('newd').innerHTML =  hours+":"+mins+":"+secs+' '+day+', '+month+'/'+mday+'/'+year+" ('"+yr+')';
}
function data() {
  setInterval(Data, 1000)
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function random() {
  var evenodd = '<font color="#090">odd</font>.'
  let lol = getRndInteger(1, 1000)
  var sel = document.getElementById("select")
  var slider = document.getElementById("myRange");
  if (slider.value == 1) {
    if (lol%2==1)
      lol+=1
    }
  } else if (slider.value == 2) {
    if (lol%2==0) {
      lol-=1
    }
  } else {}
        
  if (lol%2==0) {
    evenodd = '<font color="#00f">even</font>.'
  }
  var ll = document.getElementById('random')
  ll.innerHTML = 'Your random number is <font color="#af5000">' + lol + '</font> and is ' + evenodd
}

function fib() {
  var t0 = 0
  var t1 = 0
  var t2 = 1
  var n = prompt('Enter a number')
  n = parseInt(n)
  for (var i = 0; i < n; i++) {
    document.getElementById('fib').innerHTML = t1+t2
    t0=t1
    t1=t2
    t2=t0+t1
  }
}

function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            var butt = document.getElementById('prob')
            butt.parentNode.removeChild(butt)
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1 + '%';
        }
    }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("out");
var value = slider.value
if (value == 0) {
      value = "Random"
    } else if (value == 1) {
      value = "Even"
    } else {
      value = "Odd"
    }
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    var value = slider.value
    if (value == 0) {
      value = "Random"
    } else if (value == 1) {
      value = "Even"
    } else {
      value = "Odd"
    }
    output.innerHTML = this.value;
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

var img = [
  'img/trumpban.jpg',
  'img/apollo.jpg']
var num = 0
var photo = document.getElementById('photo')
photo.src = img[num];

function next() {
  num += 1
  if (num >= img.length) {
    num = 0
  }
  photo.src = img[num];
  console.log('Next ok')
}

function prev() {
  num -= 1
  if (num < 0) {
    num = img.length - 1
  }
  photo.src = img[num];
  console.log("Prev ok")
}

var img2 = [
  'img/20170921084601.png',
  'img/20170921084612.png']
var num2 = 0
var photo2 = document.getElementById('photot')
photo2.src = img2[num2];

function next2() {
  num2 += 1
  if (num2 >= img2.length) {
    num2 = 0
  }
  photo2.src = img2[num2];
  console.log('Next ok')
}

function prev2() {
  num2 -= 1
  if (num2 < 0) {
    num2 = img2.length - 1
  }
  photo2.src = img2[num2];
  console.log("Prev ok")
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

addEventListener('load', function(e) {
function loadere() {
  var d = new Date;
  var day = d.getDay();
  var dd = d.getDay();
  dd += 1
  if (day==0) {
    day="Sunday"
  } else if (day==1) {
    day='Monday'
  } else if (day==2) {
    day='Tuesday'
  } else if (day==3) {
    day='Wednesday'
  } else if (day==4) {
    day='Thursday'
  } else if (day==5) {
    day='Friday'
  } else {
    day='Saturday'
  };
  var mday = d.getDate();
  var month = d.getMonth();
  month += 1;
  var year = d.getYear();
  year += 1900;
    if (month==1) {
    month="January"
  } else if (month==2) {
    month='February'
  } else if (month==3) {
    month='March'
  } else if (month==4) {
    month='April'
  } else if (month==5) {
    month='May'
  } else if (month==6) {
    month='June'
  } else if (month==7) {
    month='July'
  } else if (month==8) {
    month='August'
  } else if (month==9) {
    month='September'
  } else if (month==10) {
    month='October'
  } else if (month==11) {
    month='November'
  } else if (month==12) {
    month='December'
  } else {
    month='N/A'
  };
document.getElementById('lol').innerHTML = day+", "+month+" "+mday+", "+year;
}
});
