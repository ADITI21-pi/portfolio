import React from 'react'
import Card from './Card'
import GitHubIcon from '@mui/icons-material/GitHub';
const Projects = () => {
  return (
    <div className=" min-h-screen py-10 text-white flex justify-center items-center flex-col">
      <div className="heading">
        <h1 className="cursive text-6xl vsm:text-5xl">My Projects</h1>
        <div className="underlineanim border-cyan-500 border w-64 duration-500 mt-3 vsm:w-60"></div>
      </div>
      <div className=' mt-10 flex flex-wrap mx-28 gap-5 justify-center items-center'>
        <Card
          img="https://imgur.com/Cghrl2G"
          h="Amazon Clone"
          skills="HTML | CSS"
          link='https://drive.google.com/file/d/1OPdII2yoCNycYm4GoeyODgzjFigyMMCy/view?usp=sharing'
          gitlink='https://github.com/ADITI21-pi/Amazon-project'
        />
        <Card
          img="https://imgur.com/1S6EEZf"
          h="Weather app"
          skills="HTML | CSS | JavaScript"
          link="https://drive.google.com/file/d/1ngf1VMWDmQR_dKUZavtKXXnCN_VMO4Ke/view?usp=sharing"
          gitlink='https://github.com/ADITI21-pi/Weather-App'
        />
        { /* <Card
          img="spacex.jpg"
          h="SpaceX Clone"
          p="In this project, I have recreated the visual design and layout of SpaceX website."
          link=""
        />
        <Card
          img="todo.jpg"
          h="ToDo list"
          p=" "
          link=""
        />
        <Card
          img="calculator.png"
          h="Calculator"
          link=""
        /> */}
      </div>
      <div className=' mt-10 flex flex-row justify-center items-center gap-4'>
      <p className='cursive text-2xl'>For more, check out my github </p>
      <a href='https://github.com/ADITI21-pi'><GitHubIcon/></a>
      </div>
    </div>
  )
}

export default Projects;