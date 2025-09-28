import React from 'react'
import MicIcon from '@mui/icons-material/Mic';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Navbar = () => {
  return (
    <div>
      <ul className='flex gap-4 py-2 px-8 items-center justify-between w-full'>
        <li className='flex items-center'>
          <IconButton aria-label="Microphone">
            <MenuIcon />
          </IconButton>

          <span className='flex items-center h-16'>
            <IconButton aria-label="Youtube icon" className='h-16'>
              <YouTubeIcon className='' />
            </IconButton>
            <h1 className='font-medium text-xl'>YouTube</h1>
          </span>
        </li>

        <li className='flex'>
          <span className='flex items-center rounded-2xl border-1'>
            <input type="text" placeholder='Search'
              className='rounded-l-2xl w-96 px-4 h-8 bg-amber-300 '
            />
            <IconButton aria-label="Search icon" className='h-8'>
              <SearchIcon className='' />
            </IconButton>
          </span>

          <IconButton aria-label="Microphone" className='h-8'>
            <MicIcon />
          </IconButton>
        </li>

        <li className='flex'>
          <span className='flex items-center rounded-2xl border-1'>
            <IconButton aria-label="Microphone" className='h-8'>
              <AddIcon />
            </IconButton>
            <button className='pr-4'>Create</button>
          </span>



          <IconButton aria-label="Microphone" className='h-8'>
            <NotificationsIcon />
          </IconButton>



          <IconButton aria-label="Microphone" className='h-8'>
            <AccountCircleIcon />
          </IconButton>
        </li>

      </ul>
    </div>
  )
}

export default Navbar