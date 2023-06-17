import React from 'react'
import { toddlelogo,search, plusicon } from '../misc/ImagesAndIcons'
const NavBar2 = () => {
  return (
    <div className='flex justify-between items-center py-[12px] px-[48px] absolute w-full h-[72px] left-0 top-0 border-b-[1px] border-[#EBEBEB] bg-white'>
        <img src={toddlelogo} alt="toddle logo"/>
        <div className="flex justify-between items-center h-[40px]  w-[506px]">
        <div className="flex justify-start items-center h-[40px] border-[1px] border-[#EBEBEB] rounded-[6px] gap-[24px] py-[13px] px-[16px]">
            <img src={search} alt="search icon" className=''/>
            <input type="text"  placeholder="Search" className="font-avenir font-[500] leading-[24px] flex items-center text-[16px] outline-none text-[#B0B0B0]"/>
            </div>    
        <button className="flex justify-center items-center py-[13px] px-[16px] bg-[#D33852] rounded-[8px] gap-[8px] h-[40px]">
            <img src={plusicon} alt="add icon" className="w-[20px] h-[20px]"/>
            <h1 className="text-white font-avenir font-[600] leading-[24px] ">Create new board</h1>
        </button>

        </div>
    </div>
  )
}

export default NavBar2