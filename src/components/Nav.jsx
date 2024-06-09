import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="mainfont text-background py-4 px-2 xl:px-80 border-b-1 sticky">
      <div className="grid xsm:grid-cols-1 xl:grid-cols-6 items-center gap-2">
        <div className="flex flex-row justify-between items-center col-span-1 xl:col-span-6">
          <Link to={'/'} className="logofont xsm:text-sm xl:text-2xl font-semibold tracking-tighter xsm:text-center xl:text-left">STYLESHARE</Link>
          <div className='flex flex-row gap-2 items-center'>
            <button className='border px-4 py-1 text-xxs md:text-base xl:text-sm font-semibold transition-all duration-300 hover:border-black'>
              SELL
            </button>
            <Link to={'/shop'} className='border px-2 py-1 text-xxs md:text-base xl:text-sm font-semibold transition-all duration-300 hover:border-black'>SHOP</Link>
            <button className='border px-2 py-1 text-xxs md:text-base xl:text-sm font-semibold transition-all duration-300 hover:border-black'>LOGIN</button>
            <button className='text-white bg-black border border-black px-2 py-1 text-xxs md:text-base xl:text-sm font-semibold transition-all duration-300 hover:text-gray-200 hover:scale-110'>SIGN UP</button>
          </div>
        </div>
        <form className="border border-black flex flex-row items-center p-2 rounded-sm w-full col-span-1 xl:col-span-6">
          <label htmlFor="search" className='px-2'>
            <BsSearch />
          </label>
          <input type="text" id="search" className='flex-1 h-full px-2 py-2 border-none focus:outline-none' placeholder='Search...' />
          <button className='border px-2 py-1 text-sm font-semibold transition-all duration-300 hover:border-black'>
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
}

export default Nav;
