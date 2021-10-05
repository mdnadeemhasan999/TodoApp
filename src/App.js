import React, {useState, useEffect} from 'react'
import './App.css';
import InputForm from './component/InputForm';
import TodoList from './component/TodoList';

const getLocalStorageItems = () => {
  let localTodosList = localStorage.getItem("localTodosList");

  if(localTodosList){
    return JSON.parse(localStorage.getItem("localTodosList"));
  }
  else{
    return [];
  }
}

function App() {

  const [input, setInput] =  useState("");
  const [todosList, setTodosList] = useState(getLocalStorageItems());
  const [editTodos, setEditTodos] =  useState(false);
  const [error, setError] =  useState(false);

  useEffect(() => {
      localStorage.setItem("localTodosList" , JSON.stringify(todosList))
  }, [todosList])

  return (
    <div className="app">
      <div className="app-content">
        <div className="heading">
          Todo List App
        </div>

        <div className="container">
          <InputForm 
            input={input} 
            setInput={setInput} 
            todosList={todosList}
            setTodosList={setTodosList}
            editTodos={editTodos}
            setEditTodos={setEditTodos}
            error={error}
            setError={setError}
          />

          <TodoList 
            todosList={todosList}
            setTodosList={setTodosList}
            setEditTodos={setEditTodos}
          />
        </div>

      </div>
    </div>
  )
}

export default App

