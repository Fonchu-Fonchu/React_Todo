import './App.css';
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'
// import Person from './components/Person'
// import Car from './components/Car'
import { useState } from 'react';
// Change State within a Component
// function App() {

//   function changeName(){
//     setName('Troy')
//   }

//   const [name, setName] = useState('Fonchu') // useState returns an array
// //let name = 'don'; // Working With States
//   return (
//     <>
//       {/* {name}<button onClick={changeName}>Change Name</button> */}




//       {/* <div className="App"> */}
//         <Person name={name} age={33} changeState={changeName()}></Person>
//         {/* <Car name = 'Benz' Type = 'Toyota'></Car>
//       </div> */}
//     </>
//   );
// }


function App(){
  const [todoList, setTodoList] = useState([])

  function submit(todo){
    
    let todoTemp = [...todoList,todo]
    setTodoList(todoTemp)
  }

  function deleteTodo(id){
    let todoTemp = todoList.filter((todo,index) => index !== id)
    setTodoList(todoTemp)
  }

  const renderList = todoList.map((todo, index) => {
    return <Todo deleteTodo={deleteTodo} todo={todo} index={index}/>
  })
  return <div className="app">
    <div className="todo-container">
      <TodoForm submit={submit}></TodoForm>
      {renderList}
    </div>
  </div>
}

export default App;


// states in react 