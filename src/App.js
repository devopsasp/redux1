import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement } from './actions/incrementaction';
function App() {
  const counter=useSelector((state)=>{

    return state;
  })
 
  const dispatch=useDispatch()
  return (
    <div className="App">
     <button
      onClick={()=>{
       dispatch(increment())
       console.log(counter)
      }}
     
     >Increment</button>
  <div className="text">{counter}</div>
     <button
     
      onClick={()=>{
        dispatch(decrement())
      }}
     >Decrement</button>
    </div>
  );
}

export default App;
