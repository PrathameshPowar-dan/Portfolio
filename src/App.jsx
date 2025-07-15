import { useState, useEffect } from 'react';
import Intro from './Components/Intro/Intro.jsx';
import HomePage from './HomePage.jsx';


export default function App() {
  const [showIntro, setShowIntro] = useState(true);

useEffect(() => {
  const sty = document.body.style;
  sty.overflow = 'hidden';
  sty.background = 'black';

  const timer = setTimeout(() => {
    sty.overflow = 'auto';
    sty.backgroundImage = `url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`;
    sty.backgroundSize = 'cover';
    sty.backgroundPosition = 'center';
    sty.backgroundRepeat = 'no-repeat';

    setShowIntro(false);
  }, 3000);

  return () => clearTimeout(timer);
}, []);




  return showIntro ? <Intro /> : <HomePage />;
}
