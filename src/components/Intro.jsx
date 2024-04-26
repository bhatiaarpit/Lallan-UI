import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Intro = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[300px] max-w-7xl ml-32 max-sm:ml-0" data-aos="fade-up" data-aos-duration="1300">
      <div className="text-center">
        {/* <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span> */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          INTRO
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            DUCTION
          </span>
        </h2>
      </div>
        <div>
          <p className='text-neutral-300 text-center mt-7 mb-8'>
            <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>Salaam Miya!{" "}</span>
           Welcome to the world of Lallan, your AI-powered guide to the timeless charm of Lucknow. In this city, where every street murmurs tales of its rich history and every corner holds a piece of its cultural heritage, Lallan is here to unlock the treasures of Lucknow just for you.
          </p>
          <p className='text-neutral-300 text-center mt-4'>
          Discover Lucknow's essence by diving into conversations with Lallan, our AI-powered and swift-witted chatbot. Unlock the treasures of Lucknow—its beauty, culture, and timeless grace. From mouth-watering delicacies of Nawabi cuisine to the vibrant tapestry of its Ganga-Jamuni tehzeeb, a world of wonders awaits you.
          </p>
        </div>
      
    </div>
  );
}

export default Intro;