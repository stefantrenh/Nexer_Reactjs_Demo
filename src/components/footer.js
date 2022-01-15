import React from 'react'
import './footerStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />         
                        <div>
                            <p>Lindholmspiren 9</p>
                            <h4>417 56 Göteborg</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> 070-601 72 82</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> Demo@Nexergroup.com</h4>
                    </div>               
                </div>

                <div className='right'>
                    <h4>About the demo</h4>
                    <p>Hi and welcome to the demo! <br></br>I am Stefan Trenh and currently a Fullstack Trainee at Nexergroup. Stefan loves to explore and keep learning new libraries and frameworks. This is React.js. <br></br>Hope you like it!</p>

                    <div className='social'>
                        <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                        <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                        <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
