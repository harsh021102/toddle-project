import React, { useState } from 'react'

const CreatePostButton = ({subject,mind,image,setSubject,setMind,setImage,title,setPostLength,likes}) => {
  const [cards, setCards] = useState([]);

  const createPost = () => {
    const newCard = {
      id: Date.now(),
      title: title,
      subject: subject,
      mind: mind,
      image:image,
      likes: likes
    };
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    setPostLength(updatedCards.length)
    // let post = title + 'post'
    localStorage.setItem(title, JSON.stringify(updatedCards));
    setSubject('')
    setMind('')
    setImage(null)
  };
  return (
    <button className="flex justify-center items-center py-[13px] px-[16px] bg-[#D33852] rounded-[8px] gap-[8px] h-[40px] hover:bg-[#AF273E]" onClick={createPost}>
      <h1 className="text-white font-avenir font-[600] leading-[24px] ">Publish</h1>
    </button>
  )
}

export default CreatePostButton