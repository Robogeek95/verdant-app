import React from 'react'
import { ImSad } from 'react-icons/im'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className = 'notFound'>
            
            <h1>Sorry</h1>
            <ImSad size = '2rem'/>
            <p>This page is not found</p>
            <Link to = '/'>Back to the HomePage.....</Link>
        </div>
    )
}

export default NotFound
