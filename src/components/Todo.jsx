import React from 'react'
import '../App.css'

function Todo(props){


    return(
        <div className='todo'>
            <li>{props.todo}</li>
            <span onClick={() => props.deleteTodo(props.index)}>X</span>
        </div>
    )
}

export default Todo;