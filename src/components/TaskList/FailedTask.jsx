import React from 'react'

const FailedTask = () => {
  return (
    <div className="h-full flex-shrink-0 p-5 w-[300px] bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-xl font-semibold">Make a You Tube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros
          rhoncus nisl viverra pretium.
        </p>
      </div>
  )
}

export default FailedTask
