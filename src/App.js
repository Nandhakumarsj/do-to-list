import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/Tasklist";
import Title from "./components/Title";
import Footer from "./components/Footer";
import data from './assets/data.json';
import './App.css';

const App = () =>{
  const [dotoList, setDotoList] = useState(data);
  const [id, setId]=useState(dotoList.length+1);

  const newTaskHandler = input =>{
    let copy = [...dotoList];
    setId(id+1);
    copy = [...dotoList, {id:id+1,task:input, completed:false}];
    setDotoList(copy);
  }

  const strikeHandler=id=>{
    let temp = [...dotoList];
    temp = temp.map(task=>Number(id) === task.id ?{...task,completed:!task.completed}:{...task});
    setDotoList(temp);
  }

  const clearHandler = e =>{
    let temp = [...dotoList];
    temp = temp.filter(
      task=>!task.completed
    )
    setDotoList(temp);
  }

  return(
    <>
      <Title Title="Do-To List"/>
      <TaskList dotoList={dotoList} strikeHandler={strikeHandler}/>
      <div className="clear">
        <button onClick={clearHandler}>Clear</button>
      </div>
      <AddTask newTaskHandler={newTaskHandler}/>
      <Footer author=" NandhaKumar " />
    </>
  )
}
export default App;