import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import NexerImg from '../components/NexerImg'
import Form from '../components/Form'

const contact = () => {
    return (
        <div>
            <Navbar />
            <NexerImg heading='CONTACT US' text='DEMO PAGE'/>
            <Form />
            <Footer />
        </div>
    )
}

export default contact
