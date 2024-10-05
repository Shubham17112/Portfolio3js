import React from 'react'
import { styles } from '../styles'
import Computers from './canvas/Computers'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { AxesHelper } from 'three';

const Hero = () => {
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
   <section className='relative mx-auto h-screen w-full select-none' >
      <div className='absolute  '>
       <div className='flex flex-col justify-center items-center mx-16 sm:mx-36 sm:my-[9rem] my-[6rem]'>
        <div className='w-5 h-5 rounded-full  bg-[#915EFF]'/>
        <div className='w-1 h-80 sm:h-96 violet-gradient'></div>
       </div>
       <div className='absolute top-[7rem] left-[6.2rem] sm:left-[12.2rem] sm:top-[9rem]'>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi,I'm <span className='text-[#915EFF]'>Shubham</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
       </div>

      </div>
     <div className='h-screen  '>

      <Suspense   fallback={null}>
      <Canvas  camera={{position: [5, 0, 52], fov: 15 }}>
        {/* OrbitControls allow user interaction with the 3D scene */}
        <OrbitControls    enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
      
        {/* Render the 3D Computer model */}
        <Computers className='relative bg-black' isMobile={isMobile} isTablet={isTablet}   />

        {/* Preload assets */}
        
      </Canvas>
    </Suspense>
    </div>
    <div className='h-screen w-full'></div>
   </section>
  )
}

export default Hero