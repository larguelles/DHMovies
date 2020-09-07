let theaters = require('../data/theaters.json');

let sucursalesName = [];
let sucursalesAddress = [];
let sucursalesDescription = [];

for (let i = 0; i < theaters.theaters.length; i++) {
    sucursalesName.push(theaters.theaters[i].name)
    sucursalesAddress.push(theaters.theaters[i].address)
    sucursalesDescription.push(theaters.theaters[i].description)
}

let sucursalesListado = `<ul>`

for (let i = 0; i < theaters.theaters.length; i++){
    sucursalesListado += `<li><h4> i. Nombre:</h4>${sucursalesName[i]}<h5></br>ii. Dirección:</h5>${sucursalesAddress[i]}</br><h5>iii. Descripción:</h5>${sucursalesDescription}</li></hr>`; 
}

sucursalesListado += `</ul>`

let sucursales = `<h2>Nuestras Salas</h2>
<h3>Total de salas:</h3>${theaters.theaters.length}
<h3>Listado de salas:</h3>${sucursalesListado}
</hr>
`;

module.exports = sucursales;