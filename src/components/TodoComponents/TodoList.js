// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

const TodoList = (props) => {
    return (
        <div>
            {props.todosList.map((todo, index) => {
                console.log(todo)
                return <div key={index}>{todo.todo}</div>
            })}
        </div>
    );
}

export default TodoList;