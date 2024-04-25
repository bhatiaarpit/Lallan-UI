import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide max-w-7xl ml-32 max-sm:ml-0 ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        TEAM <span className="bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text">RAG N ROCK</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-800 rounded-md p-6 text-md border border-neutral-800 font-thin ">
              {/* <p>{testimonial.text}</p> */}
              <div className="flex mt- items-start">
                <img
                  className="w-24 h-24 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6 className="font-bold">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-300">
                    {testimonial.company}
                  </span>
                  <div className="flex mt-2">
                    {testimonial.social.map((socialIcon, index) => (
                      <a
                        key={index}
                        href={socialIcon.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-4 max-w-9"
                      >
                        <img
                          src={socialIcon.icon}
                          alt=""
                          className="w-6 h-9"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
