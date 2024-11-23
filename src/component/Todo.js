import React from 'react'
import {FaCheck} from 'react-icons/fa'
import {FaTrashAlt} from 'react-icons/fa'

const Todo = ({text, todos, setTodos, todo}) => {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <div className='btn'>
            <button onClick={completeHandler} className="complete-btn"><FaCheck/></button>
            <button onClick={deleteHandler} className="trash-bth"><FaTrashAlt/></button>
        </div>
    </div>
  )
}

export default Todo