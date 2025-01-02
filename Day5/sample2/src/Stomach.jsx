import React ,{useContext} from 'react';
import {nameContext} from './App.jsx';
/*
function Stomach(props){
    return (
        <div>
            <h1>Stomach needs {props.name}</h1>
            
        </div>
    )
}
export default Stomach;
*/


function Stomach() {
    let {color,bgcolor} = useContext(nameContext);
    

    return (
        <h1 style={{backgroundColor:bgcolor,color:color}}>Stomach</h1> 
    );
}

export default Stomach;

