import { RNRLogo } from "../utils";
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width items-center top-2">
        <img id="RNRlogo" className="ml-10" src={RNRLogo} alt="RNR Logo" width={100} height={100}/>
        
        <div className="flex-1"></div> {/* This creates space to push the navLists to the right */}
        <div id="navLists" className="flex fixed right-10 top-2 mt-9 no-underline ">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-lg cursor-pointer text-gray-400 hover:text-white transition-all ">
              {nav}
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
