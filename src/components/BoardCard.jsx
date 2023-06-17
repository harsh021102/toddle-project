import React, { useState } from 'react'
import { dots } from '../misc/ImagesAndIcons'
import DropDown from './DropDownBoard'
import DropDownBoard from './DropDownBoard'

const BoardCard = () => {
    const [displayMenu,setDisplayMenu] = useState(false)
    return (
        <div className="flex items-center p-0 gap-[24px] w-[364px] h-[80px] rounded-[8px] border-[1px] border-[#EBEBEB]">
            <div className="flex bg-[#CAF8FF] rounded-tl-[8px] rounded-bl-[8px] h-[80px] w-[80px]">
            </div>
            <h1 className="font-avenir font-[500] text-[14px] leading-[20px] flex items-center text-[#222222]">Earth Changes and Journeys</h1>
            <button className="w-[32px] h-[32px]" onClick={()=> setDisplayMenu(!displayMenu)}>
                <img src={dots} alt="icon" />
                <DropDownBoard show={displayMenu}/>
            </button>
        </div>
    )
}

export default BoardCard