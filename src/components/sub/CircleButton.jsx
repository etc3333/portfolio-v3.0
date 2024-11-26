import '../../css/CircleButton.css';

const CircleButton = ({width, height}) => {
  return (
    <>
      <svg className='circle-button' width={width} height={height} viewBox="0 0 100 100">
        <g>
          <path d="M 50,0 A 50,50 0 1,1 49.999,0" fill="none"/>
          <text
            x="50%"
            y="50%"
            fontSize={15}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            Begin
          </text>
        </g>
      </svg>
    </>
  )
}

export default CircleButton;