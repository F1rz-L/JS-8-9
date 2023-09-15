function halo(){
    alert("Halo JavaScript");
}

function waktu(){
    document.getElementById('waktu').innerHTML=Date();
}

function zodiak(){
    let tanggal=document.getElementById('tanggal').value;
    let bulan=document.getElementById('bulan').value;

    let zodiak = "Yah"; 

    {
    if(bulan==1){
        if(tanggal>0 && tanggal<=19){
        zodiak = "Capricorn";
        }
        if(tanggal>=20 && tanggal <=31){
        zodiak = "Aquarius";
        }
    }
    if(bulan==2){
        if(tanggal>0 && tanggal<=18){
        zodiak = "Aquarius";
        }
        if(tanggal>=19 && tanggal <=31){
        zodiak = "Pisces";
        }
    }

    document.getElementById('zodiak').innerHTML=zodiak;
    }   
}

function kali(){
    let a = document.getElementById('bil1').value;
    let b = document.getElementById('bil2').value;
    let hasil = a*b;
    document.getElementById('hasil').innerHTML=hasil;
}

function bagi(){
    let a = document.getElementById('bil1').value;
    let b = document.getElementById('bil2').value;
    let hasil = a/b;
    document.getElementById('hasil').innerHTML=hasil;
}

function jumlah(){
    let a = document.getElementById('bil1').value;
    let b = document.getElementById('bil2').value;
    let hasil = parseFloat(a)+parseInt(b);
    document.getElementById('hasil').innerHTML=hasil;
}

function kurang(){
    let a = document.getElementById('bil1').value;
    let b = document.getElementById('bil2').value;
    let hasil = a-b;
    document.getElementById('hasil').innerHTML=hasil;
}

function nama(){
    let namasaya = document.getElementById('inputnama').value;
    document.getElementById('nama').innerHTML=namasaya;
}