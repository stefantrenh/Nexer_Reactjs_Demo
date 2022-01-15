import React, { Component } from 'react'
import './NexerImgStyles.css'

export class NexerImg extends Component {
    render() {
        return (
            <div className='nexer-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>                
            </div>
        )
    }
}

export default NexerImg
