import { Redo } from 'lucide-react'
import React from 'react'

const RightCardContent = props => {
  // console.log(props.color)

  return (
    <div>
      <p className='text-xl leading-relaxed text-white mb-9'>{props.intro}</p>
      <div className='flex justify-between'>
        <button
          style={{ backgroundColor: props.color }}
          className=' text-white font-medium px-7 py-2 rounded-full '
        >
          {props.tag}
        </button>
        <button className=' text-white font-medium px-4 py-2 rounded-full '>
          <i className='ri-arrow-right-line'></i>
        </button>
      </div>
    </div>
  )
}

export default RightCardContent
