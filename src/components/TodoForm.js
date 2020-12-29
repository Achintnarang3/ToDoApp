import React,{useContext,useState} from "react";
import {ADD_TODO} from "../context/actions.types"
import { v4 as uuidv4 } from 'uuid';
import TodoContext from "../context/TodoContext"

import {InputGroup, InputGroupAddon, InputGroupText, Input,Button, Form, FormGroup} from "reactstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import '../App.css';
const TodoForm=()=>{
    const[Todo,setTodo]=useState("")
    const{dispatch}=useContext(TodoContext);
    const HandleSubmit=(e)=>{
     
        e.preventDefault();
        if(Todo==="")
        {
            return alert("Its empty bitch")
        }
        console.log(Todo);
       

       
      

         
          const Todo1={
            Todo,
            id:uuidv4
          }

        dispatch({
            type:ADD_TODO,
            payload:Todo1
             
           
        })

        setTodo("")

    }
    return(
     <Form onSubmit={HandleSubmit}>
        <FormGroup >
            <InputGroup  className="op1">
                 <Input placeholder="Your Next Todo"
                        value={Todo}
                        onChange={(e)=>{
                            setTodo(e.target.value)
                        }}/>
                    <InputGroupAddon addonType="append">
                     <Button >Submit</Button>

                    </InputGroupAddon>
                  
            </InputGroup>
         </FormGroup>
      </Form>
 

    )
}
export default TodoForm;



