import React from 'react'
import { Todo } from './Todo';

export const Todos = (props) => {
  let mystyle={
      minHeight:"50vh",
      margin:"40px auto"
  }
    return (
       
        <div className="container my-5" style={mystyle} >
           <h2 className="my-7">Todos list</h2>
           { props.todos.length===0 ? "All work completed":props.todos.map((todo)=>{
               return (<Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>  )
           })}

        </div>
   
    )
}
