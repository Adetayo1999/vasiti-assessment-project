import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoryModal from "./components/StoryModal/StoryModal";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='App'>
      <StoryModal open={open} handleClose={handleClose} />
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home handleOpen={handleOpen} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
