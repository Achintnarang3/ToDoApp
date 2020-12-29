import React,{useReducer} from "react";
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import TodoReducer from "./context/reducer"
import TodoContext from "./context/TodoContext"
import TodoForm from "./components/TodoForm"
import Todos from "./components/Todos"




function App() {
  const[todos,dispatch]=useReducer(TodoReducer,[]); // creating reducer and array to store all functionalities
  return(
    <TodoContext.Provider value={{todos,dispatch}}>
      <Container fluid>
        <h1 className="mb-5">Todo App With Context Api</h1>
        <Todos/>
        <TodoForm/>
      </Container>
    </TodoContext.Provider>
  )


 
}

export default App;
