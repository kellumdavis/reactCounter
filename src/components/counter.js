import React, {useState} from "react"

function Counter(){

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };
    
    const handleDecrement = () => {
        setCount(count - 1);
    };

    return(
        <div>
            <span>Current Count: {count}</span>
    <section>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    </section>
        </div>
    )
}

export default Counter;