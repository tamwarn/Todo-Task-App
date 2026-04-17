import React, { useState } from 'react'
function ToDoApp(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){

    }
    function addTask(){

    }
    function deleteTask(index){

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }


    return(
    <div className="to-do-app"> 

    <h1>To-Do-App</h1>

    <div>
        <input>
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
        </input>

    </div>
    </div>) ;
}
export default ToDoApp