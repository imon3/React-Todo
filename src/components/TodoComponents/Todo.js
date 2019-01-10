import React from 'react'

function Todo(props) {
    return <div onClick={() => props.toggleCompleted(props.todo.id)}>{props.todo.task}</div>
}

export default Todo;