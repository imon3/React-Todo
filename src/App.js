import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: 'Walk dog',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Wash car',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();

    this.state = {
      todoList: todos,
      inputText: ''
    }
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.value);
  }

  // Add New Task
  addNewTask = e => {
    e.preventDefault();
    this.setState({
      todoList: [...this.state.todoList, {
        task: this.state.inputText,
        id: Date.now(),
        completed: 'false'
      }],
      inputText: ""
    })
  }

  // toggle completed to be true or false
  toggleCompleted = (id) => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id !== id) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
      })
    })
  }

  render() {
    return (

      < div >
        <h1>Task Needed To Be Completed</h1>
        <TodoList
          toggleCompleted={this.toggleCompleted}
          todosList={this.state.todoList}
        />
        <TodoForm
          addNewTask={this.addNewTask}
          inputText={this.state.inputText}
          handleChanges={this.handleChanges}
        />
      </div >

    );
  }

}

export default App;
