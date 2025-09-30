import {useParams } from 'react-router-dom';

const WatchVideo = () => {
  const { id, title } = useParams();

    return (
        <div className='dark:bg-[#0f0f0f] dark:text-[#f1f1f1] w-full min-h-screen '>
            {/* <Navbar /> */}

            <div className='lg:flex min-h-screen w-full pt-24'>
                <div className='lg:h-[80vh] lg:w-[65%]  lg:pl-16 w-full block'>
                    <iframe className='lg:w-[85%] lg:h-[80%] w-full h-[231px]'
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