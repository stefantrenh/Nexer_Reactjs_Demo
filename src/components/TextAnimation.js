import React from 'react'
import Typewriter from 'typewriter-effect';
import './TextAnimationStyle.css'


const TextAnimation = () => {
    return (
        <div className='typewriter'>
<Typewriter
  options={{
    strings: ['Under Construction...', 'Release Q3 2022', 'See You Around Nexerians! =)'],
    autoStart: true,
    pauseFor: 1000
  }}
/>
        </div>
    )
}

export default TextAnimation
