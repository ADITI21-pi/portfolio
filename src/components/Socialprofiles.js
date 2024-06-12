import React from 'react'

const Socialprofiles = () => {
  return (
    <div className=' flex flex-row mt-4'>
        <a className=' sociallinks bg-white hover:bg-cyan-500 hover:h-7 hover:w-7 hover:mt-3 duration-500 w-9 rounded-full h-9 flex justify-center items-center m-2' href='https://www.linkedin.com/in/aditi-jain-732040240/'><img className=' socialimg w-4' src={require('../Assets/linkedin-icon.png')}></img></a>

        <a className=' sociallinks bg-white hover:bg-cyan-500 hover:h-7 hover:w-7 hover:mt-3 duration-500 w-9 rounded-full h-9 flex justify-center items-center m-2' href='https://www.geeksforgeeks.org/user/jainadibpmy/'><img className=' socialimg w-6' src={require('../Assets/GFG-icon.png')}></img></a>

        <a className=' sociallinks bg-white hover:bg-cyan-500 hover:h-7 hover:w-7 hover:mt-3 duration-500 w-9 rounded-full h-9 flex justify-center items-center m-2' href='https://github.com/ADITI21-pi'><img className=' socialimg w-6' src={require('../Assets/github-icon.png')}></img></a>

        <a className=' sociallinks bg-white hover:bg-cyan-500 hover:h-7 hover:w-7 hover:mt-3 duration-500 w-9 rounded-full h-9 flex justify-center items-center m-2' href='https://leetcode.com/u/aditi_201/'><img className=' socialimg w-6' src={require('../Assets/leetcode-icon.png')}></img></a>
    </div>
  )
}

export default Socialprofiles;