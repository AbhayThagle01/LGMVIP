
import './App.css';
import Header from './my component/Header';
import { Footer } from './my component/Footer';
import { Todos } from './my component/Todos';
import AddTodo from './my component/AddTodo';
import React, { useState,useEffect } from 'react';
// import { About } from './my component/About';

function App() {

  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }

  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {

    console.log("This is deleted of todo ", todo)

    setTodos(todos.filter((e) => {
      return e !== todo
    }))

  }

  const addTodo = (Title, Des) => {
    
    let sno
    if (todos.length === 0) {
      sno = 0
    }
    else {

      sno = todos[todos.length - 1].sno + 1
    }

    const myTodo = {
      sno: sno,
      title: Title,
      description: Des,


    }
    setTodos([...todos, myTodo])

  

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
     
  return (
    <>

   
             <Header title="My Todo list" searchBar={true} />
             <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
         
      <Footer />
     
    </>
   
  )
}

export default App;
