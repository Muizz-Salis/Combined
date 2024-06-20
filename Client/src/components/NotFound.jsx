import React from 'react'

const NotFound = () => {
    
  return (
    <>
    <h1 className='fs-danger text-center '>
        This is not the page you are looking for
    </h1>

    <p className='fw-bold text-suceess'>
        Error 404
    </p>

    <button onClick={()=> navigate("/")} className=''>Go back to Home Page</button>
    </>
  )
}

export default NotFound