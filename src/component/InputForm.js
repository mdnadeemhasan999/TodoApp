import React, {useEffect} from 'react'
import {v4 as uuidv4} from "uuid";

const InputForm = ({input, setInput, todosList, setTodosList, editTodos, setEditTodos, error, setError}) => {
    useEffect(() => {
        if(editTodos){
            setInput(editTodos.title);
        }else{
            setInput("");
        }
       
    }, [editTodos, setInput])
    const onChangeInput = (e) => {
        setError(false);
        setInput(e.target.value);
    };
    const onSubmitForm = (e) => {
        if(input.length > 0){
            if(!editTodos){
                setTodosList([...todosList, {id: uuidv4(), title: input}]);
            }else{
                var index = todosList.findIndex(todo=> todo.id === editTodos.id);
                let newTodosList = [...todosList];
                newTodosList[index] = {id: editTodos.id, title: input};
                setTodosList(newTodosList);
                setEditTodos(false);
            }
            setInput("");
        }else{
            setError(true);
        }
        e.preventDefault();
    };
    return (
        <form onSubmit={onSubmitForm} className="input-form">
            <div className="form-container">
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter a Todo" 
                        className="input-text" 
                        value={input}
                        onChange={onChangeInput}
                    />
                </div>
                <button className="button-text" type="submit">
                    {editTodos ? "Save": "Add"}
                </button>
            </div>
            <div className="error">
                {error ? "Please enter a todo" : ""}
            </div>
        </form>
    )
}

export default InputForm;
