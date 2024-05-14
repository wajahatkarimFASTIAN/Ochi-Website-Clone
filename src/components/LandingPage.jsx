import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";


function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-44 px-14'>
            {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                return (
                <div className='masker'>
                    <div className='w-fit flex'>
                        {index === 1 && (<div>
                            <img className='object-cover w-[9vw] h-[5vw] relative right-3 bottom-5 rounded-md ml-5' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSuJvRKvJqKKbApfke97W5l7PFKRpVNj7fqGt4bjg3BgyEKCjCS" alt="" />
                        </div>)}
                        <h1 className='font-["Founders_Grotesk"] uppercase leading-[6vw] tracking-tighter font-semibold text-[150px]'>
                            {item}
                        </h1>
                    </div>
                </div>
                );
            })}
        </div>
        <div>
            <hr className='mt-40' />
        </div>
        <div className='simpletexts font-["Neue_Montreal"] flex justify-between items-center text-xl mt-5 px-14'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                <p className={"font-light text-md tracking-tight leading-none"}>{item}</p>
            ))}
            <div className='startbutton flex items-center gap-1 cursor-pointer'>
                <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light uppercase'>
                    start the project
                </div>
                <div className='w-12 h-12 flex items-center justify-center border-[1px] border-zinc-500 rounded-full'>
                    <span className='rotate-[-45deg]'>
                        <FaArrowRightLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;
