import React, { useState } from 'react'
function ToDoApp(){

    const [tasks, setTasks] = useState(["Eat Breakfast", "Bathe", "Wash Dishes"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

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
        <button 
        className="add-button"
        onClick={addTask}>
            Add

        </button>
        

    </div>
    </div>) ;
}
export default ToDoApp