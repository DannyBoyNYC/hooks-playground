import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
/*
    1. The user can add new todo items
    2. The user can remove todo items
*/
function Todo() {
  const [todo, updateTodo] = useState('');
  const [todos, updateTodos] = useState([]);

  return (
    <div>
      <label htmlFor="todo">
        Todo
        <input
          type="text"
          value={todo}
          onChange={e => updateTodo(e.target.value)}
        />
      </label>
      <button onClick={() => updateTodos(todo)}>Add Todo</button>
      {todo}
      {console.log(todos)}
      {/* {todos != [] ? todos.map(todo => `<p>{todo}</p>`) : ''} */}
    </div>
  );
}

ReactDOM.render(<Todo />, document.getElementById('root'));
