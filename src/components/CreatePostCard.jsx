import React, { useState } from 'react'
import { close } from '../misc/ImagesAndIcons'
import CreateBoardCardButton from './CreateBoardCardButton'
import UploadImage from './UploadImage'
import CreatePostButton from './CreatePostButton'

const CreatePostCard = ({toggleCreateBoardCard,showcard,title,setPostLength,likes}) => {
    const handleClick = () => {
        toggleCreateBoardCard();
    };
    const [subject, setSubject] = useState('');
    const [mind, setMind] = useState('');
    const [image, setImage] = useState(null);

    const handleSubjectChange = event => {
        setSubject(event.target.value);
    };

    const handleMindChange = event => {
        setMind(event.target.value);
    };

    const handleImageChange = event => {
        setImage(event.target.files[0]);
    };
    return (
        <div className={showcard?`flex h-full w-full absolute bg-[#000000cc] items-center justify-center`:'hidden'}>
        <div className="absolute w-[458px] h-[530px] bg-white border-[1px] border-[#EBEBEB] shadow-md rounded-[8px]">
            <div className="w-[407px] h-[220.05px] mx-[26px] mt-[21px]">
                <div className="flex justify-between items-center ">
                    <h1 className="w-[262px] h-[28px] font-avenir-bold font-[700] text-[20px] leading-[28px] text-black">Create a post</h1>
                    <button className='w-[13.75px] h-[13.75px]' onClick={handleClick}>
                        <img src={close} alt="close icon" />
                    </button>
                </div>
                <h1 className="h-[20px] font-avenir font-[500] text-[14px] leading-[20px] text-[#2B2B2B]">Write something for your post</h1> 
                <h1 className=" mt-[35px] w-[56px] h-[22px] font-avenir font-[600] text-[16px] leading-[22px] text-[#393939]">Subject</h1>
                <div className='flex items-center w-[407px] h-[48px] mt-[8px] border-[1px] border-[#DBDBDB] rounded-[4px] px-[10.11px]'>
                    <input type="text" className='font-avenir text-[16px] leading-[22px] text-[#222222]  outline-none w-10/12' placeholder="Type here" value={subject} onChange={handleSubjectChange}/>
                </div>
                <UploadImage image={image} setImage={setImage} />
                <div className='w-[410px] h-[1px] bg-[#FFFFFF] border-[1px] border-[#EBEBEB] rounded-[4px] box-border mt-[46px] mb-[31px]'></div>
                <h1 className='font-avenir-bold font-[600] text-[16px] leading-[24px] flex items-center w-[174px] h-[28px]
                text-[#222222]'>What's on your mind?</h1>
                <div className="flex items-center p-[16px] gap-[16px] w-[407px] h-[76px] border-[1px] border-[#EBEBEB] rounded-[6px]">
                    <input type="text" placeholder='Type here' className='flex w-[375px] h-[44px] items-start font-avenir font-[500] text-[16px] leading-[24px] text-[#B0B0B0] outline-none overflow-x-auto' value={mind} onChange={handleMindChange}/>
            </div>
            <div className='w-[407px] h-[80px] flex items-end justify-end'>
                <CreatePostButton likes={likes} subject={subject} mind={mind} image={image} setSubject={setSubject} setMind={setMind} setImage={setImage} title={title} setPostLength={setPostLength}/>
            </div>
            </div>
            </div> 
        </div>
  )
}

export default CreatePostCard