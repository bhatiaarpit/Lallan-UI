import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_07pixny', 'template_cgoabis', form.current, {
        publicKey: 'w5miQioJ9pNVGOD_V',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Contact Information</h3>
          <p className="text-neutral-300">Email: info@example.com</p>
          <p className="text-neutral-300">Phone: +1234567890</p>
          <p className="text-neutral-300">Address: 123, Street Name, City, Country</p>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Contact Us</h3>
          <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
              <label htmlFor="name" className="block text-neutral-300 text-sm font-semibold mb-2">Name</label>
              <input type="name" id="name" name="user_name" placeholder="Your Name" className="w-full px-4 py-2 border border-neutral-500 rounded-md focus:outline-none focus:border-primary-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-neutral-300 text-sm font-semibold mb-2">Email</label>
              <input type="email" id="email" name="user_email" placeholder="Your email" className="w-full px-4 py-2 border border-neutral-500 rounded-md focus:outline-none focus:border-primary-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-neutral-300 text-sm font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Your message" className="w-full px-4 py-2 border border-neutral-500 rounded-md focus:outline-none focus:border-primary-500"></textarea>
            </div>
            <button type="submit" className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors">Send</button>
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
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition duration-300">
            <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff", fontSize: "24px"}} />
          </a>
          <a href="mailto:info@example.com" className="text-gray-400 hover:text-gray-800 transition duration-300">
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff", fontSize: "24px"}} />
          </a>
          
            
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
