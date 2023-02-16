import React from 'react'

export const Todo = ({todo,onDelete}) => {
 let newstyle={
   margin:"20px"
 }
    return (
      <>
        <div className="container" style={newstyle}>
          <h4>{todo.title}</h4>
          <p>{todo.description}</p>
         
          <button className="btn btn-sm btn-primary" onClick={()=>{onDelete(todo)}}>Completed</button>
        </div>
        <hr/>
        </>
    )
}
