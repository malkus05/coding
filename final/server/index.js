const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "empleados_final"
});

db.connect((err) => {
    if (err) {
        console.error("Error al conectar con la base de datos: " + err.message);
    } else {
        console.log("Conexión exitosa a la base de datos");
    }
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
                res.status(500).json({ error: "Error al registrar el empleado" });
            } else {
                res.status(200).json({ message: "Empleado Registrado con Éxito" });
            }
        });
});

app.get("/empleados", (req, res) => {
    db.query("SELECT * FROM empleados", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Error al obtener la lista de empleados" });
        } else {
            res.status(200).json(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Corriendo en puerto 3001");
});
