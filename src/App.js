import React, { useState, useReducer } from 'react';
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t,
        ),
        todoCount: state.todoCount,
      };
    default:
      return state;
  }
}

function App() {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState();
  return (
    <div className='App'>
      <form
        onSubmit={e => {
          e.preventDefault(); //form will refresh if not added
          dispatch({ type: 'ADD_TODO', text });
          setText('');
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      <div>Number of todos: {todoCount}</div>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      {todos.map((t, idx) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: 'TOGGLE_TODO', idx })}
          style={{ textDecoration: t.completed ? 'line-through' : '' }}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
}

export default App;
