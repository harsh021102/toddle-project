import React, { useEffect } from 'react'
import BoardCard from '../components/BoardCard'
import CreateBoardCard from '../components/CreateBoardCard'

const Dashboard = ({toggleCreateBoardCard,showcard}) => {

  return (
    <>
    <CreateBoardCard toggleCreateBoardCard={toggleCreateBoardCard} showcard={showcard}/>
    <div className='w-full h-full mt-[71px]'>
        <h1 className='mt-[41px] ml-[71px] font font-avenir font-[900] leading-[44px] text-[32px] flex items-center'>My Boards</h1>
        <section className="px-[71px] mt-[32px] h-[546px]  overflow-auto auto-rows-max grid grid-cols-1 md:grid-cols-3 md:grid-3 gap-y-[10px]">
          <BoardCard/>  
          <BoardCard/>  
          <BoardCard/>  
          <BoardCard/>  
          <BoardCard/>  
          <BoardCard/>  
          <BoardCard/>  
        </section>
    </div>   
    </>
  )
}

export default Dashboard