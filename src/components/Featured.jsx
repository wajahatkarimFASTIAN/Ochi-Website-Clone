import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-14 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-normal'>Featured projects</h1>
      </div>
      <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>
            <div className='cardcontainer relative w-1/2 h-[75vh]'>
                <h1 className='absolute font-["Neue_Montreal"] text-[#CDEA68] left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl uppercase'>
                    {"fyde".split("").map((item, index) => (
                        <span>{item}</span>
                    ))}
                </h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                </div>
            </div>
            <div className='cardcontainer relative w-1/2 h-[75vh] bg-slate-300'>
                <h1 className='absolute font-["Neue_Montreal"] text-[#CDEA68] right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl uppercase'>
                    {"vise".split("").map((item, index) => (
                        <span>{item}</span>
                    ))}
                </h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img className='w-full h-full bg-cover object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Featured
