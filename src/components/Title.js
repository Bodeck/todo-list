import React from 'react';

class Title extends React.Component {
  render() {
    return(
      <div>
        <h1>To Do List</h1>
        <h3>Tasks on your list: {this.props.todoCount} </h3>
      </div>
    )
  }
}

export default Title;