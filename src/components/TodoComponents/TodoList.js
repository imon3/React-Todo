// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div>
            {props.todosList.map((todo) => {
                return <Todo key={todo.id} todo={todo} />
            })}
        </div>
    );
}

export default TodoList;