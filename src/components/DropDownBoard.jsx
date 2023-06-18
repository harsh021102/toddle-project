import React, { useEffect, useState } from 'react'
import { bin, pencil } from '../misc/ImagesAndIcons'
import { useNavigate } from 'react-router-dom'

const DropDownBoard = ({id,show,showcard,title,changeTitle,setBoardLength}) => {
    const navigate = useNavigate();
    const [boards, setBoards] = useState([]);
    const handleClick = () =>{
        changeTitle(title);
        navigate('/posts')
    }
    useEffect(() => {
        const storedBoards = JSON.parse(localStorage.getItem('boards')) || [];
        setBoards(storedBoards);
    }, [boards.length]);

    const deleteBoard = () => {
        console.log(id);
        const updatedBoards = boards.filter(board => board.id !== id);
        console.log(updatedBoards);
        setBoards(updatedBoards);
        setBoardLength(updatedBoards.length)
        localStorage.setItem('boards', JSON.stringify(updatedBoards));
      };
    return (
        <div className={show&&!showcard ? `flex flex-col justify-center items-start py-[8px] px-0 absolute w-[150px] h-[116px] bg-white border-[1px] border-[#EBEBEB] shadow-md rounded-[8px] ml-[15px]`:`hidden`}>
            <button className="flex items-start p-0 w-[149px] h-[50px]" onClick={handleClick}>
                <div className="flex item-center py-[13px] px-[16px] w-[149px] h-[50px]
                bg-white gap-[8px]">
                    <img src={pencil} alt="pencil icon" className="w-[20px] h-[20px]"/>
                    <h1 className="font-avenir
                    font-[500] text-[16px] leading-[24px] flex items-center text-[#717171]">Edit</h1>
                </div>
            </button>
            <button className="flex items-start p-0 w-[149px] h-[50px]" onClick={deleteBoard}>
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