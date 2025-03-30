import React from 'react'

const NewTask = ({ data }) => {
  
  let task =[];

  data.tasks.forEach(element => {
      if(element.newTask === true){
       task.push(element);
      }
  });
  
  console.log(task)
  
  return (
  task.map((val)=>{
      
    return <div className="h-full flex-shrink-0 p-5 w-[300px] bg-blue-400 rounded-xl">
    {/* Task Header */}
    <div className="flex justify-between items-center">
      <h3 className="bg-red-600 px-3 py-1 rounded text-sm text-white">{val.category}</h3>
      <h4 className="text-sm">{val.date}</h4>
    </div>

    {/* Task Title & Description */}
    <h2 className="mt-5 text-xl font-semibold">{val.title}</h2>
    <p className="text-sm mt-2">{val.description}</p>

    {/* Task Status */}
    <div className="mt-3 space-y-1 text-sm">
      <p>Active: {val.active ? '✅' : '❌'}</p>
      <p>Completed: {val.completed ? '✅' : '❌'}</p>
      <p>New Task: {val.newTask ? '✅' : '❌'}</p>
      <p>Failed: {val.failed ? '✅' : '❌'}</p>
    </div>

    {/* Action Buttons */}
    <div className="flex justify-between mt-4">
      <button className="bg-green-500 py-2 w-full text-sm px-2 rounded-xl cursor-pointer shadow-lg active:bg-green-800">
        Complete
      </button>
      
    </div>
  </div>
  })
  );
};

export default NewTask;
