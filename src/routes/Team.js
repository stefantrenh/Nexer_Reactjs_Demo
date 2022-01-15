import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import NexerImg from '../components/NexerImg'
import TeamCard from '../components/TeamCard'
import './TeamStyle.css'

const Team = () => {
    return (
        <div>
            <Navbar />
            <NexerImg heading='WEST TECH' text='TEAM ANDREA'/>
            <div className='teamCards'>
                <TeamCard name="Andrea Klintelius" employee="BU MANAGER"/>
                <TeamCard name="Stefan Trenh" employee="FULLSTACK DEVELOPER"/>
                <TeamCard name="Kiomars Miraseedi" employee=".NET DEVELOPER"/>
                <TeamCard name="Markus Johansson" employee=".NET DEVELOPER"/>
                <TeamCard name="Leonora " employee=".NET DEVELOPER"/>
                <TeamCard name="Robin Axelsson " employee=".NET DEVELOPER"/>
                <TeamCard name="Suzana " employee="JAVA DEVELOPER"/>
                <TeamCard name="Helena " employee="JAVA DEVELOPER"/>
                <TeamCard name="Karen " employee="JAVA DEVELOPER"/>
                <TeamCard name="Jaya " employee="APP DEVELOPER"/>
                <TeamCard name="Simon Netzell" employee="TESTING"/>
                <TeamCard name="Lex " employee="TESTING"/>
            </div>
            <Footer />
        </div>
    )
}

export default Team
