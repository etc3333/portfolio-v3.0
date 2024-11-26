import '../../css/NavBar.css';
import ChipSocket from './ChipScoket.jsx';
import Chip from './Chip.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NavBar = ()=> {
  const [code, setCode] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  let chipSocketSize = 30;
  let chipSize = 50;

  useEffect(() => {
    let movingChip = document.getElementById('moving-chip');
    let chipsocket;
    if (location.pathname === '/') {
      chipsocket = document.getElementById('home-chipsocket');
    } else if (location.pathname === '/portfolio') {
      chipsocket = document.getElementById('portfolio-chipsocket');
    } else if (location.pathname === '/about') {
      chipsocket = document.getElementById('about-chipsocket');
    } else if (location.pathname === '/contact') {
      chipsocket = document.getElementById('contact-chipsocket');
    }
    let coordsSocket = chipsocket.getBoundingClientRect();
    let coordsNav = document.getElementById('nav-container').getBoundingClientRect();
    let adjustOffset = (chipSize - chipSocketSize)/2;
    movingChip.style.top = coordsSocket.top - coordsNav.top - adjustOffset + 'px';
    movingChip.style.left = coordsSocket.left - coordsNav.left - adjustOffset + 'px';

    setCode(changeCode());

  }, [location.pathname]);

  function routing(route) {
    navigate(route);
  }

  function changeCode() {
    if (location.pathname === '/') {
      return (
        <g>
          <g>
            <rect className="blink delay1" width="30" height="10" fill="#8861C9" rx="5" ry="5" x="7" y="10" />
          </g>
          <g>
            <rect className="blink delay1" width="60" height="10" fill="#595647" rx="5" ry="5" x="7" y="24" />
          </g>
          <g>
            <rect className="blink delay2" width="50" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="38" />
          </g>
          <g>
            <rect className="blink delay1" width="10" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="52" />
            <rect className="blink delay2" width="35" height="10" fill="#4CA4B8" rx="5" ry="5" x="20" y="52" />
            <rect className="blink delay2" width="30" height="10" fill="#C4BB5E" rx="5" ry="5" x="60" y="52" />
          </g>
          <g>
            <rect className="blink delay1" width="20" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="66" />
            <rect className="blink delay2" width="30" height="10" fill="#679B19" rx="5" ry="5" x="30" y="66" />
          </g>
          <g>
            <rect className="blink delay2" width="40" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="80" />
            <rect className="blink delay1" width="25" height="10" fill="#595647" rx="5" ry="5" x="50" y="80" />
          </g>
        </g>
      )
    } else if (location.pathname === '/portfolio') {
      return (
        <g>
          <g>
            <rect className="blink delay1" width="10" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="10" />
            <rect className="blink delay2" width="30" height="10" fill="#679B19" rx="5" ry="5" x="20" y="10" />
            <rect className="blink delay1" width="15" height="10" fill="#C4BB5E" rx="5" ry="5" x="53" y="10" />
          </g>
          <g>
            <rect className="blink delay1" width="60" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="24" />
          </g>
          <g>
            <rect className="blink delay2" width="50" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="38" />
            <rect className="blink delay1" width="30" height="10" fill="#679B19" rx="5" ry="5" x="60" y="38" />
          </g>
          <g>
            <rect className="blink delay1" width="10" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="52" />
            <rect className="blink delay2" width="35" height="10" fill="#4CA4B8" rx="5" ry="5" x="20" y="52" />
            <rect className="blink delay2" width="15" height="10" fill="#679B19" rx="5" ry="5" x="60" y="52" />
          </g>
          <g>
            <rect className="blink delay1" width="50" height="10" fill="#8861C9" rx="5" ry="5" x="7" y="66" />
          </g>
          <g>
            <rect className="blink delay2" width="30" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="80" />
            <rect className="blink delay1" width="25" height="10" fill="#C4BB5E" rx="5" ry="5" x="40" y="80" />
            <rect className="blink delay1" width="15" height="10" fill="#595647" rx="5" ry="5" x="68" y="80" />
          </g>
        </g>
      )
    } else if (location.pathname === '/about') {
      return (
        <g>
          <g>
            <rect className="blink delay2" width="50" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="10" />
            <rect className="blink delay1" width="20" height="10" fill="#595647" rx="5" ry="5" x="60" y="10" />
          </g>
          <g>
            <rect className="blink delay1" width="10" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="24" />
            <rect className="blink delay1" width="35" height="10" fill="#4CA4B8" rx="5" ry="5" x="20" y="24" />
            <rect className="blink delay2" width="15" height="10" fill="#679B19" rx="5" ry="5" x="60" y="24" />
          </g>
          <g>
            <rect className="blink delay2" width="50" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="38" />
          </g>
          <g>
            <rect className="blink delay1" width="10" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="52" />
            <rect className="blink delay1" width="35" height="10" fill="#4CA4B8" rx="5" ry="5" x="20" y="52" />
            <rect className="blink delay2" width="30" height="10" fill="#C4BB5E" rx="5" ry="5" x="60" y="52" />
          </g>
          <g>
            <rect className="blink delay1" width="20" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="66" />
            <rect className="blink delay2" width="30" height="10" fill="#679B19" rx="5" ry="5" x="30" y="66" />
          </g>
          <g>
            <rect className="blink delay2" width="40" height="10" fill="#8861C9" rx="5" ry="5" x="7" y="80" />
            <rect className="blink delay1" width="25" height="10" fill="#595647" rx="5" ry="5" x="50" y="80" />
          </g>
        </g>
      )
    } else if (location.pathname === '/contact') {
      return (
        <g>
          <g>
            <rect className="blink delay1" width="50" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="10" />
          </g>
          <g>
            <rect className="blink delay1" width="10" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="24" />
            <rect className="blink delay2" width="35" height="10" fill="#4CA4B8" rx="5" ry="5" x="20" y="24" />
            <rect className="blink delay2" width="15" height="10" fill="#C4BB5E" rx="5" ry="5" x="60" y="24" />
          </g>
          <g>
            <rect className="blink delay1" width="60" height="10" fill="#8861C9" rx="5" ry="5" x="7" y="38" />
          </g>
          <g>
            <rect className="blink delay2" width="20" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="52" />
            <rect className="blink delay2" width="30" height="10" fill="#C4BB5E" rx="5" ry="5" x="30" y="52" />
          </g>
          <g>
            <rect className="blink delay2" width="10" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="66" />
            <rect className="blink delay1" width="10" height="10" fill="#4CA4B8" rx="5" ry="5" x="20" y="66" />
            <rect className="blink delay2" width="20" height="10" fill="#679B19" rx="5" ry="5" x="33" y="66" />
          </g>
          <g>
            <rect className="blink delay2" width="40" height="10" fill="#BF1355" rx="5" ry="5" x="7" y="80" />
          </g>
        </g>
      )
    }
  }

  return (
    <nav id="nav-container">
      <div className='nav-tabs'>
        <span>
          <div id='moving-chip'>
            <Chip width={chipSize} height={chipSize}>
              {code}
            </Chip>
          </div>
          <span className='tab' onClick={() => routing('/')}>
            <span id='home-chipsocket' className='nav-chipsocket'>
              <ChipSocket height={chipSocketSize} width={chipSocketSize}/>
            </span>
            Home
          </span>
          <span className='tab' onClick={() => routing('/portfolio')}>
            <span id='portfolio-chipsocket' className='nav-chipsocket'>
              <ChipSocket height={chipSocketSize} width={chipSocketSize}/>
              </span>
            Portfolio
          </span>
          <span className='tab' onClick={() => routing('/about')}>
            <span id='about-chipsocket' className='nav-chipsocket'>
              <ChipSocket height={chipSocketSize} width={chipSocketSize}/>
            </span>
            About
          </span>
          <span className='tab' onClick={() => routing('/contact')}>
            <span id='contact-chipsocket' className='nav-chipsocket'>
              <ChipSocket height={chipSocketSize} width={chipSocketSize}/>
            </span>
            Contact
          </span>
        </span>
      </div>
    </nav>
  )
};

export default NavBar;