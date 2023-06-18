import React, { useEffect, useState } from 'react'
import { bookmark, bookmarkyellow, dotsmall, heart,heartfilled, testimage } from '../misc/ImagesAndIcons'
import DropDownCard from './DropDownCard'
import { useLocation } from 'react-router-dom';

const PostCard = ({title,subject,mind,image,likes,setLikes}) => {
    const location = useLocation();
    const path = location.pathname;
    
    const [bookmarks, setBookmarks] = useState([]);
    const [displayMenu,setDisplayMenu] = useState(false)

    const handleClick = () =>{
        setLikes(likes+1)
    }

    const createBookmark = () => {
        const existingPosts = JSON.parse(localStorage.getItem('bookmarks')) || [];
        const isPostAlreadyExists = existingPosts.some(
          bookmark => bookmark.title===title&&bookmark.subject===subject
        );
        if(!isPostAlreadyExists)
        {
            const newBookmark = {
                id: Date.now(),
                title: title,
                subject: subject,
                mind: mind,
                image:image,
                likes: likes
            };
            const updatedBookmarks = [...bookmarks, newBookmark];
            setBookmarks(updatedBookmarks);
            localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
        }
    };

    return (
        <div className='flex items-start p-[16px] gap-[10px] w-[275px]  bg-white rounded-[8px]'>
            <div className='w-[243px] '>
                <div className='flex w-full h-[56px] items-start gap-4'>
                <h1 className='font-avenir-bold font-[700] text-[20px] leading-[28px] flex items-center  w-[188px]'>{`${subject}`}</h1>
                    <div className='flex'>
                        {
                            path==='/posts'&&
                            <button className='w-[32px] h-[32px] flex justify-center items-center'      onClick={createBookmark}>
                                <img src={bookmark} alt="bookmark" />
                            </button>
                        }
                        {
                            path==='/bookmark'&&
                            <button className='w-[32px] h-[32px] flex justify-center items-center'>
                                <img src={bookmarkyellow} alt="bookmark" />
                            </button>
                        }
                        <button className='w-[32px] h-[32px] flex justify-center items-center' onClick={()=>setDisplayMenu(!displayMenu)}>
                            <img src={dotsmall} alt="dropdown" />
                            <DropDownCard show={displayMenu}/>
                        </button>
                    </div>
                </div>
                <h1 className='font-avenir font-[500] text-[12px] leading-[16px] text-[#B0B0B0] mb-[8px]'>25th July</h1>
                <img src={testimage} alt="image" className='w-[243px] h-[162px] bg-no-repeat bg-cover bg-center rounded-[8px]'/>
                <h1 className='h-240px font-avenir font-[500] text-[14px] leading-[20px] text-[#2B2B2B] mt-[16px] overflow-auto'>{`${mind}`}</h1>
                <div className="box-border w-[241px] h-[1px] border-[1px] rounded-[4px] mt-[16px] border-[#EBEBEB]"></div>
                {
                    path==='/posts'&&
                    <div className="mt-[10.5px] flex flex-start gap-2">
                        <button onClick={handleClick}>
                            <img src={likes>0?heartfilled:heart} alt="heart"/>
                        </button>
                        <h1 className="w-[10px] h-[24px] font-avenir font-[500] text-[16px] leading-[24px] text-[#B0B0B0]">{`${likes}`}</h1>
                    </div>
                }
                {
                    path==='/bookmark'&&
                    <div className="mt-[10.5px] flex flex-start gap-2">
                        <button>
                            <img src={likes>0?heartfilled:heart} alt="heart"/>
                        </button>
                        <h1 className="w-[10px] h-[24px] font-avenir font-[500] text-[16px] leading-[24px] text-[#B0B0B0]">{`${likes}`}</h1>
                    </div>
                }
            </div>
        </div>
    )
}

export default PostCard