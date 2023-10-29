const express = require("express");
import { PORT } from './config.js';
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

import {
DB_HOST,
DB_NAME,
DB_PASSWORD,
DB_PORT,
DB_USER,
} from "./config.js"

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
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

app.put("/update", (req, res) => {
    const nombre = req.body.id;
    const edad = req.body.edad;
    const departamento = req.body.departamento;
    const cargo = req.body.cargo;
    const fecha_ingreso = req.body.fecha_ingreso;
    const antiguedad = req.body.antiguedad;

    db.query("UPDATE empleados SET nombre=?, edad=?, departamento=?, cargo=?, fecha_ingreso=?, antiguedad=? WHERE id=?", [nombre, edad, departamento, cargo, fecha_ingreso, antiguedad, id], 
         (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: "Error al Actualizar el empleado" });
            } else {
                res.status(200).json({ message: "Empleado Actualizado con Éxito" });
            }
        });
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM empleados WHERE id=?", id, 
         (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: "Error al Eliminar el empleado" });
            } else {
                res.status(200).json({ message: "Empleado Eliminado con Éxito" });
            }
        });
});

<<<<<<< HEAD

app.listen(3001,()=>{
    console.log(`Escuchando en puerto 3001`)
=======
app.listen(3001, () => {
    console.log("Corriendo en puerto 3001");
>>>>>>> parent of df0b50c (Full stack - pendiente delete)
});
