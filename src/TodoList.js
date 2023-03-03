import React, { useState } from 'react';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes} from "@fortawesome/free-solid-svg-icons"
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const[bordercolor,setBoardercolor]=useState('gray')
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue('');
    setBoardercolor('#007bff')
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleCheckbox = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
      
        <input 
        
          type="text" style={{ border: `1px solid ${bordercolor}`,outline:'none',transition: 'border-color 0.3s ease-in-out'  }}
          onMouseEnter={() => setBoardercolor('#007bff')}
          onMouseLeave={() => setBoardercolor('gray')}
          value={inputValue}
          
          onChange={(event) => setInputValue(event.target.value)}
       
          placeholder="What do you need today?"
          
        />
        
        <button type="submit">Add</button>
      </form>
      <ul className='my-list'>
        {todos.map((todo, index) => (
          <li key={index}>
          
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckbox(index)}
            />
        
            <label className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </label>
            
            <FontAwesomeIcon className='buttonstyle' onClick={() => handleDelete(index)} icon={faTimes} /> 
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;