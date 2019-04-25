import React from 'react';
import ToDo from './Todo';
import style from './TodoList.css';

const TodoList = (props) => {
  const todos = props.data;
  return (
    <ul className={style.TodoList}>
      {todos.map((todo) =>
        <ToDo key={todo.id} id={todo.id} onClick={props.remove}
          toDoText={todo.text} />
      )
      }
    </ul>
  )
}

export default TodoList;