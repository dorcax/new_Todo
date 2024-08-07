import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='flex flex-col border w-full max-w-sm mx-auto my-40  shadow-lg'>
        <header className='bg-green-800 text-white text-center '>
            Todo List
        </header>
        <main className='flex-grow p-4'>
            <Outlet/>
        </main>
        <footer className='bg-green-800 text-center text-white  '>
           &copy; {new Date().getFullYear()}
        </footer>
    </div>
  )
}

export default AppLayout