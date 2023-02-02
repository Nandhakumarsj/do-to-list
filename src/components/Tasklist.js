import Task from './Tasks';
import './TaskList.css';
const TaskList = ({dotoList , strikeHandler}) =>{
    return(
        <div className='list'>
            {
                dotoList.map(
                    elem=><Task key={elem.id} task={elem.task} completed={elem.completed} id={elem.id} strikeHandler={strikeHandler}/>
                )
            
            }
        </div>
    );
}
export default TaskList;