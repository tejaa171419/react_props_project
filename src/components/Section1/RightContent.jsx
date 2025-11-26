import React from 'react'
import RightCard from './RightCard'

const RightContent = props => {
  return (
    <div
      id='right'
      className='h-full flex rounded-4xl flex-nowrap gap-9 p-5 w-2/3 overflow-x-auto'
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            img={elem.img}
            color={elem.color}
            tag={elem.tag}
            intro={elem.intro}
          />
        )
      })}
    </div>
  )
}

export default RightContent
