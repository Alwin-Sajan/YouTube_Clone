import SideMenu from "../components/SideMenu"
import SugestVideo from "../components/SugestVideo"


interface NavbarProps {
  showMenu: boolean;
}

const HomePage: React.FC<NavbarProps>  = ({showMenu}) => {
  return (
    <div className='dark:bg-[#0f0f0f] dark:text-[#f1f1f1] w-full overflow-hidden min-h-screen relative'>

      <div className='flex w-full  mt-16'>

       {showMenu&&<SideMenu />}

        <SugestVideo/>



      </div>



      {/* <h1 className='text-2xl text-center'>Youtube</h1> */}
    </div>
  )
}

export default HomePage