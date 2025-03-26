import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] text-white overflow-x-auto w-full mt-10 flex items-center flex-nowrap justify-start gap-5"
    >
    {data.tasks.map((elem, index)=>{

      if(elem.active){
         return <AcceptTask data={data} key={index} />
      }
      if(elem.newTask){
         return <NewTask data={data} key={index} />
      }
      if(elem.completed){
         return <CompleteTask data={data} key={index} />
      }
      if(elem.failed){
         return <FailedTask key={index} />
      }

    })}
      
    </div>
  );
};

export default TaskList;
