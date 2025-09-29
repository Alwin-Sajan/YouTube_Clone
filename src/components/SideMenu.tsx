import IconButton from '@mui/material/IconButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';

const SideMenu = () => {
    const exploreItems = {
        'Shopping': ShoppingBagOutlinedIcon,
        'Music': MusicNoteOutlinedIcon,
        'Movies': MovieOutlinedIcon,
        'Live': LiveTvOutlinedIcon,
        'Gaming': SportsEsportsOutlinedIcon,
        'News': ArticleOutlinedIcon,
        'Sports': SportsBasketballOutlinedIcon,
        'Courses': SchoolOutlinedIcon,
        'Fashion & Beauty': CheckroomOutlinedIcon,
        'Podcasts': GraphicEqOutlinedIcon,
    };

    const liClass =
        'flex gap-4 items-center hover:bg-gray-100 dark:hover:bg-white/10 p-1 rounded-2xl cursor-pointer';

    return (
        <div className='w-[19%] h-full block max-md:hidden overflow-y-scroll scroll-b'>
            <ul className='px-8 w-60 py-2 font-medium grid items-start gap-1 text-sm text-gray-800 dark:text-white'>
                {/* Main */}
                <li className={liClass}>
                    <IconButton aria-label="Home">
                        <HomeRoundedIcon className='dark:text-white h-8 w-8' />
                    </IconButton>
                    <p>Home</p>
                </li>

                <li className={liClass}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className='w-6 h-6 mx-2 pointer-events-none'
                        fill="currentColor"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                        aria-hidden="true"
                    >
                        <path d="m13.467 1.19-8 4.7a5 5 0 00-.255 8.46 5 5 0 005.32 8.462l8-4.7a5 5 0 00.258-8.462 5 5 0 001.641-6.464l-.12-.217a5 5 0 00-6.844-1.78m5.12 2.79a2.999 2.999 0 01-1.067 4.107l-1.327.78a1 1 0 00.096 1.775l.943.423a3 3 0 01.288 5.323l-8 4.7a3 3 0 01-3.039-5.173l1.327-.78a1 1 0 00-.097-1.775l-.942-.423a3 3 0 01-.288-5.323l8-4.7a3 3 0 014.106 1.066ZM15 12l-5-3v6l5-3Z"></path>
                    </svg>
                    <p>Shorts</p>
                </li>

                <li className={liClass}>
                    <IconButton aria-label="Subscriptions">
                        <SubscriptionsOutlinedIcon className='dark:text-white' />
                    </IconButton>
                    <p>Subscriptions</p>
                </li>

                <hr className="my-2 border-t border-gray-300 dark:border-white/20" />

                {/* You Section */}
                <p className="text-xs text-gray-500 dark:text-gray-300 mt-4 mb-1 uppercase">You &gt;</p>

                <li className={liClass}>
                    <IconButton aria-label="History">
                        <RestoreOutlinedIcon className='dark:text-white' />
                    </IconButton>
                    <p>History</p>
                </li>

                <li className={liClass}>
                    <IconButton aria-label="Playlists">
                        <PlaylistPlayOutlinedIcon className='dark:text-white' />
                    </IconButton>
                    <p>Playlists</p>
                </li>

                <li className={liClass}>
                    <IconButton aria-label="Watch later">
                        <WatchLaterOutlinedIcon className='dark:text-white' />
                    </IconButton>
                    <p>Watch later</p>
                </li>

                <li className={liClass}>
                    <IconButton aria-label="Liked videos">
                        <ThumbUpAltOutlinedIcon className='dark:text-white' />
                    </IconButton>
                    <p>Liked videos</p>
                </li>

                <li className={liClass}>
                    <IconButton aria-label="Downloads">
                        <FileDownloadOutlinedIcon className='dark:text-white' />
                    </IconButton>
                    <p>Downloads</p>
                </li>

                <hr className="my-2 border-t border-gray-300 dark:border-white/20" />

                {/* Explore Section */}
                <p className="text-xs text-gray-500 dark:text-gray-300 mt-4 mb-1 uppercase">Explore</p>
                {Object.entries(exploreItems).map(([label, Icon], index) => (
                    <li key={index} className={liClass}>
                        <IconButton aria-label={label}>
                            <Icon className='dark:text-white h-8 w-8' />
                        </IconButton>
                        <p>{label}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideMenu;
