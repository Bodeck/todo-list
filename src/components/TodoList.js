import React from 'react';
import style from './TodoList.css';

const TodoList = (props) => {
  const todos = props.data;
  return (
    <ul className={style.TodoList}>
      {todos.map((todo) =>
        <li key={todo.id} onClick ={(e,id)=>props.remove(id)}>
          {todo.text}
        </li>
      )
      }
    </ul>
  )
}

export default TodoList;