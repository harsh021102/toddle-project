import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div className="h-screen w-screen flex flex-col gap-[1px] ">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
