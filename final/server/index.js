const express = require("express");
const app = express();
const mysql =require("mysql")
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "empleados_final"
});

app.post("/create", (req, res) => {
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const departamento = req.body.departamento;
    const cargo = req.body.cargo;
    const fecha_ingreso = req.body.fecha_ingreso;
    const antiguedad = req.body.antiguedad;

    db.query("INSERT INTO empleados (nombre, edad, departamento, cargo, fecha_ingreso, antiguedad) VALUES (?, ?, ?, ?, ?, ?)",
    [nombre, edad, departamento, cargo, fecha_ingreso, antiguedad], (err, result) => {
            if (err) {
            console.log(err);
        } else {
            res.send("Empleado Registrado con Éxito");
        }
    });
});
app.listen(3001, () => {
    console.log("Corriendo en puerto 3001");
});
