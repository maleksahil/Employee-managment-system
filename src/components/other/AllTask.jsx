import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 rounded h-85'>

          <div className='bg-red-400 py-2 px-4 flex justify-between rounded mb-2'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
          </div>

         <div className=''>
         {authData.employees.map(function(elem,index){
           return <div key={index} className='border-2 border-emerald-600 py-2 px-4 flex justify-between rounded mb-2'>
            <h2 className='text-lg font-medium w-1/5 text-teal-500'>{elem.name}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCount.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCount.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
          </div>
          })}
         </div>


    </div>
  )
}

export default AllTask
