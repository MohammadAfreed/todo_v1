import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios';



function TodoForm(props) {
    const[input,setInput]=useState('');
    const focus=useRef(null);
    const addr="http://localhost:8000/todo";

    useEffect(()=>{
      focus.current.focus()
    })


    const handleChange=e=>{
            setInput(e.target.value);
                
            
    }



    const handleSubmit =e=>{
        e.preventDefault();
        if(e===""){return}
        props.onSubmit({
          
            id:Math.floor(Math.random()*10000),
            text : input
        })
        axios.post(addr,{input})

        setInput('');
    }
    
    
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text'
        placeholder='Add to do' 
        value={input} name='text'
         className='todo-input'
         onChange={handleChange}
         ref={focus}
         />
         <button className='todo-button'>Add Todo</button>
    </form>
  )
}

export default TodoForm