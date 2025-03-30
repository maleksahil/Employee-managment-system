import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

  
    const [userData,setuserData] = useContext(AuthContext)
  

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription,setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault()

    setNewTask({taskTitle, taskDate, taskDescription, category, asignTo, active:false, newTask:true, failed:false, completed:false,})

    const data = userData
   


    data.forEach(function(elem){
       if(asignTo == elem.name){
        elem.tasks.push(newTask)
        elem.taskCount.newTask += 1;
       }
    });

    setuserData(data)
    console.log(data)

    setTaskDate(":")
    setTaskDescription("")
    setTaskTitle("")
    setAsignTo("")
    setCategory("")

  }

  return (
    <div className="w-full bg-[#1c1c1c] mb-5 mx-auto p-6 text-white rounded-lg mt-10 ">
      <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <label className="block font-medium mb-3">Task Title</label>
            <input
            value={taskTitle}
            onChange={(e)=>{setTaskTitle(e.target.value)}}
              type="text"
              placeholder="Make a UI design"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium mb-3">Date</label>
            <input
            value={taskDate}
            onChange={(e)=>setTaskDate(e.target.value)}
              type="date"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium mb-3">Assign to</label>
            <input
            value={asignTo}
            onChange={(e)=>setAsignTo(e.target.value)}
              type="text"
              placeholder="Employee name"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium mb-3">Category</label>
            <input
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
              type="text"
              placeholder="Design, Dev, etc."
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <div>
            <label className="block font-medium mb-3">Description</label>
            <textarea
            value={taskDescription}
            onChange={(e)=>setTaskDescription(e.target.value)}
              cols="30"
              rows="6"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Task details..."
            ></textarea>
          </div>
          <button className="w-full bg-blue-500 bg-emerald-600 py-2 rounded-md hover:bg-emerald-800 transition cursor-pointer">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;