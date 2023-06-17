import React from 'react'
import BoardCard from './BoardCard'
import CreateButton from './CreateButton'

const YourPosts = () => {
  return (
    <div className='w-full h-full mt-[71px]'>
        <div className='mt-[19px] mx-[48px] flex justify-between items-center'>
          <h1 className='font font-avenir-bold font-[900] leading-[44px] text-[32px] flex items-center'>Your Posts</h1>
          <CreateButton/>
        </div>
        <section className="px-[71px] mt-[32px] h-[546px]  overflow-auto auto-rows-max grid grid-cols-1 md:grid-cols-3 md:grid-3 gap-y-[10px]">
          
        </section>
    </div>
  )
}

export default YourPosts