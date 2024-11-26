import './css/App.css';

import Portfolio from './components/main/Portfolio.jsx';
import About from './components/main/About.jsx';
import Contact from './components/main/Contact.jsx';
import Home from './components/main/Home.jsx';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.style.width = '100%';
          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll('hr').forEach(hr => observer.observe(hr));
  },[])


  return (
    <div id='root'>
      <div>
        <Home />
      </div>
      <div className='hr-container'>
        <hr />
      </div>
      <div>
        <Portfolio />
      </div>
      <div className='hr-container'>
        <hr />
      </div>
      <div>
        <About />
      </div>
      <div className='hr-container'>
        <hr />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  )
}

export default App
