import React, { useEffect, useState } from 'react'
import { toddlelogo,search,bookmark,onlylogo,back} from '../misc/ImagesAndIcons'
import CreateButton from './CreateButton'
import { useLocation } from 'react-router-dom';
const NavBar = ({toggleCreateBoardCard,showcard}) => {
  const [showsearch,setShowSearch] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  if(path==="/posts")
  {
    return (
      <div className='flex justify-between items-center py-[12px] px-[48px] absolute w-full h-[72px] left-0 top-0 border-b-[1px] border-[#EBEBEB] bg-white'>
          <div className="flex justify-between items-center min-w-[270px] h-[20px]">
            <button>
              <img src={back} alt="back logo"/>
            </button>
            <img src={onlylogo} alt="toddle logo"/>
            <h1 className='font-avenir-bold font-[700] text-[18px] leading-[24px text-[#222222]]'>Places around the world</h1>
          </div>
          <div className={showsearch?`flex justify-between items-center h-[40px]  w-[506px]`:`flex justify-end items-center h-[40px]  w-[506px]`}>
          <div className={showsearch?`flex justify-start items-center h-[40px] border-[1px] border-[#EBEBEB] rounded-[6px] gap-[24px] py-[13px] px-[16px]`:'hidden'}>
            <img src={search} alt="search icon" className='text-[#B0B0B0]'/>
            <input type="text"  placeholder="Search" className="font-avenir font-[500] leading-[24px] flex items-center text-[16px] outline-none text-[#B0B0B0]"/>
            </div>    
          <div className='flex justify-center items-center
          W-[89px] h-[20px] gap-[24px]'>
            <button className='w-[20px] h-[20px]' onClick={()=>{setShowSearch(!showsearch)}}>
              <img src={search} alt="search icon" className='text-[#B0B0B0]'/>
            </button>
            <div className="w-[1px] h-[18px] bg-[#B0B0B0]"></div>
            <button className='w-[20px] h-[20px]'>
              <img src={bookmark} alt="bookmark icon" className='text-[#B0B0B0]'/>
            </button>
          </div>
          </div>
      </div>
    )
  }
  else
  {
    return (
      <div className='flex justify-between items-center py-[12px] px-[48px] absolute w-full h-[72px] left-0 top-0 border-b-[1px] border-[#EBEBEB] bg-white'>
          <img src={toddlelogo} alt="toddle logo"/>
          <div className="flex justify-between items-center h-[40px]  w-[506px]">
          <div className="flex justify-start items-center h-[40px] border-[1px] border-[#EBEBEB] rounded-[6px] gap-[24px] py-[13px] px-[16px]">
              <img src={search} alt="search icon" className=''/>
              <input type="text"  placeholder="Search" className="font-avenir font-[500] leading-[24px] flex items-center text-[16px] outline-none text-[#B0B0B0]"/>
              </div>    
          <CreateButton toggleCreateBoardCard={toggleCreateBoardCard} showcard={showcard} type={'board'}/>
          </div>
      </div>
    )
  }

}

export default NavBar