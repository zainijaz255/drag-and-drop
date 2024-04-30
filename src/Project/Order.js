import React from 'react'
import Data from './Data'
import But from './But'


const Order = () => {
  return (
    <>
      <div className='w-full bg-customBlack'>
        <nav className=' w-[85%] m-auto flex justify-between mt-[19px] '>
          <div className='mt-[19px]'><img src=" /img/image 1.png" className='sm:h-[30px] w-[100px] lg: h-[27px] justify-end mt-[19px] ' alt='Image' /> </div>
          <div className='sm:text-sm  ms-5'> <But /></div>
        </nav>
      </div>


      <div className=' grid grid-cols-2 w-full relative h-[570px] bg-orange-30'>
        <div><img src="/img/IMAGE(1).png" className='h-[760px]   ' alt='right' /></div>
        <div><img src='/img/IMAGE.png ' className='h-[820px] w-full' /></div>

        <div className='  absolute w-full h-[88px] mt-[88px] flex justify-center text-center bg-green-30 absolute-center '>
          <div className='  lg:w-[50%] flex-wrap h-[480px]  bg-red-90'>
            <div className='sm:text-4xl lg:w-[70%] m-auto lg:text-6xl'>A  Fast  Blockchain</div>
            <div className=' sm:text-4xl lg:w-[56%] m-auto text-6xl capitalize p-3'>scalable ai.</div>
            <div className='mt-[20px] text-xl text-center mb-[30px]'>
              <div className=' w-90 '>Bring blockchain to the people. Solana supports expriences for power </div>
              <div className=' '>users, new consumers, and everone in between</div>
            </div>
            <div className='flex justify-center gap-3'>
              <div className='sm:text-sm  ms-5 '><But /></div>
              <div className='sm:text-sm  ms-5'><button className='  rounded-full  capitalize  lg:w-[180px] h-[44px] mt-[22px]  sm:w-[90px]  bg-black text-white  w-[180px] h-[44px] mt-[22px] border border-slate-50'>connect wallet</button></div>
            </div>
            <div className='  mt-[60px] text-center text-xl bg-customBlue'>Powering tools and integrations from companies all around the world</div>
          </div>
        </div>
      </div>

      <div className=' mt-3 flex flex-wrap  h-[80px]'>
        <div className=' w-[90%] lg:w-[80%] m-auto grid lg:grid-cols-7 md:grid-cols-6  grid-cols-4  gap-4 items-center px-[30px] '>
          <div><img src='img/image 2.png' alt='image not find' /></div>
          <div><img src='img/image 3.png' alt='image not find' /></div>
          <div><img src='img/image 4.png' alt='image not find' /></div>
          <div><img src='img/image 5.png' alt='image not find' /></div>
          <div><img src='img/image 6.png' alt='image not find' /></div>
          <div><img src='img/image 7.png' alt='image not find' /></div>
          <div><img src='img/image 8.png' alt='image not find' /></div>
        </div>
      </div>

      <div className='mt-[60px]'>
        <div className='w-[75%] m-auto text-xl bg-green-30 text-justify'>
          <div className='text-center text-4xl'>Secure <span>Data</span> Transfer</div>
          <div className=' mt-3 text-center'>In the contemporary digital landscape, secure and efficient data sharing is paramountacross </div>
          <div className=' text-center'> diverse domains. This research proposal aims to leverage blockchain technology.</div>
        </div>
      </div>

      <div className=' relative'>
        <div className=''><img src='img/IMAGE(2).png' className='w-full lg:h-auto md:h-[60vh] h-[80vh] ' alt='image' /></div>
        <div className=" absolute  w-full   top-0 ">
          <div className=' grid sm: grid-cols-1 sm:gap-1  lg:w-[80%] m-auto  lg:grid-cols-3 gap-5 text-justify  '>
            {Data.map((val, index) => (
              <div className={val.style}>
                <div className=" rounded-5 sm:p-1 text-justify lg:p-5" key={index}>
                  <h1 className=' border-l-4 border-blue-500 pl-5'>{val.heading}</h1>
                  <p>{val.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='w-full sm:h-[450px] lg:h-[300px] '>
       <div className='  w-[80%] m-auto grid grid-cols-2 '>
         <div className=' lg:mt-[60px] '>
          <img src='img/Frame.png'/>
          <div>Managed by Solana Foundation</div>
          <img src='img/zain.png'/>
          <div> © 2024 Solana Foundation. All rights reserved.</div>
         </div>

         <div className='lg:mt-[60px] flex justify-around'>
          <div>
          <div>Get Connected</div>
          <div>Ecosystem</div>
          <div>Blog</div>
          <div>Newsletter</div>
          </div>
          <div>
            <img src='img/Frame(1).png'/>
          </div>
         </div>
       </div>
      </div>

    </>
  )
}

export default Order






