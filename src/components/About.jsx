import React from 'react'

function About() {
  return (
    <div className='w-full py-20 px-14 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl '>
      <h1 className='font-["Neue_Montreal"] text-black text-[3.5vw] tracking-tight leading-[3.5vw] mr-72'>Ochi is a startegic partner for fast-growing tech businesses that need to raise funds, 
        sell products, explain complex ideas, and hire great people.</h1>
        <div className=' w-full flex gap-5 border-t-[1px] mt-20 border-[#849059] '>
            <div className='w-1/2 mt-5 font-["Neue_Montreal"]'>
                <h1 className='text-7xl text-black'>Our approach:</h1>
                <button className='flex uppercase gap-10 items-center px-9 py-5 bg-zinc-900 mt-7 rounded-full text-lg'>read more
                    <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[75vh] mt-5'>
                <img className='rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
            </div>
        </div>
    </div>
  )
};

export default About
