import React, { useState } from 'react'
import { bookmark, dotsmall, heart, testimage } from '../misc/ImagesAndIcons'
import DropDownCard from './DropDownCard'

const PostCard = () => {
    const [displayMenu,setDisplayMenu] = useState(false)
    // console.log(displayMenu);
  return (
    <div className='flex items-start p-[16px] gap-[10px] w-[275px] h-[577px] bg-white rounded-[8px]'>
        <div className='w-[243px] h-[545px] '>
            <div className='flex w-full h-[56px] items-start gap-4'>
            <h1 className='font-avenir-bold font-[700] text-[20px] leading-[28px] flex items-center  w-[188px]'>Galapagos Islands, Ecuador</h1>
                <div className='flex'>
                    <button className='w-[32px] h-[32px] flex justify-center items-center'>
                        <img src={bookmark} alt="bookmark" />
                    </button>
                    <button className='w-[32px] h-[32px] flex justify-center items-center' onClick={()=>setDisplayMenu(!displayMenu)}>
                        <img src={dotsmall} alt="dropdown" />
                        <DropDownCard show={displayMenu}/>
                    </button>
                </div>
            </div>
            <h1 className='font-avenir font-[500] text-[12px] leading-[16px] text-[#B0B0B0] mb-[8px]'>25th July</h1>
            <img src={testimage} alt="image" className='w-[243px] h-[162px] bg-no-repeat bg-cover bg-center rounded-[8px]'/>
            <h1 className='h-240px font-avenir font-[500] text-[14px] leading-[20px] text-[#2B2B2B] mt-[16px]'>The Galápagos Islands is a volcanic archipelago in the Pacific Ocean. It's considered one of the world's foremost destinations for wildlife-viewing. A province of Ecuador, it lies about 1,000km off its coast. Its isolated terrain shelters a diversity of plant and animal species, many found nowhere else. Charles Darwin visited in 1835, and his observation of Galápagos' species later inspired his theory of evolution. </h1>
            <div className="box-border w-[241px] h-[1px] border-[1px] rounded-[4px] mt-[16px] border-[#EBEBEB]"></div>
            <div className="mt-[10.5px] flex flex-start gap-2">
                <button>
                    <img src={heart} alt="heart" className='text-[#B0B0B0]'/>
                </button>
                <h1 className="w-[10px] h-[24px] font-avenir font-[500] text-[16px] leading-[24px] text-[#B0B0B0]">0</h1>
            </div>

        </div>
    </div>
  )
}

export default PostCard