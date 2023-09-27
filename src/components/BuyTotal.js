import React from 'react'

function BuyTotal(props) {
  return (
    <div className='border-4 pl-10 pr-10 pt-5 pb-5 mb-40'>
      <p className='text-3xl text-center p-3 bg-slate-300 rounded-md m-3 w-auto'>Total :${props.total}</p>
      <button className='w-120 bg-blue-950 text-4xl pl-20 pr-20 pt-2 pb-2 rounded-xl text-yellow-100'>Pay</button>
    </div>
  )
}

export default BuyTotal