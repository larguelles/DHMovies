let movies = require('../data/movies');

let masVotadasArray = [];
let peliculas = [];

function masVotadasFuncion(){
    for(let i = 0; i < movies.movies.length; i++){
        if (movies.movies[i].vote_average >= 7){
            masVotadasArray.push(movies.movies[i].title);
            peliculas.push(movies.movies[i]);
        }
    }
    return masVotadasArray;
}

let votadas = masVotadasFuncion();

let promedio = 0;

function ratingPromedio(){
    for(let i = 0; i < movies.movies.length; i++){
        if (movies.movies[i].vote_average >= 7){
            promedio += movies.movies[i].vote_average;
        }
    }
    return promedio/votadas.length
}

let listadoMasVotadas = `<ul>`

for(let i = 0;i < peliculas.length; i++){
    listadoMasVotadas += `<h5><li>i. ${peliculas[i].title}</h5>ii. Rating: ${peliculas[i].vote_average}<br/>iii. Reseña: ${peliculas[i].overview}</li><hr/>`;
}
listadoMasVotadas += `</ul>`

let masVotadas = `
<h1>Más votadas</h1>
<h3>Total de películas: ${votadas.length}</h3>
<h3>Rating promedio: ${ratingPromedio()}</h3>
<hr/>
<h3>Listado de películas: </h3>${listadoMasVotadas}`;

module.exports = masVotadas;