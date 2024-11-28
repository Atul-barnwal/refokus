import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.666%] px-4 py-4 h-14 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-700 flex justify-between items-center'>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe