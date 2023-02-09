import './App.css';
import {useReducer, useState} from "react";

const reducer = (state, action) => {
    switch (action.type){
        case 'deposit':
            return state + action.payload;
            break;
        case 'withdraw':
            return state - action.payload;
            break;
        default:
            return state
    }
}
function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input
          type="number"
          value={number}
          onChange={(event) => setNumber(parseInt(event.target.value))}
          step="1000"/>
      <button onClick={(event) => {
          dispatch({type:'deposit', payload:number});
      }}>예금</button>
      <button onClick={(event) => {
          dispatch({type:'withdraw', payload:number});
      }}>출금</button>
    </div>
  );
}

export default App;
