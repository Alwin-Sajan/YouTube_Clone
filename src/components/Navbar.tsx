import { useState, type KeyboardEvent, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <ul className='flex gap-4 pt-2 pb-1 px-8 max-md:px-2 items-center justify-between w-full fixed bg-white dark:bg-[#0f0f0f] z-10'>
        <li className='flex items-center'>
          <span className='max-md:hidden'>
            <IconButton aria-label="Menu">
              <MenuIcon className='dark:text-white' fontSize="large" />
            </IconButton>
          </span>
          <a className='flex items-center h-16' href='/'>
            <IconButton aria-label="YouTube">
              <YouTubeIcon className='w-20 h-20 text-red-600' fontSize="large" />
            </IconButton>
            <h1 className='font-medium text-xl'>YouTube</h1>
          </a>
        </li>

        <li className='flex gap-4'>
          <span className='flex items-center rounded-3xl dark:bg-white/10 dark:border-white/10 lg:border-1'>
            <input
              type="text"
              placeholder='Search'
              value={searchQuery}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className='rounded-l-3xl w-[500px] h-full max-md:hidden placeholder:dark:bg-black focus:border-blue-400 placeholder:p-8'
            />
            <IconButton aria-label="Search" onClick={handleSearch}>
              <SearchIcon className='dark:text-white' />
            </IconButton>
          </span>
          <span className='max-md:hidden'>
            <IconButton aria-label="Mic">
              <MicNoneOutlinedIcon className='dark:text-white' />
            </IconButton>
          </span>
        </li>

        <li className='flex max-md:hidden gap-4'>
          <span className='flex items-center rounded-3xl dark:bg-white/10 bg-gray-100'>
            <IconButton aria-label="Create">
              <AddIcon className='dark:text-white' />
            </IconButton>
            <button className='pr-4 text-black dark:text-white font-medium'>Create</button>
          </span>
          <IconButton aria-label="Notifications">
            <NotificationsOutlinedIcon className='dark:text-white' />
          </IconButton>
          <IconButton aria-label="Account">
            <AccountCircleIcon className='dark:text-white' />
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
