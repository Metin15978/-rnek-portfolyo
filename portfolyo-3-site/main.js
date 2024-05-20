function hesapla() {
    let urun = document.getElementById("selectOption").value;
    let gün = parseInt(document.getElementById("urun").value);
    let sayfa = parseInt(document.getElementById("sayfa").value);
    let toplam = 0;

    if (urun == "eticaret") {
        toplam = gün * sayfa * 200;
    } else {
        toplam = gün * sayfa * 100;
    }
    document.getElementById("demo").innerHTML = "Toplam Maliyet: " + toplam + " TL";
}
window.onload = hesapla;

function scroll1() {
    document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
}
function scroll2(){
    document.getElementById('section2').scrollIntoView({behavior: 'smooth'});
}
function scroll3(){
    document.getElementById('section3').scrollIntoView({behavior: 'smooth'})
}


  
