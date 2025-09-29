import {useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const WatchVideo = () => {
  const { id, title } = useParams();

    return (
        <div className='dark:bg-[#0f0f0f] dark:text-[#f1f1f1] w-full min-h-screen '>
            <Navbar />

            <div className='flex min-h-screen w-full pt-24'>
                <div className='h-[80vh] w-[65%]  pl-16 '>
                    <iframe className='w-[85%] h-[80%]'
                        src={`https://www.youtube.com/embed/${id}`}>
                    </iframe>

                    <h1 className='my-4 font-medium text-2xl'>{title}</h1>


                </div>

                <div>
                    <ul className='grid gap-8'>
                        {([1, 2, 3, 3, 4, 5, 6]).map(( index) => {
                            return (
                                <li key={index} className="w-96 h-30 dark:bg-white/10 flex" >
                                    <div className='bg-white/10 w-40 h-full ' />
                                    <div className='p-4 dark:'>
                                        
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default WatchVideo