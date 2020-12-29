import React,{useReducer} from "react";
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import TodoReducer from "./context/reducer"
import TodoContext from "./context/TodoContext"
import TodoForm from "./components/TodoForm"



function App() {
  const[Todos,dispatch]=useReducer(TodoReducer,[]); // creating reducer and array to store all functionalities
  return(
    <TodoContext.Provider value={{Todos,dispatch}}>
      <Container fluid>
        <h1 className="mb-5">Todo App With Context Api</h1>
        <TodoForm/>
      </Container>
    </TodoContext.Provider>
  )


 
}

export default App;
