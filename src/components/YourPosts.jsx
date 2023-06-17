import React, { useEffect } from 'react'
import BoardCard from './BoardCard'
import CreateButton from './CreateButton'
import { useLocation } from 'react-router-dom';
import { notebook } from '../misc/ImagesAndIcons';

const YourPosts = () => {
  
  const array = [8]
  
  return (
    <div className='w-full h-full mt-[71px] bg-[#EBFCFF]'>
        <div className='mt-[19px] mx-[48px] flex justify-between items-center'>
          <h1 className='font font-avenir-bold font-[900] leading-[44px] text-[32px] flex items-center'>Your Posts</h1>
          <CreateButton type={'post'}/>
        </div>
        {
          array.length>0 && 
          <section className="px-[71px] mt-[32px] h-[546px] border-2 border-black overflow-auto auto-rows-max grid grid-cols-1 md:grid-cols-3 md:grid-3 gap-y-[10px]">
            <BoardCard/>
          </section>
        }
        {
          array.length===0 && 
          <section className="flex justify-center items-center h-[546px] overflow-auto auto-rows-max">
            <div className='w-[500px] h-[546px] flex items-center justify-center'>
              <div className='w-[359px]  flex flex-col items-center justify-center'>
                <img src={notebook} alt="notebook icons" className="w-[203.09px] h-[180.81px]" />
                <h1 className='w-[132px] h-[22px] font-avenir-bold font-[700] text-[16px] leading-[22px] mt-[27.53px]'>Nothing here yet</h1>
                <h2 className='w-[359px] h-[19px] font-avenir font-[400] text-[14px] leading-[19px] mt-[8px]'>Create your first post by clicking on the '+' button above</h2>
              </div>
            </div>
          </section>
        }
    </div>
  )
}

export default YourPosts