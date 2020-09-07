const http = require('http');
let home = require('./src/home');
let enCartelera = require('./src/enCartelera');
let masVotadas = require('./src/masVotadas');
let sucursales = require('./src/sucursales');
let contacto = require('./src/contacto');
let faqs = require('./src/faqs');
http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	// Route System
	switch (req.url) {
		// Home
		case '/':
			res.end(home);
			break;
		// En cartelera
		case '/en-cartelera':
			res.end(enCartelera);
			break;
		// Mas votadas
		case '/mas-votadas':
			res.end(masVotadas);
			break;
		// Sucursales
		case '/sucursales':
			res.end(sucursales);
			break;
		// Contacto
		case '/contacto':
			res.end(contacto);
			break;
		// Preguntas frecuentes
		case '/preguntas-frecuentes':
			res.end(faqs);
			break;
		// Default
		default:
			res.end('404 not found')
	}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));