//useEffect

import {useState,useEffect} from 'react';
function Hook(){
    let [Count, setCount] = useState(0);

   useEffect(() =>{
         console.log('value updated');

        //code cleanup
        return(()=>{
            console.log('clean up code');
        })
   },[Count])  //nothing given here means it will run only once

    return(
        <div>
            <button onClick={() => setCount(Count + 1)}>Increment</button>
            <h1>count:{Count}</h1>
            <button onClick={() => setCount(Count - 1)}>Decrement</button>
        </div>
    )
}

export default Hook;


/*
//Example
import {useState,useEffect} from 'react';
function Hook(){
    let [name, setName] = useState("Apple");

    const change = (event) => { setName(event.target.value); }; useEffect(() => { 
        console.log(`Name has changed to: ${name}`); 
   }, [name]); 
    
  

    return(
        <div>
           <input type="text" value={name} onChange={change} />
            <h1>My name is {name}</h1>
        </div>
    )
}
export default Hook;
*/
