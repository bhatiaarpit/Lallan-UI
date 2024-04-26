
import { BookOpenCheck } from 'lucide-react';

import { Clock } from "lucide-react";
import { SmartphoneCharging } from "lucide-react";
import { CircleUser } from 'lucide-react';
import { Handshake } from 'lucide-react';



import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';
import user3 from '../assets/profile-pictures/user3.jpg';
import user4 from '../assets/profile-pictures/user4.jpg';
import user5 from '../assets/profile-pictures/user5.jpg';
import user6 from '../assets/profile-pictures/user6.jpg';
import user7 from '../assets/profile-pictures/user7.jpg';
import linkd from '../assets/linkedin.svg';
import twitr from '../assets/x_twitter.svg';
import githb from '../assets/github.svg';
import insta from "../assets/insta.svg";

export const navItems = [
  { label: "Features", href: "#feature" },
  { label: "Famous", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact Us", href: "#contact" },
];

export const testimonials = [
  {
    user: "Akshat Trivedi",
    company: "Team Lead & Backend Team",
    image: user1,
    text: "As the lead of our exceptional team, I'm proud to say that we consistently exceed expectations and deliver results that speak for themselves. Our collaborative approach and dedication ensure success every time.",
    social: [
      { icon: linkd, url: "https://www.linkedin.com/in/akshat-trivedi-600040240/" },
      { icon: insta, url: "https://www.instagram.com/the_pristine_storyteller_/" },
      { icon: githb, url: "https://github.com/akshatupmanya" }
    ]
  },
  {
    user: "Abhishek Verma",
    company: "Backend Team",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    social: [
      { icon: linkd, url: "https://www.linkedin.com/in/abhishek-verma-jnv/" },
      { icon: twitr, url: "https://twitter.com/thor_x_me" },
      { icon: githb, url: "https://github.com/thor-x-me" },
    ]
  },
  {
    user: "Aayush Sharma",
    company: "Backend Team",
    image: user4,
    text: "Working with the team was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    social: [
      { icon: linkd, url: "https://www.linkedin.com/in/aayush9119/" },
      { icon: insta, url: "https://www.instagram.com/aayush_._sharma?igsh=MWF1bjN5bWN0ZTl4OA==" },
      { icon: githb, url: "https://github.com/AayushSharma-1" },
    ]
  },
  {
    user: "Aarushi",
    company: "Backend Team",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    social: [
      { icon: linkd, url: "https://www.linkedin.com/in/aarushi-1b24211a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { icon: insta, url: "https://www.instagram.com/araaraarushi?igsh=ajVkczZydXI0eXY3" },
      { icon: githb, url: "https://github.com/aarushiksk" }
    ]
  },
  {
    user: "Anshul Yadav",
    company: "Backend Team",
    image: user7,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    social: [
      { icon: linkd, url: "https://www.linkedin.com/in/anshul-yadav-0479111b1" },
      { icon: insta, url: "https://www.instagram.com/its_ay_here_?igsh=MWtyeDRuNWRhZ21iYQ==" },
     
    ]
  },
  {
    user: "Arpit Bhatia",
    company: "Frontend & Design Team",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    social: [
      { icon: linkd, url: "https://www.linkedin.com/in/bhatiaarpit/" },
      { icon: insta, url: "https://www.instagram.com/_arpitbhatia_/" },
      { icon: githb, url: "https://github.com/bhatiaarpit" }
    ]
  },
  {
    user: "Rudra Sharma",
    company: "Frontend & Design Team",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    social: [
      { icon: linkd, url: "https://www.linkedin.com/in/rudra-kumar-897264227" },
      { icon: insta, url: "https://www.instagram.com/whateverrudra?igsh=Z21kd2VoNW0xNXVs" },
      { icon: githb, url: "https://github.com/rudra016" }
    ]
  },
];

export const features = [
  {
    icon: <BookOpenCheck/>,
    text: "Comprehensive Knowledge",
    description:
      "Lallan is your go-to source for everything related to Lucknow—from its rich history and cultural heritage to its modern-day attractions and events, Lallan has a wealth of knowledge to share.",
  },
  {
    icon: <Clock/>,
    text: "24/7 Availability",
    description:
     "Whether day or night, weekday or weekend, Lallan is always available to assist you. No more waiting for business hours or navigating through complex menus—Lallan is just a message away.",
  },
  {
    icon: <SmartphoneCharging />,
    text: "Instant Responses",
    description:
      "With Lallan, you'll never have to wait long for an answer. Our advanced AI technology ensures swift responses to your queries, providing you with real-time information.",
  },
  {
    icon: <CircleUser/>,
    text: "Personalized Recommendations",
    description:
      "Lallan understands your preferences and interests, tailoring its responses accordingly. Whether you're looking for the best places to eat, shop, or explore in Lucknow, Lallan will provide personalized recommendations just for you.",
  },
  {
    icon: <Handshake />,
    text: "Friendly and Approachable",
    description:
      "Lallan is not just a chatbot; it's your virtual friend in Lucknow. With its friendly demeanor and conversational style, interacting with Lallan feels like chatting with a knowledgeable local friend.",
  },
];

export const checklistItems = [
  {
    title: "Tailored Insights",
    description:
      "Unlock Lucknow's secrets with our AI-powered chatbot. Gain valuable insights into the city's culture, heritage, and cuisine, personalized to your interests.",
  },
  {
    title: "Effortless Exploration",
    description:
      "Seamlessly navigate Lucknow's experiences with our intuitive chat interface. From planning your itinerary to discovering hidden gems, exploring the City of Nawabs is a breeze.",
  },
  {
    title: "Personalized Recommendations",
    description:
      "Enjoy personalized recommendations curated just for you. Whether you're a history buff, a foodie, or an adventure seeker, our chatbot ensures every recommendation hits the mark.",
  },
  {
    title: "Real-Time Assistance",
    description:
      "Access instant support and guidance whenever you need it. Whether you're in Lucknow or planning your next adventure from afar, our chatbot is always ready to help",
  },
];


