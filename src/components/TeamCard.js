import React from 'react'
import './TeamCardStyles.css'

const TeamCard = (props) => {
    return (
    <div className='card'>
        <div className='card-container'>
            <h3>{props.name}</h3>
            <span className='bar'>{props.employee}</span>
        </div>
    </div>
    )
}

export default TeamCard
