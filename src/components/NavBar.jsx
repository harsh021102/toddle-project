import React from 'react'
import { toddle,toddlelogo,search } from '../misc/ImagesAndIcons'
import CreateButton from './CreateButton'
const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-[12px] px-[48px] absolute w-full h-[72px] left-0 top-0 bg-white border-[1px] border-[#EBEBEB]'>
        <div className="flex flex-start p-0 absolute w-[95.5px] h-[31.83px] left-[71px] top-[20px]">
            <div className="flex justify-center p-0 gap-[8px] w-[95.5px] h-[31.83px]">
                <div className="flex justify-center items-center p-0 gap-[47px] w-[95.5px] h-[31.83px]">
                    <div className="w-[95.5px] h-[31.83px]">
                        <img src={toddlelogo} alt="toddle" className="absolute left-[0.26%] right-[67.55%] top-[0.26%] bottom-[-0.26%]" />
                        <img src={toddle} alt={toddle} className="absolute left-[39.27%] right-[-0.24%] top-[22.55%] bottom-[30.34%]" />
                    </div>
                </div> 
            </div>
        </div>
        <div className="flex flex-col items-start p-0 gap-[6px] absolute w-[284px] h-[40px] left-[854px] top-[16px]">
            <div className="search_input box-border flex items-center py-[13px] px-[16px] gap-[24px] w-[284px] h-[40px] border-[1px] border-[#EBEBEB] rounded-[6px]">
                <div className="search_label flex flex-col items-start p-0 w-full h-[24px]">
                    <div className="flex items-center p-0 gap-[16px]">
                        <img src={search} alt="search" className='w-[20px] h-[20px]' />
                        <div className="flex items-start p-0 gap-[16px] w-[284px] h-[24px]">
                            <div className="flex flex-col items-startp-0 w-[244px] h-[24px]">

                                <input type="text" placeholder='Search' className='flex items-center w-[220px] h-[24px] font-avenir font-normal text-[16px] text-[#222222] leading-[24px] focus:outline-none
                                
                                
                                change in width' 
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CreateButton/>    
    </div>
  )
}

export default NavBar