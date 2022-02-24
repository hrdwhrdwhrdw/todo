import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

function TodoList(props) {
    return (
        <div className="item-list__container">
            <ul className='item-list'>
                {props.todos.map((todo, index) => <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>)}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList;