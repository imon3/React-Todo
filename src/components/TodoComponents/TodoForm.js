import React from 'react';

function TodoForm(props) {

    return (

        < form onSubmit={props.addNewTask} >
            <input
                type="text"
                placeholder="Enter Task Todo"
                value={props.inputText}
                onChange={props.handleChanges}
            />
            <button type="submit" onClick={props.addNewTask}>Add Task</button>
            <button type="submit" >Clear Completed</button>
        </form >
    )
}



export default TodoForm;