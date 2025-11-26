import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = props => {
  // console.log(props.color)

  return (
    <div className='h-full w-80 bg-red-500 rounded-4xl overflow-hidden relative shrink-0'>
      <img className='h-full w-full object-cover' src={props.img} />
      <div className='absolute top-0 left-0 h-full w-full p-8  flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>
          {props.id + 1}
        </h2>

        <RightCardContent
          color={props.color}
          tag={props.tag}
          intro={props.intro}
        />
      </div>
    </div>
  )
}

export default RightCard
