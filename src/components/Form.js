import React from 'react'
import './FormStyle.css'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <label>Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Subject</label>
                <input type='text'></input>
                <label>Details</label>
                <textarea rows='6' placeholder='Just a Demo.' />
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form
