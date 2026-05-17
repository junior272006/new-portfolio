import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
  </StrictMode>,
)
