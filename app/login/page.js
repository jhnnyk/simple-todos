'use client'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'
import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) return

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      console.log(user)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="flex lg:h-[100vh]">
      <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
        <div className="p-8 w-[600px]">
          <h1 className="text-6xl font-semibold">Login</h1>
          <p className="mt-6 ml-1">
            Don't have an account?{' '}
            <Link href={'/register'} className="underline hover:text-blue-400 cursor-pointer">
              Register
            </Link>
          </p>

          {/* login with Google */}
          <div className='bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-80 flex justify-center items-center gap-4 cursor-pointer'>
            <FcGoogle size={22} />
            <span className='font-medium text-black group-hover:text-white'>
              Login with Google
            </span>
          </div>

          {/* login with email and password */}
          <form onSubmit={handleSubmit}>
            <div className='mt-10 pl-1 flex flex-col'>
              <label>Email</label>
              <input 
                type="email" 
                className='font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400' 
                required 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='mt-10 pl-1 flex flex-col'>
              <label>Password</label>
              <input 
                type="password" 
                className='font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400' 
                required 
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className='bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90'>Login</button>
          </form>
        </div>
      </div>

      <div className='w-[40%] bg-slate-400 bg-cover bg-right-top hidden lg:block' style={{backgroundImage: "url('/login.jpg')"}}>

      </div>
    </main>
  )
}

export default Login
