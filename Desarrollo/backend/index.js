const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


//Agregar cors
const cors = require("cors")

//Conexion a base de datos
const mysql = require("mysql")

//Parametro de conexion
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wear_colombia_bd",
  port: "3306",
  multipleStatements: true
});

//Revisa conexion
db.connect(function (error) {
  if(error) console.log(error);
  else console.log("Base de datos conectada");
})

//Manejo de rutas
app.get("/", (req, res) => {
  res.send("Bienvenido!")
  console.log("Bienbenido al backend");
});

app.route("/rol").get((req, res) => {
  console.log("Get de Usuarios");
  const query = db.query('select * from rol', (error, resultado) => {
    try{
      if(error){
        throw error;
      }else{
        console.log(resultado)
        res.json({resultado: resultado})
      }
    }catch(error){
        res.json({error: error.message})
    }
  })
});

app.route("/user/:id").get((req, res) => {
  const idUser = req.params.id;
  console.log(idUser);
  res.json({idUser: idUser})
});

app.route("/user").post((req, res) => {
  console.log("Post de usuario");
  const query = db.query(`insert into rol(id, nombre, descripcion) values (4,"Fabian Bastilla", "Vendedor de Correas")`, (error, resultado) => {
    try{
      if(error){
        throw error;
      }else{
        console.log(resultado)
        res.json({resultado: resultado})
      }
    }catch(error){
        res.json({error: error.message})
    }
  })
});

app.listen(port, () => {
  console.log(`Ejemplo escuchando http://${port}`);
});