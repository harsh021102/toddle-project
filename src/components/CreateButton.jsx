import React from 'react'
import { plusicon } from '../misc/ImagesAndIcons'
const CreateButton = () => {
  return (
    <button className='flex justify-center items-center py-[13px] px-[16px] gap-[8px] absolute  h-[40px] left-[1218px] top-[16px] bg-[#D33852] rounded-[8px]'>
      <div className="w-[20px] h-[20px]">
        <img src={plusicon} alt="plus" className='absolute '/>
      </div>
      <h1 className="w-[133px] h-[24px] font-avenir font-[600] text-[16px] leading-[24px] text-white">
        Create new board
      </h1>
    </button>
  )
}

export default CreateButton