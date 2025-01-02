//Props drilling
import React from 'react';
import Egg from './Egg.jsx';
/*
function Hen(props){
    
    return (
        <div>
            
            <h1>Hen</h1>
            <Egg name={props.name}/>
        </div>
    )
}
export default Hen;
*/


function Hen(){
    
    return (
        <div>
            
            <h1>Hen</h1>
            <Egg />
        </div>
    )
}
export default Hen;