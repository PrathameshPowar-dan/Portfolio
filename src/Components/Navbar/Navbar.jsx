import './Navbar.css'
import { useEffect } from 'react';
const Navbar = () => {
useEffect(() => {
  const handleClick = (e) => {
    const href = e.target.getAttribute('href');
    if (href && href.startsWith('#')) {
      setTimeout(() => {
        history.replaceState(null, null, window.location.pathname + window.location.search);
      }, 10);
    }
  };

  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => link.addEventListener('click', handleClick));

  return () => {
    anchorLinks.forEach(link => link.removeEventListener('click', handleClick));
  };
}, []);
  
  return (
    <nav className='h-[10vh] text-white flex justify-between items-center w-full pt-2.5 pl-3 pr-3 mb-2'>
      <p className="text-3xl md:text-4xl font-extrabold">DAN</p>
      <ul className="flex justify-center items-center gap-3 text-sm md:text-base font-semibold">
        <li><a href="/RESUME.pdf" className='relative' download>Resume</a></li>
        <li><a href="#projects" className='relative'>Projects</a></li>
        <li><a href="#contact" className='relative'>Contacts</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
