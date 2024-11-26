const ChipSocket = ({height, width}) => {
  return (
    <svg height={height} width={width} viewBox='0 0 100 100'>
      <defs>
        <pattern id="port" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="8" fill='#D4D38D' />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#port)" />
    </svg>
  )
}

export default ChipSocket;