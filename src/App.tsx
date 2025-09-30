import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WatchVideo from './pages/WatchVideo';
import SearchResults from './pages/SearchResults';



const App = () => {


  return (
    <div className='dark:bg-[#0f0f0f] dark:text-[#f1f1f1]'>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch/:id/:title" element={<WatchVideo />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;