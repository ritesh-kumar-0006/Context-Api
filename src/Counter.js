import { useContext ,useState} from "react"
import React from 'react'
import { CounterContext } from "./context/CounterContext"

function Counter() {
    const {counter, setCounter} = useContext(CounterContext)
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const disableButton  = () => {
        alert("Button has been enabled!");
        setButtonDisabled(true);
    };

  return (
      <div>
          <h1>Counter : {counter}</h1>
          <button onClick={() => setCounter(counter + 1)}>Incremente</button>
          {
                counter > 0 ? <button onClick={() => setCounter(counter - 1)}>Decrement</button> :  <button onClick={() =>{disableButton()}}>Decrement</button>
           //   counter > 0 ? <button onClick={() => setCounter(counter - 1)}>Decrement</button> : ""
          }
          
      </div>
  )
}
export default Counter;