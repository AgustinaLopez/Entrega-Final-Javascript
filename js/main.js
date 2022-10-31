//Cargo guests
let guests = [ '', 1, 2, 3, 4, 5, 6, 7, 8];
let pasajeros = document.getElementById('pasajeros'); 

function opciones(lista, opcion){
    let elemento = "";
    for (let i = 0; i < lista.length; i++){
        elemento += "<option>" + lista[i] + "</option>";
    }
    opcion.innerHTML = elemento
} 
opciones(guests, pasajeros)

//Guests select
function obtenerPasajero(){
    let pasajeroSelect = document.getElementById("pasajeros");
    localStorage.setItem(pasajeroSelect.id, pasajeroSelect.value)
}

//Date
let checkIn = document.getElementById("check-in");
let checkOut = document.getElementById("check-out");

function obtenerFecha(){   
    localStorage.setItem(checkIn.id,checkIn.value);
    localStorage.setItem(checkOut.id, checkOut.value);
   
    let checkInDate = new Date(checkIn.value);
    let checkOutDate = new Date(checkOut.value);
    let dateTotal = checkOutDate - checkInDate;
    localStorage.setItem("dateTotal", Math.floor(dateTotal / (1000 * 60 * 60 * 24)));

}

function pasajeroDatos(){
    obtenerPasajero()
    obtenerFecha()
    
    if(checkIn.value,checkOut.value,pasajeros.value === null || checkIn.value,checkOut.value,pasajeros.value === ''){
        alert("Select a date and guests to continue")
    } else{
        window.location.href = "room.html";
    }
};



//Fetch
fetch('/hoteles.json')
.then ((Response) => Response.json)
.then ((data) =>{
  data.forEach ((hotel) => {
    const listaDos = document.createElement('li');
    listaDos.innerHTML = `
    <h4> ${hotel.title}</h4>
    <p> ${hotel.categoria} </p>
    `
    document.body.appendChild(li);
  })
});



//Formulario de Consulta    
//Boton Dos
const botonDos = document.getElementById ('botonFormulario');
botonDos.addEventListener ('click', () => {
  Swal.fire({
     title: '¡Listo!',
     text: 'Te llegará un correo de confirmación!',
     icon: 'success',
    
    })
 });

//Formulario de Consulta    
//Boton Dos
const botonTres = document.getElementById ('botonPago');
botonDos.addEventListener ('click', () => {
  Swal.fire({
     title: '¡Felicidades!',
     text: 'Realizaste una reserva. Te llegará un correo con toda la informacion!',
     icon: 'success',
    
    })
 });