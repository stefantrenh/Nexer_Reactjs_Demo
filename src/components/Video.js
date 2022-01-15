import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import spaceVideo from '../assets/space.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4'/>
            </video>
        
        <div className='content'>
            <h1>PROMISING FUTURE</h1>
            <p>Put your heart in it.</p>
            <div>
                <Link to='project' className='btn'>Project </Link>
                <Link to='team' className='btn'>Team </Link>
            </div>
        </div>
        </div>
    )
}

export default Video
