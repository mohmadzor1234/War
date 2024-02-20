   function Berechnen(){
erg=formular1.ListeneinkaufsPreis.value-formular1.ListeneinkaufsPreis.value*formular1.Lieferrabatt.value/100;
formular1.Rechnungspreis.value=erg;
erg=formular1.Rechnungspreis.value-formular1.Rechnungspreis.value*formular1.Lieferskonto.value/100;
formular1.Bareinkaufspreis.value=erg;
erg=(+formular1.Bareinkaufspreis.value)+(+formular1.Bezugskosten.value);
formular1.Einstandspreis.value=erg;
erg=(+formular1.Einstandspreis.value)+(+formular1.Einstandspreis.value)*formular1.Handlungskosten.value/100;
formular1.Selbstkosten.value=erg;
erg=(+formular1.Selbstkosten.value)+(+formular1.Selbstkosten.value)*formular1.Gewinn.value/100;
formular1.Barverkaufspreis.value=erg;
erg=(+formular1.Barverkaufspreis.value)+(+formular1.Barverkaufspreis.value)*formular1.Kundenskonto.value/100;
formular1.Zielverkaufspreis.value=erg;
erg=(+formular1.Zielverkaufspreis.value)+(+formular1.Zielverkaufspreis.value)*formular1.Kundenrabatt.value/100;
formular1.Liestenpreis.value=erg;
erg=(+formular1.Liestenpreis.value)+(+formular1.Liestenpreis.value)*formular1.sss.value/100;
formular1.Bruttoverkaufspreis.value=erg;
let a = document.getElementById("ListeneinkaufsPreis").value;
let b = document.getElementById("Lieferrabatt").value;
let c = document.getElementById("Rechnungspreis").value;


if (a =="") {
    document.getElementById("ListeneinkaufsPreis").value = c / b
}

       }


//erg=(+formular1.Liestenpreis.value)+(+formular1.Liestenpreis.value)*formular1.Mws.value/100;
//formular1.Bruttoverkaufspreis.value=erg;

