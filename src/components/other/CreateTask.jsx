import React from 'react';

const CreateTask = () => {
  return (
    <div className="w-full bg-[#1c1c1c] mb-5 mx-auto p-6 text-white rounded-lg mt-10 ">
      <form className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <label className="block font-medium mb-3">Task Title</label>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium mb-3">Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium mb-3">Assign to</label>
            <input
              type="text"
              placeholder="Employee name"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block font-medium mb-3">Category</label>
            <input
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