import React, { useEffect, useState } from 'react'
import BoardCard from '../components/BoardCard'
import CreateBoardCard from '../components/CreateBoardCard'
import { notebook } from '../misc/ImagesAndIcons'

const Dashboard = ({toggleCreateBoardCard,showcard,changeTitle}) => {

  const [boards, setBoards] = useState([]);
  const [boardLength, setBoardLength] = useState(boards.length);
  useEffect(() => {
    const storedBoards = JSON.parse(localStorage.getItem('boards')) || [];
    setBoards(storedBoards);
  }, [boardLength]);

  return (
    <>
    <CreateBoardCard toggleCreateBoardCard={toggleCreateBoardCard} showcard={showcard} setBoardLength={setBoardLength}/>
    {
      boards.length>0&&
      <div className='w-full h-full mt-[71px]'>
        <h1 className='mt-[41px] ml-[71px] font font-avenir-bold font-[900] leading-[44px] text-[32px] flex items-center'>My Boards</h1>
        <section className="px-[71px] mt-[32px] h-[546px] overflow-auto auto-rows-max grid grid-cols-1 md:grid-cols-2 lg:grid-xl-3 gap-y-[10px]">
          {boards.map((item)=>{return <BoardCard key={item.id}id={item.id} showcard={showcard} color={item.color} title={item.title} changeTitle={changeTitle} setBoardLength={setBoardLength}/>})}      
        </section>
      </div>   
    }
    {
      boards.length===0&&
      <section className="flex justify-center items-center h-[546px] mt-[71px] auto-rows-max">
            <div className='w-[500px] h-[546px] flex items-center justify-center'>
              <div className='w-[359px]  flex flex-col items-center justify-center'>
                <img src={notebook} alt="notebook icons" className="w-[203.09px] h-[180.81px]" />
                <h1 className='w-[132px] h-[22px] font-avenir-bold font-[700] text-[16px] leading-[22px] mt-[27.53px]'>Nothing here yet</h1>
                <h2 className='w-[380px] h-[19px] font-avenir font-[400] text-[14px] leading-[19px] mt-[8px]'>Create your first board by clicking on the '+' button above</h2>
              </div>
            </div>
          </section>
    }
    </>
  )
}

export default Dashboard