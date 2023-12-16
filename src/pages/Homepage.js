import React from 'react'
import Navbar from '../components/Navbar'
import Textarea from '../components/Textarea'

export default function Homepage(props) {
    return (
        <div>
            <Navbar name={props.name} home={props.home} togglemode={props.togglemode} mode={props.mode} />
            <div className="container">
                <Textarea mode={props.mode} />
            </div>
        </div>
    )
}
