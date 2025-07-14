import { useState, useEffect } from 'react';
import Intro from './Components/Intro';
import HomePage from './HomePage.jsx';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setShowIntro(false), 3000);
  //   // return () => clearTimeout(timer);
  // }, []);

  return showIntro ? <Intro /> : <HomePage />;
}
