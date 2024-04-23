
import Typewriter from 'typewriter-effect';
import image1 from "../assets/lko1.jpg";
import image2 from "../assets/lko2.jpg";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="font-samarkan text-8xl sm:text-8xl lg:text-9xl text-center tracking-wide">
        LALLAN
      </h1>
      <h1 className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
      LUCKNOW ARTIFICIAL LANGUAGE AND LEARNING ASSISTANCE NETWORK 
      </h1>
      
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Discover the vibrant charm of Lucknow, where every street echoes with tales of history, culture, and exquisite cuisine. From the majestic Bara Imambara to the serene banks of the Gomti River, immerse yourself in the rich heritage of this timeless city.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fwallpapers%2Fdoctor-johnny-sins-6vleyqyzdu5tcn5c.html&psig=AOvVaw089e6zP1Wy1rcZP-wbjIxy&ust=1713956199107000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICio8SW2IUDFQAAAAAdAAAAABAE"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Try Lallan!
        </a>
        
      </div>
      <div className="flex mt-10 justify-center">
      <img
    src={image1}
    alt="Image 1"
    className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
  />
  <img
    src={image2}
    alt="Image 2"
    className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
  />
      </div>
    </div>
  );
};

export default HeroSection;
