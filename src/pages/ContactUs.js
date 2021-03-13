import React from 'react';
import { motion } from 'framer-motion';
import { PageAnimation, titleAnim } from '../Animation';
import styled from 'styled-components';

export default function ContactUs() {
  return (
    <ContactStyle
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Soical variants={titleAnim}>
            <Circle />
            <h2>Send US A Message</h2>
          </Soical>
        </Hide>
        <Hide>
          <Soical variants={titleAnim}>
            <Circle />
            <h2>Send US A Message</h2>
          </Soical>
        </Hide>
        <Hide>
          <Soical variants={titleAnim}>
            <Circle />
            <h2>Send US A Message</h2>
          </Soical>
        </Hide>
      </div>
    </ContactStyle>
  );
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;
const Soical = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
