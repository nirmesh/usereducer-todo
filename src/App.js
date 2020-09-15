import React,{useState,useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

export const ACTIONS={
  ADD_TODO:'add-todo',
  DELETE_TODO:'delete-todo',
  TOGGLE_TODO:'toggle-todo'
}

function App(){


  function reducer(state,action){

    switch(action.type){
      case ACTIONS.ADD_TODO:
        return [...state,newTodo(action.payload.todo)];
      case ACTIONS.DELETE_TODO:
        return state.filter(todo=>todo.id!==action.payload.id)
      case ACTIONS.TOGGLE_TODO:
        return state.map(todo=>{
          if(todo.id==action.payload.id){
            return {...todo,complete:!todo.complete}
          }
          return todo;
        })
      default:
        return state;
    }
  }

  function newTodo(todo){
    return {id:Date.now(),todo:todo,complete:false}
  }



  const [state,dispatch]= useReducer(reducer,[]);

  const [todo,setTodo] = useState('');

  console.log(state);

  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch({type:ACTIONS.ADD_TODO,payload:{todo:todo}});
    setTodo('');
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" name="todo"  value={todo} onChange={e=>setTodo(e.target.value)}/>
      </form>
      {state.map(todo=>{
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </div>
  );
}

export default App;
