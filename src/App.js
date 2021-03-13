import React, { useEffect } from 'react';
import Pages from '../src/pages/AboutUs';
import GlobalStyle from '../src/componts/GlobalStyling';
import Nav from './componts/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import ContactUs from '../src/pages/ContactUs';
import OurWork from '../src/pages/OurWork';
import MoviesDetails from '../src/pages/MoviesDetails';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Pages />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>

          <Route path="/contactUs">
            <ContactUs />
          </Route>

          <Route path="/work/:id">
            <MoviesDetails />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
