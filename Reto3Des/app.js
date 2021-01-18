
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./routes/index.js');

// Ajustes del servidor => Ejecutar server = npm run dev
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('puerto', process.env.PORT || 3000);

// middlewares
app.use((req, res, next) => {
	console.log(`${req.url} - ${req.method}`);
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Rutas
app.use(routes);

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// bootstraping the app
app.listen(app.get('puerto'), () => {
  console.log('server activo en el puerto', app.get('puerto'))
});
