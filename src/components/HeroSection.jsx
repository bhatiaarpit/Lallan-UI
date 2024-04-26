
import image3 from "../assets/bg-im.png";
import image1 from "../assets/logo.png"
import image2 from "../assets/RNR_Logo_3.png"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-20" data-aos="fade-in">
      <div className="flex font-samarkan text-5xl sm:text-7xl lg:text-9xl text-center tracking-wide">
        LALLAN
      </div>

      
      <h1 className="bg-gradient-to-r from-orange-300 to-red-600 text-transparent bg-clip-text max-sm:text-sm ">
      LUCKNOW ARTIFICIAL LANGUAGE AND LEARNING ASSISTANCE NETWORK 
      </h1>
      
      

      {/* <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Discover the vibrant charm of Lucknow, where every street echoes with tales of history, culture, and exquisite cuisine. From the majestic Bara Imambara to the serene banks of the Gomti River, immerse yourself in the rich heritage of this timeless city.
      </p> */}
      
      <div className="flex justify-center my-3">
        <a
          href="https://www.youtube.com/"
          className="btn hero-btn bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Try Lallan!
        </a>
        
      </div><br />
      <div className="flex items-center justify-center">
  <img src={image1} className="max-w-20 h-auto mr-2" alt="Team 1" />
  <p className="text-3xl">x</p>
  <img src={image2} className="max-w-20 h-auto ml-2" alt="Team 2" />
</div>
      {/* <div className='flex gap-10' >
          <img src={image4}  className='max-sm:w-13 h-13' alt="" />
          <p className='mt-3 text-3xl max-sm:mt-2 text-xl'>x</p>
          <img src={image4}   className='max-sm:w-13 h-13' alt="" />
        </div> */}
      <div className="flex justify-center  ">
      <img
    src={image3}
    alt="Image 3"
    />
  <img
    src={image3}
    alt="Image 2"
    
  />
      </div>
    </div>
  );
};

export default HeroSection;
