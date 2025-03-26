import React from 'react'

const AcceptTask = ({ data }) => {
  const task = data.tasks[0];

  return (
    <div className="h-full flex-shrink-0 p-5 w-[300px] bg-yellow-400 rounded-xl">
      {/* Task Header */}
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm text-white">{task.category}</h3>
        <h4 className="text-sm">{task.date}</h4>
      </div>

      {/* Task Title & Description */}
      <h2 className="mt-5 text-xl font-semibold">{task.title}</h2>
      <p className="text-sm mt-2">{task.description}</p>

      {/* Task Status */}
      <div className="mt-3 space-y-1 text-sm">
        <p>Active: {task.active ? '✅' : '❌'}</p>
        <p>Completed: {task.completed ? '✅' : '❌'}</p>
        <p>New Task: {task.newTask ? '✅' : '❌'}</p>
        <p>Failed: {task.failed ? '✅' : '❌'}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-2 text-sm px-2 rounded-xl cursor-pointer shadow-lg active:bg-green-800">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-2 text-sm px-2 rounded-xl cursor-pointer shadow-lg active:bg-red-800">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
