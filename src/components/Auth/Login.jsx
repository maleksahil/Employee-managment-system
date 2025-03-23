import React, { useEffect, useState } from 'react'

const Login = ({handleLogin}) => {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 


        const submitHandler = (e)=>{
            e.preventDefault();

            handleLogin(email, password)

          
          setEmail('')
          setPassword('')
    }
        

        


  return (
    <div className='flex h-screen w-screen items-center justify-center text-white'>
         <div className='border-2 border-emerald-600 p-20 rounded-xl'>
             <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col items-center justify-center">
                <input value={email} required onChange={(e)=>setEmail(e.target.value)} className='border-2 border-emerald-600 rounded-full px-3 py-4 text-xl placeholder:text-gray-400 bg-transparent outline-none' type='email' placeholder='Enter your email'/>
                <input value={password} required onChange={(e)=>setPassword(e.target.value)} className='border-2 border-emerald-600 rounded-full px-3 py-4 mt-3 text-xl placeholder:text-gray-400 bg-transparent outline-none' type='password' placeholder='Enter your password'/>
                <button className='bg-emerald-600 rounded-full px-4 py-3 mt-3 text-xl placeholder:text-white text-white outline-none'>Login</button>
             </form>
         </div>
    </div>
  )
}

export default Login
