import {ADD_TODO,REMOVE_TODO} from "./actions.types"

// reducer functionalities that will perform on state and gives new state
export default (state,action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state,action.payload]  // loading the state and adding the payload in state
        default:
            state= state.filter((data)=>{return data.id!==action.payload})
            console.log(state)
            return state     
    }
}