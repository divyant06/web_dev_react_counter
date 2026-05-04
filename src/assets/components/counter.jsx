import { useState } from 'react';
function Counter({ initialvalue = 0 }) {
    const [count, setCount] = useState(initialvalue);
    console.log(count);
    const handleAdd = () => {
        setCount(count + 1);
    }
    const handleReduce = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
            <button onClick={handleReset} >Reset</button>

        </div>

    )
       
}
export default Counter;

