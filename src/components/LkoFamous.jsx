import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import img1 from "../assets/carousel/lko1.jpg";
import img2 from "../assets/carousel/lko2.jpg";
import img6 from "../assets/carousel/lko6.png";
import img4 from "../assets/carousel/lko4.png";
import img5 from "../assets/carousel/lko5.png";
import img7 from "../assets/carousel/lko7.jpg";
import img8 from "../assets/carousel/lko8.png";
import img9 from "../assets/carousel/lko9.jpg";
import img10 from "../assets/carousel/lko10.jpg";
import img11 from "../assets/carousel/lko11.jpg";
import img12 from "../assets/carousel/lko12.jpg";
import img13 from "../assets/carousel/lko13.jpg";
import img14 from "../assets/carousel/lko14.jpg";
import img15 from "../assets/carousel/lko15.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
const LkoFamous = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="about">
      <div
        className="flex flex-col items-center mt-10"
        data-aos="zoom-in"
        data-aos-duration="1300"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-6xl text-center my-10 lg:my-20">
          Lucknow's{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Famous
          </span>
        </h2>
        <div className="flex justify-center">
          <div className="w-full lg:w-4/5 xl:w-5/6 rounded-lg border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
            <Carousel
              dynamicHeight={false}
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
            >
              <div>
                <img src={img1} alt="Bada Imambara" />
                <p className="legend">Bada Imambara</p>
              </div>
              <div>
                <img src={img2} alt="Bada Imambara" />
                <p className="legend">Bada Imambara</p>
              </div>
              <div>
                <img src={img4} alt="Dr. Babasaheb Ambedkar Memorial Park" />
                <p className="legend">Dr. Babasaheb Ambedkar Memorial Park</p>
              </div>
              <div>
                <img src={img5} alt="Vidhan Sabha" />
                <p className="legend">Vidhan Sabha (Legislative Assembly)</p>
              </div>
              <div>
                <img src={img6} alt="Tunday Kababi" />
                <p className="legend">Tunday Kababi</p>
              </div>
              <div>
                <img src={img7} alt="Image 7" />
                <p className="legend">All Season Hotel</p>
              </div>
              <div>
                <img src={img8} alt="Image 8" />
                <p className="legend">Idrees Biryani</p>
              </div>
              <div>
                <img src={img9} alt="Image 9" />
                <p className="legend">Lulu Mall</p>
              </div>
              <div>
                <img src={img10} alt="Image 10" />
                <p className="legend">Cherry Tree</p>
              </div>
              <div>
                <img src={img11} alt="Image 11" />
                <p className="legend">Hazaratganj</p>
              </div>
              <div>
                <img src={img12} alt="Image 11" />
                <p className="legend">Charbagh Railway Station</p>
              </div>
              <div>
                <img src={img13} alt="Image 11" />
                <p className="legend">Ghanta ghar</p>
              </div>
              <div>
                <img src={img14} alt="Image 11" />
                <p className="legend">Aminabad</p>
              </div>
              <div>
                <img src={img15} alt="Image 11" />
                <p className="legend">Lucknow Residency</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default LkoFamous;
