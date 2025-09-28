import React from 'react';
import Navbar from './components/Navbar';


type Props = {}

const App = (props: Props) => {
  return (
    <div>
      <Navbar/>
      <h1 className='text-2xl text-center'>Youtube</h1>
    </div>
  )
}

export default App;