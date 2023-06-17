import React, { useEffect } from 'react'
import { plusicon } from '../misc/ImagesAndIcons'
const CreateButton = ({toggleCreateBoardCard,showcard}) => {

  const handleClick = () => {
    toggleCreateBoardCard();
  };
  return (
    <button className="flex justify-center items-center py-[13px] px-[16px] bg-[#D33852] rounded-[8px] gap-[8px] h-[40px] hover:bg-[#AF273E]" onClick={handleClick}>
      <img src={plusicon} alt="add icon" className="w-[20px] h-[20px]"/>
      <h1 className="text-white font-avenir font-[600] leading-[24px] ">Create new board</h1>
    </button>
  )
}

export default CreateButton