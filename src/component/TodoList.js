import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({todosList, setTodosList, setEditTodos}) => {
    const onClickDelete = (id) => { 
        setTodosList(todosList.filter((todo) => todo.id !== id));
    }
    const onClickEdit = (id) => {
        const getTodo = todosList.find((todo) => todo.id === id);
        setEditTodos(getTodo);
    }
    return (
        <div className="todo-list-container">
            {todosList.map((todo) => (
                <li className="todo-list" key={todo.id}>
                    <div className="todo-item">
                        {todo.title}
                    </div>
                    <div className="button-modification">
                        <button className="button-edit"  onClick={() => onClickEdit(todo.id)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button className="button-delete" onClick={() => onClickDelete(todo.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default TodoList
