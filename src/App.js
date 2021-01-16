import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import firebase from 'firebase/app'

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const config = {
  apiKey: "AIzaSyB12gx50PXPQqsveSyj6_9gBIyaB_HZi58",
  authDomain: "iris-newsletter.firebaseapp.com",
  databaseURL: "https://iris-newsletter-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "iris-newsletter",
  storageBucket: "iris-newsletter.appspot.com",
  messagingSenderId: "854798223584",
  appId: "1:854798223584:web:90098b3cdc0b40da2da885",
  measurementId: "G-4L7HKJG4FR"
};

firebase.initializeApp(config)

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;