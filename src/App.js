import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  { todo: 'Walk dog' },
  { todo: 'Wash car' }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();

    this.state = {
      todoList: todos
    }
    // console.log(this.state.todoList)
  }

  render() {
    return (

      < div >
        <TodoList todosList={this.state.todoList} />
        <TodoForm />
      </div >

    );
  }

}

export default App;
