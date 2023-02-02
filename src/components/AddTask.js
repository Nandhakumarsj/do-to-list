import { useState } from "react";
import './AddTask.css';

const AddTask = ({newTaskHandler}) =>{
    const [input, setInput] = useState('');
    const placeholder= 'Enter the task here...';
    const formHandler = (e) =>{
        e.preventDefault();
        input&&newTaskHandler(input);
        setInput('');
    }
    const textHandler = (e) =>{
        e.preventDefault();
        setInput(e.currentTarget.value);
    }
    return (
        <div className="formgroup">
            <form onSubmit={formHandler}>
                <button>+</button>
                <input type='text' onChange={textHandler} value={input} placeholder={placeholder}/>
                <button>Add New Task</button>
            </form>
        </div>
    );
}
export default AddTask;