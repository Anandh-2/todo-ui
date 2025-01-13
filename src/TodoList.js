import React from 'react'

function TodoList({todos,onDelete,onUpdate}) {
  return (
    <ul>
        {todos.map((todo)=>(
            <li key={todo._id}>
                <span
                  style={{
                    textDecoration:todo.completed?"line-through":"none",
                  }}
                  >
                    {todo.task}
                  </span>
                  <button id='complete' onClick={()=>onUpdate(todo._id,!todo.completed)}>
                    {todo.completed?"Undo":"Complete"}
                  </button>
                  <button id='delete' onClick={()=>onDelete(todo._id)}>Delete</button>
            </li>
        ))}
    </ul>
  )
}

export default TodoList