import {useState} from 'react';
function Namechange(props){
    let [name, setName] = useState(props.name);
    return(
        <div>
            <h1>name:{name}</h1>
            <input type="text" id="name" value={name} 
            onChange={(e) => setName(e.target.value)} />
            
            
        </div>
    );
}

export default Namechange;