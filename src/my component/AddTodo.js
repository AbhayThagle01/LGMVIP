
import React, { useState } from 'react';
const AddTodo = ({addTodo}) => {
   const [Title, setTitle] = useState("");
   const [Des, setDes] = useState("");
    const submit=(e)=>{
e.preventDefault()
if(!Title||!Des){
    alert("Please Fill Complete Information")
}
else{
addTodo(Title,Des)
setTitle("");
setDes("");
    }
}
    return (
        <div className="container">
          <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputTitle" className="form-label">Title</label>
    <input type="text" className="form-control" value={Title} onChange={(e)=>setTitle(e.target.value)} id="exampleInputTitle" aria-describedby="titleHelp"/>
    <div id="titleHelp" className="form-text">Please Enter The Title For Work.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputdes" className="form-label">Description</label>
    <input type="text" className="form-control" value={Des} onChange={(e)=>setDes(e.target.value)} id="exampleInputdes" aria-describedby="desHelp"/>
    <div id="desHelp" className="form-text">Please Enter The Description For Work.</div>
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary">Add Todo</button>
</form>  
        </div>
    )
}

export default AddTodo;
