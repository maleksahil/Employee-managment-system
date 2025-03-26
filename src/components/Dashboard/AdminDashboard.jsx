import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {

  const name = localStorage.getItem('admin')

console.log(JSON.parse(name))


const data = JSON.parse(name)

  return (
    <div className="h-screen w-full p-10 ">
      <Header data={data}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
