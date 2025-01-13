import React,{useEffect,useState} from "react";
import axios from 'axios';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function App(){
  const[todos,setTodos]=useState([]);
  const fetchTodos=async ()=>{
    try{
      const response=await axios.get("http://localhost:5000/todos");
      setTodos(response.data);
    }
    catch(error){
      console.error("Error fetching todos:",error);
    }
  }

  const addTodo = async (task) => {
    try {
      const response = await axios.post("http://localhost:5000/todos", {
        task,
      });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const updateTodo = async (id, completed) => {
    try {
      const response = await axios.put(`http://localhost:5000/todos/${id}`, {
        completed,
      });
      setTodos(
        todos.map((todo) =>
          todo._id === id ? { ...todo, completed: response.data.completed } : todo
        )
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
    <div id="top">
      <h1>To-Do App</h1>
      <AddTodo onAdd={addTodo}/>
    </div>
    <div id="bottom">
      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo}/>
    </div>
    </div>
  );
}

export default App;