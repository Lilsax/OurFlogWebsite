import React from 'react';

import clock from '../img/clock.svg';
import dia from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

import home2 from '../img/home2.png';

import { About, Description, Image } from '../style';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  PageAnimation,
  titleAnim,
  fade,
  photoAnim,
  ScrollReveal,
} from '../Animation';

import useScroll from './useSctroll';

export default function ServicesSection() {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={ScrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          {' '}
          High <span>quality</span> servies
        </h2>

        <Card>
          <div className="card">
            <div className="icon"></div>
            <img src={clock} alt="" srcset="" />
            <h3>Efficient</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="card">
            <div className="icon"></div>
            <img src={teamwork} alt="" srcset="" />
            <h3>Efficient</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="card">
            <div className="icon"></div>
            <img src={dia} alt="" srcset="" />
            <h3>Efficient</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="card">
            <div className="icon"></div>
            <img src={money} alt="" srcset="" />
            <h3>Efficient</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Card>
      </Description>

      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;

  .card {
    flex-basis: 20rem;

    .icon {
      display: flex;
      align-items: center;
    }

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
      display: inline;
    }
  }
`;
