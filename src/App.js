import { Route, Routes } from "react-router-dom";

import './App.css';
import ContactBoard from "./components/ContactBoard/ContactBoard";
import Navbar from "./components/Navbar/Navbar";
import PersonBoard from "./components/PersonBoard/PersonBoard";
import Homepage from "./components/Homepage";

function App() {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/person" element={<PersonBoard/>} />
        <Route path="/contact" element={<ContactBoard/>} />
      </Routes>
    </main>
  );
}

export default App;
