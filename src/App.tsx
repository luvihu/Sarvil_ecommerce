import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Navbar from './components/layout/Navbar'
import Whatsapp from './components/ui/Whatsapp'
function App() {
 
  return (
    <>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Whatsapp />
      </main>
    </>
  )
}

export default App
