var bul = 1;
var schet = 0;
var height = 0;
var width = 0;
function one() {
document.getElementById("Scrr").style.display = "none";
document.getElementById("Winn").style.display = "block";
document.getElementById("fotoWinn").style.display = "none";
width = document.body.clientWidth;
height = document.body.clientHeight;
}

function ScrButOn() {
    if (bul == 1) {
    document.getElementById("Scrr").style.display = "block";
    document.getElementById("Winn").style.display = "none";
    document.getElementById("button2").style.opacity = 1;
    document.getElementById("button3").style.opacity = 0.2;
    bul = 0;
    }
    }
    10
    function leftbut() {
    if (schet > 0) {
    schet--;
    document.getElementById("fotoL").src = "phot/PHOTO/" + (schet+1) + ".png";
    document.getElementById("fotoC").src = "phot/PHOTO/" + (schet+2) + ".png";
    document.getElementById("fotoR").src = "phot/PHOTO/" + (schet+3) + ".png";
    document.getElementById("fotoG").src = "phot/PHOTO/" + (schet+4) + ".png";
    document.getElementById("fotoB").src = "phot/PHOTO/" + (schet+5) + ".png";
    }
    }
    function rightbut() {
    if (schet < 3) {
    schet++;
    document.getElementById("fotoL").src = "phot/PHOTO/" + (schet+1) + ".png";
    document.getElementById("fotoC").src = "phot/PHOTO/" + (schet+2) + ".png";
    document.getElementById("fotoR").src = "phot/PHOTO/" + (schet+3) + ".png";
    document.getElementById("fotoG").src = "phot/PHOTO/" + (schet+4) + ".png";
    document.getElementById("fotoB").src = "phot/PHOTO/" + (schet+5) + ".png";
    
    }
    }
    function fotoClick(number) {
    document.getElementById("fotoM").src = "phot/PHOTO/" + (schet + number) + ".png";
    }
    

    document.getElementById('btnProduct').onclick = function() {
        calcCost();
    };
    function calcCost() {
        var sP = document.getElementById('selectProduct').value;
        var qP = document.getElementById('quantityProduct').value;
        var total = sP * qP;
        document.getElementById('priceProduct').innerHTML = total;
       document.getElementById('infoProduct').style.display = 'block';

       if (sP ==0 || qP == 0) {
        document.getElementById('infoProduct').style.display = 'none';
        alert('Укажите значения')
        return;
       }
    }
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("nav-btn").addEventListener("click", function()
    {
        document.querySelector(".header_fix").classList.toggle('open')
    })
})

  