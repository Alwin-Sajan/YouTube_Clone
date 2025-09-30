import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WatchVideo from './pages/WatchVideo';
import SearchResults from './pages/SearchResults';
import Navbar from './components/Navbar';
import { useState } from 'react';



const App = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);

  return (
    <div className='dark:bg-[#0f0f0f] dark:text-[#f1f1f1]'>

      <BrowserRouter>
        <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />
        <Routes>
          <Route path="/" element={<HomePage showMenu={showMenu}/>} />
          <Route path="/watch/:id/:title" element={<WatchVideo />} />
          <Route path="/search/:query" element={<SearchResults showMenu={showMenu}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;