import React from 'react'
import { bin, pencil } from '../misc/ImagesAndIcons'

const DropDownBoard = ({show}) => {

    return (
        <div className={show ? `flex flex-col justify-center items-start py-[8px] px-0 absolute w-[150px] h-[116px] bg-white border-[1px] border-[#EBEBEB] shadow-md rounded-[8px] ml-[140px] mt-[150px]`:`hidden`}>
            <button className="flex items-start p-0 w-[149px] h-[50px]">
                <div className="flex item-center py-[13px] px-[16px] w-[149px] h-[50px]
                bg-white gap-[8px]">
                    <img src={pencil} alt="pencil icon" className="w-[20px] h-[20px]"/>
                    <h1 className="font-avenir
                    font-[500] text-[16px] leading-[24px] flex items-center text-[#717171]">Edit</h1>
                </div>
            </button>
            <button className="flex items-start p-0 w-[149px] h-[50px]">
                <div className="flex item-center py-[13px] px-[16px] w-[149px] h-[50px]
                bg-white gap-[8px]">
                    <img src={bin} alt="pencil icon" className="w-[20px] h-[20px]"/>
                    <h1 className="font-avenir
                    font-[500] text-[16px] leading-[24px] flex items-center text-[#D33852]">Delete</h1>
                </div>

            </button>
        </div>
    )
}

export default DropDownBoard