import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <NavStyle>
      <h1>
        <Link id="logo" to="/">
          {' '}
          Capture
        </Link>
      </h1>

      <ul>
        <li>
          <Link to="/"> 1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === '/' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/work"> 2. Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === '/work' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="contactUs"> 3. Contact US</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: 0 }}
            animate={{ width: pathname === '/contactUs' ? '50%' : '0%' }}
          />
        </li>
      </ul>
    </NavStyle>
  );
}

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  top: 120%;
  left: 60%;
`;

const NavStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  overflow: show;
  top: 0;
  z-index: 10;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-size: 2rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;
