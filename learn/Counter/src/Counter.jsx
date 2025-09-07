
import { useState } from "react";



function Counter (){

    const[ count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleIncrement(){
        // setCount(count + 1);
        setCount(count + step);
    }

    function handleDecrement(){
        // setCount(count -1);
        setCount(count-step)
    }

    function handleReset(){
        setCount(0);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>

            <input
                type="number"
                value={step}
                onChange={(e) => setStep(Number(e.target.value))}
            />

        </div>
    );
}


export default Counter;