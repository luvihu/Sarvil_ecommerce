import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Navbar from './components/layout/Navbar'

function App() {
 
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </main>
  )
}

export default App
