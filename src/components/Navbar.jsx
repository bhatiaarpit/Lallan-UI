import { RNRLogo } from "../utils";
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center fixed top-0 z-10">
      <nav className="flex w-full max-w-screen-xl items-center mx-auto">
        <img id="RNRlogo" className="ml-10 max-sm:ml-4" src={RNRLogo} alt="RNR Logo" width={100} height={100}/>
        <div className="flex-1"></div>
       
        <h1 className="mr-10 p-10 text-xl font-bold text-orange-400 hover:text-white">USE LALLAN</h1>
       
        <div id="navLists" className="flex ">
          {navLists.map((nav) => (
            <div key={nav} className="text-base cursor-pointer text-gray-400 hover:text-white transition-all pl-2 pr-2   max-sm:hidden">
              {nav}
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
