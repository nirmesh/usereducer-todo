import React,{useState,useReducer} from 'react';
import logo from './logo.svg';
import './App.css';


const ACTIONS={
  INCREMENT:'increment',
  DECREMENT:'decrement'
}

function reducer(state,action){

  switch (action.type){
    case ACTIONS.INCREMENT:
      return {count:state.count+1}
    case ACTIONS.DECREMENT:
      return {count:state.count-1}
    default:
      return state

  }
  
}


function App() {
  //const [count,setCount] = useState(0);

  const [state,dispatch]=useReducer(reducer,{count:0});


  const incrementCount=()=>{
    //setCount(count+1);
    dispatch({type:ACTIONS.INCREMENT});
   }
  const  decrementCount=()=>{
     //setCount(count-1);
     dispatch({type:ACTIONS.DECREMENT});
   }
  return (
    <div className="App">
     hello
     <button onClick={decrementCount}>-</button>
    {state.count}
     <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
