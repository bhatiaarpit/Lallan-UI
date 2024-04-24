import Typewriter from 'typewriter-effect';
import image3 from "../assets/bg-im.png";
import image4 from "../assets/lkoAI.png";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-20">
      <div className="flex font-samarkan sm:text-8xl lg:text-9xl text-center tracking-wide">
        <div>L</div>
        <div>A</div>
        <div>L</div>
        <div>L</div>
        <div>A</div>
        <div>N</div>
      </div>

      <div className='m-7 flex justify-center align-text-center'>
      <h1 className="text-xl  bg-gradient-to-r from-orange-300 to-red-600 text-transparent bg-clip-text max-sm:text-sm">
      LUCKNOW ARTIFICIAL LANGUAGE AND LEARNING ASSISTANCE NETWORK 
      </h1>
      </div>
      

      {/* <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Discover the vibrant charm of Lucknow, where every street echoes with tales of history, culture, and exquisite cuisine. From the majestic Bara Imambara to the serene banks of the Gomti River, immerse yourself in the rich heritage of this timeless city.
      </p> */}
      
      <div className="flex justify-center my-3">
        <a
          href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fwallpapers%2Fdoctor-johnny-sins-6vleyqyzdu5tcn5c.html&psig=AOvVaw089e6zP1Wy1rcZP-wbjIxy&ust=1713956199107000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICio8SW2IUDFQAAAAAdAAAAABAE"
          className="btn hero-btn bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Try Lallan!
        </a>
        
      </div><br />
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
