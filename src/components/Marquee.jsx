import { motion } from 'framer-motion';
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20 pb-8 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-10 overflow-hidden mt-10'>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear" ,repeat: Infinity, duration: 10}} className='text-[20vw] leading-none font-["Founders Grotesk X-Cond"] uppercase font-bold -mt-[3vw]'>we are ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear" ,repeat: Infinity, duration: 10}} className='text-[20vw] leading-none font-["Founders Grotesk X-Cond"] uppercase font-bold -mt-[3vw]'>we are ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear" ,repeat: Infinity, duration: 10}} className='text-[20vw] leading-none font-["Founders Grotesk X-Cond"] uppercase font-bold -mt-[3vw]'>we are ochi</motion.h1>
      </div >
    </div>
  )
};

export default Marquee;
