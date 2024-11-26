import '../../css/Home.css';

const Home = () => {
  const windowWidth = document.documentElement.clientWidth;
  const windowHeight = document.documentElement.clientHeight;

  let pieSlice1 = {
    centerX: 250,
    centerY: 250,
    radius: 200,
    startDegree: 180,
    arcDegree: 60,
    get startx() {
      return this.centerX + this.radius * Math.cos(this.startDegree * Math.PI / 180);
    },
    get starty() {
      return this.centerY + this.radius * Math.sin(this.startDegree * Math.PI / 180);
    },
    get endx() {
      return this.centerX + this.radius * Math.cos((this.startDegree + this.arcDegree) * Math.PI / 180);
    },
    get endy() {
      return this.centerY + this.radius * Math.sin((this.startDegree + this.arcDegree) * Math.PI / 180);
    }
  }
  let pieSlice2 = {
    centerX: 250,
    centerY: 250,
    radius: 200,
    startDegree: 240,
    arcDegree: 60,
    get startx() {
      return this.centerX + this.radius * Math.cos(this.startDegree * Math.PI / 180);
    },
    get starty() {
      return this.centerY + this.radius * Math.sin(this.startDegree * Math.PI / 180);
    },
    get endx() {
      return this.centerX + this.radius * Math.cos((this.startDegree + this.arcDegree) * Math.PI / 180);
    },
    get endy() {
      return this.centerY + this.radius * Math.sin((this.startDegree + this.arcDegree) * Math.PI / 180);
    }
  }
  let pieSlice3 = {
    centerX: 250,
    centerY: 250,
    radius: 200,
    startDegree: 300,
    arcDegree: 60,
    get startx() {
      return this.centerX + this.radius * Math.cos(this.startDegree * Math.PI / 180);
    },
    get starty() {
      return this.centerY + this.radius * Math.sin(this.startDegree * Math.PI / 180);
    },
    get endx() {
      return this.centerX + this.radius * Math.cos((this.startDegree + this.arcDegree) * Math.PI / 180);
    },
    get endy() {
      return this.centerY + this.radius * Math.sin((this.startDegree + this.arcDegree) * Math.PI / 180);
    }
  }
  let pieSlice4 = {
    centerX: 250,
    centerY: 250,
    radius: 200,
    startDegree: 0,
    arcDegree: 180,
    get startx() {
      return this.centerX + this.radius * Math.cos(this.startDegree * Math.PI / 180);
    },
    get starty() {
      return this.centerY + this.radius * Math.sin(this.startDegree * Math.PI / 180);
    },
    get endx() {
      return this.centerX + this.radius * Math.cos((this.startDegree + this.arcDegree) * Math.PI / 180);
    },
    get endy() {
      return this.centerY + this.radius * Math.sin((this.startDegree + this.arcDegree) * Math.PI / 180);
    }
  }

  function applyRotate(id) {
    let ref = document.getElementById(id);
    ref.classList.toggle('rotateInfinite');
  }

  function removeRotate(id) {
    let ref = document.getElementById(id);
    ref.classList.toggle('rotateInfinite');
  }

  return (
    <div id='home-page-container'>
      <div id='intro-container'>
        <div>
          <svg width={windowWidth} height={windowHeight} viewBox='0 0 1424 801'>
            <svg id='svg-intro' x="50" y="5">
              <text className='intro-text'  fill="blue" fontSize="16" dominantBaseline='hanging' textAnchor='start'>
                <tspan x="0" dy="30px" fontSize={200}>Welcome!</tspan>
                <tspan x="20" dy="3.5em" fontSize={65}>Ethan Chen</tspan>
                <tspan x="20" dy="2.5em" fontSize={25}>Full Stack Software Engineer</tspan>
                <tspan x="20" dy="3em" fontSize={15}>I do the nitty gritty work so you don&apos;t have to!</tspan>
                <tspan x="20" dy="1.5em" fontSize={60} className='nav-text' onMouseEnter={() => applyRotate('nav-pentagon')} onMouseLeave={() => removeRotate('nav-pentagon')}><a href='#portfolio-page-container'>Portfolio</a></tspan>
                <tspan x="20" dy="1.5em" fontSize={60} className='nav-text' onMouseEnter={() => applyRotate('nav-triangle')} onMouseLeave={() => removeRotate('nav-triangle')}><a href='#about-page-container'>About Me</a></tspan>
                <tspan x="20" dy="1.5em" fontSize={60} className='nav-text' onMouseEnter={() => applyRotate('nav-square')} onMouseLeave={() => removeRotate('nav-square')}><a href='#contact-page-container'>Contact</a></tspan>
              </text>
              <svg x={275} y={430} width={100} height={100}>
                <path id='nav-pentagon' d="M 50,20 L 80,45 L 70,80 L 30,80 L 20,45 Z" fill="red" strokeWidth="1" />
              </svg>
              <svg x={275} y={530} width={100} height={100} className='rotateInfinite'>
                <path id='nav-triangle' d='M 20,70 L 80,70 L 50,10 Z' fill='red' strokeWidth="1" />
              </svg>
              <svg x={275} y={615} width={100} height={100}>
                <rect id='nav-square' x="20" y="20" width="60" height="60" fill="red" />
              </svg>
            </svg>
            <svg id='svg-human' x={900} y={100} width={500} viewBox="0 0 500 500">
              <path id='arcPath1' d={`M ${pieSlice1.centerX},${pieSlice1.centerY} L ${pieSlice1.startx},${pieSlice1.starty} A ${pieSlice1.radius},${pieSlice1.radius} 0 0,1 ${pieSlice1.endx},${pieSlice1.endy} z`} strokeWidth="1"/>
              <path id='arcPath2' d={`M ${pieSlice2.centerX},${pieSlice2.centerY} L ${pieSlice2.startx},${pieSlice2.starty} A ${pieSlice2.radius},${pieSlice2.radius} 0 0,1 ${pieSlice2.endx},${pieSlice2.endy} z`} strokeWidth="1"/>
              <path id='arcPath3' d={`M ${pieSlice3.centerX},${pieSlice3.centerY} L ${pieSlice3.startx},${pieSlice3.starty} A ${pieSlice3.radius},${pieSlice3.radius} 0 0,1 ${pieSlice3.endx},${pieSlice3.endy} z`} strokeWidth="1"/>
              <text id='text-start' fontSize="20" dy="-10">
                <textPath href="#arcPath1" startOffset="50%" textAnchor="middle">
                  Start
                </textPath>
              </text>
              <text id='text-to' fontSize="20" dy="-10">
                <textPath href="#arcPath2" startOffset="50%" textAnchor="middle">
                  to
                </textPath>
              </text>
              <text id='text-finish' fontSize="20" dy="-10">
                <textPath href="#arcPath3" startOffset="50%" textAnchor="middle">
                  Finish
                </textPath>
              </text>
              <path id='arcPath4' d={`M ${pieSlice4.centerX},${pieSlice4.centerY} L ${pieSlice4.startx},${pieSlice4.starty} A ${pieSlice4.radius},${pieSlice4.radius} 0 0,1 ${pieSlice4.endx},${pieSlice4.endy} z`} stroke='black' strokeWidth="1"/>
              <text id='text-creating' x='250' y='325' textAnchor='middle'>Creating Apps From</text>
              <circle className='svg-face' cx="200" cy="325" r="10" />
              <circle className='svg-face' cx="300" cy="325" r="10" />
              <path className='svg-face' d='M 200,370 A 10 5 0 0,0 300 370 z' />
            </svg>
            <g id='svg-border-decoration' >
              <path d='M 10,230 L 10,30 L 210,30' stroke='black' fill='none' strokeWidth={5} />
              <path d='M 1394,571 L 1394,771 L 1194,771' stroke='black' fill='none' strokeWidth={3} />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Home;