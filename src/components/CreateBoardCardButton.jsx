import React, { useEffect, useState } from 'react'

const CreateBoardCardButton = ({newBoardTitle,newBoardColor,setNewBoardColor,setNewBoardTitle,setBoardLength}) => {
  
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const storedBoards = JSON.parse(localStorage.getItem('boards')) || [];
    setBoards(storedBoards);
  }, []);

  const createBoard = () => {
    const newBoard = {
      id: Date.now(),
      color: newBoardColor,
      title: newBoardTitle,
    };
    const updatedBoards = [...boards, newBoard];
    setBoards(updatedBoards);
    setBoardLength(updatedBoards.length);
    localStorage.setItem('boards', JSON.stringify(updatedBoards));
    setNewBoardColor('#A7F0F9');
    setNewBoardTitle('')
  };

  return (
    <button className="flex justify-center items-center mb-[21px] py-[13px] px-[16px] bg-[#D33852] rounded-[8px] gap-[8px] h-[40px] hover:bg-[#AF273E]" onClick={createBoard}>
      <h1 className="text-white font-avenir font-[600] leading-[24px] ">Create new board</h1>
    </button>
  )
}

export default CreateBoardCardButton