import React from 'react'
import Navbar from '../components/Navbar'
export default function Aboutpage(props) {
    return (
        <div>
            <Navbar name={props.name} home={props.home} togglemode={props.togglemode} mode={props.mode} />
            <div className="container">
                <h1 className='text-center my-5'>About</h1>
                <p className='my-5 text-center text-wrap fs-4'>this is a small utility that i have created during a tutorial to learn about react and its functionalities and explore more about react</p>
            </div>
        </div>
    )
}
