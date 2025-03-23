import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] text-white overflow-x-auto w-full mt-10 flex items-center flex-nowrap justify-start gap-5'>
       <div className='h-full flex-shrink-0 p-5 w-[300px] bg-red-400 rounded-xl'>
          <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold'>Make a You Tube video</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros rhoncus nisl viverra pretium.</p>
       </div>
       <div className='h-full flex-shrink-0 p-5 w-[300px] bg-yellow-400 rounded-xl'>
          <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold'>Make a You Tube video</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros rhoncus nisl viverra pretium.</p>
       </div>
       <div className='h-full flex-shrink-0 p-5 w-[300px] bg-green-400 rounded-xl'>
          <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold'>Make a You Tube video</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros rhoncus nisl viverra pretium.</p>
       </div>
       <div className='h-full flex-shrink-0 p-5 w-[300px] bg-blue-400 rounded-xl'>
          <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
          <h4 className='text-sm'>20 feb 2024</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold'>Make a You Tube video</h2>
          <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros rhoncus nisl viverra pretium.</p>
       </div>
    </div>
  )
}

export default TaskList
