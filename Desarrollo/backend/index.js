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


app.listen(port, () => {
  console.log(`Ejemplo escuchando http://${port}`);
});


/**
 * Consulta toda los elementos de toda la tabla
 */
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

app.route("/articulo").get((req, res) => {
  console.log("Get de Usuarios");
  const query = db.query('select * from articulo', (error, resultado) => {
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

app.route("/comerciante").get((req, res) => {
  console.log("Get de Usuarios");
  const query = db.query('select * from comerciante', (error, resultado) => {
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

app.route("/venta").get((req, res) => {
  console.log("Get de Usuarios");
  const query = db.query('select * from venta', (error, resultado) => {
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

/**
 * Inserta datos en las tablas
 */
app.route("/articulo").post((req, res) => {
  console.log("Post de articulo");
  const query = db.query(`insert into articulo(id, codigo, nombre, precio, stock, descripcion) values (1, 1111, "Pantalon", 35000, 35, "Pantalon para caballero en drol")`, (error, resultado) => {
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

app.route("/comerciante").post((req, res) => {
  console.log("Post de comerciante");
  const query = db.query(`insert into comerciante(id, nombre_propietario, nombre_marca, 	direccion_comercial, genero_ropa, tipo_ropa, categoria_ropa, rol_id) values (1,"Fabian Bastilla", "BFCalderon", "Cll 1#58-30", "Unisex", "Pantalon/Camisa", "Juvenil", 1)`, (error, resultado) => {
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

app.route("/rol").post((req, res) => {
  console.log("Post de rol");
  const query = db.query(`insert into rol(id, nombre, descripcion) values (1,"Fabian Bastilla", "Vendedor de Correas")`, (error, resultado) => {
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

app.route("/venta").post((req, res) => {
  console.log("Post de venta");
  const query = db.query(`insert into venta(id, tipo_comprobante, fecha, valor, comerciante_id, comerciante_rol, articulo_id) values (1,"Factura", "2020/03/10", 150000, 1, 1 ,1)`, (error, resultado) => {
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


/**
 * Trae información de las tablas filtradas por el id
 */
app.route("/rol/:id").get((req, res) => {
  console.log("Lectura de un dato en rol");
  const query = db.query(`select * from rol where id = ${req.params.id}`, (error, resultado) => {
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

app.route("/comerciante/:id").get((req, res) => {
  console.log("Lectura de un dato en comerciante");
  const query = db.query(`select * from comerciante where id = ${req.params.id}`, (error, resultado) => {
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

app.route("/venta/:id").get((req, res) => {
  console.log("Lectura de un dato en venta");
  const query = db.query(`select * from venta where id = ${req.params.id}`, (error, resultado) => {
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

app.route("/articulo/:id").get((req, res) => {
  console.log("Lectura de un dato en articulo");
  const query = db.query(`select * from articulo where id = ${req.params.id}`, (error, resultado) => {
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

/**
 * Actualiza los datos en las tablas
 */
app.route("/articulo/:id").put((req, res) => {
  console.log("Post de articulo");
  const query = db.query(`Update articulo Set codigo = 1112, nombre = "Camisa", precio = 30000, stock = 30, descripcion = "Camisa para caballero" Where id = 1`, (error, resultado) => {
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

app.route("/comerciante/:id").put((req, res) => {
  console.log("Post de comerciante");
  const query = db.query(`Update comerciante Set nombre_propietario = "Fabian Bastilla", nombre_marca = "Electronica BC", direccion_comercial = "Cra 44#19-64", genero_ropa = "masculino", rol_id = 1 Where id = 1`, (error, resultado) => {
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

app.route("/rol/:id").put((req, res) => {
  console.log("Post de rol");
  const query = db.query(`Update rol Set nombre = "Elsa Bastilla", descripcion = "Vendedor de camisas" Where id = 1`, (error, resultado) => {
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

app.route("/venta/:id").put((req, res) => {
  console.log("Post de venta");
  const query = db.query(`Update venta Set tipo_comprobante = "Factura Electrónica", fecha = "2020/10/12", comerciante_id = 1 Where id = 1`, (error, resultado) => {
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