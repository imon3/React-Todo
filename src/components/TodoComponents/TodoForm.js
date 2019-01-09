import React from 'react';

function TodoForm(props) {

    return (

        < form onSubmit={props.addNewTask} >
            <input
                type="text"
                name="todo"
                placeholder="Enter Task Todo"
                value={props.todo}
                onChange={props.handleTodoChange}
            />
            <button typre="submit" >Add Task</button>
            <button typre="submit" >Clear Completed</button>
        </form >
    )
}

export default TodoForm;