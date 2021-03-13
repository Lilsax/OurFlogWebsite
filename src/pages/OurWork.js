import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

import { motion } from 'framer-motion';
import useScroll from '../componts/useSctroll.js';

import {
  PageAnimation,
  titleAnim,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
  ScrollReveal,
} from '../Animation';

export default function OurWork() {
  const [element, controls, view] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work
      style={{ backgroundColor: '#fff' }}
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hidden>
            <motion.img variants={photoAnim} src={athlete} alt="" />
          </Hidden>
        </Link>
      </Movie>

      <Movie
        ref={element}
        animate={controls}
        variants={ScrollReveal}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        animate={controls2}
        variants={ScrollReveal}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="" />
        </Link>
      </Movie>
    </Work>
  );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow: hidden h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hidden = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 10%;
  left: 0;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
