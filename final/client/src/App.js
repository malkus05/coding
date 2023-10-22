import './App.css';
import { useState, usestate } from "react"
import axios from "axios"



function App (){
  
  const[Nombre, setNombre]= useState("")
  const[Identificacion, setIdentificacion]= useState("0")
  const[Departamento, setDepartamento]= useState("")
  const[Cargo, setCargo]= useState("")
  const[Fecha_Ingreso, setfecha_Ingreso]= useState("")
  const[Antiguedad, setAntiguedad]= useState("0")

  const add =()=>{
    axios.post("http://localhost:3001/create",{
    nombre:Nombre,
    departamento:Departamento,
    cargo:Cargo,
    antiguedad:Antiguedad,
    }).then(()=>{
      alert("Empleado Registrado");
    });
  }

return (
    <div className="App">
      <div className= "datos">
        <label>Nombre: <input 
        onChange={(event)=>{
          setNombre(event.target.value);
        }}
        type  ="text"/></label>

        <label>Identificacion: <input 
        onChange={(event)=>{
          setIdentificacion(event.target.value);
        }}
        type  ="text"/></label>
        <label>Departamento: <input
        onChange={(event)=>{
          setDepartamento(event.target.value);
        }}
        type  ="text"/></label>
        <label>Cargo: <input
        onChange={(event)=>{
          setCargo(event.target.value);
        }}
        type  ="text"/></label>
        <label>Fecha_Ingreso: <input
        onChange={(event)=>{
          setfecha_Ingreso(event.target.value);
        }}
        type  ="date"/></label>
        <label>Antiguedad: <input
        onChange={(event)=>{
          setAntiguedad(event.target.value);
        }}
        type  ="number"/></label>
        <button onClick={add}>Registrar</button>
      </div>
    </div>
  );
}

export default App;
