import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { services } from "../constants";
import { useState } from 'react';
import { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.section>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="w-[15rem] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={service.icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {service.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
    </motion.section>
  );
};


const About = () => {


     // State variables to track the device type
     const [isMobile, setIsMobile] = useState(false);
     const [isTablet, setIsTablet] = useState(false);
   
     useEffect(() => {
       // Media query for mobile devices (max-width: 500px)
       const mediaQueryMobile = window.matchMedia("(max-width: 500px)");
       // Media query for tablet devices (min-width: 500px and max-width: 768px)
       const mediaQueryTablet = window.matchMedia("(min-width: 501px) and (max-width: 768px)");
   
       // Function to handle media query changes
       const handleMediaQueryChange = () => {
         setIsMobile(mediaQueryMobile.matches); // Update isMobile based on mobile query
         setIsTablet(mediaQueryTablet.matches); // Update isTablet based on tablet query
       };
   
       // Set initial state
       handleMediaQueryChange();
   
       // Add event listeners for both media queries
       mediaQueryMobile.addEventListener("change", handleMediaQueryChange);
       mediaQueryTablet.addEventListener("change", handleMediaQueryChange);
   
       // Clean up event listeners on component unmount
       return () => {
         mediaQueryMobile.removeEventListener("change", handleMediaQueryChange);
         mediaQueryTablet.removeEventListener("change", handleMediaQueryChange);
       };
     }, []); 
    
  
  return (
    <>
    <div className='sm:px-20 md:px-[120px] px-[15px] py-[20px]'> 
        {/* Text Animation when in view */}
        <motion.div 
          variants={textVariant()} 
          initial="hidden" 

          whileInView="show" 
          viewport={{ once: true, amount: 0.8 }} // Triggers once when 50% of the element is in view
        >
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Paragraph Animation when in view */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }} // Customize to trigger animation
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a skilled software developer with experience in Python and
          JavaScript, and expertise in frameworks like React, Flask, Django, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <div className={` mt-20 flex w-full  flex-wrap gap-10 ${isMobile?' justify-center':''} `}>
              {services.map((service, index) => (
           <ServiceCard   service={service} index={index} />
              ))}
        </div>


      </div>
    </>
  );
};

export default About;
