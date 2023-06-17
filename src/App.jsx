import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import YourPosts from "./components/YourPosts";

function App() {
  const [showcard,setShowcard] = useState(false)
  const toggleCreateBoardCard=()=> {
    setShowcard(!showcard);
  }
  return (
    <div className="h-screen w-screen flex flex-col gap-[1px] ">
      <NavBar toggleCreateBoardCard={toggleCreateBoardCard} showcard={showcard}/>
      <Routes>
        <Route path="/" element={<Dashboard  toggleCreateBoardCard={toggleCreateBoardCard} showcard={showcard}/>}/>
        <Route path="/posts" element={<YourPosts toggleCreateBoardCard={toggleCreateBoardCard} showcard={showcard}/>}/>
      </Routes>
    </div>
  );
}

export default App;
