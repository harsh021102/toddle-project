import React, { useState } from 'react'
import { close } from '../misc/ImagesAndIcons'
import CreateBoardCardButton from './CreateBoardCardButton'

const CreateBoardCard = ({toggleCreateBoardCard,showcard,setBoardLength}) => {

    const handleClick = () =>{
        toggleCreateBoardCard()
    }
    
    const [newBoardColor, setNewBoardColor] = useState('#A7F0F9');
    const [newBoardTitle, setNewBoardTitle] = useState('');

    return (
        <div className={showcard? `flex h-full w-full absolute bg-[#000000cc] items-center justify-center overflow-hidden`:`hidden`}>
        <div className="absolute w-[458px] h-[364px] bg-white border-[1px] border-[#EBEBEB] shadow-md rounded-[8px]">
            <div className="w-[407px] h-[220.05px] mx-[26px] mt-[21px]">
                <div className="flex justify-between items-center">
                    <h1 className="w-[262px] h-[28px] font-avenir-bold font-[700] text-[20px] leading-[28px] text-black">Add a name for your board</h1>
                    <button className='w-[13.75px] h-[13.75px]' onClick={handleClick}>
                        <img src={close} alt="close icon" />
                    </button>
                </div>
                <div className='flex items-center w-[407px] h-[48px] mt-[16px] border-[1px] border-[#DBDBDB] rounded-[4px] px-[10.11px]'>
                    <input type="text" value={newBoardTitle} className='font-avenir text-[16px] leading-[22px] text-[#222222]  outline-none' placeholder="Enter Text" onChange={(e)=>setNewBoardTitle(e.target.value)}/>
                </div>
                <h1 className='mt-[40px] font-avenir-bold font-[700] text-[20px] leading-[28px] flex items-center text-black w-[174px] h-[28px]'>Select post colour</h1>
                <h2 className='h-[20px] font-avenir font-[500] text-[14px] leading-[20px] text-[#2B2B2B]'>Here are some templates to help you get started</h2>
                <div className='mt-[16px] w-[128.26px] h-[24.05px] flex items-start p-0 gap-[10.69px]'>
                    <button className='box-border w-[26px] h-[26px]
                    bg-[#A7F0F9] rounded-full' onClick={()=>setNewBoardColor("#A7F0F9")}></button>
                    <button className='box-border w-[26px] h-[26px]
                    bg-[#C5C5FC] rounded-full' onClick={()=>setNewBoardColor("#C5C5FC")}></button>
                    <button className='box-border w-[26px] h-[26px]
                    bg-[#FFAEC0] rounded-full' onClick={()=>setNewBoardColor("#FFAEC0")}></button>
                    <button className='box-border w-[26px] h-[26px]
                    bg-[#FFCC66] rounded-full' onClick={()=>setNewBoardColor("#FFCC66")}></button>
                </div>
            </div>
            <div className='w-[407px] h-[122px] mx-[26px] flex items-end justify-end'>
                <CreateBoardCardButton newBoardColor={newBoardColor} newBoardTitle={newBoardTitle} setNewBoardColor={setNewBoardColor} setNewBoardTitle={setNewBoardTitle} setBoardLength={setBoardLength}/>
            </div>
            </div> 
        </div>
  )
}

export default CreateBoardCard