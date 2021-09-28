function myFunction() {

    function obliczanieKorekty(poziomCukru, wrazliwoscNaInsuline, poziomDocelowy) {
        var spadek = poziomCukru - poziomDocelowy;
        var korekta = 0;
        var sprawdzenie = 0;
        while (sprawdzenie <= spadek) {
            sprawdzenie = korekta * wrazliwoscNaInsuline;
            korekta = korekta + 0.0009;
        }
        iloscKorektyDoPodania = Math.round(korekta * 100) / 100;
        return iloscKorektyDoPodania;
    }
    
    function obliczanieIlosciInsulinyNaPosilek(iloscKCAL, przelicznik) {
        var wynik = iloscKCAL * przelicznik / 100;
        var wynik = Math.round(wynik * 100) / 100;
        return wynik;
    }

    var czas = new Date();
    var minuty = czas.getMinutes();
    var godziny = czas.getHours();
    var pelnaGodzina = godziny * 60 + minuty;
    //console.log(pelnaGodzina);

    var wrazliwoscNaInsuline = 30;
    var poziomDocelowy = 83;
    var przelicznik = 0;

    //sprawdzanie godziny od godziny 0 do 4 59
    if (pelnaGodzina >= 0 && pelnaGodzina < 300) {
        przelicznik = 1.1;
    }
    
    //sprawdzanie godziny od godziny 5 do 10 29
    else if (pelnaGodzina >= 300 && pelnaGodzina < 630) {
        przelicznik = 2.4;
    }

    //sprawdzanie godziny od godziny 10 30 do 14 59
    else if (pelnaGodzina >= 630 && pelnaGodzina < 900) {
        przelicznik = 1.5;
    }
    
    //sprawdzanie godziny od godziny 15 do 17 59
    else if (pelnaGodzina >= 630 && pelnaGodzina < 1080) {
        przelicznik = 1.5;
    }

    //sprawdzanie godziny od godziny 18 do 17 59
    else if (pelnaGodzina >= 1080 && pelnaGodzina < 1440) {
        przelicznik = 1.05;
    }
    
    
    console.log(`Aktualny czas: ${godziny}:${minuty}`);
    console.log(`Aktualny przelicznik: ${przelicznik}`);

    var poziomCukru = prompt("Wprowadź aktualny poziom cukru");
    var iloscKCAL = prompt("Wprowadź ile kalorii chcesz zjeść");

    var korektaNaPosilek = obliczanieKorekty(poziomCukru, wrazliwoscNaInsuline, poziomDocelowy);
    var bolusNaPosilek = obliczanieIlosciInsulinyNaPosilek(iloscKCAL, przelicznik);
    var iloscInsulinyDoPodania = korektaNaPosilek + bolusNaPosilek;
	var iloscInsulinyDoPodania = Math.round(iloscInsulinyDoPodania * 100) / 100;
    alert(`Musisz podać: ${iloscInsulinyDoPodania} jednostek insuliny (${bolusNaPosilek} j. na posiłek + ${korektaNaPosilek} j. korekty)`)
}