import React from 'react';
import img1 from '../img/home1.png';
import { motion } from 'framer-motion';

import { About, Description, Image } from '../style';
import { PageAnimation, titleAnim, fade, photoAnim } from '../Animation';
import Wave from './Wave';

export default function aboutUssection() {
  // const titleAnim = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 1 } },
  // };

  // const container = {
  //   hidden: { x: 100 },
  //   show: {
  //     x: 0,
  //     transition: {
  //       duration: 1,
  //       ease: 'easeOut',
  //       staggerChildren: 1,
  //       when: 'afterChildren',
  //     },
  //   },
  // };
  return (
    <About>
      <Description>
        <motion.div
        // variants={container}
        // initial="hidden"
        // animate="show"
        // className="tittle"
        >
          <div className="hide">
            <motion.h2 variants={titleAnim}>We Work To Make</motion.h2>
          </div>

          <div className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>Dreams</span> come
            </motion.h2>
          </div>

          <div className="hide">
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </div>
        </motion.div>

        <motion.p variants={fade}>
          Hole on the street that blocks cars lorem ipsum lorem the street that
          blocks cars lorem ipsum loremthe street that blocks cars lorem ipsum
          lorem...
        </motion.p>

        <motion.button variants={fade}>Contact us</motion.button>
      </Description>

      <Image>
        <motion.img variants={photoAnim} src={img1} alt="" />
      </Image>

      <Wave />
    </About>
  );
}

// const About = styled.div`
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: space-space-between;
//   padding: 5rem 10rem;
//   color: white;
// `;

// const Description = styled.div`
//   flex: 1;
//   padding-right: 5rem;

//   .hide {
//     overflow: hidden;
//   }

//   h2 {
//     font-weight: lighter;
//   }
// `;

// const Image = styled.div`
//   flex: 1;
//   overflow: hidden;
//   img {
//     width: 100%;
//     height: 80vh;
//     object-fit: cover;
//   }
// `;
