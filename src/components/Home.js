import React, { useState } from 'react'
import BuyTotal from './BuyTotal'


function Home() {
  const [mac, setMac] = useState(0)
  const [phone, setPhone] = useState(0)
  const [ipad, setIpad] = useState(0)

  function addMac() {
    setMac(mac + 1)
  }

  function addIphone() {
    setPhone(phone + 1)
  }

  function addIpad() {
    setIpad(ipad + 1)
  }

  function removeMac() {
    setMac(mac - 1)
  }

  function removeIphone() {
    setPhone(phone - 1)
  }
  function removeIpad() {
    setIpad(ipad - 1)
  }


  return (
    <div className='grid grid-cols-3 gap-3 place-items-center border-2 h-auto'>
      <div className='m-3 shadow-md'>
        <div className="left-head-style bg-black p-4 ">
          <h3 className='text-slate-300 text-2xl text-center'>MacBook Pro</h3>
        </div>
        <p className='flex justify-center text-xl p-2 mt-2 m-auto  text-slate-200 bg-blue-700 w-36 rounded-md'>
          <h3 className='font-bold'>Price : $999</h3>
        </p>
        <div className='item-image-style flex justify-center'>
          <img src="https://m.media-amazon.com/images/I/61LNGJEMh0L._SX679_.jpg" width="50%" alt="Image Not Found" />
        </div>
        <div className="item-text-style p-3 text-justify text-ellipsis">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </div>
        <div className="item-footer-style flex justify-center">

          <div>
            <button className='bg-red-500 hover:bg-red-400 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-200 p-2 m-4 border-4 text-slate-200' onClick={addMac}>+</button>
            <span>Count : {mac}</span>
            <span className=' bg-green-400 p-3 text-slate-800 rounded-md shadow-md font-bold ml-2'>Price : ${mac * 999}</span>
            {mac > 0 ? <button className='bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 p-2 m-4 border-4 text-slate-200' onClick={removeMac}>-</button> : null}
          </div>
        </div>
      </div>

      <div className='m-3 shadow-md'>
        <div className="left-head-style bg-black p-4">
          <h3 className='text-slate-300 text-2xl text-center'> Iphone 14</h3>
        </div>
        <p className='flex justify-center text-xl p-2 mt-2 m-auto  text-slate-200 bg-blue-700 w-36 rounded-md'>
          <h3 className='font-bold'>Price : $1199</h3>
        </p>
        <div className='item-image-style flex justify-center'>
          <img src="https://m.media-amazon.com/images/I/61HHS0HrjpL._SX679_.jpg" width="50%" alt="Image Not Found" />
        </div>
        <div className="item-text-style p-3 text-justify text-ellipsis">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </div>
        <div className="item-footer-style flex justify-center">

          <div>
            <button className='bg-red-500 hover:bg-red-400 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-200 p-2 m-4 border-4 text-slate-200' onClick={addIphone}>+</button>
            <span>Count : {phone}</span>
            <span className=' bg-green-400 p-3 text-slate-800 rounded-md shadow-md font-bold ml-2'> Price : ${phone * 1199}</span>
            {phone > 0 ? <button className='bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 p-2 m-4 border-4 text-slate-200' onClick={removeIphone}>-</button> : null}
          </div>
        </div>
      </div>
      <div className='m-3 shadow-md'>
        <div className="left-head-style bg-black p-4">
          <h3 className='text-slate-300 text-2xl text-center'>Ipad</h3>
        </div>
        <p className='flex justify-center text-xl p-2 mt-2 m-auto  text-slate-200 bg-blue-700 w-36 rounded-md'>
          <h3 className='font-bold'>Price : $560</h3>
        </p>
        <div className='item-image-style flex justify-center'>
          <img src="https://m.media-amazon.com/images/I/61uA2UVnYWL._SX679_.jpg" width="50%" alt="Image Not Found" />
        </div>
        <div className="item-text-style p-3 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </div>
        <div className="item-footer-style flex justify-center">
          <div >
            <button className='bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 p-2 m-4 border-4 text-slate-200' onClick={addIpad}>+</button>
            <span>Count : {ipad}</span>
            <span className=' bg-green-400 p-3 text-slate-800 rounded-md shadow-md font-bold ml-2'>Price : ${ipad * 560}</span>
            {ipad > 0 ? <button className='bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 p-2 m-4 border-4 text-slate-200' onClick={removeIpad}>-</button> : null}
          </div>
        </div>
      </div>
      <div></div>
      <div>
        {(mac > 0) || (ipad || 0) || (phone > 0) ? <BuyTotal total={(mac * 999) + (ipad * 560) + (phone * 1199)} /> : null}
      </div>
    </div >
  )
}

export default Home