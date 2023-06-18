import React, { useEffect, useState } from 'react'
import CreateButton from './CreateButton'
import { notebook } from '../misc/ImagesAndIcons';
import CreatePostCard from './CreatePostCard';
import PostCard from './PostCard';

const YourPosts = ({toggleCreateBoardCard,showcard,title}) => {
  
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState(0);
  const [postLength,setPostLength] = useState(posts.length);
  
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem(title)) || [];
    setPosts(storedPosts);
  }, [postLength]);

  return (
    <>
    <CreatePostCard toggleCreateBoardCard={toggleCreateBoardCard} showcard={showcard} title={title} likes={likes} setLikes={setLikes} setPostLength={setPostLength}/>
    <div className='w-full h-full mt-[71px] bg-[#EBFCFF]'>
        <div className={posts.length>0?`mt-[19px] mx-[48px] flex justify-end items-center`:`mt-[19px] mx-[48px] flex justify-between items-center`}>
          {
            posts.length===0&&
            <h1 className='font font-avenir-bold font-[900] leading-[44px] text-[32px] flex items-center'>Your Posts</h1>
          }
          <CreateButton toggleCreateBoardCard={toggleCreateBoardCard} showcard={showcard} type={'post'}/>
        </div>
        {
          posts.length>0 && 
          <section className="mt-[8px] px-[71px] h-[595px] overflow-auto auto-rows-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[20px]">
            {
              posts.map((post)=> {return <PostCard key={post.id} subject={post.subject} mind={post.mind} image={post.image} likes={likes} setLikes={setLikes} title={title}/>})
            }
          </section>
        }
        {
          posts.length===0 && 
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
    </>
  )
}

export default YourPosts