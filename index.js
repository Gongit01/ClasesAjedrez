const express = require("express");
const app = express();
const path = require("path");
//const SocketIO = require("socket.io");
const { log } = require("console");
//Seguridad para los formularios




app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use("/recursos",express.static(path.join(__dirname, "public")));

// Middleware para leer datos de formularios (método POST)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





// XXXXXXXXXXXXXXXXX  Rutas  XXXXXXXXXXXXXXXXXXXX
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/Formulario', (req, res) => {
  const { user_name, user_mail, user_msg } = req.body;
  console.log('FORMULARIO:', req.body);
  res.render('RespuestaFormulario');
});




// XXXXXXXXXXXXXX IndexNow /////////////////////////////



const PUERTO = process.env.PORT || 3000;
const server = app.listen(PUERTO, () =>{
  console.log(`servidor en el puerto ${PUERTO}`);
}); 







