import React from 'react'

const Header = ({data}) => {

  const logOutUser = ()=>{
      localStorage.setItem('loggedInUser', '')
      window.location.reload()
  }

  return (
    <div className='flex items-end justify-between text-white'>
      <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{data.name}👋</span> </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header
