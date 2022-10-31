//Array de Objetos - Lista de Hoteles  

let hoteles = [
    {
        id: 1,
        nombre: 'All Star Movies',
        categoria : 'Economico',
        extra: "desayuno incluido",
        img: '../img/hoteles/movies.jpg',
        precio : 1500
    },
    {
        id: 2,
        nombre: 'All Star Music',
        categoria : 'Economico',
        extra: "desayuno incluido",
        img: "../img/hoteles/music.jpg",
        precio : 1500
      
    },
    {
        id: 3,
        nombre: 'All Star Sports',
        categoria : 'Economico',
        extra: "desayuno incluido",
        img: "../img/hoteles/sports.jpg",
        precio : 1500
    },
    {
        id: 4,
        nombre: 'Caribbean Beach Resort',
        categoria : 'Moderado',
        extra: "entrada temprana",
        img: "../img/hoteles/caribbean.jpg",
        precio : 2000
    },
    {
        id: 5,
        nombre: 'Coronado Spring',
        categoria : 'Moderado',
        extra: "entrada temprana",
        img: "../img/hoteles/coronado.jpg",
        precio : 2000
    },
    {
        id: 6,
        nombre: 'Port Orleans',
        categoria : 'Moderado',
        extra: "entrada temprana",
        img: "../img/hoteles/orleans.jpg",
        precio : 2000
    },
    {
        id: 7,
        nombre: 'Contemporany Resort',
        categoria : 'Deluxe',
        extra: "descuento",
        img: "../img/hoteles/contemporany.jpg",
        precio : 3500
    },
    {
        id: 8,
        nombre: 'Animal Kingdom Lodge',
        categoria : 'Deluxe',
        extra: "descuento",
        img: '../img/hoteles/animal.jpg',
        precio : 3500
    },
    {
        id: 9,
        nombre: 'Grand Floridian',
        categoria : 'Deluxe',
        extra: "descuento",
        img: "../img/hoteles/floridian.jpg",
        precio : 2500
    }

]



//Storage
let checkInP = document.getElementById("check-in-p")    
let selectCheckIn = document.createElement("p")
    selectCheckIn.innerText = localStorage.getItem("check-in")
    checkInP.appendChild(selectCheckIn)

let checkOutP = document.getElementById("check-out-p")
let selectCheckOut = document.createElement("p")
    selectCheckOut.innerText = localStorage.getItem("check-out")
    checkOutP.appendChild(selectCheckOut)

let guestSelect = document.getElementById("pasajero-select")
let guestSelectOut = document.createElement("p")
    guestSelectOut.innerText = localStorage.getItem("pasajeros")
    guestSelect.appendChild(guestSelectOut)


let continueToBook = document.getElementById("booking")


//Precio Hoteles
function book(id){
    let i = 0
    while(hoteles[i].id !== id){
        i++
    }
    continueToBook.classList.remove('invisible')
    let precio = ""
        document.getElementById("valor-total").innerText = "Total: $" + hoteles[i].precio * localStorage.getItem("pasajeros") * localStorage.getItem("dateTotal"),
       console.log (precio)  
};




