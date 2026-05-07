import React from 'react'
import Logo from './favicon.ico'
import Image from 'next/image'

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen"><Image src={Logo} alt="Logo" width={55} height={55} /></div>
    // <div className='flex items-center justify-center h-screen'><video src="/images/AZ_logo_elegant.mp4" autoPlay loop playsInline className='w-64'/></div>
  )
}

export default loading