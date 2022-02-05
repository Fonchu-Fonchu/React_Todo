import { useState } from 'react';

function TodoForm(props){
    let [todo, setTodo] = useState();

    function handleChange(text){
        setTodo(text)
    }


    return(
        <>
            <input value={todo} onChange={(e)=>handleChange(e.target.value)} placeholder="Enter Todo"/>
            <button onClick={() => props.submit(todo)}>Submit</button>
        </>
    )
}

export default TodoForm;