import './App.css'
import Home from './components/home'
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'
import Courses from './components/Courses'
import courseList from './index.js';
import Pricing from './components/Pricing.jsx'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
  <div>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<> <Home/> <About/> <Courses courses={courseList}/> <Pricing/> </> }/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/about" element={<About/>}/>
     <Route path="/courses" element={<Courses courses={courseList} />} />
     <Route path="/pricing" element={<Pricing/>} />
     </Routes>
      <Footer/>
    </BrowserRouter>
  </div>
  )
}

export default App
