import './App.css';
import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import Swal from 'sweetalert2'

function App() {

  const [Nombre, setNombre] = useState("");
  const [Edad, setEdad] = useState(0);
  const [Departamento, setDepartamento] = useState("");
  const [Cargo, setCargo] = useState("");
  const [Perfil, setPerfil] = useState("");
  const [Antiguedad, setAntiguedad] = useState(0);
  const [id, setId] = useState();

  const [editar, setEditar] = useState(false);

  const [empleadosList, setEmpleados] = useState([]);
  
  const add = () => {
    axios.post("http://localhost:3001/create", {
      nombre: Nombre,
      edad: Edad,
      departamento: Departamento,
      cargo: Cargo,
      perfil: Perfil,
      antiguedad: Antiguedad,
    }).then(()=>{
      getEmpleados();
      limpiarCampos();
      Swal.fire({
        title: "<strong>Registro exitoso!!!</strong>",
        html: "<i>El empleado <strong>"+Nombre+"</strong> fue registrado con éxito!!!</i>",
        icon: 'success',
        timer:3000
      })
    }).catch(function(error){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
      })
    });
  }

  const update = () => {
    axios
      .put("http://localhost:3001/update", {
        id: id,
        nombre: Nombre,
        edad: Edad,
        departamento: Departamento,
        cargo: Cargo,
        perfil: Perfil,
        antiguedad: Antiguedad,
      })
      .then(() => {
        getEmpleados();
        limpiarCampos();
        Swal.fire({
          title: "<strong>Actualización exitosa!!!</strong>",
          html: "<i>El empleado <strong>" + Nombre + "</strong> fue actualizado con éxito!!!</i>",
          icon: "success",
          timer: 3000,
        });
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: JSON.parse(JSON.stringify(error)).message === "Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(error)).message,
        });
      });
  };
  
  
  const eliminarEmpleado = (val) => {
    if (val.id !== undefined) {
        Swal.fire({
            title: 'Confirmar eliminado?',
            html: `<i>¿Realmente desea eliminar a <strong>${val.nombre}</strong>?</i>`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(`http://localhost:3001/delete/${val.id}`);
                    if (response.status === 200) {
                        getEmpleados();
                        limpiarCampos();
                        Swal.fire({
                            icon: 'success',
                            title: `${val.nombre} fue eliminado.`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'No se logró eliminar el empleado.'
                        });
                    }
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No se logró eliminar el empleado!',
                        footer: error.message === 'Network Error' ? 'Intente más tarde' : error.message
                    });
                }
            }
        });
    } else {
        console.error("ID no válido");
    }
}


  const limpiarCampos = ()=>{
    setNombre("");
    setId("");
    setEdad("");
    setDepartamento("");
    setCargo("");
    setPerfil("");
    setAntiguedad("");
    setEditar(false);
   }

const editarEmpleado = (val)=>{
  setEditar(true);

  setNombre(val.nombre);
  setEdad(val.edad);
  setDepartamento(val.departamento);
  setCargo(val.cargo);
  setPerfil(val.perfil);
  setAntiguedad(val.antiguedad);
  setId(val.id);
 }

 const getEmpleados = ()=>{
  axios.get("http://localhost:3001/empleados").then((response)=>{
    setEmpleados(response.data);
  });
}
getEmpleados();

  return (
    <div className="container">

    <div className="datos"></div>
   
    <div className="card text-center">
      <div className="card-header">
    MAESTRO DE CANDIDATOS
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
        <span className="input-group-text" id="basic-addon1">Perfil Profesional: </span>
        <input type="text" 
              onChange={(event) => {
                setPerfil(event.target.value);
              }}
        className="form-control" value={Perfil} placeholder="Ingrese su Cargo" aria-label="Username" aria-describedby="basic-addon1"/>
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
        <button className="btn btn-info m-2" onClick={limpiarCampos}>Cancelar</button>
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
      <th scope="col">Perfil Profesional</th>
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
                <td>{val.perfil}</td>
                <td>{val.antiguedad}</td>
                <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" 
                  onClick={()=>{
                    editarEmpleado(val)
                  }}
                  className="btn btn-info m-1">Editar</button>
                
                <button type="button" className="btn btn-danger m-1" onClick={()=>{
                  eliminarEmpleado(val.id);
                }} >Eliminar</button>
                </div>
                </td>
               </tr>
      })
    }
    
  </tbody>
  </table>
 
  <div className="card-footer text-body-secondary">
    Elaborado Por: Maycol Bautista
    maicol.bautista@gmail.com
  </div>
  </div>
    </div>
  );
}

export default App;
