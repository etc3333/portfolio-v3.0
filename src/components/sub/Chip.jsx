const Chip = ({width, height, children}) => {
  return (
    <svg x="50" y="25" width={width} height={height} viewBox='0 0 120 120'>
      <g>
        <defs>
          <pattern id="patt1" x="0" y="0" width="120" height="10" patternUnits="userSpaceOnUse">
            <rect width="120" height="5" fill="#B2B5AE" rx="5" ry="5"/>
          </pattern>
        </defs>
        <defs>
          <pattern id="patt2" x="0" y="0" width="10" height="120" patternUnits="userSpaceOnUse">
            <rect width="5" height="120" fill="#B2B5AE" rx="5" ry="5"/>
          </pattern>
        </defs>
        <rect transform='translate(0, 15)' width="120" height="90" x="0" y="0" fill="url(#patt1)" />
        <rect transform='translate(15, 0)' width="90" height="120" x="0" y="0" fill="url(#patt2)" />
      </g>
      <g transform='translate(10,10)'>
        <rect width="100" height="100" fill="#3E3E3C" rx="10" ry="10"/>
        <rect width="90" height="90" fill="#282923" rx="3" ry="3" x="5" y="5" />
        {children}
      </g>
    </svg>
  )
}

export default Chip;