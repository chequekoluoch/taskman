import React,{useContext,useState, useEffect} from 'react'
import {TaskListContext} from '../context/TaskListContext'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
const TaskForm = () => {
    const [title, setTitle]=useState("")
    const { addTask,clearList, editItem, editTask }=useContext(TaskListContext)

    const handleChange=e=>{
        setTitle(e.target.value)
    }
    const handleSubmit=e=>{
        e.preventDefault()
        if(!editItem){
            addTask(title)
            setTitle("")
        }else{
            editTask(title, editItem.id)
        }
        
    }
    useEffect(()=>{
        if(editItem){
            setTitle(editItem.title)
        }else{
            setTitle("")
        }
    },[editItem])
    return (
        <form className="form" onSubmit={handleSubmit}>
           <input
           type="text"
           placeholder="Add Task..."
           className="task-input"
           required
           value={title}
           onChange={handleChange}
           /> 
           <div className="buttons">
            <button
            type="submit"
            className="btn add-task-btn">
               {editItem ? 'Edit Text':'Add Task'} 
                </button>

            <button
            className="btn clear-btn"
            onClick={clearList}>Clear</button>
           </div>
        </form>
    )
}

export default TaskForm
