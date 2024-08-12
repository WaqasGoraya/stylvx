import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div className="pagenotmain text-center my-5">
            <div className="container">
            <img className='img-fluid' src='/images/page-not-found-update.jpg'></img>
            <h1 className='my-4'>404 Page Not Found</h1>
            <Link to='/' className="btn-blog-seemore py-2 px-4 text-decoration-none">Go to Home</Link>
            </div>
        </div>
    </>
  )
}

export default NotFound