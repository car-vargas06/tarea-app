import React, { useState } from "react"

function App(){
  const[tasks, setTasks] = useState([]);
  const[newTask,setNewTask] = useState('');
  const handleInputChange= (event) =>{
    setNewTask(event.target.value)
  };

  const handleAddTask =() =>{
     if (newTask.trim() !== ''){
      setTasks([...tasks,newTask]);
      setNewTask('')
     }
  };
  
  const handleDeleteTask =(index)=>{
    const updatedTasks=[...tasks];
    updatedTasks.splice(index,1);
    setTasks(updatedTasks);
  }
  return(
    <div class="maincontainer">
        <h1 class="title">LISTA DE TAREAS</h1>
      <input 
      class="form-control me-sm-2" 
      type="Agregar Tarea" 
      placeholder="Agregar Tarea"
      value={newTask}
      onChange={handleInputChange}
     />
     <button class="btn btn-outline-info" onClick={handleAddTask}>Agregar Tarea</button>
     <ul class="list-group">
      {tasks.map((task,index) =>(
        <li key={index} class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
          {task}
          <span class="badge bg-primary rounded-pill"></span>
          <button class="btn btn-outline-danger" onClick={()=> handleDeleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
    </div>
    );
}





export default App
