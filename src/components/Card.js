import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GitHubIcon from '@mui/icons-material/GitHub';
const Card = (props) => {
  const [state,setstate]=useState(0);
  const [showstate,setshowstate]=useState('hidden');

  return (
    <div>
        <div className='' onMouseEnter={()=>setstate('opacity-20')} onMouseLeave={()=>setstate('opacity-100')}>
        <div className=' hover:w-72 duration-500 rounded-2xl border-white hover:border-cyan-500 border-2 relative h-auto w-64 xl:hover:w-56 vsm:hover:w-72 xl:w-52 vsm:w-64' onMouseEnter={()=>setshowstate('absolute')} onMouseLeave={()=>setshowstate('hidden')}>
            <div  className='rounded-2xl w-full h-full top-0 left-0'>
              <img className={state + ' trans rounded-2xl'} src={`../propimages/${props.img}`}></img>
            </div>
            <div className={showstate + ' trans text-white h-full top-0 absolute mx-3 flex flex-col justify-center items-center'}>
                <h1 className=' text-center cursive vsm:text-3xl xl:text-2xl text-3xl mb-3'>{props.h}</h1>
                <h1 className=' '>{props.skills}</h1>
                <div className=' flex flex-row gap-4 pt-3'>
                <Link to={props.link} >
                  <h1><RemoveRedEyeIcon/></h1>
                </Link>
                <Link to={props.gitlink}>
                  <h1><GitHubIcon/></h1>
                </Link>
                </div>
             </div>
        </div>
        </div>
    </div>
  )
}

export default Card;