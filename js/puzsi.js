let products = [
    {
        id: 1,
        name: "elso",
        img: "images/product/1.png",
        price: 2000
    },
    {
        id: 1,
        name: "elso",
        img: "images/product/2.png",
        price: 2000
    },
    {
        id: 1,
        name: "elso",
        img: "images/product/3.png",
        price: 2000
    },
    {
        id: 1,
        name: "elso",
        img: "images/product/4.png",
        price: 2000
    },
    {
        id: 1,
        name: "elso",
        img: "images/product/5.png",
        price: 2000
    },
    {
        id: 1,
        name: "elso",
        img: "images/product/6.png",
        price: 2000
    },
    {
        id: 1,
        name: "elso",
        img: "images/product/7.png",
        price: 2000
    },
    {
        id: 1,
        name: "elso",
        img: "images/product/8.png",
        price: 2000
    }
]

let listCards = [];
let list = document.querySelector(".list")

let num = 0
let numhere1 = 0
let body = document.querySelector('body');

let openasd = document.querySelector(".kocsi")
let closeasd = document.querySelector(".bezar")

let egy = document.getElementsByClassName("egy").value

openasd.addEventListener('click',  ()=>{
    body.classList.add('asd');
})



closeasd.addEventListener('click',  ()=>{
    body.classList.remove('asd');
}) 


function initApp(key)
{
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
function addToCard(key)
{
    if(listCards[key] == null)
    {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}


function kosarba(id)
{
    if(id == "egy")
    {

        
        num = Number(num) + Number(document.getElementById(1).value)
        numhere1 = Number(numhere1) + Number(document.getElementById(1).value)
        console.log(numhere1)

        document.getElementById("db").innerHTML = num
        document.getElementById("div").innerHTML += ""

    }
    if(id == "ketto")
    {

        
        num = Number(num) + Number(document.getElementById(2).value)

        
        document.getElementById("db").innerHTML = num
    }
    if(id == "harom")
    {

        
        num = Number(num) + Number(document.getElementById(3).value)

        
        document.getElementById("db").innerHTML = num
    }
    if(id == "negy")
    {

        
        num = Number(num) + Number(document.getElementById(4).value)

        
        document.getElementById("db").innerHTML = num
    }
    if(id == "ot")
    {

        
        num = Number(num) + Number(document.getElementById(5).value)

        
        document.getElementById("db").innerHTML = num
    }
    if(id == "hat")
    {

        
        num = Number(num) + Number(document.getElementById(6).value)

        
        document.getElementById("db").innerHTML = num
    }
    if(id == "het")
    {

        
        num = Number(num) + Number(document.getElementById(7).value)

        
        document.getElementById("db").innerHTML = num
    }
    if(id == "nyolc")
    {

        
        num = Number(num) + Number(document.getElementById(8).value)

        
        document.getElementById("db").innerHTML = num
    }
    
}
