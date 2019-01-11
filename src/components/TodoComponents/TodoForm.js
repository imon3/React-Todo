import React from 'react';


function TodoForm(props) {

    return (

        < form onSubmit={props.addNewTask} >
            <input
                type="text"
                placeholder="Enter Task To do"
                value={props.inputText}
                name='inputText'
                onChange={props.handleChanges}
            />
            <button className='accept' type="submit" onClick={props.addNewTask}>Add Task</button>
            <button className='delete' type="submit" onClick={props.removeCompleted}>Clear Completed Task</button>
        </form >
    )
}



export default TodoForm;