import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [Nombre, setNombre] = useState("");
  const [Edad, setEdad] = useState(0);
  const [Departamento, setDepartamento] = useState("");
  const [Cargo, setCargo] = useState("");
  const [Fecha_Ingreso, setFecha_Ingreso] = useState("");
  const [Antiguedad, setAntiguedad] = useState(0);
  const [id, setId] = useState(0);

  const [editar, setEditar] = useState(false);
  const [empleadosList, setEmpleados] = useState([]);

  useEffect(() => {
    getEmpleados();
  }, []);

  const add = () => {
    axios.post("http://localhost:3001/create", {
      nombre: Nombre,
      edad: Edad,
      departamento: Departamento,
      cargo: Cargo,
      fecha_ingreso: Fecha_Ingreso,
      antiguedad: Antiguedad,
    }).then(() => {
      alert("Empleado Registrado");
      getEmpleados();
    });
  }

  const update = () => {
    axios.put("http://localhost:3001/update", {
      id: id,  
      nombre: Nombre,
      edad: Edad,
      departamento: Departamento,
      cargo: Cargo,
      fecha_ingreso: Fecha_Ingreso,
      antiguedad: Antiguedad,
    }).then(() => {
      getEmpleados();
    });
  }
const editarEmpleado = (val)=>{
  setEditar(true);

  setNombre(val.nombre);
  setEdad(val.edad);
  setDepartamento(val.departamento);
  setCargo(val.cargo);
  setFecha_Ingreso(val.fecha_ingreso);
  setAntiguedad(val.antiguedad);
  setId(val.id);
 }

  const getEmpleados = () => {
    axios.get("http://localhost:3001/empleados").then((response) => {
      setEmpleados(response.data);
    });
  }

  return (
    <div className="container">
    <div className="datos"></div>
   
      <div className="card text-center">
  <div className="card-header">
    MAESTRO DE EMPLEADOS
  </div>
  <div className="card-body">

    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Nombre: </span>
        <input type="text" 
        onChange={(event) => {
          setNombre(event.target.value);
        }}
        className="form-control" value={Nombre} placeholder="Ingrese su Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>

    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Edad: </span>
        <input type="text" 
        onChange={(event) => {
          setEdad(event.target.value);
        }}
        className="form-control" value={Edad} placeholder="Ingrese su Edad" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>

    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Departamento: </span>
        <input type="text" 
          onChange={(event) => {
            setDepartamento(event.target.value);
          }}
        className="form-control" value={Departamento} placeholder="Ingrese su Departamento" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>

    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Cargo: </span>
        <input type="text" 
          onChange={(event) => {
            setCargo(event.target.value);
          }}
        className="form-control" value={Cargo} placeholder="Ingrese su Cargo" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>

    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Fecha_Ingreso: </span>
        <input type="date" 
              onChange={(event) => {
                setFecha_Ingreso(event.target.value);
              }}
        className="form-control" value={Fecha_Ingreso} placeholder="Ingrese su Cargo" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>

    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Antiguedad: </span>
        <input type="number" 
            onChange={(event) => {
              setAntiguedad(event.target.value);
            }}
        className="form-control" value={Antiguedad} placeholder="Ingrese su Antiguedad" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
      <div className="card-footer text-muted">
      {
        editar?
        <div>
        <button className="btn btn-warning m-2" onClick={update}>Actualizar</button>
        <button className="btn btn-info m-2" onClick={add}>Cancelar</button>
        </div>
        :<button type="button" className="btn btn-success" onClick={add}>Registrar</button>
      }
      </div>
    
</div>

  <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Edad</th>
      <th scope="col">Departamento</th>
      <th scope="col">Cargo</th>
      <th scope="col">Fecha de Ingreso</th>
      <th scope="col">Antiguedad</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {
      empleadosList.map((val,key)=>{
        return <tr key={val.id}>
                <th>{val.id}</th>
                <td>{val.nombre}</td>
                <td>{val.edad}</td>
                <td>{val.departamento}</td>
                <td>{val.cargo}</td>
                <td>{val.fecha_ingreso}</td>
                <td>{val.antiguedad}</td>
                <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" 
                  onClick={()=>{
                    editarEmpleado(val)
                  }}
                  className="btn btn-info m-1">Editar</button>
                  <button type="button" className="btn btn-danger m-1">Eliminar</button>
                </div>
                </td>
               </tr>
      })
    }
    
  </tbody>
  </table>
 
  <div className="card-footer text-body-secondary">
    Elaborado Por: Maycol Bautista
  </div>
  </div>
    </div>
  );
}

export default App;
