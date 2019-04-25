import React from 'react';

const ToDo = (props) => {
  return (
    <li onClick={(e) => props.onClick(props.id)}>{props.toDoText}</li>
  )
}

export default ToDo;