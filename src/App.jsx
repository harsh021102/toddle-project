import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import YourPosts from "./components/YourPosts";
import BookmarkPage from "./components/BookmarkPage";

function App() {
  const [showcard,setShowcard] = useState(false)
  const [title,setTitle] = useState("");

  const toggleCreateBoardCard=()=> {
    setShowcard(!showcard);
  }
  const changeTitle = (value) => {
    setTitle(value);
  }
  return (
    <div className="h-screen w-screen flex flex-col gap-[1px] overflow-hidden">
      <NavBar toggleCreateBoardCard={toggleCreateBoardCard} showcard={showcard} title={title}/>
      <Routes>
        <Route path="/" element={<Dashboard  toggleCreateBoardCard={toggleCreateBoardCard} showcard={showcard} changeTitle={changeTitle}/>}/>
        <Route path="/posts" element={<YourPosts toggleCreateBoardCard={toggleCreateBoardCard} showcard={showcard} title={title}/>}/>
        <Route path="/bookmark" element={<BookmarkPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
