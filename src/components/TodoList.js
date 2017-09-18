import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({item, onRemoveClick}) => {
    return (
        <li>
            { item.text }
            <button onClick={ () => onRemoveClick(item.id) }>X</button>
        </li>
    );
}

const TodoList = ({ todos, onTodoClick }) => {
    const todoList = todos.map(todo => {
        return <Todo item={ todo } onRemoveClick={ onTodoClick } key={ todo.id } />
    });

    return (
        <ul>
            { todoList }
        </ul>
    );
};

export default TodoList