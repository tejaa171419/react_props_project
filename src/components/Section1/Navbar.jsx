import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-6 px-16 bg-gray-200'>
      <h4 className='bg-black text-white px-6 py-2 rounded-full '>
        Target Audience
      </h4>
      <button className='bg-black text-white px-6 py-2 uppercase rounded-full tracking-widest text-sm'>
        digital Banking Platform
      </button>
    </div>
  )
}

export default Navbar
