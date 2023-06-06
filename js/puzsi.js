let products = [
    {
        id: 1,
        nev: "elso",
        img: "images/product/1.png",
        price: 2000
    },
    {
        id: 1,
        nev: "elso",
        img: "images/product/2.png",
        price: 2000
    },
    {
        id: 1,
        nev: "elso",
        img: "images/product/3.png",
        price: 2000
    },
    {
        id: 1,
        nev: "elso",
        img: "images/product/4.png",
        price: 2000
    },
    {
        id: 1,
        nev: "elso",
        img: "images/product/5.png",
        price: 2000
    },
    {
        id: 1,
        nev: "elso",
        img: "images/product/6.png",
        price: 2000
    },
    {
        id: 1,
        nev: "elso",
        img: "images/product/7.png",
        price: 2000
    },
    {
        id: 1,
        nev: "elso",
        img: "images/product/8.png",
        price: 2000
    }
]




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


function kosarba(id)
{
    if(id == "1")
    {
        document.getElementById("ide").innerHTML += "Asked"
    }
}