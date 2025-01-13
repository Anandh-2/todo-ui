import React, { useState } from 'react'

function AddTodo({onAdd}) {
    const [task,setTask]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!task.trim()) return;
        onAdd(task);
        setTask("");
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={task}
          onChange={(e)=>setTask(e.target.value)}
          placeholder='Enter a new task'
        />
        <button type='submit'>Add Task</button>
    </form>
  )
}

export default AddTodo