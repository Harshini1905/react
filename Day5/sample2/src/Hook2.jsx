import { useState,useMemo,useEffect } from "react";

function Hook2(){
    let [Number, setNumber] = useState(0);
    let [dark,setDark]=useState(false);


    let doubleNum=useMemo(()=>{
        return slowFunction(Number);
    },[Number])



    let themestyle= useMemo(()=>{
        return{
            backgroundColor: dark? 'black':'white',
            color: dark? 'white':'black'
        }   
       
    },[dark])

    useEffect(()=>{
        console.log('Theme Changed');
    },[themestyle])

    return(
        <div>
            <input type="number" value={Number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => setDark((value)=> !value)}>Change Theme</button>
            <div style={themestyle}>{doubleNum}</div>
        </div>
    );
}


export default Hook2;   

function slowFunction(num){
    for(let i=0;i<=1000000000;i++){
        doubleNum=num*2;
    }
}



