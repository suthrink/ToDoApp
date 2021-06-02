import React from 'react'

function Todolist(props) {
  return (
        <>
        <div  className="todo-style">
        <i onClick={()=>{props.onSelect(props.id);}} id="fa-trash" class="fas fa-trash"></i>
            <li>{props.text}</li>
        </div>
        </>
    );
};

export default Todolist;
