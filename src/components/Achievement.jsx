import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { certificates } from '../constants';
import Tilt from "react-parallax-tilt"; // Updated imporimport { motion } from "framer-motion";


const Cards = ({title,image,link,description ,index})=>{
  return(
    <>
     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
                <img
                src={image}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{title}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

       
      </Tilt>
    </motion.div>
    
    </>
  )

}

const Achievement = () => {
  return (
    <>
      <div className='sm:px-20 px-10 py-20'>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>My Achievement</p>
          <h2 className={`${styles.sectionHeadText}`}>Certificates</h2>
        </motion.div>
        <div className='flex gap-20 py-20 flex-wrap'>
        {certificates.map((value, index) => (
          <Cards key={index}  index={value.index} title={value.title} link={value.link} description={value.description} image={value.image}/>
        ))}
        </div>
      </div>
    </>
  );
}

export default Achievement;
