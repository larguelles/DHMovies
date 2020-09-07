let movies = require('../data/movies');

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
var cantidadPeliculas = movies.length;
let listadoPeliculas = `<ol>`
for (let i = 0; i < cantidadPeliculas; i++){
    listadoPeliculas +=`<li> ${movies[i].title} </li>`
}
listadoPeliculas += `</ol>`


let home = `<h2>Bienvenidos a DH Movies el mejor sitio para encontrar las mejores
películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.</h2>
<h3>Cantidad de películas en cartelera: ${cantidadPeliculas}</h3>
<h3>Listado de películas disponibles:</h3> ${listadoPeliculas}
<h4> Recordá que podés visitar las siguientes secciones:</h4>
<a href="/en-cartelera">En cartelera </a></br>
<a href="/mas-votadas">Más votadas </a></br>
<a href="/sucursales">Sucursales </a></br>
<a href="/contacto">Contacto </a></br>
<a href="/preguntas-frecuentes">Preguntas Frecuentes </a></br>
`

module.exports = home;