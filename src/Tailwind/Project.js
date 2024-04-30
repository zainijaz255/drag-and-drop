import React from 'react'

const Project = () => {
  return (
    <>
     <div className='w-[90%] m-auto flex   justify-between flex-wrap '>
     {/* navbar */}
      <div className='flex gap-1'>
       <div><img src='/ecommerence.webp' className='h-[30px]'/></div>
       <div><span className=' capitalize text-[20px]'>hoo</span><span className='capitalize text-blue-400 text-[20px]'>Bank</span></div>
      </div>
       
      <div className=''>
       <ol className='flex gap-4   text-[20px]'>
        <li >Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Features</li>
       </ol>
      </div>

     </div>
      <div className='grid grid-cols-2 w-[90%] m-auto'>
       <div ><p>20% DISCOUNT FOR 1 MONTH ACCOUNT</p></div>
       <div><p>The Next</p></div>

       <div><p>child2</p></div>
     </div>
    </>
  )
}

export default Project
