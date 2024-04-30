import React from 'react'

const Practic = () => {
  return (
    <>
          {/* <div className=' w-screen h-screen bg-blue-500'>
    </div> */}
    <div className='w-screen text-center bg-slate-600 text-[67px] font-extrabold' >
   <p my-auto mx-auto>this is my webside </p>
    </div>

    <div className='w-screen h-screen flex bg-slate-600'>
    <div className='my-auto mx-auto'>
        <p className=' text-[67px] font-extrabold'>this is my website</p>
    </div>
</div>

<div class="flex space-x-4  bg-slate-300">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>

<div class=" grid grid-cols-1 text-white  bg-gray-700 md:grid-cols-2 lg:grid-cols-4  md:bg-amber-300 lg:bg-blue-300"  >
  <div class="border-1 border-black">01</div>
  <div class="border-1 border-black">02</div>
  <div class="border-1 border-black">03</div>
  <div class="border-1 border-black">04</div>
</div>
<div className="flex justify-center">
  <button className="bg-green-400 mt-2 w-[120px] hover:bg-green-700 hover:text-white ">click me</button>
</div>
      <h1 className='text-center capitalize text-4xl '>our services</h1>
      <hr className='w-1/5 mx-auto text-red-500 font-bold h-2' />
      <div className=' w-4/5 m-auto grid lg:grid-cols-2'>
        <div className=' '>
          <p className=' '>lorem20
          </p>
        </div>
        <div className=''>
          <img src='logo512.png ' className=' flex-'></img>
        </div>
      </div>
    </>
  )
}

export default Practic
