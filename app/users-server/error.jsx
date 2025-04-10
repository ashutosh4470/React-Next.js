'use client'
import React, { useEffect } from 'react'

const error = ({error}) => {
    useEffect(()=>{
        console.log(error);
    },[error])
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="text-2xl text-red-500">Error Fetching user data</div>
    </div>
  )
}

export default error