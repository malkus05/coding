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
    const perfil = req.body.perfil;
    const antiguedad = req.body.antiguedad;

    db.query("INSERT INTO empleados (nombre, edad, departamento, cargo, perfil, antiguedad) VALUES (?, ?, ?, ?, ?, ?)",
        [nombre, edad, departamento, cargo, perfil, antiguedad], (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: "Error al registrar el empleado" });
            } else {
                res.status(200).json({ message: "Empleado Registrado con Éxito" });
            }
        });
});

app.get("/empleados", (req, res) => {
    db.query("SELECT * FROM empleados", 
    (err, result)=>{
        if(err){
            console.log(err);
            res.status(500).json({ error: "Error al obtener la lista de empleados" });
        } else {
            res.status(200).json(result);
        }
    });
});

app.put("/update", (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const departamento = req.body.departamento;
    const cargo = req.body.cargo;
    const perfil = req.body.perfil; // Asegúrate de que estás recibiendo 'perfil' correctamente
    const antiguedad = req.body.antiguedad;

    if (!id || isNaN(id)) {
        res.status(400).json({ error: "ID no válido" });
        return;
    }

    const acualizaQuery = "UPDATE empleados SET nombre=?, edad=?, departamento=?, cargo=?, perfil=?, antiguedad=? WHERE id = ?";
    const actualizaValores = [nombre, edad, departamento, cargo, perfil, antiguedad, id];

    db.query(acualizaQuery, actualizaValores, (err, result) => {
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

    if (!id || isNaN(id)) {
        return res.status(200).json({ error: "ID no válido" });
    }

    db.query("DELETE FROM empleados WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Error al Eliminar el empleado" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "ID no encontrado" });
        }

        return res.status(200).json({ message: "Empleado Eliminado con Éxito" });
    });
});


app.listen(3001, () => {
    console.log("Corriendo en puerto 3001");
});
