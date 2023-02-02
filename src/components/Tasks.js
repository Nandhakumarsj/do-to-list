import { useState } from 'react';
import './Task.css';
const Tasks = ({task, completed, id, strikeHandler}) =>{
    const [checked, setChecked] = useState(false);
    const changeHandler = () =>{
        setChecked(!checked);
        strikeHandler(id);
    }
    return(
        <div className='item'>
            <input defaultChecked={completed} onChange={changeHandler} type='checkbox'/>
            <p className={completed?'strike':''}>
                {task}
            </p>
        </div>
    )
}
export default Tasks;