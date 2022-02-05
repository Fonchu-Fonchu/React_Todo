function Person (props){
    return (
    <div>
        {props.name}
        <button onClick={props.changeState}>Click Me</button>
    </div>
    )
}

export default Person;