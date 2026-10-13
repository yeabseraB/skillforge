import React from 'react'
import Dashboard from './pages/Dashboard'
import Skills from './pages/Skills'
import Assessment from './pages/Assessment'
import Projects from './pages/Projects'
import Profile from './pages/Profile' 
import SkillDetails from './pages/SkillDetails'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route,} from 'react-router-dom'

const App = () => {
  return (
    
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/assessment" element={<Assessment/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/skillDetails" element={<SkillDetails/>}/> 
        </Routes>
      </BrowserRouter>
  
  )
}

export default App
