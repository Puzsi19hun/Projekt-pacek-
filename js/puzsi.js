

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

let fizethet = false

let elso1 = false

let openasd = document.querySelector(".kocsi")
let closeasd = document.querySelector(".bezar")

let openfiz = document.querySelector(".fizetes")
let bezarfiz = document.querySelector(".bezar2")

let egy = document.getElementsByClassName("egy").value




openasd.addEventListener('click', () => {
    body.classList.add('asd');
})
closeasd.addEventListener('click', () => {
    body.classList.remove('asd');
})






function initApp(key) {
    products.forEach((value, key))
    {
        let newDiv = document.createElement("div")
        newDiv.classList.add('item')
        newDiv.innerHTML = `<img src="assets/imagies/${value.img}"
        <div class="nev">${value.nev}</div>
        <div class="ar">${value.price.toLocaleString()} ft</div>
        <button onclick = "addToCard(${key})">Kosárba</button>}`;
        list.appendChild(newDiv)
    }
}
function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}


function kosarba(id) {
    
   

    
    if (id == "egy") {
        num = Number(num) + Number(document.getElementById(1).value)
        numhere1 = Number(numhere1) + Number(document.getElementById(1).value)
        console.log(numhere1)

        if (document.getElementById(1).value != 0) {
            document.getElementById("db").innerHTML = num

            document.getElementById("elso").innerHTML = "Cigány gyerek : 2000 Ft: " + numhere1 + " db, Teljes ár: " + numhere1 * 2000 + " Ft"
        }




    }
    if (id == "ketto") {


        num = Number(num) + Number(document.getElementById(2).value)
        numhere2 = Number(numhere2) + Number(document.getElementById(2).value)
        console.log(numhere2)

        if (document.getElementById(2).value != 0) {
            document.getElementById("db").innerHTML = num
            document.getElementById("masodik").innerHTML = "Puzsi Pack (5KG) : 2000 Ft: " + numhere2 + " db, Teljes ár: " + numhere2 * 2000 + " Ft"
        }
    }
    if (id == "harom") {


        num = Number(num) + Number(document.getElementById(3).value)
        numhere3 = Number(numhere3) + Number(document.getElementById(3).value)
        console.log(numhere3)
        if (document.getElementById(3).value != 0) {
            document.getElementById("db").innerHTML = num
            document.getElementById("harmadik").innerHTML = "Masszázs : 2000 Ft: " + numhere3 + " db, Teljes ár: " + numhere3 * 2000 + " Ft"
        }
    }
    if (id == "negy") {


        num = Number(num) + Number(document.getElementById(4).value)
        numhere4 = Number(numhere4) + Number(document.getElementById(4).value)
        console.log(numhere4)
        if (document.getElementById(4).value != 0) {
            document.getElementById("db").innerHTML = num
            document.getElementById("negyedik").innerHTML = "Személyi edzés : 2000 Ft: " + numhere4 + " db, Teljes ár: " + numhere4 * 2000 + " Ft"
        }
    }
    if (id == "ot") {


        num = Number(num) + Number(document.getElementById(5).value)
        numhere5 = Number(numhere5) + Number(document.getElementById(5).value)
        console.log(numhere5)
        if (document.getElementById(5).value != 0) {
            document.getElementById("db").innerHTML = num
            document.getElementById("otodik").innerHTML = "Fejvadász : 2000 Ft: " + numhere5 + " db, Teljes ár: " + numhere5 * 2000 + " Ft"
        }

    }
    if (id == "hat") {


        num = Number(num) + Number(document.getElementById(6).value)
        numhere6 = Number(numhere6) + Number(document.getElementById(6).value)
        console.log(numhere6)
        if (document.getElementById(6).value != 0) {
            document.getElementById("db").innerHTML = num
            document.getElementById("hatodik").innerHTML = "Milka csokoládé : 2000 Ft: " + numhere6 + " db, Teljes ár: " + numhere6 * 2000 + " Ft"
        }

    }
    if (id == "het") {


        num = Number(num) + Number(document.getElementById(7).value)
        numhere7 = Number(numhere7) + Number(document.getElementById(7).value)
        console.log(numhere7)
        if (document.getElementById(7).value != 0) {
            document.getElementById("db").innerHTML = num
            document.getElementById("hetedik").innerHTML = "Szállás : 2000 Ft: " + numhere7 + " db, Teljes ár: " + numhere7 * 2000 + " Ft"
        }

    }
    if (id == "nyolc") {


        num = Number(num) + Number(document.getElementById(8).value)
        numhere8 = Number(numhere8) + Number(document.getElementById(8).value)
        console.log(numhere8)
        if (document.getElementById(8).value != 0) {
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
        document.getElementById("fiz").style.color="white";
        document.getElementById("fiz").style.cursor="pointer";

        openfiz.addEventListener('click', () => {
            body.classList.add('asd2');
        })
    }
    
    bezarfiz.addEventListener('click', () => {
        body.classList.remove('asd2');
    })

}
