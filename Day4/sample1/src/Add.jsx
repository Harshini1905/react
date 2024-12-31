function Add(props){
    var a=10;
   return(
        <div>
            <h1>Sum of two numbers: {a+props.b}</h1>
            
        </div>
    );
}

export default Add;