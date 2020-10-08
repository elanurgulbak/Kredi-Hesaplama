function hesapla(){
    var tutar,vadeMiktari;
    var aylikTaksit,toplamTutar;

    tutar=document.getElementById("krediTutari").value;

    var list=document.getElementById("vadeTercihleri");
    vadeMiktari=list.options[list.selectedIndex].value;

    if(vadeMiktari==12){
        toplamTutar=tutar*1.5;
    }
    else if(vadeMiktari==24){
        toplamTutar=tutar*1.6;
    }
    else if(vadeMiktari==36){
        toplamTutar=tutar*1.7;
    }
    else if(vadeMiktari==48){
        toplamTutar=tutar*1.8;
    }
    else if(vadeMiktari==60){
        toplamTutar=tutar*1.9;
    }
    aylikTaksit=toplamTutar/vadeMiktari;
    document.querySelector("#sonuc").innerHTML="Toplam ödenecek miktar:"+toplamTutar + "<br>"
    +"Aylık ödenecek miktar:"+aylikTaksit.toFixed(2);
}