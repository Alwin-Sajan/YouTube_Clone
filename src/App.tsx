import React from 'react';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import SugestVideo from './components/SugestVideo';


type Props = {}

const App = (props: Props) => {

  const category = [

    "All", "Music", "News", "Dulquer Salmaan", "Tovino Thomas", "AI", "Podcasts", "Computer programming", "Desktop computers", "Trailers", "Apple", "User interface design", "Live", "Gaming", "Malayalam cinema", "Gaming computers", "Feature Phones", "Dramedy", "India national cricket team", "Recently uploaded", "New to you"
  ];

  return (
    <div className='dark:bg-[#0f0f0f] dark:text-[#f1f1f1] w-full overflow-x-hidden min-h-screen relative'>
      <Navbar />

      <div className='flex w-full  mt-16'>

        <SideMenu />

        <SugestVideo/>



      </div>



      {/* <h1 className='text-2xl text-center'>Youtube</h1> */}
    </div>
  )
}

export default App;