import React, { useEffect } from 'react';
import { About, Description, Image } from '../style';
import styled from 'styled-components';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import useScroll from './useSctroll';
import {
  PageAnimation,
  titleAnim,
  fade,
  photoAnim,
  ScrollReveal,
} from '../Animation';
import { motion } from 'framer-motion';

export default function Faq() {
  const [element, controls, view] = useScroll();
  // useEffect(() => {
  //   alert(view);
  // }, [view]);
  return (
    <FAQ
      variants={ScrollReveal}
      animate={controls}
      ref={element}
      initial="hidden"
    >
      <h2>
        Any Question <span>FAQ</span>{' '}
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Dow i start">
          <div className="answer">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum natus tempora voluptas aliquid laborum, explicabo illum
              eligendi totam, delectus quas consequatur officiis maiores
              nesciunt debitis beatae quam libero. Neque!
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedual">
          <div className="answer">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum natus tempora voluptas aliquid laborum, explicabo illum
              eligendi totam, delectus quas consequatur officiis maiores
              nesciunt debitis beatae quam libero. Neque!
            </p>
          </div>
        </Toggle>
        <Toggle title="diffirent payment">
          <div className="answer">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum natus tempora voluptas aliquid laborum, explicabo illum
              eligendi totam, delectus quas consequatur officiis maiores
              nesciunt debitis beatae quam libero. Neque!
            </p>
          </div>
        </Toggle>
        <Toggle title="what proudcts">
          <div className="answer">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum natus tempora voluptas aliquid laborum, explicabo illum
              eligendi totam, delectus quas consequatur officiis maiores
              nesciunt debitis beatae quam libero. Neque!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQ>
  );
}

const FAQ = styled(About)`
  display: block;

  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    widdth: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`;
