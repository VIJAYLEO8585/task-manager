import React ,{ useState }from 'react';
    const Taskmanager=()=>{
  const[taskName,setTaskName]=useState('');
  const[priority,setPriority]=useState('');
  const[tasks,setTasks]=useState([]);
  const addTask=()=>{
    if(taskName && priority){
        const newTask={name:taskName,priority:parseInt(priority)};
        const updatedTasks=[...tasks,newTask];

updatedTasks.sort((a,b)=>a.priority-b.priority);
setTasks(updatedTasks);
    }
 };
     
  return(
    <div>
      <h1>Task manager</h1>
   <input type='text'placeholder='Task Name'  value={taskName} onChange={(e)=>setTaskName(e.target.value)} />

     <input type='number' placeholder='Priority' value={priority}  onChange={(e)=>setPriority(e.target.value)} />

   <button onClick={addTask}>Add Task</button>

<ul>
    {tasks.map((task,index)=>(<li key={index}>{task.name}(Priority:{task.priority})</li>))}
</ul>
    </div>
  );
};
  export default Taskmanager;