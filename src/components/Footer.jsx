import { faInstagram, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'notistack';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const { enqueueSnackbar } = useSnackbar();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_07pixny', 'template_cgoabis', form.current, {
        publicKey: 'w5miQioJ9pNVGOD_V',
      })
      .then(
        () => {
          enqueueSnackbar('Message Sent!', { variant: 'success' });
          console.log('SUCCESS!');
        },
        (error) => {
          enqueueSnackbar('Error', { variant: 'error' });
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact">
      <footer className="mt-20 border-t py-10 border-neutral-700 max-w-7xl ml-32 max-sm:ml-0" >
      <div className="grid m-44 mb-10 mt-20 grid-cols-1 max-sm:m-0 lg:grid-cols-1 gap-4" data-aos="zoom-in" data-aos-duration="1000">
        {/* <div>
          <h3 className="text-md font-semibold mb-4">Contact Information</h3>
          <p className="text-neutral-300">Email: info@example.com</p>
          <p className="text-neutral-300">Phone: +1234567890</p>
          <p className="text-neutral-300">Address: 123, Street Name, City, Country</p>
        </div> */}
        <div className="justify-center">
          <h3 className="text-6xl font-semibold mb-8 max-sm:m-10 max-sm:text-5xl max-sm:mb-10 ">Contact Us</h3>
          <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
              <label htmlFor="name" className="block text-neutral-300 text-sm font-semibold mb-2">Name</label>
              <input type="name" id="name" name="user_name" placeholder="Your Name" className="w-full px-4 py-2 border border-orange-500 rounded-md focus:outline-none focus:border-primary-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-neutral-300 text-sm font-semibold mb-2">Email</label>
              <input type="email" id="email" name="user_email" placeholder="Your email" className="w-full px-4 py-2 border border-orange-500 rounded-md focus:outline-none focus:border-primary-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-neutral-300 text-sm font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Your message" className="w-full px-4 py-2 border border-orange-500 rounded-md focus:outline-none focus:border-primary-500"></textarea>
            </div>
            {/* <button type="submit" className="bg-red-500 max-sm:ml-32 max-sm:mb-2 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors">Send</button> */}
            <button type="submit" className="btn btn-5 max-sm:ml-32 max-sm:mb-2 text-white px-7 justify-center items-center">SEND</button> 
          </form>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <div className="flex justify-between items-center mt-8">
        <div>&copy; 2024 Lallan. All Rights Reserved.</div>
        <div className="flex space-x-4">
          
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition duration-300">
            <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff", fontSize: "24px"}} />
          </a>
          <a href="https://github.com/LucknowAI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition duration-300">
            <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff", fontSize: "24px"}} />
          </a>
          <a href="mailto:akshatupmanya@gmail.com" className="text-gray-400 hover:text-gray-800 transition duration-300">
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff", fontSize: "24px"}} />
          </a>
          
            
          
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
