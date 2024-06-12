import React from 'react'
import Socialprofiles from './Socialprofiles'
import { Link } from 'react-router-dom'
const Sidenav = () => {
  return (
    <div className=' h-screen mb-7 sidenav text-white w-72 mx-7 p-7 lg:hidden'>
        <div className=' flex items-center flex-col justify-center'>
            <img src={require('../Assets/Profile.jpg')} className=' border-2 rounded-full'></img>
            <h1 className='cursive mt-4 text-4xl hover:text-cyan-500 duration-500'>Aditi Jain</h1>
            <Socialprofiles/>
            <div className='flex flex-col mt-4'>
                <Link to={'/portfolio/'}>
                  <button className='underlineanim rounded-3xl bg-cyan-500 m-5 p-3 w-60 hover:bg-gray-700 duration-500 hover:w-44'><h1 className=' text-2xl cursive'>About</h1></button>
                </Link>
                <Link to={'/portfolio/projects'}>
                  <button className='underlineanim rounded-3xl bg-cyan-500 m-5 p-3 w-60 hover:bg-gray-700 duration-500 hover:w-44'><h1 className=' text-2xl cursive'>Projects</h1></button>
                </Link>
                <Link to={'/portfolio/contact'}>
                  <button className='underlineanim rounded-3xl bg-cyan-500 m-5 p-3 w-60 hover:bg-gray-700 duration-500 hover:w-44'><h1 className=' text-2xl cursive'>Contact</h1></button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Sidenav;