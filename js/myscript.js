var textEnd = "/fine testo."
var notAvaible = "Under Maintenance"
console.log('try');

document.getElementById('bar').innerHTML = document.getElementById('bar').innerHTML + " modified";

document.getElementById('textStart').innerHTML = document.getElementById('textStart').innerHTML + textEnd;

document.getElementById('textAbout').innerHTML = "Now we are going to talk about new stuff!!!";

document.getElementById('footLeft').innerHTML = document.getElementById('footLeft').innerHTML + "new informations";
document.getElementById('footCentral').innerHTML = document.getElementById('footCentral').innerHTML + "</br>" + document.getElementById('textStart').innerHTML;
document.getElementById('footRight').innerHTML = notAvaible;
document.getElementById('footRight').style.fontSize = "40px";