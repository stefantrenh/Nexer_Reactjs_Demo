import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import NexerImg from '../components/NexerImg'
import TextAnimation from '../components/TextAnimation'

const Project = () => {
    return (
        <div>
            <Navbar />
            <NexerImg heading='PROJECT BOOSTAPP' text='MOVE WELL LIVE WELL'/>
            <TextAnimation />
            <Footer />
        </div>
    )
}

export default Project
