import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Sad from './pages/Sad';
import Happy from './pages/Happy';
import Surprise from './pages/Surprise';
import Contact from './pages/Contact';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './pages/Footer';
import Fear from './pages/Fear';
import Angry from './pages/Angry';
import Neutral from './pages/Neutral';

function App() {
  return (
   <>
   {<Navbar/>}
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>}/>
          <Route path="/Happy" element={<Happy />} />
          <Route path="/Sad" element={<Sad />} />
          <Route path="/Fear" element={<Fear/>}/>
          <Route path="/Neutral" element={<Neutral/>}/>
          <Route path="/Angry" element={<Angry/>}/>
          <Route path="/Surprise" element={<Surprise />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />



      </Routes>
      {<Footer/>}
    </BrowserRouter>

   </>
  );
}

export default App;
