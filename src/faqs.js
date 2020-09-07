let frecuentes = require('../data/faqs.json');

let preguntas = [];
let respuestas = [];

for (let i = 0; i < frecuentes.total_faqs; i++) {
    preguntas.push(frecuentes.faqs[i].faq_title)
    respuestas.push(frecuentes.faqs[i].faq_answer)
};

let listadoFAQs = `<ul>`

for (let i = 0; i < frecuentes.total_faqs; i++){
    listadoFAQs += `<li><h4>Pregunta:</h4>${preguntas[i]}</br><h4>Respuesta:</h4>${respuestas[i]}</hr>`  
};

let faqs = `<h2>Preguntas Frecuentes</h2>
Total de preguntas: ${frecuentes.total_faqs}
Listado de preguntas: ${listadoFAQs}
`;

module.exports = faqs;