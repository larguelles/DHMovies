let movies = require('../data/movies.json');

movies = movies.movies.sort(function(a,b){
    let x = a.title.toUpperCase();
    let y = b.title.toUpperCase();
    if (x > y){
        return 1
    }
    else if (x < y){
        return -1
    }
    else {
        return 0
    };
});
var cantidadDePeliculas = movies.length;
let listadoDePeliculas = `<ul>`
for (let i = 0; i < cantidadDePeliculas; i++){
    listadoDePeliculas +=`<li> ${movies[i].title} </li>`
    listadoDePeliculas += `<li> ${movies[i].overview} </li>`
}
listadoDePeliculas += `</ul>`

let enCartelera = `<h2> En Cartelera </h2>
<h3> Cantidad de películas en cartelera:</h3> ${cantidadDePeliculas}
<h3> Listado de películas:</h3> ${listadoDePeliculas}
`

module.exports = enCartelera;