

let listCards = [];
let list = document.querySelector(".list")

let num = 0
let numhere1 = 0
let numhere2 = 0
let numhere3 = 0
let numhere4 = 0
let numhere5 = 0
let numhere6 = 0
let numhere7 = 0
let numhere8 = 0
let body = document.querySelector('body');
let osszeg = 0
let szd = 0
let fizethet = false
let rendelhet = false
let elso1 = false

let openasd = document.querySelector(".kocsi")
let closeasd = document.querySelector(".bezar")

let openfiz = document.querySelector(".fizetes")
let bezarfiz = document.querySelector(".bezar2")

let egy = document.getElementsByClassName("egy").value
utanvet = false



openasd.addEventListener('click', () => {
    body.classList.add('asd');
})
closeasd.addEventListener('click', () => {
    body.classList.remove('asd');
})
 






function check() {
    if (document.getElementById("check").checked) {
        document.getElementById("eltun").style.display = "none"
    }
    else {
        document.getElementById("eltun").style.display = "block"
    }
}

function checknum(){

    console.log(fizethet)
    if (fizethet) {
        document.getElementById("fiz").style.color = "white";
        document.getElementById("fiz").style.cursor = "pointer";

        openfiz.addEventListener('click', () => {
            body.classList.add('asd2');
        })
    }
    else{
        document.getElementById("fiz").style.color = "gray";
        document.getElementById("fiz").style.cursor = "auto";
    }
}



function kosarba(id) {




    if (id == "egy") {
        num = Number(num) + Number(document.getElementById(1).value)
        numhere1 = Number(numhere1) + Number(document.getElementById(1).value)
        console.log(numhere1)

        if (document.getElementById(1).value > 0) {
            document.getElementById("db").innerHTML = num

            document.getElementById("elso").innerHTML = "Cigány gyerek : 2000 Ft: " + numhere1 + " db, Teljes ár: " + numhere1 * 2000 + " Ft"
        }




    }
    if (id == "ketto") {


        num = Number(num) + Number(document.getElementById(2).value)
        numhere2 = Number(numhere2) + Number(document.getElementById(2).value)
        console.log(numhere2)

        if (document.getElementById(2).value > 0) {
            document.getElementById("db").innerHTML = num
            document.getElementById("masodik").innerHTML = "Puzsi Pack (5KG) : 2000 Ft: " + numhere2 + " db, Teljes ár: " + numhere2 * 2000 + " Ft"
        }
    }
    if (id == "harom") {


        num = Number(num) + Number(document.getElementById(3).value)
        numhere3 = Number(numhere3) + Number(document.getElementById(3).value)
        console.log(numhere3)
        if (document.getElementById(3).value > 0) {
            document.getElementById("db").innerHTML = num
            document.getElementById("harmadik").innerHTML = "Masszázs : 2000 Ft: " + numhere3 + " db, Teljes ár: " + numhere3 * 2000 + " Ft"
        }
    }
    if (id == "negy") {


        num = Number(num) + Number(document.getElementById(4).value)
        numhere4 = Number(numhere4) + Number(document.getElementById(4).value)
        console.log(numhere4)
        if (document.getElementById(4).value > 0) {
            document.getElementById("db").innerHTML = num
            document.getElementById("negyedik").innerHTML = "Személyi edzés : 2000 Ft: " + numhere4 + " db, Teljes ár: " + numhere4 * 2000 + " Ft"
        }
    }
    if (id == "ot") {


        num = Number(num) + Number(document.getElementById(5).value)
        numhere5 = Number(numhere5) + Number(document.getElementById(5).value)
        console.log(numhere5)
        if (document.getElementById(5).value > 0) {
            document.getElementById("db").innerHTML = num
            document.getElementById("otodik").innerHTML = "Fejvadász : 2000 Ft: " + numhere5 + " db, Teljes ár: " + numhere5 * 2000 + " Ft"
        }

    }
    if (id == "hat") {


        num = Number(num) + Number(document.getElementById(6).value)
        numhere6 = Number(numhere6) + Number(document.getElementById(6).value)
        console.log(numhere6)
        if (document.getElementById(6).value > 0) {
            document.getElementById("db").innerHTML = num
            document.getElementById("hatodik").innerHTML = "Milka csokoládé : 2000 Ft: " + numhere6 + " db, Teljes ár: " + numhere6 * 2000 + " Ft"
        }

    }
    if (id == "het") {


        num = Number(num) + Number(document.getElementById(7).value)
        numhere7 = Number(numhere7) + Number(document.getElementById(7).value)
        console.log(numhere7)
        if (document.getElementById(7).value > 0) {
            document.getElementById("db").innerHTML = num
            document.getElementById("hetedik").innerHTML = "Szállás : 2000 Ft: " + numhere7 + " db, Teljes ár: " + numhere7 * 2000 + " Ft"
        }

    }
    if (id == "nyolc") {

        if (document.getElementById(8).value > 0) {
            num = Number(num) + Number(document.getElementById(8).value)
            numhere8 = Number(numhere8) + Number(document.getElementById(8).value)
        }
        console.log(numhere8)
        if (document.getElementById(8).value > 0) {
            document.getElementById("db").innerHTML = num
            document.getElementById("nyolcadik").innerHTML = "Ebéd : 2000 Ft: " + numhere8 + " db, Teljes ár: " + numhere8 * 2000 + " Ft"
        }

    }
    if (num > 0) {
        fizethet = true
    }
    else {
        fizethet = false
    }

    if (fizethet) {
        document.getElementById("fiz").style.color = "white";
        document.getElementById("fiz").style.cursor = "pointer";

        openfiz.addEventListener('click', () => {
            body.classList.add('asd2');
        })
    }


    bezarfiz.addEventListener('click', () => {
        body.classList.remove('asd2');
    })

    osszeg = num * 2000
    if (osszeg >= 20000) {
        szd = 1699
        document.getElementById("szd").innerHTML = 1699 + "Ft"
    }
    else {
        szd = 0
        document.getElementById("szd").innerHTML = 0 + "Ft"
    }




}

function radio() {

    document.getElementById("megrendel").style.color = "white"
    document.getElementById("megrendel").style.cursor = "pointer"
    rendelhet = true
    if (document.getElementById("asd").checked) {
        document.getElementById("osszeg").innerHTML = (num * 2000) + szd + 490 + "Ft"
    }
    else {
        document.getElementById("osszeg").innerHTML = (num * 2000) + szd + "Ft"
    }


}



function megrendel() {
    if (rendelhet) {
        alert("Köszönjük a rendelést!")

        body.classList.remove('asd2');
        body.classList.remove('asd');
        setTimeout(function(){ window. location. reload(); }, 900)



    }


}
