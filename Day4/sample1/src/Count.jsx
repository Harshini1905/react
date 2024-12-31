import {useState} from 'react';
function Count(){
    let [count, setCount] = useState(0);
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>count:{count}</h1>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Count;