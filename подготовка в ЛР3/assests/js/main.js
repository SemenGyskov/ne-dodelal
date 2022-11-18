// 1
function js_style(){
document.getElementById("text").style.color = 'green'
document.getElementById("text").style.fontSize = '20px'
document.getElementById("text").style.width = '150px'
document.getElementById("text").style.backgroundColor = 'black'
document.getElementById("jsstyle").style.borderColor = 'red'
}

// 2

function getFormvalue()
{
  var x = document.getElementById("form1")
  for (var i = 0; i < x.length ; i++)
  {
   if (x.elements[i].value !='Submit')
    {  
      console.log(x.elements[i].value)
     }  
   }
}

// 3
function getAttributes()
{
var x = document.getElementById("w3r").href
alert('значение атребута href равно: '+x)
var b = document.getElementById("w3r").hreflang
alert('значение атребута hreflang равно: '+b)
var c = document.getElementById("w3r").rel
alert('значение атребута rel равно: '+c)
var d = document.getElementById("w3r").target
alert('значение атребута target равно: '+d)
}

// 4
function insert_Row()
{
var x=document.getElementById('sampleTable').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
y.innerHTML="новая строчка";
z.innerHTML="еще новая строчка";
document.getElementById('sampleTable').style.color = "red"
document.getElementById('sampleTable').style.fontSize = '38px'
}


// 5

function changeContent(){
    row = window.prompt("Введите номер ряда","1");
    col = window.prompt("Введите номер строчки","1");
    content = window.prompt("Введите информацию");  
    var x=document.getElementById('myTable').rows[parseInt(row,10)].cells;
    x[parseInt(col,10)].innerHTML=content;
}


// 6

let colort = document.getElementById('colorSelect')
function removecolor(){
    var x=document.getElementById("colorSelect");
    x.remove(x.selectedIndex);
    document.createEleme

}