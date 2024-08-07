import { Menu, X } from "lucide-react";
import { useState } from "react";
// import logo from "../assets/RNR_logo_5.png";
import logo from "../assets/RNR_Logo_5.png";
import logolko from "../assets/logo.png"
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-7 backdrop-blur-lg border-b mb-12 border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
      
            <a href="/">
            <img className="h-6 max-sm:ml-3" src={logo} alt="Logo" />
            </a>
            
            {/* <span className="text-xl tracking-tight"></span> */}
          </div>
          <ul id="navLists"className="hidden lg:flex ml-[27%] mr-10 space-x-12 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} >{item.label}</a>
              </li>
            ))}
          </ul>
          
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
