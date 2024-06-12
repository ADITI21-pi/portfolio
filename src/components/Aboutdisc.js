import React from 'react'
import Socialprofiles from './Socialprofiles'
const Aboutdisc = () => {
  return (
    <div className="">
        <h1 className="cursive text-5xl text-cyan-500">Hello, I am Aditi Jain</h1>
        <h1 className=' pt-4 text-cyan-500'>FRONTEND DEVELOPER || SOFTWARE PROGRAMMER</h1>
        <p className='pt-4 text-justify'>I am currently completed a B.Tech in Electrical Engineering at Madhav Institute of Technology and Science, Gwalior. My aggregate CGPA is 7.13. My interests lie in Competitive Programming, DSA, and Web Development. I've solved 100 DSA questions on LeetCode. In addition, I've completed two projects an amazon clone site and a weather app. My frontend development tech stack includes HTML, CSS, JavaScript, React.js, MySQL. I'm proficient in programming with Java, and I also possess a foundational understanding of JavaScript. I consider myself an enthusiastic learner and always strive to excel in any assigned task.</p>
        <Socialprofiles/>
        <button className='underlineanim mt-5 bg-cyan-500 p-3 rounded-3xl w-56 hover:bg-gray-700 hover:w-72 duration-500'><a className=' font-bold text-xl' href='https://drive.google.com/file/d/14GW5S8tbz1RMntfPwUYFqQIXkXHkKASa/view'>RESUME</a></button>
    </div>
  )
}

export default Aboutdisc;