import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {toDoText: ''};
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress(e) {
    if(e.key === 'Enter') {
      this.props.addTodo(this.state.toDoText);
      this.setState({toDoText: ''});
    }
  }

  handleChange(e) {
    let val = e.target.value;
    this.setState({toDoText: val});
  }

  render() {
    return (
      <div>
        <input type='text' placeholder='Enter todo item here...'
          onKeyPress={this.handleKeyPress}
          onChange ={this.handleChange}
          value = {this.state.toDoText} />
      </div>
    )
  }
}

export default TodoForm;