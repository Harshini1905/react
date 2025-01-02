//useRef
/*
import {useState,useEffect,useRef} from 'react';
function Hook1(){
    let [Count, setCount] = useState(0);
    let countRef = useRef(0);

    let increment = () =>{
        setCount(Count+1);
        countRef.current=countRef.current+1; //or current++

        console.log("state :",Count);
        console.log("ref:  ",countRef.current);
    }
    return(
        <div>
            <h1>count:{Count}</h1>
            <h1>count:{countRef.current}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Hook1;
*/

import {useState,useEffect,useRef} from 'react';
function Hook1(){
    let [name,setName] = useState("Harshini");
    let countRef = useRef(0);

    let change = (e) =>{
        setName(e.target.value);
        countRef.current++;

        console.log("Name:",e.target.value);    
        console.log("ref:  ",countRef.current);
    }
    return(
        <div>
            <input type="text" value={name} onChange={change} />
            <h1>My name is {name}</h1>
            <h1>count:{countRef.current}</h1>
        </div>
    )
}

export default Hook1;