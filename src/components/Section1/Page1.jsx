import React from 'react'
import LeftContent from '../Section1/LeftContent'
import RightContent from '../Section1/RightContent'

const Page1 = props => {
  return (
    <div className='pb-16 pt-10 flex item-center gap-30 h-[90vh] px-18'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1
