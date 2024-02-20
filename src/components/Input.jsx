import React , {useState} from "react";

function Input(props){

    const [inputtext, setinputText] = useState("");

    function handleChange(event){
        const newValue = event.target.value;
        setinputText(newValue);
      }
    
    return (
    <div className='form'>
        <input onChange={handleChange} type='text' value={inputtext} />
        <button 
            onClick={() => {
                props.additem(inputtext);
                setinputText("");
            }}
        >
            <span>Add</span>
        </button>
    </div>
  );
}

export default Input;